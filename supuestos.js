const baseDeSupuestos = [
    {
        "id": "oep_2020_2022_sup1",
        "titulo": "OEP 2020-2022 - Supuesto I (Desarrollo)",
        "contextoHTML": "<h3>Contexto</h3><p>Se va a desarrollar un sistema que permitirá a una persona (interesado) otorgar permiso a otra (representante) para que actúe en su nombre ante la Administración en un determinado trámite. El sistema contará con los siguientes módulos:</p><ul><li>Un frontal web (Punto de Acceso General) que recoge todos los trámites de la Administración y donde el interesado puede otorgar la representación.</li><li>Un proceso que tramita las peticiones de representación, envía notificaciones PUSH a los representantes y recaba los consentimientos producidos.</li><li>Un módulo de gestión para el personal funcionario de atención al público.</li></ul><p>Cuando el interesado pulse el botón Otorgar representación en un trámite, el sistema generará un enlace único con caducidad, que será enviado por notificación PUSH al representante.</p><p>En el momento en que el representante acceda al enlace tendrá disponible la acción Obtener PIN y deberá usar la aplicación móvil Cl@ve PIN para obtener un PIN válido.</p><p>El funcionario, en el módulo de gestión, podrá comparar el PIN generado para la operación con el que le ofrece el representante, permitiendo el trámite si estos coinciden.</p><p>Un interesado podrá solicitar representación para tantos trámites como considere y cada trámite podrá ser solicitado por un número cualquiera de interesados, pero una representación solo es válida para un trámite a la vez. Asimismo, cada representante podrá obtener permisos en cualquier número de trámites.</p><div class=\"supuesto-diagrama\"><img src=\"assets/diagramas/oep2020-2022_sup1_diagrama.png\" alt=\"Diagrama de clases: Solicitud Representación, Trámite, Notificación\" style=\"max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px;margin:0.5rem 0;\" /><p class=\"diagrama-caption\"><em>Diagrama de clases del sistema de representación</em></p></div>",
        "preguntas": [
            {
                "pregunta": "En el diagrama de clases la relación existente entre “Solicitud Representación” y “Trámite”, ¿qué multiplicidades serían compatibles con los requisitos planteados en el enunciado?",
                "opciones": [
                    "a) '1' en el recuadro “SR>T” y '1' en el recuadro “T>SR”.",
                    "b) '1' en el recuadro “SR>T” y '0..N' en el recuadro “T>SR”.",
                    "c) '0..N' en el recuadro “SR>T” y '1' en el recuadro “T>SR”.",
                    "d) '1..N' en el recuadro “SR>T” y '0..N' en el recuadro “T>SR”."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En Java SE 17, ¿con qué visibilidad se deben generar los atributos de la clase Data Access Object Solicitudes si se quiere tener acceso directamente desde cualquier otro objeto, sin mediación de métodos?",
                "opciones": [
                    "a) Se usará el modificador \"public\".",
                    "b) Se usará el modificador \"protected\".",
                    "c) No se usará ningún modificador.",
                    "d) Se usará el modificador \"private\"."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En Java SE 17, ¿cuál de los siguientes tipos de colección no admite duplicados?",
                "opciones": [
                    "a) List",
                    "b) Stack",
                    "c) Collection",
                    "d) Set"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Para crear una tabla llamada Usuario, ¿qué sentencia SQL debemos ejecutar?",
                "opciones": [
                    "a) ALTER TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
                    "b) INSERT TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
                    "c) CREATE TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
                    "d) DROP TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Si fuese el motor de Base de Datos ORACLE, indique cuál de los siguientes es un lenguaje de procedimiento cuya sintaxis permite insertar sentencias SQL y se almacena compilado dentro de la base de datos:",
                "opciones": [
                    "a) TRANSACT SQL",
                    "b) PL/SQL",
                    "c) FORTRAN",
                    "d) COBOL"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha heredado una librería compilada que realiza la conexión a un importante servicio de comprobación de Cl@ve PIN, ¿qué patrón de diseño permite reutilizar este objeto?",
                "opciones": [
                    "a) Adaptador (Adapter)",
                    "b) Singleton",
                    "c) Chain of responsibility (Cadena de responsabilidad)",
                    "d) Iterador (Iterator)"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "La última versión del estándar de UML es:",
                "opciones": [
                    "a) 2.5",
                    "b) 2.4.1",
                    "c) 2.4",
                    "d) 3.0"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En UML un diagrama de componentes:",
                "opciones": [
                    "a) Describe la estructura del sistema mostrando las clases del sistema, sus atributos y relaciones entre ellas.",
                    "b) Describe cómo un sistema de software se divide en componentes y muestra las dependencias entre ellos.",
                    "c) Sirve para modelar el hardware utilizado en las implementaciones del sistema, los componentes implementados en el hardware y las asociaciones entre componentes en un momento específico.",
                    "d) Muestra una vista completa o parcial de la estructura de un sistema modelado en un momento específico."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Qué framework se puede usar para aplicaciones de escritorio nativas .NET?",
                "opciones": [
                    "a) .NET MAUI",
                    "b) Blazor Hybrid",
                    "c) JavaFX",
                    "d) WebView"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Cuál es la normativa que define los requisitos de accesibilidad de los sitios web y aplicaciones móviles de los organismos del sector público?",
                "opciones": [
                    "a) Orden Ministerial 1112/2018, de 7 de septiembre.",
                    "b) Ley Orgánica 1112/2018, de 7 de septiembre.",
                    "c) Ley 1112/2018, de 7 de septiembre.",
                    "d) Real Decreto 1112/2018, de 7 de septiembre."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En nuestra aplicación Java, ¿qué paquetes usaríamos para establecer la conexión a la base de datos de NOTIFICACION?",
                "opciones": [
                    "a) java.database",
                    "b) javax.naming y javax.sql",
                    "c) javax.io y javax.servlet",
                    "d) javax.servlet"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se quiere desarrollar un microservicio para que el personal funcionario pueda consultar el estado de una notificación enviada. ¿Qué especificación de la comunidad, alineada con Jakarta EE Core Profile, es la indicada para desarrollarlo?",
                "opciones": [
                    "a) Jakarta Authentication",
                    "b) Jakarta Batch",
                    "c) Microprofile",
                    "d) Jakarta Connectors"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En el equipo de desarrollo se ha decidido usar Selenium WebDriver para:",
                "opciones": [
                    "a) Mejorar la accesibilidad de las páginas web facilitando audios a partir del texto.",
                    "b) Automatizar la ejecución de pruebas en el navegador.",
                    "c) Minimizar el tiempo de carga de la página web.",
                    "d) Diseñar páginas web adaptables."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Cuál es una herramienta de análisis de seguridad y calidad de código?",
                "opciones": [
                    "a) SonarQube",
                    "b) SonarCode",
                    "c) SonarCuality",
                    "d) SonarSrc"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Qué tecnología de las siguientes es adecuada para implementar la recepción de notificaciones nativas en los teléfonos inteligentes del representante y del interesado?",
                "opciones": [
                    "a) WebView",
                    "b) Mobile push",
                    "c) CDMA",
                    "d) Wi-Fi"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "¿Cuál de los siguientes lenguajes de estilos emplearía si le piden modificar el color de un botón en el frontal web?",
                "opciones": [
                    "a) XML",
                    "b) SGML",
                    "c) XSL",
                    "d) CSS"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "¿Cómo se conoce el conjunto de pautas, componentes y herramientas que respaldan las mejores prácticas de diseño de la interfaz de usuario, perteneciente a Google?",
                "opciones": [
                    "a) WCAG 2.1",
                    "b) WAI-ARIA",
                    "c) Material Design",
                    "d) Inclusive Design"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "¿A qué corresponde el ataque conocido por el acrónimo CSRF, que permite al atacante forzar al usuario a ejecutar acciones no deseadas en la aplicación web en la que está actualmente autenticado?",
                "opciones": [
                    "a) Cross Site Request Forgery",
                    "b) Cross Site Repeat Forgery",
                    "c) Cross Site Reduction Forgery",
                    "d) Cross Send Request Forgery"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Señale el software que permite automatizar la construcción y despliegue de un proyecto utilizando el concepto de pipelines:",
                "opciones": [
                    "a) Jenkins",
                    "b) RabbitMQ",
                    "c) Apache Kafka",
                    "d) Subversion"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué característica o atributo de seguridad de las cookies permite que el navegador solo envíe la cookie al servidor si ésta se originó en el mismo sitio web al que estamos intentando contactar?",
                "opciones": [
                    "a) Domain",
                    "b) SameSite",
                    "c) Secure",
                    "d) HttpOnly"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "(Pregunta de reserva) En PHP, señale qué variable de entorno se puede usar para almacenar datos del inicio de sesión de un usuario:",
                "opciones": [
                    "a) $_SESSION",
                    "b) $SESSION",
                    "c) $_GLOBAL",
                    "d) $GLOBAL"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué conjunto de herramientas de presentación y comportamiento ofrece componentes para trabajar en la parte dinámica del frontal web HTML?",
                "opciones": [
                    "a) NumPy",
                    "b) ActiveMQ",
                    "c) Bootstrap",
                    "d) TensorFlow"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué método estático usaría para convertir una cadena JSON en un valor u objeto javascript?",
                "opciones": [
                    "a) JSON.parse()",
                    "b) JSON.stringify()",
                    "c) let obj = JSON",
                    "d) let obj = New JSON"
                ],
                "respuestaCorrecta": 0
            }
        ]
    },
    {
        "id": "oep_2020_2022_sup2",
        "titulo": "OEP 2020-2022 - Supuesto II (Redes y Sistemas)",
        "contextoHTML": "<h3>Contexto</h3><p>La Subdirección General de Informática del Organismo en el que recientemente Vd. ha tomado posesión y a través de su departamento de Sistemas, Comunicaciones y Seguridad, ha decidido acometer un cambio de diseño en la infraestructura de la red informática del departamento y Vd. debe colaborar en su implantación.</p><p>Se parte de la situación inicial donde hay una única red con el siguiente direccionamiento IP 10.20.30.0/24 donde residen:</p><ul><li>Los equipos informáticos de los usuarios</li><li>Las aplicaciones informáticas</li><li>Las Bases de Datos Oracle y MySql</li><li>La conexión a Internet del departamento</li></ul><p>Después de varios estudios se concluye que se debe realizar una segmentación de la red actual en cuatro subredes:</p><ul><li>Primera Subred para los PCs de usuario</li><li>Segunda Subred para las Bases de Datos</li><li>Tercera Subred para las Aplicaciones</li><li>Cuarta Subred para utilizarla como DMZ</li></ul><p>Se instalará una pareja de Firewalls o Cortafuegos formando un clúster donde se implementarán las reglas necesarias para las conectividades y encaminamientos entre Subredes.</p><p><em>Nota aclaratoria: los PCs de Usuario tienen sistema operativo Windows 10 y tanto los servidores para Aplicaciones, Base de Datos y DMZ tienen sistema operativo Linux RedHat RHEL7.4</em></p><div class=\"supuesto-diagrama\"><img src=\"assets/diagramas/oep2020-2022_sup2_modeloA.png\" alt=\"Diagrama de red - Modelo A\" style=\"max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px;margin:0.5rem 0;\" /><p class=\"diagrama-caption\"><em>Diagrama de red - Modelo A</em></p></div><div class=\"supuesto-diagrama\"><img src=\"assets/diagramas/oep2020-2022_sup2_modeloB.png\" alt=\"Diagrama de red - Modelo B\" style=\"max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px;margin:0.5rem 0;\" /><p class=\"diagrama-caption\"><em>Diagrama de red - Modelo B</em></p></div>",
        "preguntas": [
            {
                "pregunta": "En los PCs de los usuarios hay que purgar la memoria caché de la resolución DNS. ¿Cuál de los siguientes comandos habría que lanzar desde la consola de PowerShell?",
                "opciones": [
                    "a) ipconfig /dnsflush",
                    "b) ipconfig /flushdns",
                    "c) ifconifg --erase dnscache",
                    "d) ifconifg --clean dnscache"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En todos los PCs de usuario existe un usuario local llamado Infocentro utilizado para labores de mantenimiento. ¿Qué comando utilizaríamos desde la línea de comandos de Windows PowerShell para ver más información sobre este usuario?",
                "opciones": [
                    "a) net user Infocentro",
                    "b) netuser Infocentro",
                    "c) info user Infocentro",
                    "d) infouser Infocentro"
                ],
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
                "opciones": [
                    "a) Check_MK",
                    "b) Reddis",
                    "c) Jenkins",
                    "d) Nagstamon"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "¿Qué máscara deberá tener la red 10.20.30.0 del modelo A para que haya cuatro subredes como en el Modelo B?",
                "opciones": [
                    "a) 255.255.255.194",
                    "b) 255.255.255.192",
                    "c) 255.255.255.196",
                    "d) 255.255.255.190"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Necesitamos borrar la caché de las direcciones físicas (Mac Address) en uno de los servidores que ofrece la aplicación de Intranet de la Subred de Aplicaciones del Modelo B. ¿Cuál de los siguientes comandos utilizaría?",
                "opciones": [
                    "a) ip delete cache",
                    "b) arp -d",
                    "c) iptables -d mac",
                    "d) ip flush"
                ],
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
            },
            {
                "pregunta": "Para optimizar el acceso a Internet, se opta por instalar un servidor proxy-caché en la Subred de Aplicaciones. ¿Cuál de las siguientes soluciones puede realizar dicha función?",
                "opciones": [
                    "a) CHECK_MK",
                    "b) GRAFANA",
                    "c) INFLUXDB",
                    "d) SQUID"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En la subred de DMZ del Modelo B se quiere implementar un servicio de correo seguro. Cuáles, de entre los siguientes, son los puertos seguros para los protocolos POP, SMTP e IMAP:",
                "opciones": [
                    "a) POP:965/SMTP:495/IMAP:993",
                    "b) POP:993/SMTP:465/IMAP:995",
                    "c) POP:995/SMTP:465/IMAP:993",
                    "d) POP:995/SMTP:495/IMAP:963"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Para la aplicación AutoFirma 1.8.2 de las estaciones de trabajo de la organización, ¿qué algoritmo de huella para la firma se permite de los siguientes?",
                "opciones": [
                    "a) DSA",
                    "b) ECDSA",
                    "c) MD5",
                    "d) SHA384"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En la organización se están planteando instalar puntos de acceso WiFi. ¿Cuál de estos estándares puede funcionar a 2,4 GHz, 5 GHz y 6 GHz?",
                "opciones": [
                    "a) 802.11ac",
                    "b) 802.11ax",
                    "c) 802.11be",
                    "d) No existe la banda de los 6 GHz"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Desde su equipo necesita conectarse a uno de los servidores mediante SSH y SCP. ¿Qué puerto o puertos estándares deberían tener abiertos en el firewall para realizar esta labor?",
                "opciones": [
                    "a) Puerto 21 para SSH y 22 para SCP.",
                    "b) Puerto 21 tanto para SSH como SCP.",
                    "c) Puerto 22 para SSH y 21 para SCP.",
                    "d) Puerto 22 tanto para SSH como SCP."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Si hubiese instalado un IIS, ¿qué comando utilizaría para reiniciarlo?",
                "opciones": [
                    "a) IIS RESET",
                    "b) IISRESET",
                    "c) RESET IIS",
                    "d) RESETIIS"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En uno de los servidores de la Subred de Aplicaciones del Modelo B se necesita realizar una captura del tráfico que pasa por la interfaz de red eth1 y guardarlo en el fichero fichero.out. ¿Cuál de las siguientes sentencias es la correcta?",
                "opciones": [
                    "a) snoop-d any -o fichero.out",
                    "b) snoop-d eth1 -w fichero.out",
                    "c) tcpdump -i any -o fichero.out",
                    "d) tcpdump -i eth1 -w fichero.out"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En el servidor de la Subred de Aplicaciones quieren servir páginas de otros dominios. ¿Cuál de las siguientes directivas debe utilizar?",
                "opciones": [
                    "a) Virtual Machine",
                    "b) VirtualDomain",
                    "c) VirtualHost",
                    "d) VirtualIp"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Se quiere crear una nueva vLAN en el organismo. ¿Qué opción de las vLAN hace que las tramas Ethernet incorporen la etiqueta \"vLAN ID\"?",
                "opciones": [
                    "a) id",
                    "b) tagged",
                    "c) trunk",
                    "d) untagged"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Indique qué herramienta desarrollada por el CCN-CERT, es una plataforma de análisis avanzado de malware:",
                "opciones": [
                    "a) ADA",
                    "b) CADA",
                    "c) NADA",
                    "d) SADA"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En el clúster de Firewalls del modelo B se quiere implementar un módulo de seguridad para filtrar y monitorear el tráfico HTTP. ¿Cuál de los siguientes módulos debe implementarse?",
                "opciones": [
                    "a) VFN - Virtual Firewall Network",
                    "b) WAF - Web Application Firewall",
                    "c) WAT - Web Administration Tool",
                    "d) WFL7 - Web Firewall Layer 7"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En la Subred de PCs de Usuario del Modelo B necesitamos saber la tabla de enrutamiento de los equipos. ¿Cuál de los siguientes comandos permite ver esa información?",
                "opciones": [
                    "a) ip route ls",
                    "b) ip route print",
                    "c) route print",
                    "d) route show"
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
                "opciones": [
                    "a) /25",
                    "b) /26",
                    "c) /27",
                    "d) /28"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Si se le asigna a la Red B (Servidores) el prefijo de red inmediatamente contiguo al bloque de la Red A, asumiendo que la Red A utiliza el prefijo óptimo calculado y comenzó en la dirección 192.168.10.0, ¿cuál será la dirección de red de la VLAN 20?",
                "opciones": [
                    "a) 192.168.10.32",
                    "b) 192.168.10.64",
                    "c) 192.168.10.128",
                    "d) 192.168.10.192"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "El estándar empleado para etiquetar las tramas Ethernet y que el tráfico de la VLAN 10 y VLAN 20 pueda viajar multiplexado por el mismo enlace físico hacia el router central se denomina:",
                "opciones": [
                    "a) IEEE 802.1X",
                    "b) IEEE 802.11ac",
                    "c) IEEE 802.1Q",
                    "d) IEEE 802.3af"
                ],
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
                "opciones": [
                    "a) En el Nivel 2 (Enlace de Datos).",
                    "b) En el Nivel 3 (Red).",
                    "c) En el Nivel 4 (Transporte).",
                    "d) En el Nivel 7 (Aplicación)."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha detectado un comportamiento anómalo en un servidor web de la Intranet. Para capturar los paquetes de red desde la interfaz eth0 del propio servidor en formato crudo para su posterior análisis con Wireshark, el administrador ejecutará en Linux:",
                "opciones": [
                    "a) netstat -anp > captura.pcap",
                    "b) ip link show eth0 -o captura.pcap",
                    "c) tcpdump -i eth0 -w captura.pcap",
                    "d) nmap -sS -p80 localhost"
                ],
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
                "opciones": [
                    "a) JavaScript puro (ES5)",
                    "b) TypeScript",
                    "c) Dart",
                    "d) Kotlin"
                ],
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
                "opciones": [
                    "a) Data Access Object (DAO)",
                    "b) Singleton",
                    "c) Front Controller",
                    "d) Model-View-Controller (MVC)"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Durante el desarrollo del backend en Java, un programador quiere asegurarse de que una variable no cambie su valor una vez inicializada (hacerla constante). ¿Qué modificador debe utilizar en Java?",
                "opciones": [
                    "a) const",
                    "b) static",
                    "c) final",
                    "d) immutable"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "El sistema debe ser accesible universalmente. ¿Qué estándar promovido por el W3C proporciona las pautas de accesibilidad para el contenido web que exige la normativa actual?",
                "opciones": [
                    "a) ISO 27001",
                    "b) WCAG (Web Content Accessibility Guidelines)",
                    "c) WSDL",
                    "d) UNE 139803"
                ],
                "respuestaCorrecta": 1
            }
        ]
    },
    {
        "id": "oep_2019_sup1",
        "titulo": "OEP 2019 - Supuesto I (Desarrollo)",
        "contextoHTML": "<h3>Contexto</h3><p>En el departamento TIC, al que usted se acaba de incorporar, quiere desarrollar para la Subdirección de Selección un sistema integral de información para la gestión de los procesos selectivos y convocatorias de oposiciones de la Administración General del Estado. El sistema incluirá, entre otras, las siguientes funcionalidades:</p><ul><li>Gestión de solicitudes de inscripción de aspirantes al proceso selectivo.</li><li>Gestión de colaboradores.</li><li>Generación de listados, estadísticas y cuadros de mando.</li><li>Generación de certificados para aspirantes y colaboradores.</li></ul><p>Dada la envergadura del proyecto, y para aprovechar las aplicaciones ya implantadas en la Subdirección y la experiencia profesional del personal, van a convivir diferentes lenguajes de programación, entre otros, Java, C# o Python, así como distintos gestores de Bases de Datos. Como repositorio de código se utiliza Git.</p><p>Salvo que el enunciado diga lo contrario, se asume que aquellas preguntas que contengan un fragmento de código tendrán declaradas correctamente todas las clases, librerías y variables que no aparezcan explícitamente. Del mismo modo si se trata de lenguaje HTML, se da por supuesto que éste será HTML5 y será ejecutado en navegadores que soporten dicha versión. Las sentencias SQL que aparecen se encuentran dentro del estándar ANSI SQL. Como metodología de base el organismo aplica Métrica v3.</p><div class=\"supuesto-diagrama\"><img src=\"assets/diagramas/oep2019_sup1_diagrama.png\" alt=\"Diagrama de clases: Solicitud, Opositor, Proceso, Ejercicio\" style=\"max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px;margin:0.5rem 0;\" /><p class=\"diagrama-caption\"><em>Diagrama de clases del sistema de gestión de procesos selectivos</em></p></div>",
        "preguntas": [
            {
                "pregunta": "Se necesita presentar una estadística utilizando HTML5 mediante una tabla en la que una de sus columnas contendrá la descripción de cada Proceso Selectivo. Suponiendo que a dicha columna la denominamos \"Proceso\", ¿qué etiqueta deberá utilizar para definir la celda de encabezado de la tabla para dicha columna, con un formato de letra diferenciado?",
                "opciones": [
                    "a) <th>Proceso</th>",
                    "b) <tableheader>Proceso</tableheader>",
                    "c) <theader>Proceso</theader>",
                    "d) <tableh>Proceso</tableh>"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Le indican que debe presentar también una lista de opositores con las notas correspondientes a los dos primeros ejercicios. Las notas se representarán como una lista anidada para cada opositor, debiendo ser el resultado a obtener: • Opositor ◦ Nota 1 ◦ Nota 2 ¿Cuál es el código HTML5 correcto si presentamos un solo opositor?",
                "opciones": [
                    "a) <ul><li>Opositor<ul><li>Nota 1</li><li>Nota 2</li></ul></li></ul>",
                    "b) <ul><li>Opositor</li></ul><ul><li>Nota 1</li><li>Nota 2</li></ul>",
                    "c) <ul><li1>Opositor</li1><li2>Nota 1</li2><li2>Nota 2</li2></ul>",
                    "d) <ul><li>Opositor<li>Nota 1</li><li>Nota 2</li></li></ul> 2019 – TAI - LI Página 8 de 14"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En el formulario web de inscripción se le pide forzar a la introducción del nombre del opositor como campo obligatorio. Para desarrollar esta petición, de entre las siguientes opciones de código, ¿cuál debería utilizar para incorporarlo en el fragmento de código marcado como [---------------------------------------] ? <form> <label for=\"username\">Nombre de Opositor:</label> [---------------------------------------] <input type=\"submit\" value=\"Confirmar\"/> </form>",
                "opciones": [
                    "a) <input type=\"text\" name=\"username\" required/>",
                    "b) <input type=\"text\" name=\"username\" enforced/>",
                    "c) <input type=\"text\" name=\"username\" mandatory/>",
                    "d) <input type=\"text\" name=\"username\" compulsory/>"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "En la página web a la que accederán los aspirantes, se quiere aplicar el color verde a todos los elementos que tengan etiqueta <a> que sean hijos de un elemento con etiqueta <li> ¿Cuál es el código CSS adecuado?",
                "opciones": [
                    "a) li.a {color: green;}",
                    "b) li>a {color: green;}",
                    "c) li#a {color: green;}",
                    "d) li_a {color: green;}"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Un compañero le consulta la forma de aplicar el modelo de Diseño de Caja Flexible (o Flexbox) a un elemento div con id=\"principal\". De entre los siguientes, ¿cuál es el código CSS correcto que debería proponer?",
                "opciones": [
                    "a) div#principal {display: flex;}",
                    "b) div#principal {display: flexbox;}",
                    "c) div#principal {display: flex-container;}",
                    "d) div#principal {display:flexible;}"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se han detectado varios errores en la exportación a XML de los diferentes listados de notas y le solicitan su ayuda. Sin tener en cuenta si la información está bien representada, ¿cuál de los siguientes XML está bien formado?",
                "opciones": [
                    "a) <Opositor>Winston Churchill<Nota1>95</nota1><Nota2>65</nota2></opositor>",
                    "b) <Opositor>Winston Churchill<Nota1>95</Nota1><Nota2>65</Opositor></Nota2>",
                    "c) <Opositor>Winston Churchill<Nota1/>95<Nota2/>65</Opositor>",
                    "d) <Opositor>Winston Churchill<Nota1>95</><Nota2>65</></>"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En su Subdirección van a usar JSON para realizar intercambio de datos, y le preguntan, de entre los siguientes, cuál sería un fichero JSON válido.",
                "opciones": [
                    "a) {\"nombre\": \"Juana\", \"apellido\": \"Ruiz\"}",
                    "b) {'nombre': 'Juana', 'apellido': 'Ruiz'}",
                    "c) {nombre: \"Juana\", apellido: \"Ruiz\"}",
                    "d) {nombre: \"Juana\"; apellido: \"Ruiz\"}"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Dentro de las tecnologías para el desarrollo web utilizadas en su unidad, se contempla utilizar javascript. ¿Qué valor devuelve la siguiente función javascript? Function prueba() { var i = 1; var j = 0; while (i < 7) { j += i; i += 2; } return j; }",
                "opciones": [
                    "a) 2",
                    "b) 9",
                    "c) 6",
                    "d) 0"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Utilizando el lenguaje Python, a continuación se muestra la variable opositor, en la que se almacena el nombre y las puntuaciones de tres ejercicios por orden: opositor = {'nombre': 'Sandra Gomez', 'notas': [27, 36, 12]} ¿Cómo asignaría a una variable llamada notaSegundoEjercicio el valor 36?",
                "opciones": [
                    "a) notaSegundoEjercicio = opositor.notas.Value.Item2",
                    "b) notaSegundoEjercicio = opositor['notas'][1]",
                    "c) notaSegundoEjercicio = opositor.Key[notas].Value[1]",
                    "d) notaSegundoEjercicio = opositor(notas(2))"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se está valorando la realización de otros desarrollos de Machine Learning para Python y le preguntan cuál de las siguientes podría ser una librería válida para ello.",
                "opciones": [
                    "a) Keras",
                    "b) Yum",
                    "c) Mahotas",
                    "d) Openpyxl"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Le piden opinión porque en uno de los módulos Java se detecta un bucle que concatena una cantidad muy elevada de cadenas de texto, penalizando el rendimiento. ¿Qué clase de java.lang habría que utilizar para mejorar la eficiencia?",
                "opciones": [
                    "a) StringConcat",
                    "b) StringConstruct",
                    "c) StringBuilder",
                    "d) StringCreator"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "¿Cómo debe definir el equipo de desarrollo en Java una clase llamada Ejercicio si quiere impedir que se pueda heredar de la misma?",
                "opciones": [
                    "a) closed class Ejercicio",
                    "b) final class Ejercicio",
                    "c) private class Ejercicio",
                    "d) immutable class Ejercicio 2019 – TAI - LI Página 9 de 14"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En C# debe crear un objeto de tipo SqlConnection y que se llame al método Dispose, para así liberar recursos al final del bloque de código que aparece entre llaves. ¿Qué instrucción debemos utilizar?",
                "opciones": [
                    "a) using (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
                    "b) scope (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
                    "c) dispose (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
                    "d) internal (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Para cumplir el cometido que le ha sido asignado va a tener que definir arrays. ¿Cuál es la forma correcta de definir un array de enteros en C#?",
                "opciones": [
                    "a) int[] arrayEnteros = new {1, 2, 3};",
                    "b) int arrayEnteros[] = new() {1, 2, 3};",
                    "c) int[] arrayEnteros = new[] {1, 2, 3};",
                    "d) int arrayEnteros[] = new {1, 2, 3};"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Su equipo está estudiando la información existente dispersa en distintas fuentes de datos con el fin de consolidarla. En una base de datos antigua, hay una tabla que contiene el siguiente registro: NIF: 12345678Z Nombre: Emilia PrimerApellido: Pardo SegundoApellido: Bazán Direccion: Atocha 106 Telefonos: 916666666;917777777 ¿En qué forma normal está la tabla?",
                "opciones": [
                    "a) En primera forma normal.",
                    "b) En segunda forma normal.",
                    "c) En tercera forma normal.",
                    "d) No está en ninguna forma normal."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En la base de datos, el campo \"IdFormaAcceso\" de la tabla \"Proceso\" es de tipo char(1) y puede tomar los valores \"L\" (Ingreso Libre) y \"P\" (Promocion Interna). ¿Qué instrucción deberá utilizar para obtener un listado de todos los IdProceso de forma que aparezca el nombre descriptivo de la correspondiente Forma de Acceso?",
                "opciones": [
                    "a) SELECT IdProceso, IF IdFormaAcceso = 'L' THEN 'Ingreso Libre' ELSE 'Promocion Interna' ENDIF AS FormaAcceso FROM Proceso",
                    "b) SELECT IdProceso, CASE IdFormaAcceso WHEN 'L' THEN 'Ingreso Libre' WHEN 'P' THEN 'Promocion Interna' END AS FormaAcceso FROM Proceso",
                    "c) SELECT IdProceso, SWITCH IdFormaAcceso ('L' = 'Ingreso Libre', 'P' = 'Promocion Interna') AS FormaAcceso FROM Proceso",
                    "d) SELECT IdProceso, IIF(IdFormaAcceso, 'L' = 'Ingreso Libre', 'P' = 'Promocion Interna') AS FormaAcceso FROM Proceso"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "También le consultan sobre la sentencia SQL a utilizar para obtener el listado del identificador de los opositores (IdOpositor) que tienen más de una entrada en la tabla Solicitud.",
                "opciones": [
                    "a) SELECT IdOpositor, COUNT(IdSolicitud) AS NumeroSolicitudes FROM Solicitud GROUP BY IdOpositor WHERE NumeroSolicitudes > 1",
                    "b) SELECT IdOpositor, IdSolicitud FROM Solicitud WHERE COUNT(IdSolicitud) > 1",
                    "c) SELECT IdOpositor, COUNT(IdSolicitud) FROM Solicitud WHERE COUNT(IdSolicitud) > 1 GROUP BY IdOpositor",
                    "d) SELECT IdOpositor, COUNT(IdSolicitud) FROM Solicitud GROUP BY IdOpositor HAVING COUNT(IdSolicitud) > 1"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "¿Con qué instrucción ANSI SQL incrementaría un diez por ciento el valor de la columna Duracion para todos los registros de la tabla Ejercicio?",
                "opciones": [
                    "a) UPDATE Duracion = Duracion + (0.10 * Duracion) FROM Ejercicio",
                    "b) UPDATE Ejercicio SET Duracion = Duracion * 1.1",
                    "c) UPDATE TABLE Ejercicio (Duracion = Duracion + 10%)",
                    "d) UPDATE SET Duracion *= 1.10 FROM Ejercicio"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Si el campo DNI de la tabla Opositor es de tipo char(9), ¿cuál es la instrucción SQL para obtener el listado de todos los registros de la tabla Opositor cuyo DNI empieza por 3?",
                "opciones": [
                    "a) SELECT * FROM Opositor WHERE DNI = 3*",
                    "b) SELECT * FROM Opositor WHERE DNI IN ('3.')",
                    "c) SELECT * FROM Opositor WHERE DNI LIKE '3%'",
                    "d) SELECT DNI(3*) FROM Opositor"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Como repositorio de código en su unidad se utiliza Git, y le preguntan, ¿qué comando, de entre los siguientes, muestra una lista de los commits anteriores?",
                "opciones": [
                    "a) git commit",
                    "b) git fetch",
                    "c) git status",
                    "d) git log"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "(Pregunta de reserva) Dentro del código de la página web a la que acceden los opositores, se encuentra el siguiente código HTML: <html><body><h1 id=\"titulo\">Primer ejercicio TAI</h1></body></html> ¿Cuál es el código javascript para obtener la cadena \"Primer ejercicio TAI\"?",
                "opciones": [
                    "a) var titulo = document.getElementById(\"titulo\").firstChild.nodeValue;",
                    "b) var titulo = document.titulo.InnerHTML;",
                    "c) var titulo = document.getElement(\"h1\").InnerText;",
                    "d) var titulo = document.children[0].getValue(); 2019 – TAI - LI Página 10 de 14"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) El equipo de proyecto está estudiando varios framework para valorar su utilización. ¿Cuál es el propósito principal del framework de javascript Jest?",
                "opciones": [
                    "a) Testeado de código.",
                    "b) Machine learning.",
                    "c) Animacion y efectos gráficos.",
                    "d) Funciones matemáticas y tratamiento de cadenas."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Entre los lenguajes contemplados para el nuevo sistema de información se encuentra Python. De entre los siguientes, ¿cuál es un framework para desarrollo web en Python?",
                "opciones": [
                    "a) Django",
                    "b) Keras",
                    "c) Pip",
                    "d) Numpy"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Se ha realizado un vídeo explicativo para los opositores y se ha publicado en una página web. ¿Qué mostrará el siguiente fragmento de código en un navegador que soporte HTML5?: <video width=\"320\" height=\"240\" controls><source src=\"movie.mp4\" type=\"video/mp4\"><source src=\"movie.ogg\" type=\"video/ogg\">No soportado</video>",
                "opciones": [
                    "a) Se mostrarán los dos vídeos \"movie.mp4\" y \"movie.ogg\".",
                    "b) Se mostrará el mensaje \"No soportado\" en todos los casos.",
                    "c) Se mostrará el vídeo \"movie.mp4\" si el navegador soporta el formato mp4.",
                    "d) No se mostrará nada porque el código no está bien formado."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) Para intentar obtener información de la base de datos de aspirantes, un usuario malintencionado introduce la siguiente cadena en el campo \"Número de opositor\" de un formulario incluido en la página web de inscripciones al proceso: 100 OR 1=1 ¿Qué técnica está utilizando?",
                "opciones": [
                    "a) Denial of Service.",
                    "b) Phishing",
                    "c) Malware attack.",
                    "d) SQL Injection. 2019 – TAI - LI Página 11 de 14"
                ],
                "respuestaCorrecta": 3
            }
        ]
    },
    {
        "id": "oep_2019_sup2",
        "titulo": "OEP 2019 - Supuesto II (Sistemas)",
        "contextoHTML": "<h3>Contexto</h3><p>Debido a la pandemia ocasionada por el SARS-CoV-2, más conocido como Coronavirus, las Administraciones Públicas se han visto obligadas a impulsar el teletrabajo y a cambiar su estrategia en el ámbito de las TIC.</p><p>En este sentido ha sido asignado en la integración de dos organismos en su departamento, los cuales no tienen capacidad para asumir las nuevas demandas de servicios y conexiones.</p><p>Uno de los centros es la Demarcación de Carreteras de Madrid (DCM) y el otro es la Confederación Hidrográfica del Tajo (CHT).</p><p>La DCM tiene máquinas físicas RedHat Enterprise Linux (RHEL). Su estructura consiste en tres áreas y en cada una de ellas trabajan 20 personas.</p><p>La CHT tiene máquinas físicas Solaris. Su estructura consiste en 5 áreas y en cada una de ellas trabajan 50 personas.</p><p>Ambos organismos tienen bastantes máquinas Windows 10, además de equipamiento específico, para el desarrollo de sus actividades, que tendrá que ser trasladado a su CPD.</p><p>Es crucial la salvaguarda de los datos, la pérdida o inconsistencia de los mismos durante el proceso es algo inasumible.</p><p>Salvo que el enunciado de la propia pregunta diga lo contrario, debe suponer que dispone de los permisos adecuados, tanto a nivel de sistema operativo como de conexión de red.</p>",
        "preguntas": [
            {
                "pregunta": "El equipo de comunicaciones le asigna la red 10.0.4.0 con la máscara 255.255.255.128 para el direccionamiento de la DCM. ¿Cuantos bits tiene la máscara de red?",
                "opciones": [
                    "a) 24",
                    "b) 26",
                    "c) 25",
                    "d) 23"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "También le preguntan a qué Clase pertenece la red asignada (10.0.4.0).",
                "opciones": [
                    "a) Clase A.",
                    "b) Clase B.",
                    "c) Clase C.",
                    "d) Clase D."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Para la CHT los compañeros de redes le asignan el direccionamiento 10.0.0.0/21. ¿Cuál es el número máximo de hosts disponible?",
                "opciones": [
                    "a) 1024",
                    "b) 2046",
                    "c) 32",
                    "d) 256"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Dado el direccionamiento anterior (10.0.0.0/21) su responsable le pregunta cuál es el rango de hosts, para poder calcular si el direccionamiento es el adecuado.",
                "opciones": [
                    "a) 10.0.3.1 - 10.0.3.254",
                    "b) 10.0.0.1 - 10.0.0.254",
                    "c) 10.0.3.0 - 10.0.3.255",
                    "d) 10.0.0.1 - 10.0.7.254"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "La DCM no es capaz de especificarle la versión de RHEL que tienen sus máquinas, por lo que debe decirles el comando a ejecutar. ¿Cuál de los siguientes sería?",
                "opciones": [
                    "a) rm -f /etc/redhat-release",
                    "b) cat /etc/redhat-version",
                    "c) cat /etc/redhat-release",
                    "d) mv /etc/redhat-release"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Para poder tener conectividad, la CHT necesita poner una ruta persistente en una de sus máquinas Solaris a la red 10.0.5.0/24 con una máscara de red 255.255.255.0 y usando como puerta de enlace la dirección IP 10.0.5.150 ¿Cuál sería el comando correcto?",
                "opciones": [
                    "a) route -p add -net 10.0.5.0/24 -gateway 10.0.5.150",
                    "b) route new -p -net 10.0.5.0/24 -gateway 10.0.5.150",
                    "c) route -static add -net 10.0.5.0/24 -gateway 10.0.5.150",
                    "d) route add -static -net 10.0.5.0/24 -gateway 10.0.5.150"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se está realizando una auditoría de seguridad en uno de los servidores Linux y le preguntan dónde se están guardando las contraseñas encriptadas de los usuarios:",
                "opciones": [
                    "a) /etc/passwd",
                    "b) /etc/users",
                    "c) /etc/shadow",
                    "d) /etc/groups"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Una pieza crucial en cualquier sistema informático son las BBDD. Le han informado que tanto la DCM como la CHT utilizan Oracle, pero no le han dicho la versión. ¿Qué consulta podría hacer en la base de datos para conocer esta información?",
                "opciones": [
                    "a) SELECT * FROM V$VERSION",
                    "b) SELECT * FROM V$VERSIONADO",
                    "c) SELECT * FROM V$VERSIONDB",
                    "d) SELECT * FROM V$VERSIONTABLE"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se le solicita crear un backup del directorio /home/opositor/temas/ comprimido con gzip en RHEL. Indique el comando correcto para realizarlo.",
                "opciones": [
                    "a) tar -czf TEMAS.tar.gz /home/opositor/temas/",
                    "b) tar -xzf TEMAS.tar.gz /home/opositor/temas/",
                    "c) tar -xzf /home/opositor/temas/ TEMAS.tar.gz",
                    "d) tar -cjf /home/opositor/temas/ TEMAS.tar.gz"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Le preguntan sobre las cuentas de usuario que pertenecen al grupo Administradores locales de una máquina, ¿qué comando de Windows debería utilizar?",
                "opciones": [
                    "a) net local administradores",
                    "b) net localgroup admin",
                    "c) net local admin",
                    "d) net localgroup administradores 2019 – TAI - LI Página 12 de 14"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "También se le consulta sobre la configuración actual de las políticas de cuentas y contraseñas de una máquina local. ¿Qué comando de Windows muestra esa información?",
                "opciones": [
                    "a) net computer",
                    "b) net localgroup",
                    "c) net config",
                    "d) net accounts"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Se están realizando en su unidad informes de las capacidades de los discos y requieren de su ayuda. Si se dispone de 5 discos duros de 6 TB, y se decide configurarlos en RAID 6, ¿qué capacidad neta de almacenamiento se obtendrá?",
                "opciones": [
                    "a) 12 TB",
                    "b) 18 TB",
                    "c) 24 TB",
                    "d) 30 TB"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En sus instalaciones no disponen de un Windows Server 2008, pero como tienen instalado Docker han decidido crear uno y arrancarlo a partir de una imagen llamada SW2008. ¿Con qué sentencia debería realizar esta petición?",
                "opciones": [
                    "a) docker run SW2008",
                    "b) docker start SW2008",
                    "c) start docker SW2008",
                    "d) docker start run SW2008"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "No está seguro de que el contenedor se haya arrancado correctamente. ¿Qué comando utilizaría para listar todos los contenedores, estén o no en marcha?",
                "opciones": [
                    "a) docker ps",
                    "b) docker ps -a",
                    "c) docker list",
                    "d) docker list-container -all"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Están estudiando el traslado de algunos equipos de la CHT a su CPD y le informan de que tienen una sonda de alrededor de 70 watios que utilizan 1 hora a la semana y que debe permanecer apagada el resto del tiempo. Le indican que sería necesario poder encenderla remotamente por red. ¿Sería posible hacerlo?",
                "opciones": [
                    "a) No, no sería posible.",
                    "b) Si, mediante PoE IEEE 802.3ct",
                    "c) Si, mediante PoE IEEE 802.3bt",
                    "d) Si, mediante PoE IEEE 802.3dt"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "La DCM le informa que tienen un acuerdo con la Dirección General de Tráfico y alojan en sus instalaciones un medidor de tráfico que requiere una conexión Ethernet de unos 30 Gbps. Según el estándar ANSI/TIA-568, ¿qué categoría de cableado sería necesitaría?",
                "opciones": [
                    "a) Categoría 6.",
                    "b) Categoría 7.",
                    "c) Categoría 7A.",
                    "d) Categoría 8."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Durante el proceso de creación de reglas, se da cuenta de un grave problema de seguridad. Algunos de los equipos Windows no tienen habilitado el firewall. ¿Qué comando utilizaría para habilitarlo?",
                "opciones": [
                    "a) netsh advfirewall set allprofiles enable",
                    "b) netsh advfirewall set allprofiles state on",
                    "c) netsh advfirewall set allprofiles state online",
                    "d) netsh advfirewall set allprofiles on"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Debido al creciente número de ataques, se decide implantar en su CPD un IPS que analice el comportamiento de la red y que examine el tráfico inusual para detectar posibles ataques DoS y malwares. ¿Qué tipo de IPS necesita?",
                "opciones": [
                    "a) DIPS",
                    "b) WIPS",
                    "c) NBA",
                    "d) HIPS"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Un aspecto importante es el protocolo de correo que se va a utilizar para las comunicaciones vía email. En la DCM están preocupados y no les parece seguro usar SMTP por lo que usted rápidamente sugiere usar SMTPS. ¿Qué puerto por defecto tendrá que solicitar a los compañero de seguridad para este protocolo SMTPS?",
                "opciones": [
                    "a) 25",
                    "b) 465",
                    "c) 443",
                    "d) 425"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Para evitar problemas de resolución de nombres en estos equipos Windows donde se está configurando el cliente de correo, han decidido limpiar la caché DNS. ¿Cuál sería el comando adecuado?",
                "opciones": [
                    "a) ifconfig /flushdns",
                    "b) ipconfig /flushdns",
                    "c) ipconfig /cleardns",
                    "d) ifconfig /cleardns"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Relacionado con los sistemas de backup, le preguntan por una técnica que mejore la eficiencia del almacenamiento y reduzca su coste medio. ¿Cuál propondría?",
                "opciones": [
                    "a) RTO",
                    "b) Deduplicación",
                    "c) RPO",
                    "d) Vaulting"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se está hablando sobre el uso de máquinas virtuales, y le piden indicar cuál de los siguientes NO es un software de virtualización.",
                "opciones": [
                    "a) Vmware",
                    "b) VirtualBox",
                    "c) Hyper-V",
                    "d) LVM"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En su unidad se ha decidido utilizar Docker. ¿Cuál de los siguientes comandos deberá utilizar para mostrar la información que tiene todo el sistema sobre la instalación de Docker (nº de contenedores, las imágenes...)?",
                "opciones": [
                    "a) docker ps",
                    "b) docker info",
                    "c) docker inspect",
                    "d) docker systeminfo"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En una reunión se habla del Directorio Activo. Defina en qué consiste este concepto.",
                "opciones": [
                    "a) Es el usuario que está logado actualmente en el sistema.",
                    "b) Es el conjunto de políticas de grupo que se aplican a los usuarios de una red Novell.",
                    "c) Es un almacén de datos estructurado que permite almacenar información sobre los objetos o recursos de una red para facilitar su localización y administración.",
                    "d) Es un almacén de datos que contiene información de los programas software instalados en la red por la organización."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Debido al elevado volumen de peticiones e incidencias que se esperan durante la integración, se está valorando implantar un sistema de gestión específico. El único requerimiento que tienen es que sea Open Source. ¿Cuál propondría?",
                "opciones": [
                    "a) Remedy",
                    "b) Ticket2.0",
                    "c) Nagios",
                    "d) osTicket"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "(Pregunta de reserva) Con el objetivo de recabar información sobre los equipos Windows, disponen de un software de inventariado que necesita acceso por el puerto 4433 (TCP) en los equipos destino. ¿Qué comando utilizaría en estos últimos para añadir la regla al firewall?",
                "opciones": [
                    "a) netsh advfirewall firewall create rule name= \"Inventariado\" dir=in action=allow protocol=TCP localport=4433",
                    "b) netsh advfirewall firewall add rule name= \"Inventariado\" dir=in action=permit protocol=TCP localport=4433",
                    "c) netsh advfirewall firewall add rule name= \"Inventariado\" dir=in action=allow protocol=TCP localport=4433",
                    "d) netsh advfirewall firewall new rule name= \"Inventariado\" dir=in action=allow protocol=TCP localport=4433"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) Desde la unidad responsable de la red, le indican que por motivos de seguridad van a realizar la conexión por el puerto 422. ¿Qué comando debería utilizar en sus equipos RHEL para comprobar que la comunicación ya está abierta, si la IP destino es la 10.0.4.22 ?",
                "opciones": [
                    "a) nc -v - ip 10.0.4.22 -port 422",
                    "b) nc -v 10.0.4.22 422",
                    "c) nc -v 422 10.0.4.22",
                    "d) nc -v 10.0.4.22:422 2019 – TAI - LI Página 13 de 14"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "(Pregunta de reserva) Durante el proceso de traslado, uno de los equipos Windows más importantes de la DCM da problemas de corrupción de datos y han decidido restaurar la copia de seguridad. Le indican que el dispositivo está cifrado. ¿Qué necesita que le proporcionen para poder restaurar la copia?",
                "opciones": [
                    "a) El certificado digital.",
                    "b) La clave de BitLocker.",
                    "c) La clave privada.",
                    "d) La clave de sesión."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "(Pregunta de reserva) Desde su unidad también se está valorando el uso de RAID 10, ¿cuántos discos duros son necesarios para crearlo?",
                "opciones": [
                    "a) 2 discos duros.",
                    "b) 3 discos duros.",
                    "c) Al menos 4 discos duros.",
                    "d) Es indiferente."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) Muchas de las comunicaciones se van a realizar mediante conexiones ssh y tiene que solicitar las reglas de firewall al equipo de comunicaciones. ¿Cuál es el puerto que debe solicitar?",
                "opciones": [
                    "a) 21",
                    "b) 63",
                    "c) 69",
                    "d) 22 2019 – TAI - LI Página 14 de 14"
                ],
                "respuestaCorrecta": 3
            }
        ]
    },
    {
        "id": "oep_2023_2024_sup1",
        "titulo": "OEP 2023-2024 - Supuesto I (Desarrollo)",
        "contextoHTML": "<h3>Contexto</h3><p>El organismo en el que usted presta servicios es el órgano competente para la concesión de unas becas para personas opositoras y, por tanto, ha surgido la necesidad de desarrollar un sistema de información que cubra todas las fases que se producen en la concesión de las becas.</p><p>El sistema, en su parte frontend, permitirá la firma y presentación de solicitudes, subsanaciones y alegaciones por parte de los interesados una vez se autentiquen. También permitirá la descarga de los distintos listados que se publiquen por parte de los empleados públicos del organismo que tramita estas becas.</p><p>Por otra parte, el backend dará el servicio necesario al frontend y, además, permitirá a los empleados públicos del organismo, desde una aplicación de gestión, visualizar la información y documentación de las solicitudes, subsanaciones y alegaciones presentadas, así como la publicación de los listados mencionados anteriormente.</p><p>Para el desarrollo del frontend se utilizará un framework de desarrollo web con JavaScript, HTML5 y CSS3, mientras que el backend podrá desarrollarse con .NET o Java, dependiendo de la experiencia y conocimientos de los desarrolladores del organismo.</p><p>También se ha decidido usar GitHub (plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git) para poder compartir el trabajo entre los desarrolladores en la cual se puede almacenar, compartir y trabajar de forma conjunta en el código.</p><p>Adicionalmente, se utilizará un gestor documental para la gestión de la documentación aportada en cada uno de los trámites por los interesados, así como los respectivos servicios del Catálogo de Servicios de Administración Digital que puedan reutilizarse.</p><div class=\"supuesto-diagrama\"><img src=\"assets/diagramas/oep2023-2024_sup1_diagrama.png\" alt=\"Diagrama entidad-relación: Interesado, SolicitudBeca, FicheroAdjunto, CuerpoBecado, Estado\" style=\"max-width:100%;height:auto;border:1px solid #ccc;border-radius:4px;margin:0.5rem 0;\" /><p class=\"diagrama-caption\"><em>Diagrama entidad-relación del sistema de becas</em></p></div>",
        "preguntas": [
            {
                "pregunta": "¿Qué elemento HTML utilizaría para impedir que el e-mail exceda los 100 caracteres cuando el interesado lo cumplimente?",
                "opciones": [
                    "a) <input type=''email'' id=''email'' name=''email'' size=''100''>",
                    "b) <input type=''email'' id=''email'' name=''email'' max=''100''>",
                    "c) <input type=''email'' id=''email'' name=''email'' maxlength=''100''>",
                    "d) <input type=''email'' id=''email'' name=''email'' length=''100''>"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "¿Qué ORM podría utilizar, en función de la solución de backend escogida?",
                "opciones": [
                    "a) JPA en .NET e Hibernate en Java.",
                    "b) Hibernate en .NET y Entity Framework en Java.",
                    "c) Entity Framework en .NET e Hibernate en Java.",
                    "d) Spring Data en .NET e Hibernate en Java."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "¿Qué sentencia habría que ejecutar si se quiere añadir un nuevo registro a la tabla “CuerpoBecado”?",
                "opciones": [
                    "a) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI, 'Técnico Auxiliar de Informática');",
                    "b) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES (TAI, Técnico Auxiliar de Informática);",
                    "c) INSERT TO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
                    "d) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');"
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "¿Qué tipo de correspondencia hay entre las tablas “SolicitudBeca” y “FicheroAdjunto”?",
                "opciones": [
                    "a) Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
                    "b) Un registro de SolicitudBeca puede tener como máximo un registro de FicheroAdjunto.",
                    "c) N registros de SolicitudBeca pueden tener M registros de FicheroAdjunto.",
                    "d) Un registro de SolicitudBeca puede tener cero o como máximo un registro de FicheroAdjunto."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "A este sistema le es de aplicación la normativa vigente de accesibilidad de sitios web. ¿Qué herramienta automatizada utilizaría para probar que la aplicación cumple con los estándares de accesibilidad?",
                "opciones": [
                    "a) QualWeb.",
                    "b) Equal Automatic Checker.",
                    "c) AccSite.",
                    "d) Shovel."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "El formulario de solicitud será extenso y tendrá muchas consultas de datos. ¿Qué utilizaría para renderizar la página en el servidor?",
                "opciones": [
                    "a) Server Sent Events.",
                    "b) Ajax.",
                    "c) WebSocket.",
                    "d) Server Side Rendering."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "El proceso de presentación de solicitud implica la autenticación del usuario, la firma de la solicitud, el guardado en base de datos, la generación de un asiento registral y la generación de un justificante de presentación. ¿Qué diagrama UML utilizaría para representar las acciones implicadas en este flujo?",
                "opciones": [
                    "a) Diagrama de paquetes.",
                    "b) Diagrama de objetos.",
                    "c) Diagrama de secuencia.",
                    "d) Diagrama de Entidad/Relación."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "En caso de utilizar Java para el backend, ¿qué tecnología puede utilizar para generar un cliente de servicios web?",
                "opciones": [
                    "a) Apache Flink.",
                    "b) Apache Xalan.",
                    "c) Apache Xerces.",
                    "d) Apache CXF."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En un entorno de desarrollo Java, ¿qué utilizaría para mapear elementos XML a clases?",
                "opciones": [
                    "a) JAXB.",
                    "b) JPA.",
                    "c) JAXR.",
                    "d) JAX-RS."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Está escogiendo herramientas que le permitan analizar y mejorar la calidad del código. ¿Cuál de las siguientes NO le será de ayuda?",
                "opciones": [
                    "a) SonarQube.",
                    "b) Un linter de JavaScript.",
                    "c) PMD.",
                    "d) Mercurial."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Necesita controlar el plazo de presentación de solicitudes. Suponiendo que utiliza Java en el backend, ¿qué clase nativa de Java puede utilizar para trabajar con una fecha y hora simultáneamente?",
                "opciones": [
                    "a) LocalDateTime.",
                    "b) LocalDate.",
                    "c) LocalTime.",
                    "d) OffsetTime."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Para que la aplicación de gestión pueda interactuar con esta aplicación, se va a exponer una capa de servicios web. ¿Cuál de las siguientes opciones NO es válida para documentar dichos servicios?",
                "opciones": [
                    "a) RAML.",
                    "b) REST.",
                    "c) WSDL.",
                    "d) OpenAPI/Swagger."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se desea añadir una tabla “Subsanacion” con las columnas numéricas IdSubsanacion e IdSolicitudBeca y la columna alfanumérica de 2000 caracteres TextoFundamento. ¿Cuál de las siguientes sentencias sería la correcta?",
                "opciones": [
                    "a) CREATE TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
                    "b) CREATE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
                    "c) CREATE NEW TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
                    "d) CREATE TABLE Subsanacion AS (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se espera un alto volumen de concurrencia en el sistema. ¿Qué nivel de aislamiento de base de datos debería configurar para que no se produzcan lecturas sucias ni lecturas no repetibles, pero sí lecturas fantasmas?",
                "opciones": [
                    "a) Serializable.",
                    "b) Read committed.",
                    "c) Read uncommited.",
                    "d) Repeatable read."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Se ha determinado que es necesaria la integración de la aplicación con GEISER, cuyos servicios web son de naturaleza SOAP. ¿Con qué firmará las peticiones generadas por la aplicación?",
                "opciones": [
                    "a) WS-Security.",
                    "b) SAML.",
                    "c) JWT.",
                    "d) XML-Encryption."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se quiere utilizar la librería iText de .NET para generar un documento PDF que sirva como justificante de presentación al interesado. ¿Con qué comando instalaría el paquete NuGet?",
                "opciones": [
                    "a) dotnet add package iText.",
                    "b) dotnet install package iText.",
                    "c) dotnet add iText.",
                    "d) dotnet install iText."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Según “Técnicas y Practicas” de Métrica v3, si se quisiera optimizar el modelo físico de datos para reducir o simplificar el número de accesos a la base de datos, ¿cuál de las siguientes acciones se aplicaría?",
                "opciones": [
                    "a) Combinar entidades si los accesos son frecuentes en transacciones distintas.",
                    "b) Eliminar entidades.",
                    "c) Introducir elementos redundantes.",
                    "d) Normalizar las tablas en Forma Normal de Boyce-Codd (FNBC)."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Suponiendo que se utilizara la metodología ágil SCRUM, si durante un sprint, se da cuenta de que se está aplicando una mala práctica que puede enlentecer el proyecto, ¿en qué reunión comentará esa mala práctica, para buscar la mejora continua y evitar aplicarla en los siguientes sprints?",
                "opciones": [
                    "a) En la Daily Scrum.",
                    "b) En la Sprint Retrospective.",
                    "c) En la Sprint Planning.",
                    "d) En la Sprint Review."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "También el sistema se integrará con la PID (Plataforma de Intermediación de Datos), cuya plataforma actual se define como una arquitectura orientada a servicios (SOA). ¿Cuáles son los componentes principales de esta arquitectura?",
                "opciones": [
                    "a) Servicio, Proveedor de servicios, Consumidor de servicios y Orquestador de servicios.",
                    "b) Servicio, Proveedor de servicios, Consumidor de servicios y Depurador de servicios.",
                    "c) Servicio, Proveedor de servicios, Consumidor de servicios y Comparador de servicios.",
                    "d) Servicio, Proveedor de servicios, Consumidor de servicios y Registro de servicios."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Tras estudiar varias opciones se ha decidido utilizar .NET con C# para desarrollar el backend, ¿cómo puede indicar la opcionalidad de un tipo de dato?",
                "opciones": [
                    "a) int? Telefono",
                    "b) int|null Telefono",
                    "c) int:null Telefono",
                    "d) int ?? Telefono"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Para diseñar el estilo de los campos de entrada obligatorios del formulario de solicitud se va a hacer uso del siguiente selector CSS: “input:required”. ¿Cuál es su especificidad?",
                "opciones": [
                    "a) 1-1-0.",
                    "b) 0-1-1.",
                    "c) 1-0-1.",
                    "d) 1-0-0."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "(Pregunta de reserva) Se quiere facilitar el uso de herramientas de asistencia en la página. ¿Qué atributo utilizaría para indicar que un elemento se actualizará?",
                "opciones": [
                    "a) aria-live.",
                    "b) aria-cheked.",
                    "c) aria-flowto.",
                    "d) aria-valuenow."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Para resolver una incidencia, necesita saber qué ficheros adjuntos de la solicitud del interesado con DNI 00000000T para el año 2024 no son PDF. ¿Cómo los obtendría?",
                "opciones": [
                    "a) SELECT * FROM FicheroAdjunto WHERE Denominacion LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado WHERE DocumentoIdentidad = '00000000T'));",
                    "b) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado));",
                    "c) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado WHERE DocumentoIdentidad = '00000000T'))",
                    "d) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE 'pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado WHERE DocumentoIdentidad = '00000000T'));"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) ¿Qué tendrá que configurar en el backend si quiere restringir que las únicas peticiones HTTP de origen cruzado iniciadas desde scripts que se acepten procedan del frontend?",
                "opciones": [
                    "a) HSTS.",
                    "b) CSP.",
                    "c) TLS.",
                    "d) CORS."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "(Pregunta de reserva) Quiere facilitar la incorporación de otros desarrolladores al proyecto y para ello, en el repositorio de código, va a crear un fichero en el que incluirá, entre otra información, el propósito del proyecto y cómo arrancarlo localmente. Esa información se incluirá en el fichero:",
                "opciones": [
                    "a) CODEOWNERS.",
                    "b) README.MD.",
                    "c) LICENSE.",
                    "d) CITATION."
                ],
                "respuestaCorrecta": 1
            }
        ]
    },
    {
        "id": "oep_2023_2024_sup2",
        "titulo": "OEP 2023-2024 - Supuesto II (Sistemas)",
        "contextoHTML": "<h3>Contexto</h3><p>El Ministerio de Educación, Formación Profesional y Deportes tiene una red asignada en el Plan de Direccionamiento de la AGE 10.9.0.0/16 y ha creado un organismo para la enseñanza online de formadores, OEOF, al que le ha correspondido la última de las subredes de las 16 en las que se ha dividido la red ministerial.</p><p>El sistema de enseñanza online de formadores se fundamenta en un servidor de formación accesible también desde Internet en la URL https://www.profesores.es. Los servidores de este sistema (web, http, DNS, DHCP, LDAP), se van a instalar con sistema operativo Linux Ubuntu. El portal web está montado usando Apache Tomcat.</p><p>El certificado del portal (SSL) estará asociado al dominio profesores.es. Para poder gestionar el correo de los profesores, se ha instalado un servidor de correo con tecnología Postfix.</p><p>Los DNS se han instalado usando el software BIND así como la asignación dinámica de direcciones IP mediante DHCP.</p><p>Hay un servidor llamado BIBLIOTECA que contiene un compendio de documentos e información de utilidad para los profesores. El acceso está permitido por RDP, restringido al Grupo de Profesores del Directorio Activo. La base de datos de la biblioteca es MySQL.</p><p>Además, sobre servidores Ubuntu, se han instalado herramientas de detección de vulnerabilidades (Tenable Nessus y Nmap) y de monitorización de sistemas y de aplicaciones web (Nagios). Los usuarios de la red (profesores) usan escritorios virtuales. Los switches para configurar las VLANs son CISCO (usan sistema operativo Cisco IOS).</p><p>El CPD principal del organismo tiene un respaldo en un CPD secundario, pero no está configurado como activo-activo. Tiene redundancia de componentes y de suministro eléctrico y de red. El CPD es TIER III.</p><p>Salvo que se indique lo contrario en el enunciado, se supone que usted posee permisos de administrador.</p>",
        "preguntas": [
            {
                "pregunta": "¿Cuántas direcciones hay disponibles para hosts en la subred del organismo?",
                "opciones": [
                    "a) 4094",
                    "b) 65534",
                    "c) 4096",
                    "d) 65536"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Al arrancar el servidor donde se aloja la web de profesores, aparecen errores en la partición sda8. ¿Qué comando hay que usar para reparar de forma automática los errores en el sistema de ficheros correspondiente, que no ha podido montarse?",
                "opciones": [
                    "a) mount –T /dev/sda8",
                    "b) fsck -y /dev/sda8",
                    "c) fsck -m /dev/sda8",
                    "d) checkdisk /dev/sda8"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Analizando la seguridad del sistema, surge la duda de si abrir o no el puerto 80 en un servidor web expuesto mediante HTTPS. El Centro Criptológico Nacional recomienda:",
                "opciones": [
                    "a) Exhibir una web estática en el puerto 80 indicando que esa no es la web actual.",
                    "b) Cambiar el puerto HTTPS al 8892.",
                    "c) Utilizar un analizador de peticiones en las cabeceras HTTP en el puerto 80.",
                    "d) Disponer del puerto TCP/80, configurando el servidor web para que lleve a cabo una redirección automática de HTTP a HTTPS."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "El CPD donde está alojado el sistema tiene una puerta cuyo control de acceso es con tarjeta inteligente y PIN, que sólo conocen los operadores. Hace dos días, se supo que alguien no autorizado había entrado esperando agazapado a que alguien autorizado entrase, pasando detrás de él sin que éste advirtiera que tenía a un intruso detrás. Este incidente de ingeniería social en seguridad física se conoce con el nombre de:",
                "opciones": [
                    "a) Tailgating o piggybacking.",
                    "b) Quid pro quo.",
                    "c) Pretexto.",
                    "d) Disrupción."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "El organismo tiene, para controlar la seguridad física del CPD, un circuito cerrado de televisión con cámaras que usa una red coaxial y se necesita interconectar esta red a la red local Ethernet para poder monitorizarlas. ¿Con qué dispositivo de red puede hacerlo?",
                "opciones": [
                    "a) Un cortafuegos (firewall).",
                    "b) Una pasarela (gateway).",
                    "c) Un conmutador (switch).",
                    "d) Un repetidor (repeater)."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "En el sistema se utilizan los protocolos DNS y FTP seguro. De acuerdo con el modelo TCP/IP, estos protocolos se diferencian en que:",
                "opciones": [
                    "a) DNS es un protocolo de usuario y FTP es un protocolo de soporte.",
                    "b) DNS es siempre un protocolo orientado a la conexión mientras que FTP no.",
                    "c) No existe diferencia entre ambos protocolos, ambos son protocolos de soporte.",
                    "d) FTP es un protocolo de usuario y DNS es un protocolo de soporte."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "En un switch Cisco que hay en la organización, se ejecuta el comando “switchport access vlan 1”. Esto permitirá:",
                "opciones": [
                    "a) Asignar un puerto a la VLAN 1.",
                    "b) Asignar el puerto 1 del switch a la VLAN donde estamos situados en la consola del switch.",
                    "c) Visualizar todos los hosts asignados a la VLAN 1.",
                    "d) Asignar todos los hosts conectados a cualquier puerto del switch a la VLAN 1."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "La base de datos se ha corrompido y además, los usuarios no pueden acceder a la información. Se tiene toda la información de cómo se produjo el incidente y cuál es la persona que lo ha causado y por qué, pero, este incidente, ¿a qué dimensión o dimensiones de la seguridad afecta?",
                "opciones": [
                    "a) A la disponibilidad porque no está accesible la base de datos y la integridad porque el fichero de la base de datos está corrupto.",
                    "b) A la confidencialidad porque los datos, una vez dañados, pueden ser accesibles por cualquiera.",
                    "c) Sólo a la disponibilidad porque la base de datos está temporalmente fuera de servicio hasta que se repare si es posible el fichero donde se aloja.",
                    "d) A la trazabilidad, porque no podremos averiguar lo que ha pasado por mucho que nos esforcemos, la seguridad es así."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "La red de área local está implementada con Gigabit Ethernet y, al conectar un nuevo dispositivo a la red, en su tarjeta, parpadea una luz de color naranja. ¿A qué puede deberse?",
                "opciones": [
                    "a) A que está mal configurada la VLAN donde está ubicado el dispositivo.",
                    "b) A que la tarjeta de red del dispositivo transmite a menor velocidad de la que permite la red.",
                    "c) A que la tarjeta de red está estropeada y no hay conexión entre el dispositivo y la red.",
                    "d) A que el cable del dispositivo es coaxial y no Ethernet."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Nos anuncian que hay una vulnerabilidad que afecta a una determinada versión del kernel de Linux Ubuntu. ¿Con qué comando podemos saber qué versión del kernel tiene nuestro sistema operativo Ubuntu?",
                "opciones": [
                    "a) sudo dpkg -i linux*.deb",
                    "b) uname -r",
                    "c) uname -o",
                    "d) kexec -l"
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Para descargar algunos ficheros del servidor BIBLIOTECA, los administradores están sopesando entre el uso de SFTP y FTPS. Indique, de las siguientes afirmaciones, la INCORRECTA:",
                "opciones": [
                    "a) SFTP usa típicamente el puerto 22 de SSH mientras que FTPS usa el puerto en el que tengamos definido el protocolo SSL/TLS.",
                    "b) SFTP usa autenticación con certificado (clave pública) mientras que FTPS usa autenticación con usuario y contraseña.",
                    "c) FTPS usa dos puertos, uno para los comandos y otro para descargarse los datos mientras que SFTP usa el mismo puerto para ambas tareas.",
                    "d) FTPS no contiene comandos estandarizados para manipular directorios o listar atributos, mientras que SFTP sí."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Para la detección de malware complejo y movimiento lateral relacionado con APTs (Advanced Persistent Threats), se ha instalado en los PC de los profesores, la solución del CCN, CLAUDIA. ¿Cómo define el Centro Criptológico Nacional una APT?",
                "opciones": [
                    "a) Es un tipo de ransomware como, por ejemplo, WannaCry, que te cifra los archivos del PC y se requiere la clave de descifrado a cambio del pago de un rescate.",
                    "b) Es un ataque de suplantación de identidad de un usuario corriente en un organismo para después mediante escalada de privilegios obtener las credenciales de un alto cargo de la empresa u organización.",
                    "c) Es un ataque selectivo de ciberespionaje o cibersabotaje llevado a cabo bajo el auspicio o la dirección de un país u organización adversaria, por razones que van más allá de las meramente financieras/delictivas o de protesta política.",
                    "d) Es un ataque masivo a una organización ocurrido por un fallo que no se había advertido hasta ese momento y, por tanto, no se cuenta con la salvaguarda o parche para prevenirlo."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Para mejorar la escalabilidad del sistema, está estudiando implantar una arquitectura de microservicios con Kubernetes. ¿Qué protocolos para servicios pueden utilizarse con Kubernetes?",
                "opciones": [
                    "a) SCTP, TCP (por defecto) y UDP.",
                    "b) HTTP (por defecto), HTTPS y FTP.",
                    "c) SSH, SFTP (por defecto) y UDP.",
                    "d) UDP (por defecto) y TCP."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Para poder atender las llamadas de las guardias de sistemas, se han comprado veinte móviles. Su responsable le pide realizar el enrolamiento de estos móviles, pero, ¿en qué consiste esta tarea?",
                "opciones": [
                    "a) Emparejar, en el sistema MDM (Mobile Device Management) de la organización, a cada usuario con su móvil.",
                    "b) Dar de alta en una base de datos de administración todos los dispositivos móviles.",
                    "c) Insertar la tarjeta SIM correspondiente a cada móvil.",
                    "d) Formatear a fábrica todos los dispositivos móviles."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "Se ha descargado del sitio web del CCN-CERT una herramienta de antimalware y justo debajo aparece un hash de comprobación. ¿Qué tipo de medida de seguridad es este hash en este contexto?",
                "opciones": [
                    "a) Una medida antimalware, pues el hash aplicado al fichero descargado nos sanitiza el fichero y ya se puede usar sin problemas, pues está limpio de malware, lo cual en una herramienta antimalware es altamente necesario.",
                    "b) Una medida para asegurar la integridad del fichero de descarga, pues si al calcular nosotros el hash del fichero descargado no coincide con el que nos aparece en la página del CCN, el fichero descargado no sería válido para su uso.",
                    "c) El hash es la firma del CCN como autoridad de certificación de productos que garantiza que el software descargado es apto para ser usado en sistemas categorizados como de nivel ALTO o incluso en sistemas clasificados como reservado nacional.",
                    "d) El hash es la firma del CCN de la página web donde se presenta la herramienta que estamos intentando descargar y es una medida para evitar que los hackers puedan manipular la página y subir otro fichero en vez del que se pretende descargar."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha implantado una solución VoIP que usa el protocolo SIP pero, al establecer sesiones con usuarios de fuera del organismo, la llamada se corta o congela y después, se restablece. Este problema no sucede en sesiones entre usuarios internos del organismo, ¿por qué puede ser?",
                "opciones": [
                    "a) Se están usando incorrectamente los códecs.",
                    "b) La salida a Internet está empleando NAT.",
                    "c) El tráfico entre origen y destino está interceptado en el cortafuegos de Internet.",
                    "d) La CPU del ordenador es insuficiente y provoca estos problemas."
                ],
                "respuestaCorrecta": 1
            },
            {
                "pregunta": "Se ha instalado un servidor de correo con Postfix y se está decidiendo si utilizar POP3 o IMAP en los clientes de correo. ¿Cuál de las siguientes opciones es INCORRECTA?",
                "opciones": [
                    "a) Con IMAP, los mensajes se almacenan en un servidor remoto y los usuarios pueden iniciar sesión en varios clientes de correo electrónico y leer los mismos mensajes.",
                    "b) POP3 solo admite la sincronización de correo unidireccional, lo que solo permite a los usuarios descargar correos electrónicos desde un servidor a un cliente.",
                    "c) Con IMAP, el correo enviado y recibido se almacena en el servidor hasta que el usuario lo elimina permanentemente.",
                    "d) Con POP3, si los usuarios organizan sus correos electrónicos en un dispositivo mediante carpetas, ya no tendrán que hacerlo en el resto de dispositivos porque se replica la organización en carpetas."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "Se necesita saber los usuarios que acceden a la base de datos de la biblioteca y desde qué host o IP. Para averiguarlo, en la consola de administración de la base de datos, ejecutará el comando:",
                "opciones": [
                    "a) SELECT * FROM all_users",
                    "b) mysql> SELECT user FROM mysql.user",
                    "c) mysql> SELECT user,host FROM mysql.user",
                    "d) sudo mysql -u root -p"
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "Se quiere aplicar políticas de seguridad al grupo de usuarios Profesores utilizando Directorio Activo y GPOs. Una buena práctica es definir primero:",
                "opciones": [
                    "a) Una Unidad Organizativa (OU) para el grupo de usuarios Profesores.",
                    "b) Las ACLs (Access Control Lists) que tendrán las GPO del grupo de usuarios Profesores.",
                    "c) Un nuevo bosque de Directorio Activo.",
                    "d) Relaciones de confianza entre el Directorio Activo actual y el dominio de seguridad del grupo de usuarios Profesores."
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Como administrador de correo, quiere cambiar el mensaje HELO que aparece cuando se establecen conexiones al servidor SMTP. Actualmente aparece el nombre del servidor, pero quiere que muestre \"CORREOBIBLIOTECA\" y además, que el cambio se aplique en todos los servidores SMTP que existan, no solo en aquel en el que está trabajando. ¿Cómo lo haría?",
                "opciones": [
                    "a) Editando el parámetro $client en el fichero /etc/postfix/main.cf y reiniciando posteriormente el servidor Postfix.",
                    "b) Accediendo al servidor SMTP y ejecutando EHLO -name CORREOBIBLIOTECA en la consola.",
                    "c) Editando el parámetro smtp_helo en el fichero /etc/postfix/master.cf y reiniciando posteriormente el servidor Postfix.",
                    "d) Editando el parámetro $helo_name en /etc/postfix/main.cf y reiniciando posteriormente el servidor Postfix."
                ],
                "respuestaCorrecta": 3
            },
            {
                "pregunta": "(Pregunta de reserva) Como no hay suficientes tomas Ethernet en la zona física donde están los profesores, se va a instalar una red WiFi con protocolo WPA3-Enterprise. En este caso, para acceder a la red WiFi habrá que utilizar:",
                "opciones": [
                    "a) Una contraseña de 64 bits.",
                    "b) Una contraseña de 128 bits.",
                    "c) Un servidor RADIUS o cualquier solución que permita EAP-TLS.",
                    "d) Una contraseña de 192 bits usando el algoritmo GMCP-256."
                ],
                "respuestaCorrecta": 2
            },
            {
                "pregunta": "(Pregunta de reserva) En la base de datos MySQL de Profesores, nos piden que añadamos una tabla de los profesores para el curso de INGLES BASICO, que se llamará \"ProfesoresIngles\" con sus nombres y apellidos. Para ello, y tras acceder como root a MYSQL, ingresaremos el comando:",
                "opciones": [
                    "a) CREATE TABLE ProfesoresIngles (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(30), apellido1 VARCHAR(30), apellido2 VARCHAR(30));",
                    "b) CREATE TABLE ProfesoresIngles KEY id, nombre, apellidos;",
                    "c) CREAR TABLA ProfesoresIngles KEY apellidos, nombre;",
                    "d) CREATE TABLE ProfesoresIngles (nombre, apellido);"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Ha instalado el servicio Nagios para monitorizar los servidores y servicios en su sistema y quiere monitorizar, además, la URL de profesores (https://profesores.es), pero antes quiere comprobar que este servicio está configurado correctamente. Para ello, utilizará el comando:",
                "opciones": [
                    "a) nagios –v /usr/local/nagios/etc/nagios.cfg",
                    "b) /mnt/nagios –check",
                    "c) systemctl status nagios",
                    "d) https://profesores.es nagios"
                ],
                "respuestaCorrecta": 0
            },
            {
                "pregunta": "(Pregunta de reserva) Se ha instalado un servidor web con HTTPS y certificado SSL de servidor para proteger la conexión entre los clientes y el servidor, para lo cual la conexión usará TLS. Según las recomendaciones del Centro Criptológico Nacional, ¿cuál es la versión mínima y la recomendada a usar en TLS?",
                "opciones": [
                    "a) La versión mínima aceptable es la 1.1 y se recomienda usar esa misma versión 1.1",
                    "b) La versión mínima aceptable es la 1.0 y se recomienda usar 1.1",
                    "c) La versión mínima aceptable es la 1.2 y se recomienda usar la 1.3",
                    "d) La versión mínima aceptable es la 1.1 y se recomienda usar la 1.3"
                ],
                "respuestaCorrecta": 2
            }
        ]
    }
];
