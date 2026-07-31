const baseDeSupuestos = [
    {
        "id": "oep_2020_2022_sup2",
        "titulo": "OEP 2020-2022 - Supuesto II (Redes y Sistemas)",
        "contextoHTML": `
            <h3>Contexto</h3>
            <p>La Subdirección General de Informática del Organismo en el que recientemente Vd. ha tomado posesión y a través de su departamento de Sistemas, Comunicaciones y Seguridad, ha decidido acometer un cambio de diseño en la infraestructura de la red informática del departamento y Vd. debe colaborar en su implantación.</p>
            <p>Se parte de la situación inicial donde hay una única red con el siguiente direccionamiento IP 10.20.30.0/24 donde residen:</p>
            <ul>
                <li>Los equipos informáticos de los usuarios</li>
                <li>Las aplicaciones informáticas</li>
                <li>Las Bases de Datos Oracle y MySql</li>
                <li>La conexión a Internet del departamento</li>
            </ul>
            <p>Después de varios estudios se concluye que se debe realizar una segmentación de la red actual en cuatro subredes:</p>
            <ul>
                <li>Primera Subred para los PCs de usuario</li>
                <li>Segunda Subred para las Bases de Datos</li>
                <li>Tercera Subred para las Aplicaciones</li>
                <li>Cuarta Subred para utilizarla como DMZ</li>
            </ul>
            <p>Se instalará una pareja de Firewalls o Cortafuegos formando un clúster donde se implementarán las reglas necesarias para las conectividades y encaminamientos entre Subredes.</p>
            <p><em>Nota aclaratoria: los PCs de Usuario tienen sistema operativo Windows 10 y tanto los servidores para Aplicaciones, Base de Datos y DMZ tienen sistema operativo Linux RedHat RHEL7.4</em></p>
        `,
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
    }
];
