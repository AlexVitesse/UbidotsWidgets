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

// Función para actualizar con datos reales de Ubidots
function updateFromUbidots(temperature, motorStatus, alertas, isDisconnected, lastUpdateTimestamp) {
  console.log("📡 updateFromUbidots recibió:");
  
  let stateChanged = false;  // Bandera para detectar cambios

  // Procesar temperatura
  if (!isNaN(temperature)) {
    const newTemp = parseFloat(temperature.toFixed(1));
    if (state.tempC !== newTemp) {
      console.log("🌡️ Temperatura cambió:", state.tempC, "->", newTemp);
      state.tempC = newTemp;
      stateChanged = true;
    }
  }
  
  // Procesar estado del motor
  if (motorStatus === 0 || motorStatus === 1 || motorStatus === true || motorStatus === false) {
    const newRunning = (motorStatus === 1 || motorStatus === true);
    if (state.running !== newRunning) {
      console.log("🔧 Estado motor cambió:", state.running, "->", newRunning);
      state.running = newRunning;
      stateChanged = true;
    }
  }
  
  // Procesar alertas
  if (!isNaN(alertas)) {
    if (state.alertas !== alertas) {
      console.log("🚨 Alertas cambió:", state.alertas, "->", alertas);
      state.alertas = alertas;
      stateChanged = true;
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

  // Si hubo cambios, actualizar la interfaz
  if (stateChanged) {
    console.log("📊 Estado actualizado, llamando render()");
    render();
  } else {
    console.log("📊 Sin cambios en el estado");
  }
}

// ==================== UBIDOTS ====================

// Configuración de Ubidots
const UBIDOTS_TOKEN = "BBUS-XjHBrDrhcxVPTvQMK1NLuLny7OIKsl";  // Token de autenticación
const DEVICE_LABEL = "esp32";  // Etiqueta del dispositivo en Ubidots

// Variables de Ubidots
const VARIABLES = {
  temperature: "temperatura",  // Variable de temperatura
  motorStatus: "connected",    // Variable de estado del motor
  alertas: "alertas"           // Variable de alertas
};

// Tiempo límite para considerar desconectado (30 segundos)
const DISCONNECT_TIMEOUT = 30000;

// Función para obtener los datos básicos de Ubidots (método confiable)
async function getBasicDataFromUbidots(variable) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${DEVICE_LABEL}/${variable}/lv?token=${UBIDOTS_TOKEN}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.text();
    const parsedData = parseFloat(data);  // Convertir a número
    
    return parsedData;
  } catch (error) {
    console.error(`❌ Error fetching basic data for variable ${variable}:`, error);
    return null;  // Devolver null en caso de error
  }
}

// Función para obtener los datos con timestamp de Ubidots
async function getDataWithTimestamp(variable) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${DEVICE_LABEL}/${variable}?token=${UBIDOTS_TOKEN}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    
    // Verificar que existe data.last_value
    if (data && data.last_value && data.last_value.timestamp) {
      const lastValue = data.last_value;
      const returnData = {
        value: parseFloat(lastValue.value),
        timestamp: lastValue.timestamp,  // Timestamp en milisegundos
        created_at: lastValue.created_at // Fecha de creación como backup
      };
      return returnData;
    } else {
      return null;  // Devolver null si falta estructura de datos
    }
  } catch (error) {
    console.error(`❌ Error fetching timestamp data for variable ${variable}:`, error);
    return null;  // Devolver null en caso de error
  }
}

// Función para obtener la hora actual local
function getCurrentTime() {
  const now = Date.now();  // Obtener timestamp actual en milisegundos
  return now;
}

// Función para verificar si el dispositivo está desconectado
function checkDisconnection(currentTime, lastUpdateTime) {
  const timeDifference = currentTime - lastUpdateTime;  // Diferencia en milisegundos
  const isDisconnected = timeDifference > DISCONNECT_TIMEOUT;  // Comparar con umbral
  
  return isDisconnected;
}

// Función para mostrar el widget después de cargar los datos
function showWidget() {
  console.log("👁️ Showing widget");
  loadingContainer.style.display = 'none';  // Ocultar contenedor de carga
  mainWidget.style.display = 'block';       // Mostrar widget principal
}

// Función para actualizar widget desde Ubidots
async function updateWidgetFromUbidots() {
  console.log("\n🚀 ===== INICIO ACTUALIZACIÓN DESDE UBIDOTS =====");
  
  try {
    // Obtener el tiempo actual al inicio
    const currentTime = getCurrentTime();
    
    // Obtener datos con timestamp para verificar desconexión
    let isDisconnected = true;  // Por defecto asumir desconectado
    let temperature = null;
    let motorStatus = null;
    let alertas = null;
    let lastUpdateTimestamp = null;
    
    try {
      const temperatureData = await getDataWithTimestamp(VARIABLES.temperature);
      
      if (temperatureData && temperatureData.timestamp) {
        // Guardar el timestamp para mostrar en la interfaz
        lastUpdateTimestamp = temperatureData.timestamp;
        
        // Verificar si está desconectado basado en el timestamp
        isDisconnected = checkDisconnection(currentTime, temperatureData.timestamp);
        
        // Si NO está desconectado, usar el valor del timestamp
        if (!isDisconnected) {
          temperature = temperatureData.value;
        } else {
          // Aún mostrar el último valor conocido, pero marcado como desconectado
          temperature = temperatureData.value;
        }
      } else {
        console.log("❌ No se pudo obtener timestamp data - asumiendo desconectado");
        isDisconnected = true;
      }
    } catch (timestampError) {
      console.error("❌ Error obteniendo timestamp:", timestampError);
      isDisconnected = true;
    }

    // Solo si NO está desconectado, obtener el resto de datos básicos
    if (!isDisconnected) {
      // Si no obtuvimos temperatura del timestamp, obtenerla por método básico
      if (temperature === null) {
        temperature = await getBasicDataFromUbidots(VARIABLES.temperature);
      }
      
      motorStatus = await getBasicDataFromUbidots(VARIABLES.motorStatus);
      alertas = await getBasicDataFromUbidots(VARIABLES.alertas);
    } else {
      // Intentar obtener los últimos valores conocidos para mostrar
      if (temperature === null) {
        temperature = await getBasicDataFromUbidots(VARIABLES.temperature);
      }
      motorStatus = await getBasicDataFromUbidots(VARIABLES.motorStatus);
      alertas = await getBasicDataFromUbidots(VARIABLES.alertas);
    }

    // Actualizar el widget con todos los datos
    updateFromUbidots(temperature, motorStatus, alertas, isDisconnected, lastUpdateTimestamp);
    showWidget();
    
  } catch (error) {
    console.error("❌ Error general al actualizar widget desde Ubidots:", error);
    // En caso de error total, asumir desconectado
    updateFromUbidots(null, null, null, true, null);
    showWidget();
  }
}

// Inicializar widget
console.log("🎨 Render inicial");
render();  // Renderizar estado inicial

// Cargar datos iniciales de Ubidots
console.log("🚀 Iniciando carga de datos de Ubidots");
updateWidgetFromUbidots();

// Actualizar cada 5 segundos
console.log("⏰ Configurando actualización automática cada 5 segundos");
setInterval(updateWidgetFromUbidots, 5000);  // Intervalo de actualización