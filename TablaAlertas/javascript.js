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
  connectionValue: null, // NUEVO: valor de la variable connected (0 o 1)
  hasSystemError: false, // NUEVO: indica si el sistema tiene error (connected = 0)
  totalAlerts: 0,
  lastSync: null,
  previousAlertStates: {},
  lastRegister46038: 0,
  lastRegister46039: 0,
  connectionRetryCount: 0,
  maxRetryAttempts: 3,
  wasDisconnected: false,
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
const errorIcon = document.getElementById('errorIcon'); // NUEVO: icono de error

// Generar referencias dinámicamente para todas las alertas
const alertRows = {};
const lastUpdateElements = {};

Object.keys(alertsState.alerts).forEach(alertType => {
  alertRows[alertType] = document.getElementById(`alert-${alertType}`);
  lastUpdateElements[alertType] = document.getElementById(`${alertType}-last-update`);
});

// Configuración de Ubidots para tres variables
const UBIDOTS_CONFIG = {
  TOKEN: "BBUS-l3bIlQTmfEKN7MM6NJLYUMZuYvJ4wU",
  DEVICE_LABEL: "vibration_data",
  VARIABLES: {
    REGISTER_46038: "rg_vbiq_38",
    REGISTER_46039: "rg_vbiq_39",
    CONNECTED: "connected"
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
        alertType: alertData.type
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

// FUNCIÓN: Mostrar/ocultar icono de error del sistema
function updateSystemErrorIcon(showError) {
  if (showError) {
    errorIcon.style.display = 'inline-block';
    console.log("🚨 Mostrando icono de error del sistema");
  } else {
    errorIcon.style.display = 'none';
    console.log("✅ Ocultando icono de error del sistema");
  }
}

// FUNCIÓN: Actualizar estado de conexión con manejo de valor de variable connected
function updateConnectionStatus(isConnected, connectionTimestamp = null, connectedValue = null) {
  console.log(`🔌 Actualizando estado conexión: ${isConnected} (valor: ${connectedValue}, anterior: ${alertsState.isConnected})`);
  
  const wasConnected = alertsState.isConnected;
  alertsState.isConnected = isConnected;
  alertsState.lastConnectionCheck = connectionTimestamp || Date.now();
  
  // NUEVO: Actualizar valor de variable connected y estado de error del sistema
  if (connectedValue !== null) {
    const previousValue = alertsState.connectionValue;
    alertsState.connectionValue = connectedValue;
    
    // Si el valor de connected es 0, mostrar error del sistema
    if (connectedValue === 0) {
      alertsState.hasSystemError = true;
      updateSystemErrorIcon(true);
      console.log("🔴 ERROR DEL SISTEMA: Variable 'connected' = 0");
    } else if (connectedValue === 1) {
      alertsState.hasSystemError = false;
      updateSystemErrorIcon(false);
      console.log("🟢 SISTEMA OK: Variable 'connected' = 1");
    }
    
    // Log del cambio de valor
    if (previousValue !== connectedValue) {
      console.log(`📡 Cambio en variable 'connected': ${previousValue} → ${connectedValue}`);
    }
  }
  
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
  
  // Actualizar UI del estado de conexión
  updateConnectionStatusUI(isConnected);
}

// FUNCIÓN: Actualizar UI del estado de conexión
function updateConnectionStatusUI(isConnected) {
  // Limpiar clases anteriores
  connectionStatus.classList.remove('connected', 'disconnected', 'error');
  
  if (alertsState.hasSystemError) {
    // Error del sistema (connected = 0)
    connectionStatus.classList.add('error');
    statusText.textContent = 'Error del Sistema';
  } else if (isConnected) {
    // Conectado normalmente
    connectionStatus.classList.add('connected');
    statusText.textContent = 'Conectado';
  } else {
    // Desconectado (por timeout)
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
  // Indicador visual mejorado
  let connectionIndicator;
  if (alertsState.hasSystemError) {
    connectionIndicator = '🔴'; // Error del sistema
  } else if (alertsState.isConnected) {
    connectionIndicator = '🟢'; // Conectado
  } else {
    connectionIndicator = '🟡'; // Desconectado por timeout
  }
  
  const connectedValueText = alertsState.connectionValue !== null ? ` (${alertsState.connectionValue})` : '';
  registersValueElement.textContent = 
    `${connectionIndicator} 46038: ${alertsState.lastRegister46038} | 46039: ${alertsState.lastRegister46039}${connectedValueText}`;
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

// FUNCIÓN: Verificar estado de conexión y valor de variable 'connected'
async function checkConnectionFromUbidots() {
  console.log("🔍 Verificando estado de conexión desde Ubidots...");
  
  try {
    const connectionData = await getUbidotsVariableData(UBIDOTS_CONFIG.VARIABLES.CONNECTED);
    
    if (connectionData && connectionData.timestamp) {
      const currentTime = Date.now();
      const lastDataTime = connectionData.timestamp;
      const timeDifferenceSeconds = (currentTime - lastDataTime) / 1000;
      const connectedValue = parseInt(connectionData.value) || 0;
      
      // Si han pasado más de 10 segundos, está desconectado por timeout
      const CONNECTION_TIMEOUT = 10; // segundos
      const isConnectedByTime = timeDifferenceSeconds <= CONNECTION_TIMEOUT;
      
      console.log(`🔌 Variable 'connected': ${connectedValue} (timestamp: ${formatDateTime(lastDataTime)})`);
      console.log(`⏰ Tiempo transcurrido: ${timeDifferenceSeconds.toFixed(1)}s`);
      console.log(`📡 Estado por tiempo: ${isConnectedByTime ? 'CONECTADO' : 'DESCONECTADO'} (límite: ${CONNECTION_TIMEOUT}s)`);
      
      // El estado final depende del tiempo Y del valor de connected
      const finalConnectionState = isConnectedByTime; // Solo importa el timeout para conexión/desconexión
      
      updateConnectionStatus(finalConnectionState, lastDataTime, connectedValue);
      return finalConnectionState;
    } else {
      console.warn("⚠️ No se pudo obtener datos de conexión, asumiendo desconectado");
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

// FUNCIÓN: Actualizar todas las alertas desde Ubidots
async function updateAlertsFromUbidots() {
  console.log("\n🚀 ===== ACTUALIZANDO ALERTAS DESDE UBIDOTS =====");
  
  try {
    // Primero verificar el estado de conexión y valor de 'connected'
    const isConnected = await checkConnectionFromUbidots();
    
    if (!isConnected) {
      console.log("⚠️ Dispositivo desconectado, intentando reconectar...");
      const reconnected = await handleConnectionRetry();
      
      if (!reconnected) {
        console.log("❌ No se pudo restablecer la conexión");
        updateLastSync();
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
      valorConnected: alertsState.connectionValue,
      errorSistema: alertsState.hasSystemError,
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
  console.log("🎯 Inicializando widget de alertas con funcionalidad de icono de error");
  
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

// FUNCIÓN: Simular valores para testing (incluyendo variable connected)
function simulateRegisters(reg46038Value, reg46039Value, simulateConnected = true, connectedValue = 1, timestampOffset = 0) {
  console.log(`🧪 Simulando: 46038=${reg46038Value}, 46039=${reg46039Value}, connected=${connectedValue}, conectado=${simulateConnected}`);
  
  const timestamp = Date.now() + (timestampOffset * 1000);
  const data46038 = { value: reg46038Value, timestamp };
  const data46039 = { value: reg46039Value, timestamp };
  
  // Actualizar estado de conexión con valor de variable connected
  updateConnectionStatus(simulateConnected, timestamp, connectedValue);
  processUbidotsRegisters(data46038, data46039);
  
  updateTotalAlerts();
  updateRegistersDisplay();
  updateLastSync();
}

// FUNCIÓN: Test de funcionalidad de icono de error
function testSystemErrorIcon() {
  console.log("🧪 Iniciando test de icono de error del sistema...");
  
  // Estado normal (connected = 1)
  setTimeout(() => {
    console.log("📊 Estado 1: Sistema normal (connected = 1)");
    simulateRegisters(0, 0, true, 1);
  }, 1000);
  
  // Error del sistema (connected = 0) pero conectado por timestamp
  setTimeout(() => {
    console.log("📊 Estado 2: Error del sistema (connected = 0)");
    simulateRegisters(255, 255, true, 0); // Conectado pero con error del sistema
  }, 3000);
  
  // Desconectado por timeout (connected = 1 pero timestamp viejo)
  setTimeout(() => {
    console.log("📊 Estado 3: Desconectado por timeout");
    simulateRegisters(0, 0, false, 1, -15); // Timestamp viejo
  }, 5000);
  
  // Error del sistema Y desconectado
  setTimeout(() => {
    console.log("📊 Estado 4: Error del sistema Y desconectado");
    simulateRegisters(0, 0, false, 0, -20); // Timestamp viejo + connected = 0
  }, 7000);
  
  // Recuperación gradual
  setTimeout(() => {
    console.log("📊 Estado 5: Recuperación - conectado pero aún con error");
    simulateRegisters(0, 0, true, 0); // Timestamp actual pero connected = 0
  }, 9000);
  
  // Estado final normal
  setTimeout(() => {
    console.log("📊 Estado 6: Recuperación completa");
    simulateRegisters(0, 0, true, 1); // Todo normal
  }, 11000);
  
  console.log("🧪 Test de icono de error programado");
}

// FUNCIÓN: Mostrar estado actual (versión extendida)
function showAlertsStatus() {
  console.log("\n📋 ===== ESTADO ACTUAL DE ALERTAS VIBE IQ =====");
  console.log(`Estado de conexión: ${alertsState.isConnected ? '🟢 CONECTADO' : '🔴 DESCONECTADO'}`);
  console.log(`Variable 'connected': ${alertsState.connectionValue} ${alertsState.hasSystemError ? '(ERROR SISTEMA)' : '(OK)'}`);
  console.log(`Icono de error visible: ${errorIcon.style.display !== 'none' ? 'SÍ' : 'NO'}`);
  console.log(`Último check de conexión: ${formatDateTime(alertsState.lastConnectionCheck)}`);
  console.log(`Reintentos de conexión: ${alertsState.connectionRetryCount}/${alertsState.maxRetryAttempts}`);
  console.log(`Registro 46038: ${alertsState.lastRegister46038} (${alertsState.lastRegister46038.toString(2).padStart(16, '0')})`);
  console.log(`Registro 46039: ${alertsState.lastRegister46039} (${alertsState.lastRegister46039.toString(2).padStart(16, '0')})`);
  console.log(`Total alertas activas: ${alertsState.totalAlerts}`);
  console.log("=====================================\n");
}

// FUNCIÓN: Test completo con todas las funcionalidades
function testCompleteSystem() {
  console.log("🧪 Iniciando test completo del sistema con icono de error...");
  
  setTimeout(() => testSystemErrorIcon(), 1000);
  setTimeout(() => showAlertsStatus(), 15000);
}

// Exponer funciones para debugging (versión extendida)
window.alertsDebug = {
  // Funciones principales
  simulateRegisters,
  updateAlertsFromUbidots,
  showAlertsStatus,
  updateConnectionStatus,
  checkConnectionFromUbidots,
  
  // Nuevas funciones para icono de error
  testSystemErrorIcon,
  testCompleteSystem,
  updateSystemErrorIcon,
  
  // Funciones de UI
  updateConnectionStatusUI,
  updateRegistersDisplay,
  reorderTableRows,
  
  // Estados y configuración
  state: alertsState,
  config: UBIDOTS_CONFIG,
  elements: { errorIcon }
};

// Inicializar cuando se carga la página
console.log("🚀 Iniciando sistema de alertas Vibe IQ con funcionalidad de icono de error");
initializeAlertsWidget();