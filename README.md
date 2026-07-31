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
    *   La pantalla "Mi Progreso" muestra tu nota media, tu mejor resultado, un **gráfico de evolución** y el desglose de tu rendimiento por bloque.
*   **Sistema de Puntuación Realista INAP:**
    *   Al finalizar el test, se calcula la nota sobre 10 teniendo en cuenta que **las respuestas erróneas descuentan 1/3** del valor de una correcta (-0.33), tal y como hace el INAP en la convocatoria oficial.
*   **Tema Claro/Oscuro/Sistema:**
    *   Interfaz *Glassmorphism*, con selector de Modo Día ☀️, Modo Noche 🌙 y Modo Sistema 🖥️.
*   **Autoguardado de exámenes:**
    *   Si recargas la página o se cierra la pestaña a mitad de un test, al volver a abrir la app se recupera automáticamente donde lo dejaste.
*   **Atajos de teclado durante el test:** `1`-`4` / `A`-`D` para elegir una opción, `Enter`/`Espacio` para avanzar, `Esc` para salir (con confirmación).
*   **100% Client-Side:**
    *   Sin bases de datos externas, sin login. Todo funciona en tu navegador mediante HTML, CSS y JavaScript. La app es resistente a un `localStorage` corrupto o inaccesible (no se rompe, simplemente no persiste datos).

## 🧭 Arquitectura de la aplicación (rediseño multivista)

TAI Prep es una aplicación de varias vistas con **navegación persistente**
(barra lateral en escritorio, barra inferior + hoja "Más" en móvil), en
lugar de un único menú central del que solo se podía "volver atrás":

| Vista | Ruta | Contenido |
|---|---|---|
| Inicio | `#/dashboard` | Resumen (nota media, mejor nota, fallos pendientes, racha de estudio) + accesos rápidos + aviso de examen a medias. |
| Configuración | `#/settings` | Modo estudio/examen, oposiciones seleccionadas, tema claro/oscuro/sistema. |
| Elegir Test | `#/choose-test` | Todos los modos de test (corto, global, simulacro, oficiales, por tema, repaso de fallos). |
| Quiz/Examen | `#/quiz` | Flujo enfocado (la navegación se colapsa a un botón "Salir"); autoguardado + atajos de teclado. |
| Resultados | `#/results` | Nota, aciertos/fallos, tiempo, desglose por bloque, repaso de fallos del intento. |
| Banco de Preguntas | `#/bank` | Buscador de texto + filtros por bloque, tema y origen (oficial/temario). |
| Supuestos Prácticos | `#/supuestos`, `#/supuesto/:id` | Selección y resolución de casos prácticos. |
| Mi Progreso | `#/progress` | Historial, gráfico de evolución y desglose por bloque. |
| Ayuda | `#/help` | Guía rápida + atajos de teclado; se muestra automáticamente en la primera visita. |

Quiz y Resultados no son ítems de navegación de primer nivel: son pasos de
un flujo que se inicia siempre con una acción explícita ("Empezar test"),
no un destino al que se navega libremente a mitad de examen.

### Decisión de stack: Vanilla JS sin build, organizado por responsabilidad

Se descartó deliberadamente usar módulos ES nativos (`<script
type="module">`): los navegadores bloquean `import`/`export` bajo el
protocolo `file://` por CORS, lo que habría roto el requisito de poder
abrir `index.html` con doble clic. En su lugar, cada fichero de `js/` es
un `<script>` clásico envuelto en una IIFE que expone su API pública
colgada de un único namespace global `window.TAI`, cargado en un orden de
dependencias fijo desde `index.html`. Resultado: misma separación de
responsabilidades que con módulos ES, **cero paso de build**, funciona
igual con doble clic, `file://`, servidor estático o GitHub Pages.

```
js/
  store.js        Persistencia en localStorage (claves, autoguardado).
  utils.js        Helpers puros: formatTime, shuffle, cálculo de nota,
                   etiquetas de bloque, desglose por bloque, racha...
  state.js        Estado compartido en memoria (ajustes, examen activo).
  theme.js        Tema claro/oscuro/sistema.
  router.js       Router hash-based (#/vista) + registro de vistas.
  ui/
    toast.js      Notificaciones no bloqueantes (sustituye a alert()).
    modal.js      Diálogos de confirmación/información (sustituye a
                   confirm() y a los alert() restantes).
    nav.js        Navegación persistente (sidebar / bottom bar+hoja),
                   con modo "enfocado" durante el quiz/supuesto activo.
  views/
    dashboard.js, settings.js, chooseTest.js, quiz.js, results.js,
    bank.js, supuestos.js, progress.js, help.js
    — cada vista expone render(container, params) y, si necesita
      limpieza (listeners, temporizadores...), onLeave().
  main.js         Arranque: registra las vistas en el router, inicializa
                   tema y navegación, comprueba si hay un examen que
                   ofrecer recuperar y muestra el onboarding la primera
                   vez.
```

`preguntas.js` y `supuestos.js` se mantienen **sin cambios** como scripts
clásicos que declaran `baseDeDatos` / `baseDeSupuestos` como identificadores
globales (visibles para el resto de scripts, igual que en la versión
anterior); el resto del código los usa como identificador global directo
(no como `window.baseDeDatos`), tal y como corresponde a scripts clásicos.

## 🗄 Persistencia (localStorage)

Se mantienen exactamente las mismas claves y formato que la versión
anterior (no se pierden datos de usuarios existentes):

*   `failedQuestions` — array JSON de preguntas falladas, indexado por `id`.
*   `testHistory` — array JSON de intentos (ahora cada intento nuevo
    incluye además un campo `bloques` con el desglose por bloque; los
    intentos antiguos sin ese campo se siguen leyendo sin problema).
*   `themePref` — **string plano** (no JSON), como ya lo guardaba la app.

Claves **nuevas y aditivas** (no interfieren con las anteriores):

*   `appSettings` — JSON con `{ learningMode, selectedOpos }`, para que
    Configuración recuerde tus preferencias entre sesiones (antes se
    reiniciaban en cada carga).
*   `examInProgress` — autoguardado del examen en curso (progreso,
    respuestas, tiempo). Se borra al terminar el test con normalidad.
*   `onboardingSeen` — evita repetir el aviso de bienvenida.

## 🛠 Instalación y Configuración

No necesitas instalar dependencias (ni `npm`, ni Node.js) para usar la app.

*   **Abrir directamente:** haz doble clic en `index.html`. Funciona sin
    servidor porque todos los scripts son clásicos (sin `type="module"`).
*   **Servidor estático (opcional, solo para desarrollo):**
    `python3 -m http.server` o `npx serve` en esta carpeta.

### Despliegue en GitHub Pages
1. Ve a los **Settings** del repositorio.
2. Navega a **Pages** en la barra lateral.
3. En la sección "Build and deployment", selecciona la rama `main`.
4. En unos minutos tu app estará disponible públicamente. No hay paso de
   compilación: se sirve tal cual.

## 🧪 Pruebas (smoke tests con Node, sin navegador)

`test/domstub.js` implementa un DOM mínimo (elementos, `classList`,
`querySelector`/`querySelectorAll`, eventos, `localStorage`, `location.hash`)
y `test/smoke.js` carga los ficheros reales de la app con el módulo `vm`
de Node (mismo orden que `index.html`) para ejercitar, sin navegador ni
dependencias externas: cada modo de test, el flujo completo de un quiz
(incluidos los atajos de teclado), la recuperación de un examen tras
simular una recarga a mitad de test, el buscador/filtros del Banco de
Preguntas, un Supuesto Práctico completo y el historial. Ejecutar con:

```bash
node test/smoke.js
```

## 🗂 Estructura de Bloques (Temario TAI AGE)

1.  **Bloque I:** Organización del Estado y Administración electrónica
2.  **Bloque II:** Tecnología básica
3.  **Bloque III:** Desarrollo de sistemas
4.  **Bloque IV:** Sistemas y comunicaciones

## 📝 Esquema de datos de `preguntas.js`

Todas las preguntas —tanto las de elaboración propia sobre el temario como las procedentes de exámenes oficiales— comparten **un único esquema canónico**. Esto es importante: versiones anteriores del banco de preguntas mezclaban dos formatos distintos e incompatibles entre sí, lo que provocaba que buena parte de las preguntas de examen oficial nunca pudieran marcarse como correctas. Usa siempre este formato al añadir preguntas nuevas:

```javascript
{
    "id": 268,                     // identificador único y estable (siguiente número libre)
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

Simplemente añade nuevas preguntas siguiendo esta estructura y la aplicación las detectará e integrará automáticamente en los filtros, el Banco de Preguntas y los test aleatorios.

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

## ➕ Cómo añadir una vista nueva

1. Crea `js/views/miVista.js` siguiendo el patrón de las vistas existentes:
   una IIFE que registra `TAI.views.miVista = { render(container) {...} }`
   (y `onLeave()` si necesitas limpiar listeners/temporizadores).
2. Añade `<script src="js/views/miVista.js"></script>` en `index.html`,
   **antes** de `js/main.js`.
3. En `js/main.js`, registra la vista: `router.register('mi-vista',
   TAI.views.miVista);`.
4. Si debe aparecer en la navegación persistente, añádela al array
   `ITEMS` de `js/ui/nav.js`.

## 🕰 Historial de esta versión

Esta versión reorganiza la interfaz en varias vistas con navegación
persistente (antes era un único menú con 17 controles y pantallas que solo
podían volver al menú principal), sustituye los `alert()`/`confirm()`
nativos por un modal y un sistema de toasts propios, añade autoguardado
del examen en curso, atajos de teclado, buscador/filtros en el Banco de
Preguntas, un gráfico de evolución en Mi Progreso y mejoras de
accesibilidad (roles ARIA, gestión de foco al cambiar de vista, contraste).
El esquema de datos de `preguntas.js` no ha cambiado.

Se han añadido 25 preguntas oficiales más de la OEP 2020-2022 (AGE) —las
que faltaban de la Primera Parte y de las preguntas de reserva del
`Cuestionario_TAI-L_OEP2020-2021-2022.pdf` ya incluido en
`Examenes_Oficiales_OEP/OEP_2020`—, elevando el banco a 190 preguntas.

Posteriormente se ha incorporado el cuestionario completo de la **OPEP
2025 del SAS** (Técnico/a Especialista en Informática, turno libre): 75
preguntas del cuestionario teórico-práctico + 3 de reserva, con
`"oposiciones":["SAS"]`, elevando el banco a **268 preguntas**. También se
ha añadido el **Supuesto I (Desarrollo)** de la OEP 2020-2022 (AGE) —19
preguntas + 4 de reserva sobre un sistema de representación ante la
Administración con Java/Jakarta EE, SQL y UML— a `supuestos.js`, que pasa
a tener **4 supuestos prácticos**.

Quedan pendientes de incorporar (los PDF no se pudieron descargar de forma
automática; hace falta descargarlos manualmente, ver
`Examenes_Oficiales_OEP/*/DESCARGA_MANUAL.md`): OEP 2019 (AGE) y OEP
2023-2024 (AGE, modelos A y B). El cuestionario de la OPEP 2025 del SAS
ya está incorporado en su totalidad (turno libre). El cuestionario del
examen TAI 2018 (`Examenes_Oficiales/2018/Cuestionario_TAI_2018.pdf`) se
localizó, pero es un PDF escaneado sin capa de texto: la extracción
automática (`pdftotext`, `pypdf`) devuelve vacío y el entorno no dispone
de los paquetes de idioma de Tesseract (`tesseract-ocr-spa`) ni de acceso
de administrador para instalarlos, por lo que el OCR queda pendiente de
hacerse manualmente.

---
*Mucha suerte y a por la plaza.* 🎯
