// Estado del widget
const state = {
  running: true,           // Estado del motor (encendido/apagado)
  tempC: 0,                // Temperatura actual en grados Celsius
  alertas: 0,              // Número de alertas activas
  isDisconnected: false,   // Estado de conexión del dispositivo
  lastUpdateTime: null     // Timestamp de la última actualización
};

// Referencias a elementos DOM
const tempValue = document.getElementById('tempValue');           // Elemento que muestra el valor de temperatura
const motorIcon = document.getElementById('motorIcon');           // Icono del motor
const alertIcon = document.getElementById('alertIcon');           // Icono de alerta
const disconnectIcon = document.getElementById('disconnectIcon'); // Icono de desconexión
const lastUpdate = document.getElementById('lastUpdate');         // Elemento de última actualización
const mercuryFill = document.getElementById('mercuryFill');       // Mercurio del termómetro (relleno)
const mercuryBulb = document.getElementById('mercuryBulb');       // Bulbo del termómetro
const loadingContainer = document.getElementById('loadingContainer'); // Contenedor de carga
const mainWidget = document.getElementById('mainWidget');         // Widget principal

// URLs de las imágenes del motor
const imgRunning = "https://i.imgur.com/D6MCRQB.png";   // Imagen de motor funcionando
const imgStopped = "https://i.imgur.com/CvbzHSg.png";   // Imagen de motor detenido

// Variable para controlar el parpadeo
let blinkInterval = null;  // Intervalo para el efecto de parpadeo

// ==================== MQTT CONFIGURATION ====================
const UBIDOTS_TOKEN = "BBUS-XjHBrDrhcxVPTvQMK1NLuLny7OIKsl";  // Token de autenticación
const DEVICE_LABEL = "esp32";  // Etiqueta del dispositivo en Ubidots

// Variables de Ubidots
const VARIABLES = {
  temperature: "temperatura",  // Variable de temperatura
  motorStatus: "connected",    // Variable de estado del motor
  alertas: "alertas"           // Variable de alertas
};

// Configuración MQTT
const MQTT_HOST = 'wss://industrial.api.ubidots.com:8084/mqtt';
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

// Cliente MQTT
let mqttClient = null;

// Tiempo límite para considerar desconectado (30 segundos)
const DISCONNECT_TIMEOUT = 30000;

// Control de desconexión por timeout basado en timestamp del dispositivo
let disconnectTimer = null;
let isCheckingDisconnection = false;

// Contador de variables recibidas al suscribirse
let initialValuesReceived = 0;
const totalVariables = 3;

// Función para formatear fecha y hora
function formatDateTime(timestamp) {
  if (!timestamp) return "Sin datos";  // Si no hay timestamp, mostrar mensaje
  
  try {
    const date = new Date(timestamp);  // Crear objeto Date desde el timestamp
    
    // Verificar si es una fecha válida
    if (isNaN(date.getTime())) return "Fecha inválida";
    
    // Formatear día, mes, horas y minutos con 2 dígitos
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month} ${hours}:${minutes}`;  // Devolver formato DD/MM HH:MM
    
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return "Error fecha";  // En caso de error, mostrar mensaje
  }
}

// Función para actualizar la información de última actualización
function updateLastUpdateDisplay() {
  console.log("🕐 Actualizando display de última actualización");
  
  if (!lastUpdate) {
    console.log("❌ Elemento lastUpdate no encontrado");
    return;  // Salir si el elemento no existe
  }
  
  const updateText = lastUpdate.querySelector('.update-text');  // Buscar texto de actualización
  if (!updateText) {
    console.log("❌ Elemento update-text no encontrado");
    return;  // Salir si el elemento no existe
  }
  
  // Remover clases previas de estado
  lastUpdate.classList.remove('connected', 'disconnected');
  
  if (state.isDisconnected) {
    // Si está desconectado, mostrar estado desconectado
    lastUpdate.classList.add('disconnected');
    if (state.lastUpdateTime) {
      updateText.textContent = `Última: ${formatDateTime(state.lastUpdateTime)}`;
    } else {
      updateText.textContent = "Sin conexión";
    }
  } else {
    // Si está conectado, mostrar estado conectado
    lastUpdate.classList.add('connected');
    if (state.lastUpdateTime) {
      updateText.textContent = `Última: ${formatDateTime(state.lastUpdateTime)}`;
    } else {
      updateText.textContent = "Conectado";
    }
  }
}

// Función para obtener el color según la temperatura
function getTempColor(temp) {
  if (temp <= 0) {
    return '#4a90e2'; // Azul para temperaturas bajo cero
  } else if (temp <= 28) {
    // Transición de azul a verde (0-28°C)
    const ratio = temp / 28;
    const r = Math.round(74 + (24 - 74) * ratio);
    const g = Math.round(144 + (194 - 144) * ratio);
    const b = Math.round(226 + (156 - 226) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  } else if (temp <= 31) {
    return '#18c29c'; // Verde para temperaturas normales (29-31°C)
  } else if (temp <= 60) {
    // Transición de verde a rojo (32-60°C)
    const ratio = (temp - 31) / (60 - 31);
    const r = Math.round(24 + (200 - 24) * ratio);
    const g = Math.round(194 - (194 - 50) * ratio);
    const b = Math.round(156 - (156 - 50) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return '#c80000'; // Rojo intenso para temperaturas peligrosas (>60°C)
  }
}

// Función para formatear la temperatura con decimales
function formatTemperature(temp) {
  // Si es un número entero, mostrar sin decimales
  if (temp % 1 === 0) {
    return `${temp.toFixed(0)} °C`;
  }
  // Si tiene decimales, mostrar con 1 decimal
  return `${temp.toFixed(1)} °C`;
}

// Función para manejar el icono de alerta
function handleAlertIcon() {
  console.log("🔔 handleAlertIcon - Alertas:", state.alertas);
  if (state.alertas === 1) {
    // Si hay alerta, mostrar icono con efecto de parpadeo
    console.log("🔔 Mostrando icono de alerta (parpadeo)");
    alertIcon.classList.add('visible');
    alertIcon.classList.add('blinking');
  } else {
    // Si no hay alerta, ocultar icono
    console.log("🔔 Ocultando icono de alerta");
    alertIcon.classList.remove('visible');
    alertIcon.classList.remove('blinking');
  }
}

// Función para manejar el icono de desconexión
function handleDisconnectIcon() {
  console.log("🔌 handleDisconnectIcon - isDisconnected:", state.isDisconnected);
  
  if (!disconnectIcon) {
    console.error("❌ ERROR: disconnectIcon element no encontrado!");
    return;  // Salir si el elemento no existe
  }

  if (state.isDisconnected) {
    // Si está desconectado, mostrar icono con efecto de parpadeo
    console.log("🔌 ACTIVANDO icono de desconexión (parpadeo)");
    disconnectIcon.classList.add('visible');
    disconnectIcon.classList.add('blinking');
  } else {
    // Si está conectado, ocultar icono
    console.log("🔌 DESACTIVANDO icono de desconexión");
    disconnectIcon.classList.remove('visible');
    disconnectIcon.classList.remove('blinking');
  }
}

// Función para manejar el parpadeo del motor
function handleMotorBlink() {
  // Detener cualquier parpadeo anterior
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }

  // Si hay alerta y el motor está conectado, iniciar parpadeo
  if (state.alertas === 1 && state.running) {
    blinkInterval = setInterval(() => {
      // Alternar entre imagen de funcionando y parado
      if (motorIcon.src.includes('D6MCRQB')) {
        motorIcon.src = imgStopped;
      } else {
        motorIcon.src = imgRunning;
      }
    }, 500); // Parpadeo cada 500ms
  } else {
    // Sin alerta, mostrar imagen normal según el estado
    if (state.running) {
      motorIcon.src = imgRunning;
      motorIcon.classList.remove('stopped');
    } else {
      motorIcon.src = imgStopped;
      motorIcon.classList.add('stopped');
    }
  }
}

// Función principal para actualizar la interfaz
function render() {
  console.log("🎨 RENDER - Estado completo:", state);
  
  // Actualizar temperatura con formato mejorado
  tempValue.textContent = formatTemperature(state.tempC);
  
  // Calcular porcentaje para el termómetro (máximo 60°C)
  const tempPercent = Math.min(Math.max(state.tempC, 0) / 60, 1) * 100;
  
  // Obtener color según temperatura
  const color = getTempColor(state.tempC);
  
  // Actualizar mercurio del termómetro
  mercuryFill.style.width = `${tempPercent}%`;
  mercuryFill.style.background = color;
  mercuryFill.style.boxShadow = `0 0 12px ${color}40`;  // Sombra con transparencia
  
  // Actualizar bulbo del termómetro
  mercuryBulb.style.background = color;
  mercuryBulb.style.boxShadow = `0 0 15px ${color}60`;  // Sombra con transparencia
  
  // Actualizar color del texto de temperatura
  tempValue.style.color = color;
  tempValue.style.textShadow = `0 0 20px ${color}50`;  // Sombra de texto con transparencia
  
  // Manejar el estado del motor y alertas
  handleMotorBlink();
  handleAlertIcon();
  handleDisconnectIcon();
  
  // Actualizar información de última actualización
  updateLastUpdateDisplay();
}

// Función para actualizar con datos reales
function updateFromData(temperature, motorStatus, alertas, isDisconnected, lastUpdateTimestamp) {
  console.log("📡 updateFromData recibió:");
  
  let stateChanged = false;  // Bandera para detectar cambios
  let hasNewData = false;    // Bandera para detectar si hay nuevos datos del dispositivo

  // Procesar temperatura
  if (!isNaN(temperature) && temperature !== null) {
    const newTemp = parseFloat(temperature.toFixed(1));
    if (state.tempC !== newTemp) {
      console.log("🌡️ Temperatura cambió:", state.tempC, "->", newTemp);
      state.tempC = newTemp;
      stateChanged = true;
      hasNewData = true;
    }
  }
  
  // Procesar estado del motor
  if (motorStatus === 0 || motorStatus === 1 || motorStatus === true || motorStatus === false) {
    const newRunning = (motorStatus === 1 || motorStatus === true);
    if (state.running !== newRunning) {
      console.log("🔧 Estado motor cambió:", state.running, "->", newRunning);
      state.running = newRunning;
      stateChanged = true;
      hasNewData = true;
    }
  }
  
  // Procesar alertas
  if (!isNaN(alertas) && alertas !== null) {
    if (state.alertas !== alertas) {
      console.log("🚨 Alertas cambió:", state.alertas, "->", alertas);
      state.alertas = alertas;
      stateChanged = true;
      hasNewData = true;
    }
  }
  
  // Procesar estado de conexión
  if (typeof isDisconnected === 'boolean') {
    if (state.isDisconnected !== isDisconnected) {
      console.log("🔌 Estado desconexión cambió:", state.isDisconnected, "->", isDisconnected);
      state.isDisconnected = isDisconnected;
      stateChanged = true;
    }
  }
  
  // Actualizar timestamp de última actualización
  if (lastUpdateTimestamp !== undefined && lastUpdateTimestamp !== null) {
    if (state.lastUpdateTime !== lastUpdateTimestamp) {
      console.log("🕐 Timestamp actualizado:", state.lastUpdateTime, "->", lastUpdateTimestamp);
      state.lastUpdateTime = lastUpdateTimestamp;
      stateChanged = true;
    }
  }

  // Si recibimos nuevos datos del dispositivo, gestionar el timer de desconexión
  if (hasNewData && lastUpdateTimestamp) {
    console.log("📨 Nuevos datos recibidos del dispositivo");
    
    // Si estaba desconectado, reconectarlo
    if (state.isDisconnected) {
      console.log("🔄 Reconectando dispositivo...");
      state.isDisconnected = false;
      stateChanged = true;
    }
    
    // Iniciar/reiniciar timer de verificación solo si no está corriendo
    if (!isCheckingDisconnection) {
      console.log("▶️ Iniciando timer de verificación de desconexión");
      startDisconnectTimer();
    } else {
      console.log("🔄 Timer ya está corriendo, continuando verificación");
    }
  }

  // Si hubo cambios, actualizar la interfaz
  if (stateChanged) {
    console.log("📊 Estado actualizado, llamando render()");
    render();
  } else {
    console.log("📊 Sin cambios en el estado");
  }
}

// ==================== MQTT FUNCTIONS ====================

// Función para verificar desconexión basada en timestamp del último dato
function checkDeviceDisconnection() {
  if (!state.lastUpdateTime) {
    console.log("⚠️ No hay timestamp de última actualización, considerando desconectado");
    updateFromData(null, null, null, true, null);
    return;
  }
  
  const currentTime = Date.now();
  const timeDifference = currentTime - state.lastUpdateTime;
  
  console.log(`🕐 Verificando desconexión: Diferencia de tiempo = ${timeDifference}ms (límite: ${DISCONNECT_TIMEOUT}ms)`);
  
  if (timeDifference > DISCONNECT_TIMEOUT) {
    console.log(`⚠️ DISPOSITIVO DESCONECTADO: ${timeDifference}ms > ${DISCONNECT_TIMEOUT}ms`);
    updateFromData(null, null, null, true, state.lastUpdateTime);
    stopDisconnectTimer(); // Parar el timer cuando se desconecta
  } else {
    console.log(`✅ Dispositivo conectado: ${timeDifference}ms <= ${DISCONNECT_TIMEOUT}ms`);
  }
}

// Función para iniciar el timer de verificación de desconexión
function startDisconnectTimer() {
  if (disconnectTimer) {
    clearInterval(disconnectTimer);
  }
  
  isCheckingDisconnection = true;
  disconnectTimer = setInterval(checkDeviceDisconnection, 5000); // Verificar cada 5 segundos
  console.log("⏰ Timer de verificación de desconexión INICIADO");
}

// Función para detener el timer de verificación de desconexión
function stopDisconnectTimer() {
  if (disconnectTimer) {
    clearInterval(disconnectTimer);
    disconnectTimer = null;
  }
  
  isCheckingDisconnection = false;
  console.log("⏸️ Timer de verificación de desconexión DETENIDO");
}

// Función para procesar el valor inicial recibido al suscribirse
function handleInitialValue(topic, message, isInitialSubscription = false) {
  const messageStr = message.toString();
  console.log(messageStr);
  console.log(`\n📋 ===== ${isInitialSubscription ? 'VALOR INICIAL' : 'MENSAJE'} MQTT =====`);
  console.log(`📍 Tópico: ${topic}`);
  console.log(`📝 Mensaje raw: "${messageStr}"`);
  console.log(`🔢 Tipo de mensaje: ${typeof messageStr}`);
  console.log(`📏 Longitud: ${messageStr.length} caracteres`);
  
  try {
    let value = null;
    let timestamp = null;
    
    // Intentar parsear como JSON primero (formato completo de Ubidots)
    try {
      const parsedMessage = JSON.parse(messageStr);
      console.log(`📦 Mensaje parseado como JSON:`, parsedMessage);
      
      if (typeof parsedMessage === 'object' && parsedMessage !== null) {
        // Formato esperado: {"value": 25.6, "timestamp": 1725123456789}
        if (parsedMessage.hasOwnProperty('value')) {
          value = parseFloat(parsedMessage.value);
          console.log(`🧮 Valor extraído del JSON: ${value}`);
        }
        
        if (parsedMessage.hasOwnProperty('timestamp')) {
          timestamp = parseInt(parsedMessage.timestamp);
          console.log(`🕐 Timestamp extraído del JSON: ${timestamp}`);
          console.log(`📅 Fecha del timestamp: ${new Date(timestamp)}`);
        }
      }
    } catch (jsonError) {
      // Si no es JSON válido, intentar como valor simple
      console.log(`⚠️ No es JSON válido, intentando como valor simple`);
      value = parseFloat(messageStr);
      timestamp = Date.now(); // Usar timestamp actual como fallback
      console.log(`🧮 Valor parseado como simple: ${value}`);
      console.log(`🕐 Usando timestamp actual como fallback: ${timestamp}`);
    }
    
    console.log(`✅ Procesamiento final:`);
    console.log(`   • Valor: ${value} (válido: ${!isNaN(value)})`);
    console.log(`   • Timestamp: ${timestamp}`);
    console.log(`   • Fecha: ${timestamp ? new Date(timestamp) : 'N/A'}`);
    
    if (isInitialSubscription) {
      initialValuesReceived++;
      console.log(`📊 Valores iniciales recibidos: ${initialValuesReceived}/${totalVariables}`);
    }
    
    // Procesar según el tópico
    if (topic.includes(VARIABLES.temperature)) {
      console.log("🌡️ ➜ PROCESANDO COMO TEMPERATURA");
      updateFromData(value, null, null, false, timestamp);
    } else if (topic.includes(VARIABLES.motorStatus)) {
      console.log("🔧 ➜ PROCESANDO COMO ESTADO MOTOR");
      updateFromData(null, value, null, false, timestamp);
    } else if (topic.includes(VARIABLES.alertas)) {
      console.log("🚨 ➜ PROCESANDO COMO ALERTAS");
      updateFromData(null, null, value, false, timestamp);
    } else {
      console.log("❓ ➜ TÓPICO NO RECONOCIDO");
    }
    
    // Si hemos recibido todos los valores iniciales, mostrar el widget
    if (isInitialSubscription && initialValuesReceived >= totalVariables) {
      console.log("\n🎉 ===== TODOS LOS VALORES INICIALES RECIBIDOS =====");
      console.log("👁️ Mostrando widget...");
      showWidget();
    }
    
    console.log("================================================\n");
    
  } catch (error) {
    console.error("❌ Error procesando mensaje MQTT:", error);
    console.log("================================================\n");
  }
}

// Función para conectar a MQTT
function connectMQTT() {
  console.log("🔌 Iniciando conexión MQTT a Ubidots...");
  
  try {
    mqttClient = mqtt.connect(MQTT_HOST, {
      clientId: clientId,
      username: UBIDOTS_TOKEN,
      keepalive: 60,
      reconnectPeriod: 5000,
      connectTimeout: 10000
    });

    // Evento de conexión exitosa
    mqttClient.on('connect', () => {
      console.log("✅ Conectado al broker MQTT de Ubidots");
      console.log(`🆔 Client ID: ${clientId}`);
      
      // Suscribirse a todos los tópicos de las variables
      const topics = [
        `/v1.6/devices/${DEVICE_LABEL}/${VARIABLES.temperature}`,
        `/v1.6/devices/${DEVICE_LABEL}/${VARIABLES.motorStatus}`,
        `/v1.6/devices/${DEVICE_LABEL}/${VARIABLES.alertas}`
      ];
      
      console.log("\n🔔 ===== SUSCRIBIÉNDOSE A TÓPICOS =====");
      topics.forEach((topic, index) => {
        mqttClient.subscribe(topic, (err) => {
          if (!err) {
            console.log(`📡 [${index + 1}/${topics.length}] Suscrito a: ${topic}`);
            console.log(`    ➜ Esperando último valor publicado...`);
          } else {
            console.error(`❌ Error al suscribirse a ${topic}:`, err);
          }
        });
      });
      console.log("==========================================");
      
      // El timer se iniciará cuando se reciban los primeros datos
    });

    // Evento de mensaje recibido
    mqttClient.on('message', (topic, message) => {
      // Determinar si es un valor inicial (primeros mensajes después de suscribirse)
      const isInitial = initialValuesReceived < totalVariables;
      handleInitialValue(topic, message, isInitial);
    });

    // Evento de error
    mqttClient.on('error', (err) => {
      console.error("❌ Error MQTT:", err);
    });

    // Evento de desconexión
    mqttClient.on('close', () => {
      console.log("🔌 Conexión MQTT cerrada");
    });

    // Evento de reconexión
    mqttClient.on('reconnect', () => {
      console.log("🔄 Reintentando conexión MQTT...");
    });

  } catch (error) {
    console.error("❌ Error al conectar MQTT:", error);
  }
}

// ==================== INITIALIZATION FUNCTIONS ====================

// Función para mostrar el widget después de cargar los datos
function showWidget() {
  console.log("👁️ Mostrando widget");
  if (loadingContainer) loadingContainer.style.display = 'none';  // Ocultar contenedor de carga
  if (mainWidget) mainWidget.style.display = 'block';       // Mostrar widget principal
}

// ==================== MAIN INITIALIZATION ====================

// Inicializar widget con estado por defecto
console.log("🎨 Render inicial con estado por defecto");
render();  // Renderizar estado inicial

// Función principal de inicialización
async function initializeWidget() {
  console.log("\n🚀 ===== INICIANDO WIDGET UBIDOTS (SOLO MQTT) =====");
  console.log("📋 Configuración:");
  console.log(`   • Device: ${DEVICE_LABEL}`);
  console.log(`   • Variables: ${Object.values(VARIABLES).join(', ')}`);
  console.log(`   • Timeout desconexión: ${DISCONNECT_TIMEOUT}ms`);
  console.log(`   • Host MQTT: ${MQTT_HOST}`);
  console.log("===============================================");
  
  try {
    // Conectar directamente a MQTT (sin llamadas API)
    console.log("📡 Conectando a MQTT para recibir últimos valores...");
    connectMQTT();
    
    console.log("✅ Inicialización MQTT completada");
    console.log("⏳ Esperando valores iniciales de suscripciones...");
    
  } catch (error) {
    console.error("❌ Error en inicialización del widget:", error);
    showWidget(); // Mostrar widget aunque haya error
  }
}

// Iniciar la aplicación
initializeWidget();