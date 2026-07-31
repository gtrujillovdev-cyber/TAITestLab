# Prompt: Rediseño UI de TAI Prep en varias vistas

> Este documento es el mismo prompt registrado como tarea programada "taitest-rediseno-ui-multivistas" (ejecutable manualmente desde la sección "Scheduled"). Se guarda aquí también como referencia y por si prefieres pegarlo tú mismo en una sesión nueva.

Contexto: Gabriel está preparando la oposición al Cuerpo de Técnicos Auxiliares de Informático (TAI) de la AGE (y SAS, Junta de Andalucía, Diputación de Sevilla). Como herramienta de estudio tiene una app de test 100% cliente ("TAI Prep") en la carpeta del proyecto "OposicionTAI", ubicada en:
`OpoAGE/Temario_TAI_AGE/Herramientas/WebApp_Test/` (ficheros: index.html, style.css, app.js, preguntas.js, supuestos.js, README.md; es un repo git con remoto en GitHub: TAITestLab).

## Trabajo ya realizado (no repetir, construir sobre ello)

1. Se corrigió un bug crítico de datos: el banco de 165 preguntas mezclaba dos esquemas incompatibles y ~74% de las preguntas (procedentes de exámenes oficiales) nunca podían marcarse como correctas. Ahora todas las preguntas usan un esquema canónico único en `preguntas.js`: `{id, bloque, tema, origen, pregunta, opciones (texto plano), respuestaIndex, oposiciones}`. **No cambies este esquema de datos sin necesidad.**
2. Se añadieron funcionalidades: modo "Exámenes Oficiales", pantalla "Mi Progreso" (historial de tests en localStorage, clave `testHistory`), registro de fallos en localStorage (clave `failedQuestions`, indexado por `id` estable), preferencia de tema en localStorage (clave `themePref`).
3. Se hizo una pasada de CSS responsive/profesionalización (variables de espaciado/radio/sombra, breakpoints en 1024/768/420px, tipografía fluida con `clamp()`, `focus-visible`, `color-scheme`, `prefers-reduced-motion`).

## Auditoría de uso (UX) — hallazgos a abordar

- **Navegación en estrella sin vistas cruzadas**: hay 7 "screens" (menu, quiz, results, viewer, supuestos-menu, supuesto-active, historial) que se muestran/ocultan por JS (sin routing), pero todas las pantallas secundarias solo pueden volver al menú principal ("Volver al Menú Principal" aparece 4 veces) — no hay forma de saltar lateralmente entre secciones.
- **Menú sobrecargado**: 17 controles interactivos antes de hacer scroll (toggle modo estudio, 4 checkboxes de oposición, 8 tarjetas de test, selector de bloque + tema + botón), sin jerarquía entre "ajustes" y "acciones principales".
- **5 usos de `alert()`/`confirm()` nativos** (líneas ~193, ~244, ~263, ~559, ~689 de app.js) que rompen la estética glassmorphism y no son personalizables.
- **Sin autoguardado de examen en curso**: si se recarga la pestaña a mitad del Simulacro Real (80 preguntas / 120 min), se pierde todo sin aviso ni recuperación.
- **Sin atajos de teclado**: solo se responde con clic/touch.
- **Visor de 165 preguntas sin buscador ni filtros** por bloque/tema/origen.
- **Accesibilidad ARIA casi inexistente** (1 solo atributo en todo index.html).
- **app.js monolítico** (691 líneas, 29 funciones) mezclando estado, DOM y lógica de negocio.
- **Historial solo en lista**, sin gráfico de evolución ni desglose por bloque.
- **Sin onboarding** para usuarios nuevos.

## Objetivo

Rediseñar la UI de TAI Prep como una aplicación de varias vistas, con arquitectura de información clara, navegación persistente entre secciones, bien escalada (responsive de móvil a escritorio, código organizado para añadir vistas futuras sin reescribir todo). Actuar como diseñador de producto + ingeniero frontend senior.

## Propuesta de vistas (ajustable si se justifica)

1. **Inicio/Dashboard**: resumen rápido (nota media, mejor nota, fallos pendientes, racha) + accesos directos a los modos más usados.
2. **Configuración**: modo estudio/examen, oposiciones, tema visual.
3. **Elegir Test**: los modos (corto, global, simulacro, oficiales, por tema/bloque, repaso de fallos).
4. **Quiz/Examen**: con autoguardado de progreso y atajos de teclado.
5. **Resultados**: valorar desglose por bloque.
6. **Banco de Preguntas**: con buscador y filtros (bloque/tema/origen).
7. **Supuestos Prácticos**: ya existe.
8. **Mi Progreso**: con visualización de evolución y desglose por bloque.
9. *(Opcional)* Ayuda/Onboarding.

Incluir navegación persistente (sidebar en escritorio / barra inferior o hamburguesa en móvil), salvo durante el quiz activo (que debe seguir siendo un flujo enfocado, sin distracciones de navegación general).

## Requisitos funcionales obligatorios

- Sustituir todos los `alert()`/`confirm()` por componentes propios (modal/toast) coherentes con el resto de la UI.
- Autoguardar el examen en curso en localStorage y ofrecer recuperarlo tras recarga; limpiar al terminar con normalidad.
- Atajos de teclado en el quiz: 1-4/A-D para opciones, Enter/Espacio para avanzar.
- Buscador + filtros (bloque, tema, origen) en el Banco de Preguntas.
- Mejorar accesibilidad: roles, aria-label, gestión de foco al cambiar de vista, navegación completa por teclado, contraste AA.
- No perder ni romper los datos ya guardados por usuarios actuales: mantener compatibilidad con las claves de localStorage `failedQuestions`, `testHistory`, `themePref` (o migrarlas de forma explícita y documentada sin pérdida de datos).

## Requisitos no funcionales

- Responsive real de 320px a escritorio ancho, sobre el sistema de variables ya introducido en `style.css`.
- 100% cliente, sin backend, desplegable abriendo `index.html` o vía GitHub Pages (sin build obligatorio, o si se introduce, documentarlo muy bien).
- **Stack técnico abierto**: mantener Vanilla JS organizado en módulos ES por vista, o proponer una alternativa ligera si aporta valor real para gestionar varias vistas con estado compartido — justificar la elección en el README.
- Mantener el look glassmorphism/gradiente azul-morado actual como base visual, evolucionándolo donde la navegación persistente lo requiera.

## Proceso de trabajo esperado

1. Leer primero el código actual completo antes de escribir nada.
2. Documentar por escrito la arquitectura de información y de código elegida antes de implementar.
3. Implementar de forma incremental verificando en cada paso que no se rompe lo existente (usar Node con un stub de DOM si no hay navegador disponible, como en sesiones anteriores): cada modo de test, flujo completo de quiz, visor con buscador/filtros, historial, un supuesto completo, y recuperación de examen tras simular recarga.
4. Guardar los ficheros finales dentro de `OpoAGE/Temario_TAI_AGE/Herramientas/WebApp_Test/` en la carpeta real del proyecto (no solo en un sandbox temporal).
5. Actualizar `README.md` si cambia algo relevante para añadir preguntas o vistas en el futuro.

## Al terminar

Incluir un resumen conciso: arquitectura de vistas y decisión de stack tomadas (y por qué), qué se implementó, y qué queda pendiente o sería buena siguiente iteración.
