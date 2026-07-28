# TAI Prep - Simulador de Examen (AGE) 💻

**TAI Prep** es una plataforma de test interactiva y moderna, diseñada específicamente para ayudar a los opositores del **Cuerpo de Técnicos Auxiliares de Informática (TAI)** de la Administración General del Estado (AGE) a preparar su examen, en base al temario oficial de la OEP 2026.

## 🚀 Características Principales

*   **Modalidades de Test Personalizadas:**
    *   **Test Corto (10 preguntas):** Ideal para repasos rápidos desde el móvil en el transporte público.
    *   **Test Global (30 preguntas):** Un reto medio mezclando todos los bloques.
    *   **Simulacro Real (80 preguntas):** Simula las condiciones del examen real. Activa un cronómetro de 120 minutos y fuerza el modo examen.
    *   **Filtro por Temas:** Permite seleccionar exactamente de qué Bloque y de qué Tema concreto quieres examinarte.
*   **Modo Estudio (Corrección in-situ):** 
    *   Si activas el Modo Estudio, la aplicación te avisará al instante si has acertado o fallado tras cada clic, iluminando la respuesta correcta en verde y la tuya en rojo (si fallaste).
    *   Si lo desactivas (Modo Examen), pasarás a la siguiente pregunta sin saber el resultado hasta el final.
*   **Registro de Fallos Inteligente (Local Storage):**
    *   La app guarda en la memoria local de tu navegador aquellas preguntas que fallas.
    *   Dispones de un botón especial **"Repaso de Fallos"** que te genera un test exclusivamente con esas preguntas para afianzar conceptos. Al acertarlas, se eliminan del registro.
*   **Sistema de Puntuación Realista INAP:**
    *   Al finalizar el test, se calcula la nota sobre 10 teniendo en cuenta que **las respuestas erróneas descuentan 1/3** del valor de una correcta (-0.33), tal y como hace el INAP en la convocatoria oficial.
*   **Tema Claro/Oscuro/Sistema:**
    *   Interfaz *Glassmorphism* super cuidada, con selector de Modo Día ☀️, Modo Noche 🌙 y Modo Sistema 🖥️ para cuidar la vista en tus largas jornadas de estudio.
*   **100% Client-Side:**
    *   Sin bases de datos externas, sin login. Todo funciona en tu navegador mediante HTML, CSS y Vanilla JavaScript.

## 🗂 Estructura de Bloques (Temario TAI AGE)

La base de datos de preguntas está estrictamente categorizada según el temario oficial:
1.  **Bloque I:** Organización del Estado y Administración electrónica (9 temas)
2.  **Bloque II:** Tecnología básica (5 temas)
3.  **Bloque III:** Desarrollo de sistemas (9 temas)
4.  **Bloque IV:** Sistemas y comunicaciones (10 temas)

## 🛠 Instalación y Configuración

Dado que el proyecto está hecho con Vanilla JS, no necesitas instalar dependencias (ni `npm`, ni Node.js).
Para probarlo en local, simplemente:
1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador favorito.

### Despliegue en GitHub Pages
Si deseas desplegarlo públicamente de manera gratuita:
1. Ve a los **Settings** del repositorio.
2. Navega a **Pages** en la barra lateral.
3. En la sección "Build and deployment", selecciona la rama `main`.
4. En unos minutos tu app estará disponible públicamente.

## 📝 Cómo añadir preguntas

Para seguir alimentando la base de datos de la plataforma, abre el archivo `preguntas.js`.
Verás un array de objetos con este formato:
```javascript
{
    "bloque": "IV",
    "tema": 7,
    "pregunta": "En el modelo OSI, ¿qué capa se encarga del enrutamiento de paquetes?",
    "opciones": ["a) Capa de Enlace", "b) Capa de Red", "c) Capa de Transporte", "d) Capa de Sesión"],
    "respuesta": "b"
}
```
Simplemente añade nuevas preguntas siguiendo esta misma estructura y la aplicación las detectará e integrará automáticamente en los filtros y test aleatorios.

---
*Mucha suerte y a por la plaza.* 🎯
