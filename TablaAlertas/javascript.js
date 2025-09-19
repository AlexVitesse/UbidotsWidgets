// Estado del widget de alertas con direcciones Modbus
// Este objeto almacena el estado completo del sistema de alertas
const alertsState = {
  alerts: {
    x_velocity: {
      value: 0,                    // Valor actual de la alerta (0 o 1)
      isAlert: false,              // Estado booleano de alerta (true/false)
      lastUpdate: null,            // Timestamp de la última actualización
      area: "Vibración X",         // Descripción del área monitoreada
      originalOrder: 0,            // Orden original para restablecer posición
      modbusAddress: 46024,        // Dirección Modbus asociada
      bitPosition: 0               // Posición en el valor binario (0-7)
    },
    y_velocity: {
      value: 0,
      isAlert: false,
      lastUpdate: null,
      area: "Vibración Y",
      originalOrder: 1,
      modbusAddress: 46025,
      bitPosition: 1
    },
    z_velocity: {
      value: 0,
      isAlert: false,
      lastUpdate: null,
      area: "Vibración Z",
      originalOrder: 2,
      modbusAddress: 46026,
      bitPosition: 2
    }
  },
  isConnected: false,              // Estado de conexión con Ubidots
  totalAlerts: 0,                  // Contador total de alertas activas
  lastSync: null,                  // Timestamp de la última sincronización
  previousAlertStates: {},         // Almacena estados anteriores para detectar cambios
  lastBinaryValue: 0               // Último valor binario recibido para comparación
};

// Mapeo de direcciones Modbus a tipos de alerta
// Permite relacionar direcciones con claves de alerta
const MODBUS_ADDRESS_MAP = {
  46024: 'x_velocity',  // Dirección 46024 → alerta de velocidad X
  46025: 'y_velocity',  // Dirección 46025 → alerta de velocidad Y
  46026: 'z_velocity'   // Dirección 46026 → alerta de velocidad Z
};

// Referencias a elementos DOM
const loadingContainer = document.getElementById('loadingContainer');  // Contenedor de carga
const mainWidget = document.getElementById('mainWidget');              // Widget principal
const connectionStatus = document.getElementById('connectionStatus');  // Indicador de conexión
const statusText = connectionStatus.querySelector('.status-text');     // Texto de estado
const totalAlertsElement = document.getElementById('totalAlerts');     // Elemento de total de alertas
const lastSyncElement = document.getElementById('lastSync');           // Elemento de última sincronización
const alertsTableBody = document.getElementById('alertsTableBody');    // Cuerpo de la tabla de alertas

// Referencias a filas de alertas (actualizar IDs según tu HTML)
// Permite acceso directo a las filas de la tabla por tipo de alerta
const alertRows = {
  x_velocity: document.getElementById('alert-x_velocity') || document.getElementById('alert-temperatura'),
  y_velocity: document.getElementById('alert-y_velocity') || document.getElementById('alert-vibracion'),
  z_velocity: document.getElementById('alert-z_velocity') || document.getElementById('alert-presion')
};

// Referencias a elementos de última actualización
// Permite acceso a los elementos que muestran la última actualización por tipo
const lastUpdateElements = {
  x_velocity: document.getElementById('x-velocity-last-update') || document.getElementById('temp-last-update'),
  y_velocity: document.getElementById('y-velocity-last-update') || document.getElementById('vibration-last-update'),
  z_velocity: document.getElementById('z-velocity-last-update') || document.getElementById('pressure-last-update')
};

// Configuración de Ubidots
const UBIDOTS_CONFIG = {
  TOKEN: "BBUS-XjHBrDrhcxVPTvQMK1NLuLny7OIKsl",  // Token de autenticación API
  DEVICE_LABEL: "esp32",                         // Etiqueta del dispositivo en Ubidots
  VARIABLE: "alertas_binario"                    // Variable que contiene el valor binario
};

// Tiempo límite para considerar desconectado (30 segundos)
const DISCONNECT_TIMEOUT = 30000;

// Función: Convertir valor entero a binario y extraer alertas
function parseBinaryAlerts(intValue, timestamp) {
  console.log(`🔢 Procesando valor binario: ${intValue} (binario: ${intValue.toString(2).padStart(8, '0')})`);
  
  const changedAlerts = [];  // Almacena alertas que han cambiado
  const currentTime = timestamp || Date.now();  // Usa timestamp proporcionado o tiempo actual
  
  // Procesar cada bit para cada alerta
  Object.keys(alertsState.alerts).forEach(alertType => {
    const alertData = alertsState.alerts[alertType];  // Datos de la alerta actual
    const bitPosition = alertData.bitPosition;        // Posición del bit para esta alerta
    
    // Extraer el bit específico (1 = alerta activa, 0 = normal)
    // Usa desplazamiento a la derecha y operación AND para aislar el bit
    const bitValue = (intValue >> bitPosition) & 1;
    const isAlert = bitValue === 1;  // Convertir a booleano
    
    // Guardar estado anterior para comparación
    const previousState = alertData.isAlert;
    
    // Actualizar estado de la alerta
    alertData.value = bitValue;
    alertData.isAlert = isAlert;
    alertData.lastUpdate = currentTime;
    
    // Si cambió el estado, agregarlo a la lista de cambios
    if (previousState !== isAlert) {
      changedAlerts.push({
        type: alertType,
        address: alertData.modbusAddress,
        previousState,
        currentState: isAlert,
        bitPosition
      });
    }
    
    console.log(`📍 ${alertType} (Modbus: ${alertData.modbusAddress}, Bit: ${bitPosition}): ${bitValue} (${isAlert ? 'ALERTA' : 'Normal'})`);
  });
  
  return changedAlerts;  // Devuelve lista de alertas que cambiaron
}

// Función: Procesar datos de Ubidots con valor binario
function processUbidotsData(data) {
  // Validar datos recibidos
  if (!data || data.value === undefined) {
    console.warn("⚠️ Datos de Ubidots inválidos");
    return false;  // Indicar que no hubo procesamiento exitoso
  }
  
  // Convertir valor a entero (por si viene como string)
  const intValue = parseInt(data.value) || 0;
  // Usar timestamp proporcionado o tiempo actual
  const timestamp = data.timestamp || Date.now();
  
  console.log(`\n📡 Procesando datos de Ubidots: Valor=${intValue}, Timestamp=${new Date(timestamp).toLocaleString()}`);
  
  // Solo procesar si el valor cambió (optimización)
  if (intValue !== alertsState.lastBinaryValue) {
    console.log(`🔄 Cambio detectado: ${alertsState.lastBinaryValue} → ${intValue}`);
    
    // Parsear el valor binario y obtener alertas que cambiaron
    const changedAlerts = parseBinaryAlerts(intValue, timestamp);
    
    // Actualizar filas que cambiaron
    changedAlerts.forEach(change => {
      console.log(`🚨 Actualizando alerta ${change.type}: ${change.previousState} → ${change.currentState}`);
      updateAlertRowVisual(change.type);  // Actualizar visualmente la fila
    });
    
    // Si hubo cambios, reordenar tabla (alertas primero)
    if (changedAlerts.length > 0) {
      setTimeout(() => {
        reorderTableRows();  // Reordenar con pequeño retraso
      }, 100);
      
      console.log(`✅ ${changedAlerts.length} alertas actualizadas:`, changedAlerts.map(c => `${c.type}(${c.currentState})`).join(', '));
    }
    
    // Guardar último valor procesado para futuras comparaciones
    alertsState.lastBinaryValue = intValue;
    return true;  // Indicar que hubo cambios
  } else {
    console.log("📊 Sin cambios en el valor binario");
    // Actualizar timestamp aunque no haya cambios (para conexión)
    Object.values(alertsState.alerts).forEach(alert => {
      alert.lastUpdate = timestamp;
    });
    return false;  // Indicar que no hubo cambios
  }
}

// Función para formatear fecha y hora
function formatDateTime(timestamp) {
  if (!timestamp) return "--";  // Valor por defecto para timestamp nulo
  
  try {
    const date = new Date(timestamp);  // Crear objeto fecha
    if (isNaN(date.getTime())) return "Fecha inválida";  // Validar fecha
    
    // Formatear componentes de fecha
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // Devolver formato DD/MM HH:MM:SS
    return `${day}/${month} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return "Error";  // Mensaje de error en caso de excepción
  }
}

// Función para actualizar el estado de conexión
function updateConnectionStatus(isConnected) {
  console.log("🔌 Actualizando estado conexión:", isConnected);
  
  // Actualizar estado en objeto principal
  alertsState.isConnected = isConnected;
  
  // Actualizar clases CSS según estado
  if (isConnected) {
    connectionStatus.classList.remove('disconnected');
    connectionStatus.classList.add('connected');
    statusText.textContent = 'Conectado';
  } else {
    connectionStatus.classList.remove('connected');
    connectionStatus.classList.add('disconnected');
    statusText.textContent = 'Desconectado';
  }
}

// Función para reordenar filas de la tabla
function reorderTableRows() {
  console.log("🔄 Reordenando tabla de alertas...");
  
  // Obtener todas las filas como array
  const rows = Array.from(alertsTableBody.querySelectorAll('tr'));
  
  // Separar alertas activas y normales
  const alertRows = rows.filter(row => {
    const alertType = row.dataset.alertType;  // Obtener tipo de alerta desde data attribute
    return alertsState.alerts[alertType] && alertsState.alerts[alertType].isAlert;
  });
  
  const normalRows = rows.filter(row => {
    const alertType = row.dataset.alertType;
    return alertsState.alerts[alertType] && !alertsState.alerts[alertType].isAlert;
  });
  
  // Ordenar filas normales por su orden original
  normalRows.sort((a, b) => {
    return parseInt(a.dataset.originalOrder) - parseInt(b.dataset.originalOrder);
  });
  
  // Ordenar alertas por timestamp (más recientes primero)
  alertRows.sort((a, b) => {
    const alertTypeA = a.dataset.alertType;
    const alertTypeB = b.dataset.alertType;
    const timestampA = alertsState.alerts[alertTypeA].lastUpdate || 0;
    const timestampB = alertsState.alerts[alertTypeB].lastUpdate || 0;
    return timestampB - timestampA;  // Orden descendente (más reciente primero)
  });
  
  // Crear el nuevo orden: alertas primero, luego normales
  const newOrder = [...alertRows, ...normalRows];
  
  // Limpiar el tbody
  alertsTableBody.innerHTML = '';
  
  // Agregar las filas en el nuevo orden con animación
  newOrder.forEach((row, index) => {
    row.classList.add('row-fade-in');  // Añadir clase de animación
    alertsTableBody.appendChild(row);  // Insertar en el DOM
    
    // Remover clase de animación después de 500ms
    setTimeout(() => {
      row.classList.remove('row-fade-in');
    }, 500);
  });
  
  console.log("✅ Tabla reordenada. Alertas activas:", alertRows.length, "Normales:", normalRows.length);
}

// Función: Actualizar solo la parte visual de una fila
function updateAlertRowVisual(alertType) {
  console.log(`🎨 Actualizando vista de alerta ${alertType}`);
  
  // Obtener datos de la alerta y referencia a la fila
  const alertData = alertsState.alerts[alertType];
  const row = alertRows[alertType];
  
  // Validar que existen ambos elementos
  if (!alertData || !row) {
    console.error(`❌ Elementos no encontrados para alerta: ${alertType}`);
    return;  // Salir si no se encuentran
  }
  
  // Obtener referencias a elementos visuales de la fila
  const statusIndicator = row.querySelector('.status-indicator-cell');
  const statusTextCell = row.querySelector('.status-text-cell');
  const lastUpdateCell = lastUpdateElements[alertType];
  
  // Actualizar timestamp de última actualización
  if (lastUpdateCell) {
    lastUpdateCell.textContent = formatDateTime(alertData.lastUpdate);
  }
  
  // Actualizar información de dirección Modbus (opcional)
  const addressCell = row.querySelector('.address-cell');
  if (addressCell) {
    addressCell.textContent = `${alertData.modbusAddress}`;
  }
  
  // Aplicar estilos según estado de alerta
  if (alertData.isAlert) {
    // Estado de alerta - toda la fila en rojo
    row.classList.remove('normal');
    row.classList.add('alert');
    statusIndicator.classList.remove('normal');
    statusIndicator.classList.add('alert');
    statusTextCell.textContent = 'ALERTA';
    
    // Animación para nueva alerta
    row.classList.add('newly-activated');
    setTimeout(() => {
      row.classList.remove('newly-activated');
    }, 3000);  // Remover clase después de 3 segundos
    
    console.log(`🆕 Alerta activada: ${alertType} (Modbus: ${alertData.modbusAddress})`);
  } else {
    // Estado normal - toda la fila normal
    row.classList.remove('alert', 'newly-activated');
    row.classList.add('normal');
    statusIndicator.classList.remove('alert');
    statusIndicator.classList.add('normal');
    statusTextCell.textContent = 'Normal';
  }
}

// Función para calcular total de alertas activas
function updateTotalAlerts() {
  // Contar alertas activas usando reduce
  const total = Object.values(alertsState.alerts).reduce((count, alert) => {
    return count + (alert.isAlert ? 1 : 0);
  }, 0);
  
  // Actualizar estado y elemento DOM
  alertsState.totalAlerts = total;
  totalAlertsElement.textContent = total;
  
  // Cambiar color según número de alertas (semáforo)
  if (total === 0) {
    totalAlertsElement.style.color = '#4CAF50';  // Verde: sin alertas
  } else if (total <= 2) {
    totalAlertsElement.style.color = '#FFD700';  // Amarillo: 1-2 alertas
  } else {
    totalAlertsElement.style.color = '#f44336';  // Rojo: 3+ alertas
  }
  
  console.log(`📊 Total de alertas activas: ${total}`);
}

// Función para actualizar timestamp de sincronización
function updateLastSync() {
  const now = Date.now();  // Obtener timestamp actual
  alertsState.lastSync = now;  // Actualizar estado
  lastSyncElement.textContent = formatDateTime(now);  // Actualizar elemento DOM
}

// Función principal de renderizado
function renderAlerts() {
  console.log("🎨 Renderizando tabla de alertas");
  
  // Actualizar todas las filas
  Object.keys(alertsState.alerts).forEach(alertType => {
    updateAlertRowVisual(alertType);
  });
  
  // Actualizar totales y sincronización
  updateTotalAlerts();
  updateLastSync();
}

// Función: Obtener datos de la variable binaria de Ubidots
async function getUbidotsBinaryData() {
  // Construir URL para la API de Ubidots
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${UBIDOTS_CONFIG.DEVICE_LABEL}/${UBIDOTS_CONFIG.VARIABLE}?token=${UBIDOTS_CONFIG.TOKEN}`;
  
  try {
    const response = await fetch(url);  // Hacer petición HTTP
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();  // Parsear respuesta JSON
    
    // Verificar que los datos tienen la estructura esperada
    if (data && data.last_value && data.last_value.timestamp) {
      return {
        value: data.last_value.value,
        timestamp: data.last_value.timestamp
      };
    } else {
      console.warn(`⚠️ Datos incompletos para variable ${UBIDOTS_CONFIG.VARIABLE}`);
      return null;  // Devolver null si datos incompletos
    }
  } catch (error) {
    console.error(`❌ Error obteniendo datos binarios:`, error);
    return null;  // Devolver null en caso de error
  }
}

// Función para verificar si hay desconexión
function checkConnectionStatus() {
  const currentTime = Date.now();  // Tiempo actual
  let hasRecentData = false;       // Bandera para datos recientes
  
  // Verificar si alguna alerta tiene datos recientes (dentro del timeout)
  Object.values(alertsState.alerts).forEach(alert => {
    if (alert.lastUpdate && (currentTime - alert.lastUpdate) <= DISCONNECT_TIMEOUT) {
      hasRecentData = true;  // Marcar como conectado si hay datos recientes
    }
  });
  
  return hasRecentData;  // Devolver estado de conexión
}

// Función: Actualizar todas las alertas desde Ubidots (versión binaria)
async function updateAlertsFromUbidots() {
  console.log("\n🚀 ===== ACTUALIZANDO ALERTAS DESDE UBIDOTS (BINARIO) =====");
  
  try {
    const data = await getUbidotsBinaryData();  // Obtener datos
    
    if (data) {
      console.log(`✅ Datos binarios obtenidos:`, data);
      
      // Procesar el valor binario
      const hasChanges = processUbidotsData(data);
      
      // Verificar estado de conexión
      const isConnected = checkConnectionStatus();
      updateConnectionStatus(isConnected);
      
      // Actualizar totales y sincronización
      updateTotalAlerts();
      updateLastSync();
      
      if (hasChanges) {
        console.log("🔄 Se detectaron cambios en las alertas");
      }
      
    } else {
      console.log(`❌ No se pudieron obtener datos binarios`);
      updateConnectionStatus(false);  // Marcar como desconectado
    }
    
  } catch (error) {
    console.error("❌ Error general actualizando alertas:", error);
    updateConnectionStatus(false);  // Marcar como desconectado en caso de error
  }
}

// Función para mostrar el widget
function showWidget() {
  console.log("👁️ Mostrando widget de alertas");
  loadingContainer.style.display = 'none';  // Ocultar loading
  mainWidget.style.display = 'block';       // Mostrar widget
}

// Función para ocultar loading y mostrar widget
function hideLoadingAndShow() {
  setTimeout(() => {
    showWidget();  // Mostrar widget después de 1.5 segundos
  }, 1500);
}

// Función de inicialización
async function initializeAlertsWidget() {
  console.log("🎯 Inicializando widget de alertas (versión binaria)");
  
  try {
    // Renderizar estado inicial
    renderAlerts();
    
    // Cargar datos iniciales
    await updateAlertsFromUbidots();
    
    // Mostrar widget
    hideLoadingAndShow();
    
    // Configurar actualización automática cada 5 segundos
    setInterval(updateAlertsFromUbidots, 5000);
    console.log("⏰ Actualización automática configurada cada 5 segundos");
    
  } catch (error) {
    console.error("❌ Error inicializando widget:", error);
    hideLoadingAndShow();  // Mostrar widget incluso con error
  }
}

// Función: Simular valor binario para testing
function simulateBinaryAlert(binaryValue) {
  console.log(`🧪 Simulando alerta binaria: ${binaryValue} (binario: ${binaryValue.toString(2).padStart(8, '0')})`);
  
  const timestamp = Date.now();  // Usar timestamp actual
  const data = { value: binaryValue, timestamp };  // Crear objeto de datos simulado
  
  processUbidotsData(data);  // Procesar como datos reales
  updateTotalAlerts();       // Actualizar contador
  updateLastSync();          // Actualizar sincronización
}

// Función: Test específico para valores binarios
function testBinaryAlerts() {
  console.log("🧪 Iniciando test de alertas binarias...");
  
  // Secuencia de pruebas con diferentes valores binarios
  // Sin alertas (000)
  setTimeout(() => simulateBinaryAlert(0), 1000);  // 000
  
  // Solo X activa (001)
  setTimeout(() => simulateBinaryAlert(1), 3000);  // 001
  
  // X y Y activas (011)
  setTimeout(() => simulateBinaryAlert(3), 5000);  // 011
  
  // Todas activas (111)
  setTimeout(() => simulateBinaryAlert(7), 7000);  // 111
  
  // Solo Z activa (100)
  setTimeout(() => simulateBinaryAlert(4), 9000);  // 100
  
  // Y y Z activas (110)
  setTimeout(() => simulateBinaryAlert(6), 11000); // 110
  
  // Sin alertas (000)
  setTimeout(() => simulateBinaryAlert(0), 13000); // 000
  
  console.log("🧪 Test de alertas binarias programado completamente");
}

// Función: Mostrar estado actual de alertas
function showAlertsStatus() {
  console.log("\n📋 ===== ESTADO ACTUAL DE ALERTAS =====");
  console.log(`Valor binario actual: ${alertsState.lastBinaryValue} (${alertsState.lastBinaryValue.toString(2).padStart(8, '0')})`);
  
  // Mostrar detalles de cada alerta
  Object.entries(alertsState.alerts).forEach(([type, data]) => {
    console.log(`${type.toUpperCase()}:`);
    console.log(`  - Modbus: ${data.modbusAddress}`);
    console.log(`  - Bit Position: ${data.bitPosition}`);
    console.log(`  - Estado: ${data.isAlert ? 'ALERTA' : 'Normal'}`);
    console.log(`  - Valor: ${data.value}`);
    console.log(`  - Última actualización: ${formatDateTime(data.lastUpdate)}`);
  });
  
  console.log(`Total alertas activas: ${alertsState.totalAlerts}`);
  console.log("=====================================\n");
}

// Exponer funciones para debugging
window.alertsDebug = {
  simulateBinaryAlert,      // Función para simular alertas
  updateAlertsFromUbidots,  // Función para forzar actualización
  testBinaryAlerts,         // Función para ejecutar pruebas
  showAlertsStatus,         // Función para mostrar estado
  reorderTableRows,         // Función para reordenar tabla
  parseBinaryAlerts,        // Función para parsear binario
  state: alertsState,       // Referencia al estado
  modbusMap: MODBUS_ADDRESS_MAP  // Referencia al mapa Modbus
};

// Inicializar cuando se carga la página
console.log("🚀 Iniciando sistema de alertas (versión binaria con Modbus)");
initializeAlertsWidget();  // Ejecutar inicialización