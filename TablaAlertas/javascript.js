// Estado del widget de alertas
const alertsState = {
  alerts: {
    temperatura: {
      value: 0,
      isAlert: false,
      lastUpdate: null,
      area: "Sistema Térmico",
      originalOrder: 0
    },
    vibracion: {
      value: 0,
      isAlert: true,
      lastUpdate: null,
      area: "Sistema Mecánico",
      originalOrder: 1
    },
    presion: {
      value: 0,
      isAlert: false,
      lastUpdate: null,
      area: "Sistema Hidráulico",
      originalOrder: 2
    }
  },
  isConnected: false,
  totalAlerts: 0,
  lastSync: null,
  previousAlertStates: {}
};

// Referencias a elementos DOM
const loadingContainer = document.getElementById('loadingContainer');
const mainWidget = document.getElementById('mainWidget');
const connectionStatus = document.getElementById('connectionStatus');
const statusText = connectionStatus.querySelector('.status-text');
const totalAlertsElement = document.getElementById('totalAlerts');
const lastSyncElement = document.getElementById('lastSync');
const alertsTableBody = document.getElementById('alertsTableBody');

// Referencias a filas de alertas
const alertRows = {
  temperatura: document.getElementById('alert-temperatura'),
  vibracion: document.getElementById('alert-vibracion'),
  presion: document.getElementById('alert-presion')
};

// Referencias a elementos de última actualización
const lastUpdateElements = {
  temperatura: document.getElementById('temp-last-update'),
  vibracion: document.getElementById('vibration-last-update'),
  presion: document.getElementById('pressure-last-update')
};

// Configuración de Ubidots
const UBIDOTS_CONFIG = {
  TOKEN: "BBUS-XjHBrDrhcxVPTvQMK1NLuLny7OIKsl",
  DEVICE_LABEL: "esp32",
  VARIABLES: {
    temperatura: "alerta_temperatura",
    vibracion: "alerta_vibracion", 
    presion: "alerta_presion"
  }
};

// Tiempo límite para considerar desconectado (30 segundos)
const DISCONNECT_TIMEOUT = 30000;

// Función para formatear fecha y hora
function formatDateTime(timestamp) {
  if (!timestamp) return "--";
  
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "Fecha inválida";
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${day}/${month} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return "Error";
  }
}

// Función para actualizar el estado de conexión
function updateConnectionStatus(isConnected) {
  console.log("🔌 Actualizando estado conexión:", isConnected);
  
  alertsState.isConnected = isConnected;
  
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

// NUEVA FUNCIÓN: Reordenar filas de la tabla
function reorderTableRows() {
  console.log("🔄 Reordenando tabla de alertas...");
  
  // Obtener todas las filas como array
  const rows = Array.from(alertsTableBody.querySelectorAll('tr'));
  
  // Separar alertas activas y normales
  const alertRows = rows.filter(row => {
    const alertType = row.dataset.alertType;
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
    return timestampB - timestampA;
  });
  
  // Crear el nuevo orden: alertas primero, luego normales
  const newOrder = [...alertRows, ...normalRows];
  
  // Limpiar el tbody
  alertsTableBody.innerHTML = '';
  
  // Agregar las filas en el nuevo orden con animación
  newOrder.forEach((row, index) => {
    // Añadir clase de animación
    row.classList.add('row-fade-in');
    alertsTableBody.appendChild(row);
    
    // Remover la clase de animación después de completarse
    setTimeout(() => {
      row.classList.remove('row-fade-in');
    }, 500);
  });
  
  console.log("✅ Tabla reordenada. Alertas activas:", alertRows.length, "Normales:", normalRows.length);
}

// Función para actualizar una fila de alerta específica
function updateAlertRow(alertType, value, timestamp) {
  console.log(`🚨 Actualizando alerta ${alertType}:`, value, timestamp);
  
  const alertData = alertsState.alerts[alertType];
  const row = alertRows[alertType];
  
  if (!alertData || !row) {
    console.error(`❌ Elementos no encontrados para alerta: ${alertType}`);
    return;
  }
  
  // Guardar estado anterior
  const previousState = alertData.isAlert;
  
  // Actualizar datos del estado
  alertData.value = value;
  alertData.isAlert = (value === 1);
  alertData.lastUpdate = timestamp;
  
  // Actualizar elementos visuales
  const statusIndicator = row.querySelector('.status-indicator-cell');
  const statusTextCell = row.querySelector('.status-text-cell');
  const lastUpdateCell = lastUpdateElements[alertType];
  
  // Actualizar timestamp
  if (lastUpdateCell) {
    lastUpdateCell.textContent = formatDateTime(timestamp);
  }
  
  if (alertData.isAlert) {
    // Estado de alerta - toda la fila en rojo
    row.classList.remove('normal');
    row.classList.add('alert');
    statusIndicator.classList.remove('normal');
    statusIndicator.classList.add('alert');
    statusTextCell.textContent = 'ALERTA';
    
    // Si cambió de normal a alerta, agregar animación especial
    if (!previousState) {
      row.classList.add('newly-activated');
      setTimeout(() => {
        row.classList.remove('newly-activated');
      }, 3000);
      console.log(`🆕 Nueva alerta activada: ${alertType}`);
    }
  } else {
    // Estado normal - toda la fila normal
    row.classList.remove('alert', 'newly-activated');
    row.classList.add('normal');
    statusIndicator.classList.remove('alert');
    statusIndicator.classList.add('normal');
    statusTextCell.textContent = 'Normal';
  }
  
  // Si hubo cambio de estado, reordenar tabla
  if (previousState !== alertData.isAlert) {
    console.log(`🔄 Cambio de estado detectado en ${alertType}: ${previousState} → ${alertData.isAlert}`);
    
    // Esperar un poco para que se complete la animación de la fila
    setTimeout(() => {
      reorderTableRows();
    }, 100);
  }
}

// Función para calcular total de alertas activas
function updateTotalAlerts() {
  const total = Object.values(alertsState.alerts).reduce((count, alert) => {
    return count + (alert.isAlert ? 1 : 0);
  }, 0);
  
  alertsState.totalAlerts = total;
  totalAlertsElement.textContent = total;
  
  // Cambiar color según número de alertas
  if (total === 0) {
    totalAlertsElement.style.color = '#4CAF50';
  } else if (total <= 2) {
    totalAlertsElement.style.color = '#FFD700';
  } else {
    totalAlertsElement.style.color = '#f44336';
  }
  
  console.log(`📊 Total de alertas activas: ${total}`);
}

// Función para actualizar timestamp de sincronización
function updateLastSync() {
  const now = Date.now();
  alertsState.lastSync = now;
  lastSyncElement.textContent = formatDateTime(now);
}

// Función principal de renderizado
function renderAlerts() {
  console.log("🎨 Renderizando tabla de alertas");
  
  // Actualizar todas las filas
  Object.keys(alertsState.alerts).forEach(alertType => {
    const alertData = alertsState.alerts[alertType];
    updateAlertRow(alertType, alertData.value, alertData.lastUpdate);
  });
  
  // Actualizar totales y sincronización
  updateTotalAlerts();
  updateLastSync();
}

// Función para obtener datos de Ubidots
async function getUbidotsData(variable) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${UBIDOTS_CONFIG.DEVICE_LABEL}/${variable}?token=${UBIDOTS_CONFIG.TOKEN}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    
    if (data && data.last_value && data.last_value.timestamp) {
      const lastValue = data.last_value;
      return {
        value: parseInt(lastValue.value) || 0,
        timestamp: lastValue.timestamp
      };
    } else {
      console.warn(`⚠️ Datos incompletos para variable ${variable}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error obteniendo datos para ${variable}:`, error);
    return null;
  }
}

// Función para verificar si hay desconexión
function checkConnectionStatus() {
  const currentTime = Date.now();
  let hasRecentData = false;
  
  // Verificar si alguna alerta tiene datos recientes
  Object.values(alertsState.alerts).forEach(alert => {
    if (alert.lastUpdate && (currentTime - alert.lastUpdate) <= DISCONNECT_TIMEOUT) {
      hasRecentData = true;
    }
  });
  
  return hasRecentData;
}

// Función para actualizar todas las alertas desde Ubidots
async function updateAlertsFromUbidots() {
  console.log("\n🚀 ===== ACTUALIZANDO ALERTAS DESDE UBIDOTS =====");
  
  try {
    const promises = Object.keys(UBIDOTS_CONFIG.VARIABLES).map(async (alertType) => {
      const variableName = UBIDOTS_CONFIG.VARIABLES[alertType];
      const data = await getUbidotsData(variableName);
      
      if (data) {
        console.log(`✅ Datos obtenidos para ${alertType}:`, data);
        
        // Actualizar la fila específica
        updateAlertRow(alertType, data.value, data.timestamp);
      } else {
        console.log(`❌ No se pudieron obtener datos para ${alertType}`);
      }
    });
    
    // Esperar a que todas las promesas se resuelvan
    await Promise.all(promises);
    
    // Verificar estado de conexión
    const isConnected = checkConnectionStatus();
    updateConnectionStatus(isConnected);
    
    // Actualizar totales y sincronización
    updateTotalAlerts();
    updateLastSync();
    
  } catch (error) {
    console.error("❌ Error general actualizando alertas:", error);
    updateConnectionStatus(false);
  }
}

// Función para mostrar el widget
function showWidget() {
  console.log("👁️ Mostrando widget de alertas");
  loadingContainer.style.display = 'none';
  mainWidget.style.display = 'block';
}

// Función para ocultar loading y mostrar widget
function hideLoadingAndShow() {
  setTimeout(() => {
    showWidget();
  }, 1500); // Mostrar loading por 1.5 segundos
}

// Función de inicialización
async function initializeAlertsWidget() {
  console.log("🎯 Inicializando widget de alertas");
  
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
    hideLoadingAndShow();
  }
}

// Función de utilidad para simular alertas (para testing)
function simulateAlert(alertType, isAlert = true) {
  console.log(`🧪 Simulando alerta para ${alertType}: ${isAlert}`);
  
  if (alertsState.alerts[alertType]) {
    const timestamp = Date.now();
    updateAlertRow(alertType, isAlert ? 1 : 0, timestamp);
    updateTotalAlerts();
    updateLastSync();
  }
}

// NUEVA FUNCIÓN: Función para testing del reordenamiento
function testReordering() {
  console.log("🧪 Iniciando test de reordenamiento...");
  
  // Activar temperatura
  setTimeout(() => simulateAlert('temperatura', true), 1000);
  
  // Activar presión
  setTimeout(() => simulateAlert('presion', true), 3000);
  
  // Desactivar vibración (estaba activa por defecto)
  setTimeout(() => simulateAlert('vibracion', false), 5000);
  
  // Desactivar temperatura
  setTimeout(() => simulateAlert('temperatura', false), 7000);
  
  // Reactivar vibración
  setTimeout(() => simulateAlert('vibracion', true), 9000);
  
  // Desactivar todas
  setTimeout(() => {
    simulateAlert('temperatura', false);
    simulateAlert('vibracion', false);
    simulateAlert('presion', false);
  }, 12000);
  
  console.log("🧪 Test de reordenamiento programado completamente");
}

// Exponer funciones para debugging
window.alertsDebug = {
  simulateAlert,
  updateAlertsFromUbidots,
  testReordering,
  reorderTableRows,
  state: alertsState
};

// Inicializar cuando se carga la página
console.log("🚀 Iniciando sistema de alertas");
initializeAlertsWidget();