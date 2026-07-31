# TAI Prep - Simulador de Examen (AGE) 💻

**TAI Prep** es una plataforma de test interactiva, diseñada específicamente para ayudar a los opositores del **Cuerpo de Técnicos Auxiliares de Informática (TAI)** de la Administración General del Estado (AGE) —y de SAS, Junta de Andalucía y Diputación de Sevilla— a preparar su examen.

## 🚀 Características Principales

*   **Modalidades de Test Personalizadas:**
    *   **Test Corto (10 preguntas):** Ideal para repasos rápidos desde el móvil en el transporte público.
    *   **Test Global (30 preguntas):** Un reto medio mezclando todos los bloques.
    *   **Simulacro Real (80 preguntas):** Simula las condiciones del examen real. Activa un cronómetro de 120 minutos y fuerza el modo examen.
    *   **Exámenes Oficiales:** Test compuesto exclusivamente por preguntas reales extraídas de convocatorias oficiales (OEP) ya celebradas.
    *   **Filtro por Temas:** Permite seleccionar exactamente de qué Bloque y de qué Tema concreto quieres examinarte.
*   **Supuestos Prácticos:** Casos prácticos reales (estilo Parte II del examen INAP), con contexto y preguntas asociadas.
*   **Modo Estudio (Corrección in-situ):**
    *   Si activas el Modo Estudio, la aplicación te avisará al instante si has acertado o fallado tras cada clic, iluminando la respuesta correcta en verde y la tuya en rojo (si fallaste).
    *   Si lo desactivas (Modo Examen), pasarás a la siguiente pregunta sin saber el resultado hasta el final.
*   **Registro de Fallos Inteligente (Local Storage):**
    *   La app guarda en la memoria local de tu navegador aquellas preguntas que fallas (identificadas por un `id` estable, no por el texto).
    *   Dispones de un botón especial **"Repaso de Fallos"** que te genera un test exclusivamente con esas preguntas para afianzar conceptos. Al acertarlas, se eliminan del registro.
*   **Mi Progreso (Historial):**
    *   Cada test completado (incluidos los supuestos) queda registrado con fecha, modo, nota y aciertos/fallos.
    *   La pantalla "Mi Progreso" muestra tu nota media, tu mejor resultado y el listado de tus últimos intentos, para que puedas ver tu evolución.
*   **Sistema de Puntuación Realista INAP:**
    *   Al finalizar el test, se calcula la nota sobre 10 teniendo en cuenta que **las respuestas erróneas descuentan 1/3** del valor de una correcta (-0.33), tal y como hace el INAP en la convocatoria oficial.
*   **Tema Claro/Oscuro/Sistema:**
    *   Interfaz *Glassmorphism*, con selector de Modo Día ☀️, Modo Noche 🌙 y Modo Sistema 🖥️.
*   **100% Client-Side:**
    *   Sin bases de datos externas, sin login. Todo funciona en tu navegador mediante HTML, CSS y Vanilla JavaScript. La app es resistente a un `localStorage` corrupto o inaccesible (no se rompe, simplemente no persiste datos).

## 🗂 Estructura de Bloques (Temario TAI AGE)

1.  **Bloque I:** Organización del Estado y Administración electrónica
2.  **Bloque II:** Tecnología básica
3.  **Bloque III:** Desarrollo de sistemas
4.  **Bloque IV:** Sistemas y comunicaciones

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

## 📝 Esquema de datos de `preguntas.js`

Todas las preguntas —tanto las de elaboración propia sobre el temario como las procedentes de exámenes oficiales— comparten **un único esquema canónico**. Esto es importante: versiones anteriores del banco de preguntas mezclaban dos formatos distintos e incompatibles entre sí, lo que provocaba que buena parte de las preguntas de examen oficial nunca pudieran marcarse como correctas. Usa siempre este formato al añadir preguntas nuevas:

```javascript
{
    "id": 165,                     // identificador único y estable (siguiente número libre)
    "bloque": "IV",                // "I" | "II" | "III" | "IV"
    "tema": 7,                     // número de tema dentro del bloque, o null si no aplica
                                    // a un único tema (p.ej. preguntas de examen oficial)
    "origen": "temario",           // "temario" (elaboración propia) | "oficial" (examen real)
    "pregunta": "En el modelo OSI, ¿qué capa se encarga del enrutamiento de paquetes?",
    "opciones": ["Capa de Enlace", "Capa de Red", "Capa de Transporte", "Capa de Sesión"],
    "respuestaIndex": 1,           // índice (0-based) de la opción correcta -> "Capa de Red"
    "oposiciones": ["AGE"]         // administraciones a las que aplica, o null si es genérica
                                    // (valores válidos: "AGE", "SAS", "Junta de Andalucía",
                                    // "Diputación de Sevilla")
}
```

**Importante:** las opciones se escriben en texto plano, **sin** prefijo `"a) "`, `"b) "`, etc. La aplicación genera las letras (A/B/C/D) automáticamente al mostrarlas, y las baraja en cada intento; lo que determina la respuesta correcta es siempre `respuestaIndex`, no el orden en que se muestran.

Simplemente añade nuevas preguntas siguiendo esta estructura y la aplicación las detectará e integrará automáticamente en los filtros y test aleatorios.

## 📝 Cómo añadir Supuestos Prácticos

Los supuestos viven en `supuestos.js` y usan su propio esquema (opciones ya prefijadas `"a) "..."d) "` + `respuestaCorrecta` como índice), ya que su orden no se baraja:

```javascript
{
    "id": "identificador_unico",
    "titulo": "Título descriptivo del caso práctico",
    "contextoHTML": "<h3>Contexto</h3><p>...</p>",
    "preguntas": [
        {
            "pregunta": "Enunciado de la pregunta",
            "opciones": ["a) Opción 1", "b) Opción 2", "c) Opción 3", "d) Opción 4"],
            "respuestaCorrecta": 0
        }
    ]
}
```

---
*Mucha suerte y a por la plaza.* 🎯
