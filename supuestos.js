const baseDeSupuestos = [
    {
        "id": "oep_2020_2022_sup1",
        "titulo": "OEP 2020-2022 - Supuesto I (Desarrollo)",
        "contextoHTML": "<h3>Contexto</h3><p>Se va a desarrollar un sistema que permitirá a una persona (interesado) otorgar permiso a otra (representante) para que actúe en su nombre ante la Administración en un determinado trámite. El sistema contará con los siguientes módulos:</p><ul><li>Un frontal web (Punto de Acceso General) que recoge todos los trámites de la Administración y donde el interesado puede otorgar la representación.</li><li>Un proceso que tramita las peticiones de representación, envía notificaciones PUSH a los representantes y recaba los consentimientos producidos.</li><li>Un módulo de gestión para el personal funcionario de atención al público.</li></ul><p>Cuando el interesado pulse el botón Otorgar representación en un trámite, el sistema generará un enlace único con caducidad, que será enviado por notificación PUSH al representante.</p><p>En el momento en que el representante acceda al enlace tendrá disponible la acción Obtener PIN y deberá usar la aplicación móvil Cl@ve PIN para obtener un PIN válido.</p><p>El funcionario, en el módulo de gestión, podrá comparar el PIN generado para la operación con el que le ofrece el representante, permitiendo el trámite si estos coinciden.</p><p>Un interesado podrá solicitar representación para tantos trámites como considere y cada trámite podrá ser solicitado por un número cualquiera de interesados, pero una representación solo es válida para un trámite a la vez. Asimismo, cada representante podrá obtener permisos en cualquier número de trámites.</p>",
        "preguntas": [
            {
                "pregunta": "En el diagrama de clases la relación existente entre “Solicitud Representación” y “Trámite”, ¿qué multiplicidades serían compatibles con los requisitos planteados en el enunciado?",
                "opciones": ["a) '1' en el recuadro “SR>T” y '1' en el recuadro “T>SR”.", "b) '1' en el recuadro “SR>T” y '0..N' en el recuadro “T>SR”.", "c) '0..N' en el recuadro “SR>T” y '1' en el recuadro “T>SR”.", "d) '1..N' en el recuadro “SR>T” y '0..N' en el recuadro “T>SR”."],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En Java SE 17, ¿con qué visibilidad se deben generar los atributos de la clase Data Access Object Solicitudes si se quiere tener acceso directamente desde cualquier otro objeto, sin mediación de métodos?",
                "opciones": ["a) Se usará el modificador \"public\".", "b) Se usará el modificador \"protected\".", "c) No se usará ningún modificador.", "d) Se usará el modificador \"private\"."],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En Java SE 17, ¿cuál de los siguientes tipos de colección no admite duplicados?",
                "opciones": ["a) List", "b) Stack", "c) Collection", "d) Set"],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Para crear una tabla llamada Usuario, ¿qué sentencia SQL debemos ejecutar?",
                "opciones": ["a) ALTER TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));", "b) INSERT TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));", "c) CREATE TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));", "d) DROP TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Si fuese el motor de Base de Datos ORACLE, indique cuál de los siguientes es un lenguaje de procedimiento cuya sintaxis permite insertar sentencias SQL y se almacena compilado dentro de la base de datos:",
                "opciones": ["a) TRANSACT SQL", "b) PL/SQL", "c) FORTRAN", "d) COBOL"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha heredado una librería compilada que realiza la conexión a un importante servicio de comprobación de Cl@ve PIN, ¿qué patrón de diseño permite reutilizar este objeto?",
                "opciones": ["a) Adaptador (Adapter)", "b) Singleton", "c) Chain of responsibility (Cadena de responsabilidad)", "d) Iterador (Iterator)"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "La última versión del estándar de UML es:",
                "opciones": ["a) 2.5", "b) 2.4.1", "c) 2.4", "d) 3.0"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En UML un diagrama de componentes:",
                "opciones": ["a) Describe la estructura del sistema mostrando las clases del sistema, sus atributos y relaciones entre ellas.", "b) Describe cómo un sistema de software se divide en componentes y muestra las dependencias entre ellos.", "c) Sirve para modelar el hardware utilizado en las implementaciones del sistema, los componentes implementados en el hardware y las asociaciones entre componentes en un momento específico.", "d) Muestra una vista completa o parcial de la estructura de un sistema modelado en un momento específico."],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Qué framework se puede usar para aplicaciones de escritorio nativas .NET?",
                "opciones": ["a) .NET MAUI", "b) Blazor Hybrid", "c) JavaFX", "d) WebView"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Cuál es la normativa que define los requisitos de accesibilidad de los sitios web y aplicaciones móviles de los organismos del sector público?",
                "opciones": ["a) Orden Ministerial 1112/2018, de 7 de septiembre.", "b) Ley Orgánica 1112/2018, de 7 de septiembre.", "c) Ley 1112/2018, de 7 de septiembre.", "d) Real Decreto 1112/2018, de 7 de septiembre."],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En nuestra aplicación Java, ¿qué paquetes usaríamos para establecer la conexión a la base de datos de NOTIFICACION?",
                "opciones": ["a) java.database", "b) javax.naming y javax.sql", "c) javax.io y javax.servlet", "d) javax.servlet"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se quiere desarrollar un microservicio para que el personal funcionario pueda consultar el estado de una notificación enviada. ¿Qué especificación de la comunidad, alineada con Jakarta EE Core Profile, es la indicada para desarrollarlo?",
                "opciones": ["a) Jakarta Authentication", "b) Jakarta Batch", "c) Microprofile", "d) Jakarta Connectors"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En el equipo de desarrollo se ha decidido usar Selenium WebDriver para:",
                "opciones": ["a) Mejorar la accesibilidad de las páginas web facilitando audios a partir del texto.", "b) Automatizar la ejecución de pruebas en el navegador.", "c) Minimizar el tiempo de carga de la página web.", "d) Diseñar páginas web adaptables."],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Cuál es una herramienta de análisis de seguridad y calidad de código?",
                "opciones": ["a) SonarQube", "b) SonarCode", "c) SonarCuality", "d) SonarSrc"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Qué tecnología de las siguientes es adecuada para implementar la recepción de notificaciones nativas en los teléfonos inteligentes del representante y del interesado?",
                "opciones": ["a) WebView", "b) Mobile push", "c) CDMA", "d) Wi-Fi"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Cuál de los siguientes lenguajes de estilos emplearía si le piden modificar el color de un botón en el frontal web?",
                "opciones": ["a) XML", "b) SGML", "c) XSL", "d) CSS"],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "¿Cómo se conoce el conjunto de pautas, componentes y herramientas que respaldan las mejores prácticas de diseño de la interfaz de usuario, perteneciente a Google?",
                "opciones": ["a) WCAG 2.1", "b) WAI-ARIA", "c) Material Design", "d) Inclusive Design"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "¿A qué corresponde el ataque conocido por el acrónimo CSRF, que permite al atacante forzar al usuario a ejecutar acciones no deseadas en la aplicación web en la que está actualmente autenticado?",
                "opciones": ["a) Cross Site Request Forgery", "b) Cross Site Repeat Forgery", "c) Cross Site Reduction Forgery", "d) Cross Send Request Forgery"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Señale el software que permite automatizar la construcción y despliegue de un proyecto utilizando el concepto de pipelines:",
                "opciones": ["a) Jenkins", "b) RabbitMQ", "c) Apache Kafka", "d) Subversion"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué característica o atributo de seguridad de las cookies permite que el navegador solo envíe la cookie al servidor si ésta se originó en el mismo sitio web al que estamos intentando contactar?",
                "opciones": ["a) Domain", "b) SameSite", "c) Secure", "d) HttpOnly"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "(Pregunta de reserva) En PHP, señale qué variable de entorno se puede usar para almacenar datos del inicio de sesión de un usuario:",
                "opciones": ["a) $_SESSION", "b) $SESSION", "c) $_GLOBAL", "d) $GLOBAL"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué conjunto de herramientas de presentación y comportamiento ofrece componentes para trabajar en la parte dinámica del frontal web HTML?",
                "opciones": ["a) NumPy", "b) ActiveMQ", "c) Bootstrap", "d) TensorFlow"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué método estático usaría para convertir una cadena JSON en un valor u objeto javascript?",
                "opciones": ["a) JSON.parse()", "b) JSON.stringify()", "c) let obj = JSON", "d) let obj = New JSON"],
                "respuestaCorrecta": 0
            }
        ]
    },
    {
        "id": "oep_2020_2022_sup2",
        "titulo": "OEP 2020-2022 - Supuesto II (Redes y Sistemas)",
        "contextoHTML": "<h3>Contexto</h3><p>La Subdirección General de Informática del Organismo en el que recientemente Vd. ha tomado posesión y a través de su departamento de Sistemas, Comunicaciones y Seguridad, ha decidido acometer un cambio de diseño en la infraestructura de la red informática del departamento y Vd. debe colaborar en su implantación.</p><p>Se parte de la situación inicial donde hay una única red con el siguiente direccionamiento IP 10.20.30.0/24 donde residen:</p><ul><li>Los equipos informáticos de los usuarios</li><li>Las aplicaciones informáticas</li><li>Las Bases de Datos Oracle y MySql</li><li>La conexión a Internet del departamento</li></ul><p>Después de varios estudios se concluye que se debe realizar una segmentación de la red actual en cuatro subredes:</p><ul><li>Primera Subred para los PCs de usuario</li><li>Segunda Subred para las Bases de Datos</li><li>Tercera Subred para las Aplicaciones</li><li>Cuarta Subred para utilizarla como DMZ</li></ul><p>Se instalará una pareja de Firewalls o Cortafuegos formando un clúster donde se implementarán las reglas necesarias para las conectividades y encaminamientos entre Subredes.</p><p><em>Nota aclaratoria: los PCs de Usuario tienen sistema operativo Windows 10 y tanto los servidores para Aplicaciones, Base de Datos y DMZ tienen sistema operativo Linux RedHat RHEL7.4</em></p>",
        "preguntas": [
            {
                "pregunta": "En los PCs de los usuarios hay que purgar la memoria caché de la resolución DNS. ¿Cuál de los siguientes comandos habría que lanzar desde la consola de PowerShell?",
                "opciones": ["a) ipconfig /dnsflush", "b) ipconfig /flushdns", "c) ifconifg --erase dnscache", "d) ifconifg --clean dnscache"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En todos los PCs de usuario existe un usuario local llamado Infocentro utilizado para labores de mantenimiento. ¿Qué comando utilizaríamos desde la línea de comandos de Windows PowerShell para ver más información sobre este usuario?",
                "opciones": ["a) net user Infocentro", "b) netuser Infocentro", "c) info user Infocentro", "d) infouser Infocentro"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En el contexto de la administración del almacenamiento, ¿qué es el “Thin Provisioning”?",
                "opciones": [
                    "a) Es un mecanismo de despliegue de discos en red para clientes ligeros.",
                    "b) Es una tecnología que permite agregar discos físicos en caliente a las cabinas de la SAN.",
                    "c) Es un método de virtualización de almacenamiento que permite asignar el espacio de almacenamiento de una manera flexible bajo demanda.",
                    "d) Es un método por el que se asigna todo el espacio virtualizado disponible y se va a reduciendo (shrinking) a medida que el cliente lo descarta."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En uno de los servidores de la Subred de Aplicaciones del Modelo B se va a instalar un software de monitorización para Linux. Indique de entre los siguientes, cuál cumpliría esa función:",
                "opciones": ["a) Check_MK", "b) Reddis", "c) Jenkins", "d) Nagstamon"],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Qué máscara deberá tener la red 10.20.30.0 del modelo A para que haya cuatro subredes como en el Modelo B?",
                "opciones": ["a) 255.255.255.194", "b) 255.255.255.192", "c) 255.255.255.196", "d) 255.255.255.190"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Necesitamos borrar la caché de las direcciones físicas (Mac Address) en uno de los servidores que ofrece la aplicación de Intranet de la Subred de Aplicaciones del Modelo B. ¿Cuál de los siguientes comandos utilizaría?",
                "opciones": ["a) ip delete cache", "b) arp -d", "c) iptables -d mac", "d) ip flush"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Si tenemos en cuenta que la primera subred para PCs de Usuario del Modelo B es la 10.20.30.0/26, ¿cuáles son las direcciones de Red y Broadcast?",
                "opciones": [
                    "a) 10.20.30.0 y 10.20.30.255",
                    "b) 10.20.30.1 y 10.20.30.62",
                    "c) 10.20.30.0 y 10.20.30.63",
                    "d) 10.20.30.64 y 10.20.30.127"
                ],
                "respuestaCorrecta": 2
            }
        ]
    },
    {
        "id": "supuesto_redes_01",
        "titulo": "Supuesto Práctico 01: Subnetting y Arquitectura de Red Base",
        "contextoHTML": "<h3>Contexto</h3><p>El Ministerio de Cultura ha adquirido un nuevo edificio para albergar una delegación provincial. El responsable de sistemas de información ha recibido el rango de direccionamiento privado <strong>192.168.10.0/24</strong> para diseñar la red de la nueva sede.</p><p>Se han identificado los siguientes requisitos de segmentación para garantizar la seguridad y organizar los dominios de difusión:</p><ul><li><strong>Red A (VLAN 10 - Empleados):</strong> Necesita alojar a 60 equipos informáticos y portátiles.</li><li><strong>Red B (VLAN 20 - Servidores):</strong> Necesita alojar 25 servidores internos (Bases de Datos, Directorio Activo, Intranet).</li><li><strong>Red C (VLAN 30 - Invitados):</strong> Red Wi-Fi aislada para visitantes con un máximo de 10 dispositivos simultáneos.</li></ul><p>Toda la infraestructura convergerá en un router central de sede, que hará de <em>Default Gateway</em> para todas las subredes y que conectará mediante VPN IPsec con los servicios centrales de Madrid. Se va a implementar una arquitectura \"Router on a stick\" utilizando enlaces troncales (Trunk) bajo el estándar 802.1Q.</p>",
        "preguntas": [
            {
                "pregunta": "Teniendo en cuenta la necesidad de optimizar el direccionamiento IP de partida (192.168.10.0/24) mediante VLSM, ¿qué máscara de subred es la más restrictiva que se le podría aplicar a la Red A (VLAN 10 - Empleados) cumpliendo con el requisito de 60 equipos?",
                "opciones": ["a) /25", "b) /26", "c) /27", "d) /28"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Si se le asigna a la Red B (Servidores) el prefijo de red inmediatamente contiguo al bloque de la Red A, asumiendo que la Red A utiliza el prefijo óptimo calculado y comenzó en la dirección 192.168.10.0, ¿cuál será la dirección de red de la VLAN 20?",
                "opciones": ["a) 192.168.10.32", "b) 192.168.10.64", "c) 192.168.10.128", "d) 192.168.10.192"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "El estándar empleado para etiquetar las tramas Ethernet y que el tráfico de la VLAN 10 y VLAN 20 pueda viajar multiplexado por el mismo enlace físico hacia el router central se denomina:",
                "opciones": ["a) IEEE 802.1X", "b) IEEE 802.11ac", "c) IEEE 802.1Q", "d) IEEE 802.3af"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Cuando un ordenador de la VLAN 10 intenta acceder al servidor de la Intranet situado en la VLAN 20 por primera vez, sabiendo únicamente su dirección IP destino, ¿qué protocolo utilizará para averiguar la dirección MAC física y a quién le preguntará?",
                "opciones": [
                    "a) Utilizará DNS preguntando directamente al servidor de la Intranet.",
                    "b) Utilizará ARP preguntando por la MAC de su Default Gateway (el router).",
                    "c) Utilizará ARP preguntando por la MAC del servidor de la Intranet a través del switch local.",
                    "d) Utilizará DHCP para que le asigne dinámicamente la dirección MAC del servidor."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "El router de sede implementará una VPN IPsec para comunicarse con Madrid. ¿En qué nivel del modelo OSI opera el protocolo IPsec y, por tanto, garantiza la confidencialidad de la comunicación?",
                "opciones": ["a) En el Nivel 2 (Enlace de Datos).", "b) En el Nivel 3 (Red).", "c) En el Nivel 4 (Transporte).", "d) En el Nivel 7 (Aplicación)."],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha detectado un comportamiento anómalo en un servidor web de la Intranet. Para capturar los paquetes de red desde la interfaz eth0 del propio servidor en formato crudo para su posterior análisis con Wireshark, el administrador ejecutará en Linux:",
                "opciones": ["a) netstat -anp > captura.pcap", "b) ip link show eth0 -o captura.pcap", "c) tcpdump -i eth0 -w captura.pcap", "d) nmap -sS -p80 localhost"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Si en la red de Empleados (VLAN 10) un equipo se autoconfigura con la dirección IPv4 169.254.34.12, ¿qué situación está ocurriendo en la red?",
                "opciones": [
                    "a) Ha conseguido una dirección reservada por el administrador manualmente.",
                    "b) Existe un servidor DHCP falso que le ha otorgado una dirección pública externa (Rogue DHCP).",
                    "c) El equipo no ha podido contactar con ningún servidor DHCP y se ha asignado una dirección APIPA.",
                    "d) El protocolo ARP ha fallado y el equipo asume la dirección del router principal."
                ],
                "respuestaCorrecta": 2
            }
        ]
    },
    {
        "id": "oep_2018_sup1",
        "titulo": "OEP 2018 - Supuesto I (Desarrollo y Bases de Datos)",
        "contextoHTML": "<h3>Contexto</h3><p>La Subdirección General de Nuevas Tecnologías de un Ministerio va a abordar el desarrollo de un nuevo Sistema de Información para la gestión de subvenciones. El desarrollo se realizará con arquitectura web multicapa utilizando <strong>Java EE (Jakarta EE)</strong> en el lado del servidor y <strong>Angular</strong> en el lado del cliente (Frontend). La base de datos elegida es <strong>Oracle 19c</strong>.</p><p>Para el modelado de datos, se ha diseñado una tabla principal llamada <code>SUBVENCIONES</code> con los campos: <code>ID_SUBV (NUMBER, Primary Key)</code>, <code>TITULO (VARCHAR2)</code>, <code>CUANTIA (NUMBER)</code> y <code>FECHA_SOLICITUD (DATE)</code>.</p><p>Se requiere que el sistema sea accesible universalmente y cumpla con la normativa del Esquema Nacional de Seguridad (ENS).</p>",
        "preguntas": [
            {
                "pregunta": "Teniendo en cuenta que el desarrollo del frontend se realizará con Angular, ¿cuál de los siguientes lenguajes es el predeterminado y recomendado por Google para programar en este framework?",
                "opciones": ["a) JavaScript puro (ES5)", "b) TypeScript", "c) Dart", "d) Kotlin"],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En la base de datos Oracle 19c, se desea obtener el listado de las subvenciones cuya cuantía sea superior a 5000€, ordenadas desde la más reciente a la más antigua. ¿Cuál es la sentencia SQL correcta?",
                "opciones": [
                    "a) SELECT * FROM SUBVENCIONES WHERE CUANTIA > 5000 ORDER BY FECHA_SOLICITUD DESC;",
                    "b) SELECT * FROM SUBVENCIONES HAVING CUANTIA > 5000 ORDER BY FECHA_SOLICITUD ASC;",
                    "c) SELECT * FROM SUBVENCIONES WHERE CUANTIA > 5000 SORT BY FECHA_SOLICITUD DESC;",
                    "d) SELECT * FROM SUBVENCIONES WHERE CUANTIA > 5000 ORDER BY FECHA_SOLICITUD;"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Para cumplir con la arquitectura multicapa en Java, el equipo decide utilizar un patrón de diseño que se encarga de centralizar todas las peticiones entrantes desde el frontend web antes de enrutarlas a los controladores específicos. ¿Cómo se llama este patrón?",
                "opciones": ["a) Data Access Object (DAO)", "b) Singleton", "c) Front Controller", "d) Model-View-Controller (MVC)"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Durante el desarrollo del backend en Java, un programador quiere asegurarse de que una variable no cambie su valor una vez inicializada (hacerla constante). ¿Qué modificador debe utilizar en Java?",
                "opciones": ["a) const", "b) static", "c) final", "d) immutable"],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "El sistema debe ser accesible universalmente. ¿Qué estándar promovido por el W3C proporciona las pautas de accesibilidad para el contenido web que exige la normativa actual?",
                "opciones": ["a) ISO 27001", "b) WCAG (Web Content Accessibility Guidelines)", "c) WSDL", "d) UNE 139803"],
                "respuestaCorrecta": 1
            }
        ]
    }
];