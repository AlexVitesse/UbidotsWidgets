// Estado del widget de alertas con 26 alertas del sistema Vibe IQ
const alertsState = {
  alerts: {
    // Registro 46038 - X-Axis Velocity
    x_vel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 0, modbusAddress: 46038, bitPosition: 0, 
      type: "warning", description: "X Velocity Acute Warning"
    },
    x_vel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 1, modbusAddress: 46038, bitPosition: 1, 
      type: "alarm", description: "X Velocity Acute Alarm"
    },
    x_vel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 2, modbusAddress: 46038, bitPosition: 2, 
      type: "warning", description: "X Velocity Chronic Warning"
    },
    x_vel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 3, modbusAddress: 46038, bitPosition: 3, 
      type: "alarm", description: "X Velocity Chronic Alarm"
    },
    
    // Registro 46038 - X-Axis High-Frequency Acceleration
    x_accel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 4, modbusAddress: 46038, bitPosition: 4, 
      type: "warning", description: "X HF Accel Acute Warning"
    },
    x_accel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 5, modbusAddress: 46038, bitPosition: 5, 
      type: "alarm", description: "X HF Accel Acute Alarm"
    },
    x_accel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 6, modbusAddress: 46038, bitPosition: 6, 
      type: "warning", description: "X HF Accel Chronic Warning"
    },
    x_accel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje X", 
      originalOrder: 7, modbusAddress: 46038, bitPosition: 7, 
      type: "alarm", description: "X HF Accel Chronic Alarm"
    },
    
    // Registro 46038 - Y-Axis Velocity
    y_vel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 8, modbusAddress: 46038, bitPosition: 8, 
      type: "warning", description: "Y Velocity Acute Warning"
    },
    y_vel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 9, modbusAddress: 46038, bitPosition: 9, 
      type: "alarm", description: "Y Velocity Acute Alarm"
    },
    y_vel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 10, modbusAddress: 46038, bitPosition: 10, 
      type: "warning", description: "Y Velocity Chronic Warning"
    },
    y_vel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 11, modbusAddress: 46038, bitPosition: 11, 
      type: "alarm", description: "Y Velocity Chronic Alarm"
    },
    
    // Registro 46038 - Y-Axis High-Frequency Acceleration
    y_accel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 12, modbusAddress: 46038, bitPosition: 12, 
      type: "warning", description: "Y HF Accel Acute Warning"
    },
    y_accel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 13, modbusAddress: 46038, bitPosition: 13, 
      type: "alarm", description: "Y HF Accel Acute Alarm"
    },
    y_accel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 14, modbusAddress: 46038, bitPosition: 14, 
      type: "warning", description: "Y HF Accel Chronic Warning"
    },
    y_accel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Y", 
      originalOrder: 15, modbusAddress: 46038, bitPosition: 15, 
      type: "alarm", description: "Y HF Accel Chronic Alarm"
    },
    
    // Registro 46039 - Z-Axis Velocity
    z_vel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 16, modbusAddress: 46039, bitPosition: 0, 
      type: "warning", description: "Z Velocity Acute Warning"
    },
    z_vel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 17, modbusAddress: 46039, bitPosition: 1, 
      type: "alarm", description: "Z Velocity Acute Alarm"
    },
    z_vel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 18, modbusAddress: 46039, bitPosition: 2, 
      type: "warning", description: "Z Velocity Chronic Warning"
    },
    z_vel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 19, modbusAddress: 46039, bitPosition: 3, 
      type: "alarm", description: "Z Velocity Chronic Alarm"
    },
    
    // Registro 46039 - Z-Axis High-Frequency Acceleration
    z_accel_acute_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 20, modbusAddress: 46039, bitPosition: 4, 
      type: "warning", description: "Z HF Accel Acute Warning"
    },
    z_accel_acute_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 21, modbusAddress: 46039, bitPosition: 5, 
      type: "alarm", description: "Z HF Accel Acute Alarm"
    },
    z_accel_chronic_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 22, modbusAddress: 46039, bitPosition: 6, 
      type: "warning", description: "Z HF Accel Chronic Warning"
    },
    z_accel_chronic_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Eje Z", 
      originalOrder: 23, modbusAddress: 46039, bitPosition: 7, 
      type: "alarm", description: "Z HF Accel Chronic Alarm"
    },
    
    // Registro 46039 - Temperature
    temp_warn: {
      value: 0, isAlert: false, lastUpdate: null, area: "Temperatura", 
      originalOrder: 24, modbusAddress: 46039, bitPosition: 8, 
      type: "warning", description: "Temperature Warning"
    },
    temp_alarm: {
      value: 0, isAlert: false, lastUpdate: null, area: "Temperatura", 
      originalOrder: 25, modbusAddress: 46039, bitPosition: 9, 
      type: "alarm", description: "Temperature Alarm"
    }
  },
  isConnected: false,
  totalAlerts: 0,
  lastSync: null,
  previousAlertStates: {},
  lastRegister46038: 0,
  lastRegister46039: 0,
  connectionRetryCount: 0,
  maxRetryAttempts: 3,
  wasDisconnected: false, // Para manejar reconexión
  lastConnectionCheck: null
};

// Referencias a elementos DOM
const loadingContainer = document.getElementById('loadingContainer');
const mainWidget = document.getElementById('mainWidget');
const connectionStatus = document.getElementById('connectionStatus');
const statusText = connectionStatus.querySelector('.status-text');
const totalAlertsElement = document.getElementById('totalAlerts');
const lastSyncElement = document.getElementById('lastSync');
const registersValueElement = document.getElementById('registersValue');
const alertsTableBody = document.getElementById('alertsTableBody');

// Generar referencias dinámicamente para todas las alertas
const alertRows = {};
const lastUpdateElements = {};

Object.keys(alertsState.alerts).forEach(alertType => {
  alertRows[alertType] = document.getElementById(`alert-${alertType}`);
  lastUpdateElements[alertType] = document.getElementById(`${alertType}-last-update`);
});

// Configuración de Ubidots para tres variables (añadimos connected)
const UBIDOTS_CONFIG = {
  TOKEN: "BBUS-l3bIlQTmfEKN7MM6NJLYUMZuYvJ4wU",
  DEVICE_LABEL: "vibration_data",
  VARIABLES: {
    REGISTER_46038: "rg_vbiq_38",
    REGISTER_46039: "rg_vbiq_39",
    CONNECTED: "connected" // Nueva variable para estado de conexión
  }
};

// FUNCIÓN: Procesar un registro Modbus y extraer alertas por bits
function processModbusRegister(registerValue, registerAddress, timestamp) {
  console.log(`🔢 Procesando registro ${registerAddress}: ${registerValue} (binario: ${registerValue.toString(2).padStart(16, '0')})`);
  
  const changedAlerts = [];
  const currentTime = timestamp || Date.now();
  
  // Encontrar todas las alertas que pertenecen a este registro
  const alertsForRegister = Object.entries(alertsState.alerts).filter(
    ([_, alertData]) => alertData.modbusAddress === registerAddress
  );
  
  alertsForRegister.forEach(([alertType, alertData]) => {
    const bitPosition = alertData.bitPosition;
    
    // Extraer el bit específico (1 = alerta activa, 0 = normal)
    const bitValue = (registerValue >> bitPosition) & 1;
    const isAlert = bitValue === 1;
    
    // Guardar estado anterior
    const previousState = alertData.isAlert;
    
    // Actualizar estado
    alertData.value = bitValue;
    alertData.isAlert = isAlert;
    alertData.lastUpdate = currentTime;
    
    // Si cambió el estado, agregarlo a la lista de cambios
    if (previousState !== isAlert) {
      changedAlerts.push({
        type: alertType,
        address: registerAddress,
        previousState,
        currentState: isAlert,
        bitPosition,
        alertType: alertData.type // 'warning' o 'alarm'
      });
    }
    
    console.log(`📍 ${alertType} (${registerAddress}.${bitPosition}): ${bitValue} (${isAlert ? alertData.type.toUpperCase() : 'Normal'})`);
  });
  
  return changedAlerts;
}

// FUNCIÓN: Procesar datos de ambos registros desde Ubidots
function processUbidotsRegisters(data46038, data46039) {
  console.log("\n📡 Procesando datos de registros Modbus...");
  
  let totalChanges = [];
  let hasChanges = false;
  
  // Procesar registro 46038 si hay datos
  if (data46038 && data46038.value !== undefined) {
    const reg46038Value = parseInt(data46038.value) || 0;
    const timestamp46038 = data46038.timestamp || Date.now();
    
    if (reg46038Value !== alertsState.lastRegister46038) {
      console.log(`🔄 Cambio en 46038: ${alertsState.lastRegister46038} → ${reg46038Value}`);
      const changes = processModbusRegister(reg46038Value, 46038, timestamp46038);
      totalChanges = totalChanges.concat(changes);
      alertsState.lastRegister46038 = reg46038Value;
      hasChanges = true;
    }
  }
  
  // Procesar registro 46039 si hay datos
  if (data46039 && data46039.value !== undefined) {
    const reg46039Value = parseInt(data46039.value) || 0;
    const timestamp46039 = data46039.timestamp || Date.now();
    
    if (reg46039Value !== alertsState.lastRegister46039) {
      console.log(`🔄 Cambio en 46039: ${alertsState.lastRegister46039} → ${reg46039Value}`);
      const changes = processModbusRegister(reg46039Value, 46039, timestamp46039);
      totalChanges = totalChanges.concat(changes);
      alertsState.lastRegister46039 = reg46039Value;
      hasChanges = true;
    }
  }
  
  // Actualizar filas que cambiaron
  totalChanges.forEach(change => {
    console.log(`🚨 Actualizando ${change.type}: ${change.previousState} → ${change.currentState} (${change.alertType})`);
    updateAlertRowVisual(change.type);
  });
  
  // Si hubo cambios, reordenar tabla
  if (hasChanges && totalChanges.length > 0) {
    setTimeout(() => {
      reorderTableRows();
    }, 100);
    
    console.log(`✅ ${totalChanges.length} alertas actualizadas`);
  }
  
  return hasChanges;
}

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

// FUNCIÓN: Actualizar estado de conexión con manejo de reconexión
function updateConnectionStatus(isConnected, connectionTimestamp = null) {
  console.log(`🔌 Actualizando estado conexión: ${isConnected} (anterior: ${alertsState.isConnected})`);
  
  const wasConnected = alertsState.isConnected;
  alertsState.isConnected = isConnected;
  alertsState.lastConnectionCheck = connectionTimestamp || Date.now();
  
  // Detectar reconexión
  if (!wasConnected && isConnected && alertsState.wasDisconnected) {
    console.log("🔄 ¡RECONEXIÓN DETECTADA! El dispositivo se ha conectado nuevamente");
    alertsState.wasDisconnected = false;
    alertsState.connectionRetryCount = 0;
    
    // Mostrar mensaje de reconexión
    showReconnectionMessage();
    
    // Forzar actualización inmediata de datos
    setTimeout(() => {
      updateAlertsFromUbidots();
    }, 1000);
  }
  
  // Detectar desconexión
  if (wasConnected && !isConnected) {
    console.log("❌ ¡DESCONEXIÓN DETECTADA! El dispositivo se ha desconectado");
    alertsState.wasDisconnected = true;
  }
  
  // Actualizar UI
  if (isConnected) {
    connectionStatus.classList.remove('disconnected');
    connectionStatus.classList.add('connected');
    statusText.textContent = 'Conectado';
  } else {
    connectionStatus.classList.remove('connected');
    connectionStatus.classList.add('disconnected');
    statusText.textContent = `Desconectado${alertsState.connectionRetryCount > 0 ? ` (reintento ${alertsState.connectionRetryCount}/${alertsState.maxRetryAttempts})` : ''}`;
  }
}

// FUNCIÓN: Mostrar mensaje de reconexión
function showReconnectionMessage() {
  console.log("✅ Mostrando mensaje de reconexión");
  
  // Crear elemento de notificación temporal
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #4CAF50, #45a049);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    font-weight: bold;
    animation: slideIn 0.3s ease-out;
  `;
  notification.innerHTML = '🔄 Dispositivo reconectado';
  
  // Añadir animación CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remover después de 4 segundos
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Función para reordenar filas de la tabla (prioridad: alarm > warning > normal)
function reorderTableRows() {
  console.log("🔄 Reordenando tabla de alertas...");
  
  const rows = Array.from(alertsTableBody.querySelectorAll('tr'));
  
  // Separar por tipo de estado
  const alarmRows = rows.filter(row => {
    const alertType = row.dataset.alertType;
    const alertData = alertsState.alerts[alertType];
    return alertData && alertData.isAlert && alertData.type === 'alarm';
  });
  
  const warningRows = rows.filter(row => {
    const alertType = row.dataset.alertType;
    const alertData = alertsState.alerts[alertType];
    return alertData && alertData.isAlert && alertData.type === 'warning';
  });
  
  const normalRows = rows.filter(row => {
    const alertType = row.dataset.alertType;
    const alertData = alertsState.alerts[alertType];
    return alertData && !alertData.isAlert;
  });
  
  // Ordenar por timestamp dentro de cada grupo
  const sortByTimestamp = (a, b) => {
    const alertTypeA = a.dataset.alertType;
    const alertTypeB = b.dataset.alertType;
    const timestampA = alertsState.alerts[alertTypeA].lastUpdate || 0;
    const timestampB = alertsState.alerts[alertTypeB].lastUpdate || 0;
    return timestampB - timestampA;
  };
  
  alarmRows.sort(sortByTimestamp);
  warningRows.sort(sortByTimestamp);
  normalRows.sort((a, b) => parseInt(a.dataset.originalOrder) - parseInt(b.dataset.originalOrder));
  
  // Nuevo orden: alarmas, warnings, normales
  const newOrder = [...alarmRows, ...warningRows, ...normalRows];
  
  // Limpiar y reagregar con animación
  alertsTableBody.innerHTML = '';
  newOrder.forEach((row, index) => {
    row.classList.add('row-fade-in');
    alertsTableBody.appendChild(row);
    
    setTimeout(() => {
      row.classList.remove('row-fade-in');
    }, 500);
  });
  
  console.log(`✅ Tabla reordenada. Alarmas: ${alarmRows.length}, Warnings: ${warningRows.length}, Normales: ${normalRows.length}`);
}

// FUNCIÓN: Actualizar la parte visual de una fila
function updateAlertRowVisual(alertType) {
  console.log(`🎨 Actualizando vista de ${alertType}`);
  
  const alertData = alertsState.alerts[alertType];
  const row = alertRows[alertType];
  
  if (!alertData || !row) {
    console.error(`❌ Elementos no encontrados para: ${alertType}`);
    return;
  }
  
  const statusIndicator = row.querySelector('.status-indicator-cell');
  const statusTextCell = row.querySelector('.status-text-cell');
  const lastUpdateCell = lastUpdateElements[alertType];
  
  // Actualizar timestamp
  if (lastUpdateCell) {
    lastUpdateCell.textContent = formatDateTime(alertData.lastUpdate);
  }
  
  if (alertData.isAlert) {
    // Limpiar estados anteriores
    row.classList.remove('normal', 'warning', 'alert');
    statusIndicator.classList.remove('normal', 'warning', 'alert');
    
    if (alertData.type === 'alarm') {
      // Estado de alarma
      row.classList.add('alert');
      statusIndicator.classList.add('alert');
      statusTextCell.textContent = 'ALARMA';
      
      // Animación para nueva alarma
      row.classList.add('newly-activated');
      setTimeout(() => row.classList.remove('newly-activated'), 3000);
      
    } else if (alertData.type === 'warning') {
      // Estado de warning
      row.classList.add('warning');
      statusIndicator.classList.add('warning');
      statusTextCell.textContent = 'WARNING';
      
      // Animación para nueva warning
      row.classList.add('newly-activated');
      setTimeout(() => row.classList.remove('newly-activated'), 3000);
    }
    
    console.log(`🆕 ${alertData.type.toUpperCase()} activado: ${alertType}`);
  } else {
    // Estado normal
    row.classList.remove('alert', 'warning', 'newly-activated');
    row.classList.add('normal');
    statusIndicator.classList.remove('alert', 'warning');
    statusIndicator.classList.add('normal');
    statusTextCell.textContent = 'Normal';
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
  } else if (total <= 5) {
    totalAlertsElement.style.color = '#FFD700';
  } else {
    totalAlertsElement.style.color = '#f44336';
  }
  
  console.log(`📊 Total de alertas activas: ${total}`);
}

// Función para actualizar valores de registros en UI
function updateRegistersDisplay() {
  const connectionIndicator = alertsState.isConnected ? '🟢' : '🔴';
  registersValueElement.textContent = 
    `${connectionIndicator} 46038: ${alertsState.lastRegister46038} | 46039: ${alertsState.lastRegister46039}`;
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
    updateAlertRowVisual(alertType);
  });
  
  // Actualizar totales y sincronización
  updateTotalAlerts();
  updateRegistersDisplay();
  updateLastSync();
}

// FUNCIÓN: Obtener datos de una variable específica de Ubidots
async function getUbidotsVariableData(variableName) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${UBIDOTS_CONFIG.DEVICE_LABEL}/${variableName}?token=${UBIDOTS_CONFIG.TOKEN}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    
    if (data && data.last_value && data.last_value.timestamp) {
      return {
        value: data.last_value.value,
        timestamp: data.last_value.timestamp
      };
    } else {
      console.warn(`⚠️ Datos incompletos para variable ${variableName}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error obteniendo datos de ${variableName}:`, error);
    alertsState.connectionRetryCount++;
    return null;
  }
}

// FUNCIÓN: Verificar estado de conexión usando timestamp de variable 'connected'
async function checkConnectionFromUbidots() {
  console.log("🔍 Verificando estado de conexión desde Ubidots (por timestamp)...");
  
  try {
    const connectionData = await getUbidotsVariableData(UBIDOTS_CONFIG.VARIABLES.CONNECTED);
    
    if (connectionData && connectionData.timestamp) {
      const currentTime = Date.now();
      const lastDataTime = connectionData.timestamp;
      const timeDifferenceSeconds = (currentTime - lastDataTime) / 1000;
      
      // Si han pasado más de 10 segundos (margen de seguridad sobre los 5s), está desconectado
      const CONNECTION_TIMEOUT = 10; // segundos
      const isConnected = timeDifferenceSeconds <= CONNECTION_TIMEOUT;
      
      console.log(`🔌 Timestamp de 'connected': ${formatDateTime(lastDataTime)}`);
      console.log(`⏰ Tiempo transcurrido: ${timeDifferenceSeconds.toFixed(1)}s`);
      console.log(`📡 Estado: ${isConnected ? 'CONECTADO' : 'DESCONECTADO'} (límite: ${CONNECTION_TIMEOUT}s)`);
      
      updateConnectionStatus(isConnected, lastDataTime);
      return isConnected;
    } else {
      console.warn("⚠️ No se pudo obtener timestamp de conexión, asumiendo desconectado");
      updateConnectionStatus(false);
      return false;
    }
  } catch (error) {
    console.error("❌ Error verificando conexión:", error);
    updateConnectionStatus(false);
    return false;
  }
}

// FUNCIÓN: Manejar lógica de reintentos en caso de desconexión
async function handleConnectionRetry() {
  if (alertsState.connectionRetryCount < alertsState.maxRetryAttempts) {
    console.log(`🔄 Reintentando conexión (intento ${alertsState.connectionRetryCount + 1}/${alertsState.maxRetryAttempts})`);
    
    const isConnected = await checkConnectionFromUbidots();
    
    if (isConnected) {
      console.log("✅ Conexión restablecida en reintento");
      alertsState.connectionRetryCount = 0;
      return true;
    }
  } else {
    console.log("❌ Máximo número de reintentos alcanzado");
    // Resetear contador después de un tiempo
    setTimeout(() => {
      alertsState.connectionRetryCount = 0;
    }, 30000); // Reset después de 30 segundos
  }
  
  return false;
}

// FUNCIÓN: Actualizar todas las alertas desde Ubidots (versión mejorada con conexión)
async function updateAlertsFromUbidots() {
  console.log("\n🚀 ===== ACTUALIZANDO ALERTAS DESDE UBIDOTS (CON VERIFICACIÓN DE CONEXIÓN) =====");
  
  try {
    // Primero verificar el estado de conexión
    const isConnected = await checkConnectionFromUbidots();
    
    if (!isConnected) {
      console.log("⚠️ Dispositivo desconectado, intentando reconectar...");
      const reconnected = await handleConnectionRetry();
      
      if (!reconnected) {
        console.log("❌ No se pudo restablecer la conexión");
        updateLastSync(); // Actualizar sync aunque esté desconectado
        return;
      }
    }
    
    // Si está conectado, obtener datos de los registros
    const [data46038, data46039] = await Promise.all([
      getUbidotsVariableData(UBIDOTS_CONFIG.VARIABLES.REGISTER_46038),
      getUbidotsVariableData(UBIDOTS_CONFIG.VARIABLES.REGISTER_46039)
    ]);
    
    console.log(`✅ Datos obtenidos:`, {
      conectado: isConnected,
      registro46038: data46038,
      registro46039: data46039
    });
    
    // Procesar los registros solo si tenemos datos
    if (data46038 || data46039) {
      const hasChanges = processUbidotsRegisters(data46038, data46039);
      
      if (hasChanges) {
        console.log("🔄 Se detectaron cambios en las alertas");
      }
    }
    
    // Actualizar totales y sincronización
    updateTotalAlerts();
    updateRegistersDisplay();
    updateLastSync();
    
  } catch (error) {
    console.error("❌ Error general actualizando alertas:", error);
    updateConnectionStatus(false);
    alertsState.connectionRetryCount++;
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
  }, 1500);
}

// Función de inicialización
async function initializeAlertsWidget() {
  console.log("🎯 Inicializando widget de alertas (26 alertas Vibe IQ con conexión por variable)");
  
  try {
    // Renderizar estado inicial
    renderAlerts();
    
    // Cargar datos iniciales y verificar conexión
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

// FUNCIÓN: Simular valores de registros para testing (ahora simula timestamp realista)
function simulateRegisters(reg46038Value, reg46039Value, simulateConnected = true, timestampOffset = 0) {
  console.log(`🧪 Simulando registros: 46038=${reg46038Value} (${reg46038Value.toString(2).padStart(16, '0')}), 46039=${reg46039Value} (${reg46039Value.toString(2).padStart(16, '0')})`);
  
  const timestamp = Date.now() + (timestampOffset * 1000); // timestampOffset en segundos
  const data46038 = { value: reg46038Value, timestamp };
  const data46039 = { value: reg46039Value, timestamp };
  
  // Simular estado de conexión basado en timestamp
  if (simulateConnected) {
    console.log(`🔌 Simulando conexión activa (timestamp: ${formatDateTime(timestamp)})`);
    updateConnectionStatus(true, timestamp);
    processUbidotsRegisters(data46038, data46039);
  } else {
    // Simular timestamp viejo (más de 10 segundos)
    const oldTimestamp = timestamp - (15 * 1000); // 15 segundos atrás
    console.log(`❌ Simulando desconexión (timestamp viejo: ${formatDateTime(oldTimestamp)})`);
    updateConnectionStatus(false, oldTimestamp);
  }
  
  updateTotalAlerts();
  updateRegistersDisplay();
  updateLastSync();
}

// FUNCIÓN: Simular desconexión por timestamp viejo
function simulateConnectionByTimestamp() {
  console.log("🧪 Simulando estados de conexión por timestamp...");
  
  // Conexión activa (timestamp actual)
  setTimeout(() => {
    console.log("✅ Simulando conexión activa");
    simulateRegisters(0, 0, true, 0); // timestamp actual
  }, 1000);
  
  // Datos con timestamp de hace 3 segundos (aún conectado)
  setTimeout(() => {
    console.log("🟡 Simulando datos de hace 3 segundos (conectado)");
    simulateRegisters(5, 0, true, -3); // 3 segundos atrás
  }, 3000);
  
  // Datos con timestamp de hace 12 segundos (desconectado)
  setTimeout(() => {
    console.log("🔴 Simulando datos de hace 12 segundos (desconectado)");
    simulateRegisters(0, 0, false, -12); // 12 segundos atrás
  }, 5000);
  
  // Reconexión con timestamp actual
  setTimeout(() => {
    console.log("🔄 Simulando reconexión con timestamp actual");
    simulateRegisters(255, 255, true, 0); // timestamp actual con alertas
  }, 8000);
  
  // Vuelta a normal
  setTimeout(() => {
    console.log("✅ Simulando estado normal final");
    simulateRegisters(0, 0, true, 0);
  }, 10000);
  
  console.log("🧪 Test de conexión por timestamp programado");
}

// FUNCIÓN: Simular desconexión y reconexión
function simulateConnectionLoss() {
  console.log("🧪 Simulando pérdida de conexión...");
  
  // Desconectar
  setTimeout(() => {
    console.log("❌ Simulando desconexión");
    updateConnectionStatus(false);
    updateRegistersDisplay();
  }, 1000);
  
  // Intentar reconectar después de 10 segundos
  setTimeout(() => {
    console.log("🔄 Simulando reconexión");
    updateConnectionStatus(true);
    updateRegistersDisplay();
  }, 10000);
}

// FUNCIÓN: Test específico para diferentes combinaciones de alertas con conexión por timestamp
function testVibeIQAlertsWithConnection() {
  console.log("🧪 Iniciando test de alertas Vibe IQ con simulación de conexión por timestamp...");
  
  // Conectado - Sin alertas (timestamp actual)
  setTimeout(() => simulateRegisters(0, 0, true, 0), 1000);
  
  // Conectado - Solo warnings de velocidad X (timestamp reciente)
  setTimeout(() => simulateRegisters(5, 0, true, -2), 3000); // 2 segundos atrás
  
  // Simular desconexión por timestamp viejo
  setTimeout(() => {
    console.log("❌ Simulando desconexión por timestamp viejo");
    simulateRegisters(0, 0, false, -15); // 15 segundos atrás
  }, 5000);
  
  // Reconexión con timestamp actual y nuevas alertas
  setTimeout(() => {
    console.log("✅ Simulando reconexión con timestamp actual y alertas");
    simulateRegisters(40960, 0, true, 0); // timestamp actual, alarmas de aceleración Y
  }, 8000);
  
  // Alertas de temperatura con timestamp reciente
  setTimeout(() => simulateRegisters(0, 768, true, -1), 10000); // 1 segundo atrás
  
  // Combinación compleja con timestamp actual
  setTimeout(() => simulateRegisters(2, 530, true, 0), 12000);
  
  // Desconexión prolongada (timestamp muy viejo)
  setTimeout(() => {
    console.log("❌ Simulando desconexión prolongada");
    simulateRegisters(0, 0, false, -25); // 25 segundos atrás
  }, 14000);
  
  // Reconexión final con timestamp actual
  setTimeout(() => {
    console.log("✅ Simulando reconexión final");
    simulateRegisters(0, 0, true, 0); // timestamp actual, vuelta a normal
  }, 18000);
  
  console.log("🧪 Test completo de alertas con conexión por timestamp programado");
}

// FUNCIÓN: Mostrar estado actual de todas las alertas (incluyendo conexión)
function showAlertsStatus() {
  console.log("\n📋 ===== ESTADO ACTUAL DE ALERTAS VIBE IQ =====");
  console.log(`Estado de conexión: ${alertsState.isConnected ? '🟢 CONECTADO' : '🔴 DESCONECTADO'}`);
  console.log(`Último check de conexión: ${formatDateTime(alertsState.lastConnectionCheck)}`);
  console.log(`Reintentos de conexión: ${alertsState.connectionRetryCount}/${alertsState.maxRetryAttempts}`);
  console.log(`Registro 46038: ${alertsState.lastRegister46038} (${alertsState.lastRegister46038.toString(2).padStart(16, '0')})`);
  console.log(`Registro 46039: ${alertsState.lastRegister46039} (${alertsState.lastRegister46039.toString(2).padStart(16, '0')})`);
  console.log(`Total alertas activas: ${alertsState.totalAlerts}`);
  
  // Agrupar por registro para mejor visualización
  const reg46038Alerts = Object.entries(alertsState.alerts).filter(([_, data]) => data.modbusAddress === 46038);
  const reg46039Alerts = Object.entries(alertsState.alerts).filter(([_, data]) => data.modbusAddress === 46039);
  
  console.log("\n--- REGISTRO 46038 ---");
  reg46038Alerts.forEach(([type, data]) => {
    console.log(`${type} (bit ${data.bitPosition}): ${data.isAlert ? data.type.toUpperCase() : 'Normal'} - ${formatDateTime(data.lastUpdate)}`);
  });
  
  console.log("\n--- REGISTRO 46039 ---");
  reg46039Alerts.forEach(([type, data]) => {
    console.log(`${type} (bit ${data.bitPosition}): ${data.isAlert ? data.type.toUpperCase() : 'Normal'} - ${formatDateTime(data.lastUpdate)}`);
  });
  
  console.log("=====================================\n");
}

// FUNCIÓN: Obtener resumen por tipo de alerta (incluyendo estado de conexión)
function getAlertsSummary() {
  const summary = {
    connection: {
      isConnected: alertsState.isConnected,
      lastCheck: alertsState.lastConnectionCheck,
      retryCount: alertsState.connectionRetryCount
    },
    alerts: {
      alarms: 0,
      warnings: 0,
      normal: 0
    },
    byAxis: { X: 0, Y: 0, Z: 0, Temperatura: 0 }
  };
  
  Object.values(alertsState.alerts).forEach(alert => {
    if (alert.isAlert) {
      if (alert.type === 'alarm') summary.alerts.alarms++;
      else if (alert.type === 'warning') summary.alerts.warnings++;
      
      // Contar por eje
      if (alert.area === 'Eje X') summary.byAxis.X++;
      else if (alert.area === 'Eje Y') summary.byAxis.Y++;
      else if (alert.area === 'Eje Z') summary.byAxis.Z++;
      else if (alert.area === 'Temperatura') summary.byAxis.Temperatura++;
    } else {
      summary.alerts.normal++;
    }
  });
  
  console.log("📊 Resumen completo:", summary);
  return summary;
}

// FUNCIÓN: Simulaciones específicas por eje (con conexión por timestamp)
function simulateAxisAlerts(axis, alertTypes = ['warning', 'alarm'], timestampOffset = 0) {
  const isConnected = timestampOffset >= -10; // Conectado si timestamp no es más viejo que 10 segundos
  console.log(`🧪 Simulando alertas para eje ${axis} (timestamp offset: ${timestampOffset}s, conectado: ${isConnected})...`);
  
  let reg46038 = 0;
  let reg46039 = 0;
  
  if (axis === 'X') {
    // Activar alertas de eje X en registro 46038
    if (alertTypes.includes('warning')) {
      reg46038 |= (1 << 0) | (1 << 2) | (1 << 4) | (1 << 6); // Velocity y Accel warnings
    }
    if (alertTypes.includes('alarm')) {
      reg46038 |= (1 << 1) | (1 << 3) | (1 << 5) | (1 << 7); // Velocity y Accel alarms
    }
  } else if (axis === 'Y') {
    // Activar alertas de eje Y en registro 46038
    if (alertTypes.includes('warning')) {
      reg46038 |= (1 << 8) | (1 << 10) | (1 << 12) | (1 << 14); // Velocity y Accel warnings
    }
    if (alertTypes.includes('alarm')) {
      reg46038 |= (1 << 9) | (1 << 11) | (1 << 13) | (1 << 15); // Velocity y Accel alarms
    }
  } else if (axis === 'Z') {
    // Activar alertas de eje Z en registro 46039
    if (alertTypes.includes('warning')) {
      reg46039 |= (1 << 0) | (1 << 2) | (1 << 4) | (1 << 6); // Velocity y Accel warnings
    }
    if (alertTypes.includes('alarm')) {
      reg46039 |= (1 << 1) | (1 << 3) | (1 << 5) | (1 << 7); // Velocity y Accel alarms
    }
  } else if (axis === 'Temperature') {
    // Activar alertas de temperatura en registro 46039
    if (alertTypes.includes('warning')) {
      reg46039 |= (1 << 8); // Temperature warning
    }
    if (alertTypes.includes('alarm')) {
      reg46039 |= (1 << 9); // Temperature alarm
    }
  }
  
  simulateRegisters(reg46038, reg46039, isConnected, timestampOffset);
}

// FUNCIÓN: Test de escenarios de conexión/desconexión
function testConnectionScenarios() {
  console.log("🧪 Iniciando test de escenarios de conexión...");
  
  // Escenario 1: Conectado normal
  setTimeout(() => {
    console.log("📊 Escenario 1: Dispositivo conectado normal");
    simulateRegisters(0, 0, true);
  }, 1000);
  
  // Escenario 2: Desconexión súbita
  setTimeout(() => {
    console.log("📊 Escenario 2: Desconexión súbita");
    updateConnectionStatus(false);
  }, 3000);
  
  // Escenario 3: Intentos de reconexión
  setTimeout(() => {
    console.log("📊 Escenario 3: Intentos de reconexión");
    alertsState.connectionRetryCount = 1;
    updateConnectionStatus(false);
  }, 5000);
  
  setTimeout(() => {
    alertsState.connectionRetryCount = 2;
    updateConnectionStatus(false);
  }, 7000);
  
  // Escenario 4: Reconexión exitosa con alertas
  setTimeout(() => {
    console.log("📊 Escenario 4: Reconexión exitosa con alertas");
    simulateRegisters(255, 255, true); // Varias alertas activas
  }, 9000);
  
  // Escenario 5: Conexión estable
  setTimeout(() => {
    console.log("📊 Escenario 5: Conexión estable final");
    simulateRegisters(0, 0, true);
  }, 11000);
  
  console.log("🧪 Test de conexión programado completamente");
}

// Exponer funciones para debugging (versión extendida)
window.alertsDebug = {
  // Funciones originales
  simulateRegisters,
  simulateAxisAlerts,
  updateAlertsFromUbidots,
  testVibeIQAlerts: testVibeIQAlertsWithConnection,
  showAlertsStatus,
  getAlertsSummary,
  reorderTableRows,
  processModbusRegister,
  
  // Nuevas funciones de conexión
  checkConnectionFromUbidots,
  handleConnectionRetry,
  simulateConnectionLoss,
  simulateConnectionByTimestamp, // Nueva función específica para timestamp
  testConnectionScenarios,
  updateConnectionStatus,
  showReconnectionMessage,
  
  // Estados y configuración
  state: alertsState,
  config: UBIDOTS_CONFIG
};

// Inicializar cuando se carga la página
console.log("🚀 Iniciando sistema de alertas Vibe IQ (26 alertas con detección de conexión por variable)");
initializeAlertsWidget();