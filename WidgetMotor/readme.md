# Documentación CSS - Sistema de Monitoreo de Motor

## Descripción General
Este archivo CSS define los estilos para una aplicación web de monitoreo de motor en tiempo real. La interfaz incluye un termómetro visual, indicadores de estado, iconos de alerta y está completamente optimizada para dispositivos móviles.

## Tabla de Contenidos
1. [Variables CSS](#variables-css)
2. [Estilos Base](#estilos-base)
3. [Pantalla de Carga](#pantalla-de-carga)
4. [Tarjeta Principal](#tarjeta-principal)
5. [Iconos de Estado](#iconos-de-estado)
6. [Información de Actualización](#información-de-actualización)
7. [Motor Visual](#motor-visual)
8. [Termómetro](#termómetro)
9. [Escala de Temperatura](#escala-de-temperatura)
10. [Valor de Temperatura](#valor-de-temperatura)
11. [Estado del Sistema](#estado-del-sistema)
12. [Responsive Design](#responsive-design)

---

## Variables CSS

```css
:root {
  --bg: #0b0f15;        /* Color de fondo principal (azul oscuro) */
  --good: #18c29c;      /* Verde para estados positivos */
  --warn: #ffb020;      /* Naranja para advertencias */
  --bad: #ff5d5d;       /* Rojo para estados críticos/errores */
  --text: #e8eef6;      /* Color de texto principal (gris claro) */
  --blue: #4a90e2;      /* Azul principal para elementos activos */
}
```

**Propósito**: Define la paleta de colores del sistema usando variables CSS para facilitar el mantenimiento y consistencia visual.

---

## Estilos Base

### Reset y Body
```css
* { box-sizing: border-box; }
```
**Propósito**: Aplicar box-sizing border-box a todos los elementos para un cálculo más predecible de dimensiones.

```css
body {
  background: var(--bg);
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```
**Propósito**: 
- Centra el contenido vertical y horizontalmente
- Establece el fondo oscuro y la tipografía del sistema
- Asegura que la página ocupe toda la altura de la ventana

---

## Pantalla de Carga

### Contenedor de Carga
```css
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
}
```

### Spinner Animado
```css
.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(74, 144, 226, 0.2);
  border-top: 4px solid var(--blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```
**Propósito**: Crea un indicador de carga circular animado con rotación continua.

---

## Tarjeta Principal

```css
.card {
  background: #111c2b;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  box-shadow: 0 4px 20px rgba(0,0,0,.5);
  position: relative;
  color: var(--text);
  margin: 0 auto;
}
```
**Propósito**: 
- Contenedor principal de la interfaz
- Diseño tipo tarjeta con sombras y bordes redondeados
- Posicionamiento relativo para elementos absolutos internos
- Responsive entre 300px y 400px de ancho

---

## Iconos de Estado

### Icono de Alerta
```css
.alert-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

.alert-icon.visible { opacity: 1; }
.alert-icon.blinking { animation: alertBlink 1s ease-in-out infinite; }
```

### Icono de Desconexión
```css
.disconnect-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}
```

### Animaciones de Estado
```css
@keyframes alertBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes disconnectBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```
**Propósito**: 
- Iconos posicionados en las esquinas superiores
- Animaciones de parpadeo para llamar la atención
- Estados visible/oculto con transiciones suaves

---

## Información de Actualización

```css
.last-update {
  font-size: 0.85rem;
  color: #8a9ba8;
  margin-bottom: 15px;
  padding: 8px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 36px;
}
```

### Estados de Conexión
```css
.last-update.disconnected {
  color: var(--bad);
  background: rgba(255,93,93,0.1);
  border-color: rgba(255,93,93,0.2);
}

.last-update.connected {
  color: var(--good);
  background: rgba(24,194,156,0.1);
  border-color: rgba(24,194,156,0.2);
}
```
**Propósito**: 
- Muestra información de la última actualización
- Cambia colores según el estado de conexión
- Layout flexbox con icono y texto centrados

---

## Motor Visual

```css
.motor-container {
  margin-bottom: 15px;
}

.motor {
  width: 270px;
  height: 270px;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,.4));
  transition: filter .3s ease;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.motor.stopped {
  filter: hue-rotate(0deg) saturate(3) brightness(0.8);
}
```
**Propósito**: 
- Contenedor para la representación visual del motor
- Efectos visuales que cambian según el estado (funcionando/detenido)
- Sombra para dar profundidad

---

## Termómetro

### Contenedor Principal
```css
.thermometer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  min-height: 80px;
}
```

### Estructura del Termómetro
```css
.thermometer {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
}
```

### Bulbo del Termómetro
```css
.thermometer-bulb {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #2a3441 0%, #1e2832 100%);
  border: 2px solid #3d4a5c;
  border-radius: 50%;
  position: relative;
  margin-right: -2px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
  z-index: 2;
  flex-shrink: 0;
}

.mercury-bulb {
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: var(--blue);
  border-radius: 50%;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
}
```

### Tubo del Termómetro
```css
.thermometer-tube {
  flex: 1;
  height: 16px;
  background: linear-gradient(to right, #2a3441 0%, #1e2832 100%);
  border: 2px solid #3d4a5c;
  border-radius: 0 8px 8px 0;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
  min-width: 200px;
}

.mercury-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--blue);
  border-radius: 0 6px 6px 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  width: 0%;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.4);
}
```
**Propósito**: 
- Termómetro visual realista con bulbo circular y tubo horizontal
- Relleno de "mercurio" que se anima según la temperatura
- Gradientes y sombras para apariencia 3D
- Transiciones suaves con easing personalizado

---

## Escala de Temperatura

```css
.temp-scale {
  position: relative;
  margin-top: 15px;
  width: 100%;
  max-width: 280px;
  height: 20px;
}

.scale-mark {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2px;
}

.scale-mark::before {
  content: '';
  width: 1px;
  height: 8px;
  background: #5a6b7d;
  margin-bottom: 4px;
}

.scale-mark span {
  font-size: 0.75rem;
  color: #8a9ba8;
  white-space: nowrap;
}
```
**Propósito**: 
- Escala visual con marcas y números
- Posicionamiento absoluto para colocar marcas específicas
- Uso de pseudo-elementos para las líneas de marca

---

## Valor de Temperatura

```css
.temp-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 20px 0 10px 0;
  color: var(--blue);
  transition: color 0.8s ease;
  text-shadow: 0 0 15px rgba(74, 144, 226, 0.3);
}
```
**Propósito**: 
- Display prominente del valor de temperatura
- Efecto de brillo con text-shadow
- Transición suave de color

---

## Estado del Sistema

```css
.status {
  font-size: 1rem;
  margin-top: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  background: rgba(255,255,255,.1);
  transition: all 0.3s ease;
}

.status.running { 
  background: rgba(24,194,156,.2); 
  color: var(--good);
}

.status.stopped { 
  background: rgba(255,93,93,.2); 
  color: var(--bad);
}
```
**Propósito**: 
- Badge de estado con bordes redondeados
- Colores dinámicos según el estado del motor
- Fondo semi-transparente para integración visual

---

## Responsive Design

### Tablets (≤768px)
- Reducción de padding y dimensiones
- Motor de 225px
- Termómetro más compacto
- Iconos y textos ligeramente menores

### Móviles (≤480px)
- Optimización para pantallas pequeñas
- Motor de 195px
- Reducción significativa de espaciado
- Ajuste de tamaños de fuente

### Pantallas Muy Pequeñas (≤320px)
- Máxima compactación
- Motor de 165px
- Mínimos espaciados
- Termómetro reducido a 140px de ancho

**Estrategia de Responsive**:
- Mobile-first approach
- Breakpoints estándar
- Mantenimiento de proporciones
- Preservación de funcionalidad en todos los tamaños

---

## Características Técnicas

### Rendimiento
- Uso de `transform` para animaciones (GPU-accelerated)
- Transiciones con `cubic-bezier` para movimientos naturales
- `will-change` implícito en elementos animados

### Accesibilidad
- Colores con contraste adecuado
- Tamaños de fuente escalables
- Zonas de toque apropiadas para móvil

### Compatibilidad
- Variables CSS (IE11+)
- Flexbox (IE10+)
- Gradientes CSS3
- Animaciones CSS3

---

# Documentación JavaScript - Sistema de Monitoreo de Motor

## Descripción General
Este archivo JavaScript controla toda la lógica de la aplicación de monitoreo, incluyendo la comunicación con Ubidots, manejo de estados, actualización de la interfaz y detección de desconexión del dispositivo.

## Tabla de Contenidos
1. [Estado Global](#estado-global)
2. [Referencias DOM](#referencias-dom)
3. [Configuración](#configuración)
4. [Funciones de Formato](#funciones-de-formato)
5. [Funciones de Interfaz](#funciones-de-interfaz)
6. [Comunicación con Ubidots](#comunicación-con-ubidots)
7. [Lógica Principal](#lógica-principal)
8. [Inicialización](#inicialización)

---

## Estado Global

### Objeto State
```javascript
const state = {
  running: true,           // Estado del motor (true = funcionando, false = detenido)
  tempC: 0,               // Temperatura en grados Celsius
  alertas: 0,             // Número de alertas (0 = sin alertas, 1 = alerta activa)
  isDisconnected: false,  // Estado de conexión del dispositivo
  lastUpdateTime: null    // Timestamp de la última actualización
};
```

**Propósito**: Centraliza todo el estado de la aplicación en un objeto reactivo que dispara actualizaciones de interfaz cuando cambia.

---

## Referencias DOM

### Elementos Principales
```javascript
const tempValue = document.getElementById('tempValue');
const motorIcon = document.getElementById('motorIcon');
const alertIcon = document.getElementById('alertIcon');
const disconnectIcon = document.getElementById('disconnectIcon');
const lastUpdate = document.getElementById('lastUpdate');
const mercuryFill = document.getElementById('mercuryFill');
const mercuryBulb = document.getElementById('mercuryBulb');
const loadingContainer = document.getElementById('loadingContainer');
const mainWidget = document.getElementById('mainWidget');
```

**Propósito**: Referencias globales a elementos DOM críticos para evitar múltiples `getElementById()`.

---

## Configuración

### URLs de Imágenes del Motor
```javascript
const imgRunning = "https://i.imgur.com/D6MCRQB.png";  // Motor funcionando
const imgStopped = "https://i.imgur.com/CvbzHSg.png";  // Motor detenido
```

### Configuración de Ubidots
```javascript
const UBIDOTS_TOKEN = "BBUS-XjHBrDrhcxVPTvQMK1NLuLny7OIKsl";
const DEVICE_LABEL = "esp32";

const VARIABLES = {
  temperature: "temperatura",
  motorStatus: "connected", 
  alertas: "alertas"
};

const DISCONNECT_TIMEOUT = 30000; // 30 segundos en milisegundos
```

**Propósito**: 
- Credenciales y configuración para la API de Ubidots
- Mapeo de variables del dispositivo
- Tiempo límite para detectar desconexión

---

## Funciones de Formato

### Formateo de Fecha y Hora
```javascript
function formatDateTime(timestamp) {
  if (!timestamp) return "Sin datos";
  
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "Fecha inválida";
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month} ${hours}:${minutes}`;
  } catch (error) {
    console.error("Error formateando fecha:", error);
    return "Error fecha";
  }
}
```

**Características**:
- Formato DD/MM HH:MM
- Validación de timestamps
- Manejo de errores robusto
- Padding automático de ceros

### Formateo de Temperatura
```javascript
function formatTemperature(temp) {
  // Si es un número entero, mostrar sin decimales
  if (temp % 1 === 0) {
    return `${temp.toFixed(0)} °C`;
  }
  // Si tiene decimales, mostrar con 1 decimal
  return `${temp.toFixed(1)} °C`;
}
```

**Propósito**: Display inteligente de temperatura (enteros sin decimales, decimales con 1 dígito).

---

## Funciones de Interfaz

### Sistema de Colores por Temperatura
```javascript
function getTempColor(temp) {
  if (temp <= 0) {
    return '#4a90e2'; // Azul
  } else if (temp <= 28) {
    // Gradiente de azul a verde (0-28°C)
    const ratio = temp / 28;
    const r = Math.round(74 + (24 - 74) * ratio);
    const g = Math.round(144 + (194 - 144) * ratio);
    const b = Math.round(226 + (156 - 226) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  } else if (temp <= 31) {
    return '#18c29c'; // Verde (rango normal)
  } else if (temp <= 60) {
    // Gradiente de verde a rojo (32-60°C)
    const ratio = (temp - 31) / (60 - 31);
    const r = Math.round(24 + (200 - 24) * ratio);
    const g = Math.round(194 - (194 - 50) * ratio);
    const b = Math.round(156 - (156 - 50) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return '#c80000'; // Rojo intenso (>60°C)
  }
}
```

**Rangos de Color**:
- **≤0°C**: Azul (#4a90e2)
- **0-28°C**: Gradiente azul → verde
- **29-31°C**: Verde (#18c29c) - rango normal
- **32-60°C**: Gradiente verde → rojo
- **>60°C**: Rojo intenso (#c80000)

### Manejo de Iconos

#### Icono de Alerta
```javascript
function handleAlertIcon() {
  if (state.alertas === 1) {
    alertIcon.classList.add('visible');
    alertIcon.classList.add('blinking');
  } else {
    alertIcon.classList.remove('visible');
    alertIcon.classList.remove('blinking');
  }
}
```

#### Icono de Desconexión
```javascript
function handleDisconnectIcon() {
  if (state.isDisconnected) {
    disconnectIcon.classList.add('visible');
    disconnectIcon.classList.add('blinking');
  } else {
    disconnectIcon.classList.remove('visible');
    disconnectIcon.classList.remove('blinking');
  }
}
```

### Parpadeo del Motor
```javascript
function handleMotorBlink() {
  // Detener parpadeo anterior
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }

  // Si hay alerta Y el motor está funcionando, parpadear
  if (state.alertas === 1 && state.running) {
    blinkInterval = setInterval(() => {
      // Alternar entre imagen funcionando/parado cada 500ms
      if (motorIcon.src.includes('D6MCRQB')) {
        motorIcon.src = imgStopped;
      } else {
        motorIcon.src = imgRunning;
      }
    }, 500);
  } else {
    // Sin alerta, mostrar estado normal
    if (state.running) {
      motorIcon.src = imgRunning;
      motorIcon.classList.remove('stopped');
    } else {
      motorIcon.src = imgStopped;
      motorIcon.classList.add('stopped');
    }
  }
}
```

**Lógica**:
- **Alerta + Motor funcionando**: Parpadeo cada 500ms
- **Sin alerta**: Imagen según estado real del motor
- **Motor detenido**: Clase `.stopped` para filtros CSS

---

## Comunicación con Ubidots

### API Endpoints

#### Datos Básicos (Valor Actual)
```javascript
async function getBasicDataFromUbidots(variable) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${DEVICE_LABEL}/${variable}/lv?token=${UBIDOTS_TOKEN}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
  const data = await response.text();
  return parseFloat(data);
}
```

#### Datos con Timestamp (Detección de Desconexión)
```javascript
async function getDataWithTimestamp(variable) {
  const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${DEVICE_LABEL}/${variable}?token=${UBIDOTS_TOKEN}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
  const data = await response.json();
  
  if (data && data.last_value && data.last_value.timestamp) {
    return {
      value: parseFloat(data.last_value.value),
      timestamp: data.last_value.timestamp,
      created_at: data.last_value.created_at
    };
  }
  
  return null;
}
```

**Diferencias**:
- **getBasicDataFromUbidots()**: Solo valor, más rápido
- **getDataWithTimestamp()**: Valor + timestamp, para detectar desconexión

### Detección de Desconexión
```javascript
function checkDisconnection(currentTime, lastUpdateTime) {
  const timeDifference = currentTime - lastUpdateTime;
  const isDisconnected = timeDifference > DISCONNECT_TIMEOUT;
  
  console.log("🔍 Checking disconnection:");
  console.log("  - Time difference:", Math.round(timeDifference/1000), "seconds");
  console.log("  - Timeout threshold:", Math.round(DISCONNECT_TIMEOUT/1000), "seconds");
  console.log("  - Is disconnected:", isDisconnected);
  
  return isDisconnected;
}
```

**Lógica**:
- Compara timestamp del último dato vs tiempo actual
- Umbral: 30 segundos (`DISCONNECT_TIMEOUT`)
- Logging detallado para debugging

---

## Lógica Principal

### Función Render
```javascript
function render() {
  // 1. Actualizar display de temperatura
  tempValue.textContent = formatTemperature(state.tempC);
  
  // 2. Calcular porcentaje del termómetro (0-60°C = 0-100%)
  const tempPercent = Math.min(Math.max(state.tempC, 0) / 60, 1) * 100;
  
  // 3. Obtener color según temperatura
  const color = getTempColor(state.tempC);
  
  // 4. Actualizar termómetro visual
  mercuryFill.style.width = `${tempPercent}%`;
  mercuryFill.style.background = color;
  mercuryFill.style.boxShadow = `0 0 12px ${color}40`;
  
  // 5. Actualizar bulbo
  mercuryBulb.style.background = color;
  mercuryBulb.style.boxShadow = `0 0 15px ${color}60`;
  
  // 6. Actualizar texto de temperatura
  tempValue.style.color = color;
  tempValue.style.textShadow = `0 0 20px ${color}50`;
  
  // 7. Manejar estados visuales
  handleMotorBlink();
  handleAlertIcon();
  handleDisconnectIcon();
  updateLastUpdateDisplay();
}
```

**Secuencia de Actualización**:
1. Formato y display de temperatura
2. Cálculo de porcentaje para termómetro
3. Determinación de color según temperatura
4. Actualización visual del termómetro
5. Aplicación de colores dinámicos
6. Manejo de estados (motor, alertas, conexión)

### Actualización desde Ubidots
```javascript
async function updateWidgetFromUbidots() {
  try {
    const currentTime = getCurrentTime();
    
    // 1. Verificar desconexión usando timestamp
    const temperatureData = await getDataWithTimestamp(VARIABLES.temperature);
    let isDisconnected = true;
    let lastUpdateTimestamp = null;
    
    if (temperatureData && temperatureData.timestamp) {
      lastUpdateTimestamp = temperatureData.timestamp;
      isDisconnected = checkDisconnection(currentTime, temperatureData.timestamp);
    }
    
    // 2. Obtener datos solo si está conectado
    let temperature, motorStatus, alertas;
    
    if (!isDisconnected) {
      temperature = temperatureData.value;
      motorStatus = await getBasicDataFromUbidots(VARIABLES.motorStatus);
      alertas = await getBasicDataFromUbidots(VARIABLES.alertas);
    } else {
      // Intentar obtener últimos valores conocidos
      temperature = temperatureData?.value || await getBasicDataFromUbidots(VARIABLES.temperature);
      motorStatus = await getBasicDataFromUbidots(VARIABLES.motorStatus);
      alertas = await getBasicDataFromUbidots(VARIABLES.alertas);
    }
    
    // 3. Actualizar interfaz
    updateFromUbidots(temperature, motorStatus, alertas, isDisconnected, lastUpdateTimestamp);
    showWidget();
    
  } catch (error) {
    console.error("Error al actualizar desde Ubidots:", error);
    updateFromUbidots(null, null, null, true, null);
    showWidget();
  }
}
```

**Estrategia de Actualización**:
1. **Verificación de Conexión**: Primero obtiene timestamp para determinar estado
2. **Obtención Condicional**: Solo busca datos adicionales si el dispositivo está conectado
3. **Fallback**: En caso de desconexión, intenta obtener últimos valores conocidos
4. **Manejo de Errores**: Asume desconexión en caso de errores de API

---

## Inicialización

### Secuencia de Inicio
```javascript
// 1. Debug inicial del DOM
console.log("🔧 Verificando elementos DOM...");

// 2. Render inicial con valores por defecto
console.log("🎨 Render inicial");
render();

// 3. Cargar datos de Ubidots
console.log("🚀 Iniciando carga de datos de Ubidots");
updateWidgetFromUbidots();

// 4. Configurar actualización automática
console.log("⏰ Configurando actualización automática cada 5 segundos");
setInterval(updateWidgetFromUbidots, 5000);
```

### Transición de Pantallas
```javascript
function showWidget() {
  loadingContainer.style.display = 'none';
  mainWidget.style.display = 'block';
}
```

---

## Características Técnicas

### Logging y Debug
- **Emojis**: Sistema de iconos en consola para fácil identificación
- **Logging Estructurado**: Información detallada de cada paso
- **Estados de Variables**: Tracking completo de cambios de estado

### Manejo de Errores
- **Try-Catch**: En todas las operaciones asíncronas
- **Validación de Datos**: Verificación de tipos y valores válidos
- **Fallbacks**: Valores por defecto en caso de error

### Performance
- **Referencias DOM**: Cacheadas al inicio para evitar múltiples consultas
- **Intervalos**: Limpieza automática de intervals de parpadeo
- **Actualización Condicional**: Solo re-renderiza cuando el estado cambia

### Comunicación API
- **Rate Limiting**: Actualización cada 5 segundos
- **Error Handling**: Manejo robusto de errores de red
- **Timeout Detection**: Sistema inteligente de detección de desconexión

---

## Uso y Mantenimiento

### Modificación de Variables Ubidots
Para cambiar las variables monitoreadas, modificar el objeto `VARIABLES`:
```javascript
const VARIABLES = {
  temperature: "nueva_variable_temperatura",
  motorStatus: "nueva_variable_motor", 
  alertas: "nueva_variable_alertas"
};
```

### Ajuste de Timeouts
```javascript
const DISCONNECT_TIMEOUT = 60000; // 60 segundos
```

### Personalización de Colores
Modificar la función `getTempColor()` para cambiar los rangos y colores de temperatura.

### Frecuencia de Actualización
```javascript
setInterval(updateWidgetFromUbidots, 10000); // 10 segundos
```

---

## Estructura HTML

### Pantalla de Carga
```html
<div class="loading-container" id="loadingContainer">
    <div class="spinner"></div>
    <div class="loading-text">Cargando datos del sensor...</div>
</div>
```

**Elementos**:
- `#loadingContainer`: Contenedor principal de la pantalla de carga
- `.spinner`: Elemento visual del spinner animado (sin contenido)
- `.loading-text`: Mensaje informativo del proceso de carga

**Comportamiento**: 
- Visible por defecto al cargar la página
- Se oculta cuando los datos están listos
- El spinner rota automáticamente via CSS

---

### Widget Principal
```html
<div class="card" id="mainWidget" style="display: none;">
```

**Propósito**: Contenedor principal de la aplicación, inicialmente oculto hasta que termine la carga.

---

### Iconos de Estado

#### Icono de Desconexión
```html
<img src="https://cdn-icons-png.flaticon.com/512/11560/11560443.png" 
     id="disconnectIcon" 
     class="disconnect-icon" 
     alt="Desconectado" />
```

#### Icono de Alerta
```html
<img src="https://i.imgur.com/R3YqMuw.png" 
     id="alertIcon" 
     class="alert-icon" 
     alt="Alerta" />
```

**Características**:
- **Posicionamiento**: Absoluto en esquinas superiores
- **Estados**: Visible/oculto controlado via JavaScript
- **Animaciones**: Clases `.blinking` para efectos de parpadeo
- **IDs**: `disconnectIcon` y `alertIcon` para control programático

---

### Información de Última Actualización
```html
<div class="last-update" id="lastUpdate">
    <svg class="update-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
    <span class="update-text">Last update --</span>
</div>
```

**Elementos**:
- **SVG Icon**: Icono de verificación inline
- **Texto**: Placeholder que debe actualizarse via JavaScript
- **Estados de Clase**: `.connected` o `.disconnected` para cambiar apariencia

**Control JavaScript Requerido**:
- Actualizar texto con timestamp
- Alternar clases de estado según conectividad

---

### Representación Visual del Motor
```html
<div class="motor-container">
    <img src="https://i.imgur.com/D6MCRQB.png" 
         id="motorIcon" 
         class="motor" 
         alt="Motor" />
</div>
```

**Funcionalidad**:
- **ID**: `motorIcon` para control de estado via JavaScript
- **Estados CSS**: `.stopped` para motor detenido
- **Efectos Visuales**: Filtros CSS que cambian según el estado

---

### Sistema de Termómetro

#### Estructura Principal
```html
<div class="thermometer-container">
    <div class="thermometer">
        <div class="thermometer-bulb">
            <div class="mercury-bulb" id="mercuryBulb"></div>
        </div>
        <div class="thermometer-tube">
            <div class="mercury-fill" id="mercuryFill"></div>
        </div>
    </div>
</div>
```

**Componentes Animados**:
- `#mercuryBulb`: Relleno del bulbo circular
- `#mercuryFill`: Barra de relleno horizontal que representa la temperatura

#### Escala de Temperatura
```html
<div class="temp-scale">
    <div class="scale-mark" style="left: calc(6% + 0px);"><span>0°</span></div>
    <div class="scale-mark" style="left: calc(6% + 22%);"><span>15°</span></div>
    <div class="scale-mark" style="left: calc(6% + 44%);"><span>30°</span></div>
    <div class="scale-mark" style="left: calc(6% + 66%);"><span>45°</span></div>
    <div class="scale-mark" style="left: calc(6% + 88%);"><span>60°</span></div>
</div>
```

**Características de la Escala**:
- **Posicionamiento**: Calculado con `calc()` para distribución uniforme
- **Rango**: 0°C a 60°C con incrementos de 15°
- **Offset**: 6% desde el borde izquierdo para alineación con termómetro

---

### Display de Temperatura
```html
<div class="temp-value" id="tempValue">-- °C</div>
```

**Propósito**: 
- Mostrar valor numérico prominente de temperatura
- Placeholder `-- °C` hasta recibir datos reales
- ID `tempValue` para actualización via JavaScript

---

## Flujo de Interacción HTML-CSS-JS

### 1. Inicialización
```
HTML: loadingContainer (visible)
HTML: mainWidget (display: none)
↓
JavaScript detecta carga completa
↓
CSS: Oculta loadingContainer
CSS: Muestra mainWidget
```

### 2. Actualización de Datos
```
JavaScript recibe datos del sensor
↓
Actualiza #tempValue con nueva temperatura
Ajusta width de #mercuryFill (0-100%)
Actualiza #lastUpdate con timestamp
Aplica clases de estado (.connected/.disconnected)
```

### 3. Estados de Alerta
```
JavaScript detecta condición de alerta
↓
Aplica .visible y .blinking a iconos
Cambia clases de estado en elementos relevantes
```

### 4. Responsive Automático
```
CSS Media Queries ajustan automáticamente:
- Tamaños de elementos
- Espaciado
- Posicionamiento de iconos
- Dimensiones del termómetro
```

---

## Elementos Interactivos (Requerimientos JavaScript)

### IDs que Necesitan Control Programático
- `#loadingContainer` - Mostrar/ocultar
- `#mainWidget` - Mostrar/ocultar
- `#disconnectIcon` - Estados visible/blinking
- `#alertIcon` - Estados visible/blinking  
- `#lastUpdate` - Actualizar texto y clases de estado
- `#motorIcon` - Aplicar clase .stopped según estado
- `#mercuryBulb` - Sincronizar con mercuryFill
- `#mercuryFill` - Ajustar width según temperatura (0-100%)
- `#tempValue` - Mostrar valor numérico de temperatura

### Clases de Estado Dinámicas
- `.visible` - Para iconos de alerta
- `.blinking` - Para animaciones de advertencia
- `.connected` / `.disconnected` - Para indicadores de estado
- `.stopped` - Para motor detenido

---

## Uso Recomendado

1. **Inicialización**: La página muestra el spinner de carga
2. **Estados Dinámicos**: JavaScript debe agregar/quitar clases como `visible`, `connected`, `running`, etc.
3. **Actualización de Valores**: Modificar el ancho del `.mercury-fill` via JavaScript para reflejar temperatura
4. **Responsive**: Los breakpoints se manejan automáticamente via CSS

## Dependencias

- **JavaScript**: Requerido para funcionalidad dinámica
- **Iconos Externos**: 
  - Flaticon para icono de desconexión
  - Imgur para icono de alerta
  - Imgur para imagen del motor
- **Fuentes**: Segoe UI (sistema) como fallback