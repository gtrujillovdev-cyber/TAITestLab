const baseDeDatos = [
    // BLOQUE I - Organización del Estado y Administración electrónica
    {
        "bloque": "I",
        "tema": 1,
        "pregunta": "¿Qué artículo de la Constitución Española de 1978 establece que la soberanía nacional reside en el pueblo español?",
        "opciones": ["a) Artículo 1.1", "b) Artículo 1.2", "c) Artículo 2", "d) Artículo 9.3"],
        "respuesta": "b"
    },
    {
        "bloque": "I",
        "tema": 2,
        "pregunta": "¿Quién es el Alto Comisionado de las Cortes Generales encargado de defender los derechos fundamentales?",
        "opciones": ["a) El Presidente del Tribunal Constitucional", "b) El Defensor del Pueblo", "c) El Rey", "d) El Fiscal General del Estado"],
        "respuesta": "b"
    },
    {
        "bloque": "I",
        "tema": 4,
        "pregunta": "Según el TREBEP, ¿qué tipo de personal es aquel nombrado para funciones expresamente calificadas de confianza o asesoramiento especial?",
        "opciones": ["a) Funcionario de carrera", "b) Funcionario interino", "c) Personal laboral", "d) Personal eventual"],
        "respuesta": "d"
    },
    {
        "bloque": "I",
        "tema": 6,
        "pregunta": "¿Qué documento emitido por la Dirección General de la Policía acredita electrónicamente la identidad personal de su titular?",
        "opciones": ["a) El Certificado FNMT", "b) El DNI electrónico", "c) La firma biométrica", "d) El pasaporte estándar"],
        "respuesta": "b"
    },
    {
        "bloque": "I",
        "tema": 7,
        "pregunta": "En materia de Protección de Datos, ¿qué derecho permite al interesado exigir que sus datos personales sean borrados cuando ya no sean necesarios para los fines que fueron recogidos?",
        "opciones": ["a) Derecho de acceso", "b) Derecho de portabilidad", "c) Derecho de supresión (olvido)", "d) Derecho de oposición"],
        "respuesta": "c"
    },
    {
        "bloque": "I",
        "tema": 8,
        "pregunta": "¿Qué esquema tiene por objeto establecer la política de seguridad en la utilización de medios electrónicos en el sector público español?",
        "opciones": ["a) Esquema Nacional de Interoperabilidad (ENI)", "b) Esquema Nacional de Seguridad (ENS)", "c) Reglamento General de Protección de Datos (RGPD)", "d) Plan de Transformación Digital"],
        "respuesta": "b"
    },

    // BLOQUE II - Tecnología básica
    {
        "bloque": "II",
        "tema": 1,
        "pregunta": "En la arquitectura de ordenadores, ¿qué componente de la CPU se encarga de decodificar las instrucciones?",
        "opciones": ["a) La ALU (Unidad Aritmético Lógica)", "b) La Unidad de Control (UC)", "c) El bus de datos", "d) La memoria caché"],
        "respuesta": "b"
    },
    {
        "bloque": "II",
        "tema": 2,
        "pregunta": "¿Cuál de los siguientes es un dispositivo de almacenamiento de estado sólido sin partes mecánicas móviles?",
        "opciones": ["a) HDD", "b) Cinta magnética", "c) SSD", "d) CD-ROM"],
        "respuesta": "c"
    },
    {
        "bloque": "II",
        "tema": 3,
        "pregunta": "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        "opciones": ["a) Cola (Queue)", "b) Lista enlazada", "c) Pila (Stack)", "d) Árbol binario"],
        "respuesta": "c"
    },
    {
        "bloque": "II",
        "tema": 4,
        "pregunta": "En sistemas Linux, ¿qué directorio se utiliza habitualmente para almacenar los archivos de configuración del sistema?",
        "opciones": ["a) /bin", "b) /home", "c) /var", "d) /etc"],
        "respuesta": "d"
    },
    {
        "bloque": "II",
        "tema": 5,
        "pregunta": "¿Qué tipo de bases de datos son MongoDB o Cassandra?",
        "opciones": ["a) Relacionales", "b) NoSQL", "c) Jerárquicas estáticas", "d) Orientadas a objetos puras"],
        "respuesta": "b"
    },

    // BLOQUE III - Desarrollo de sistemas
    {
        "bloque": "III",
        "tema": 1,
        "pregunta": "En el modelo E-R, si una entidad A se relaciona con muchas entidades de B, y una entidad B solo se relaciona con una de A, la cardinalidad es:",
        "opciones": ["a) 1:1", "b) 1:N", "c) N:M", "d) Recursiva"],
        "respuesta": "b"
    },
    {
        "bloque": "III",
        "tema": 3,
        "pregunta": "En SQL, ¿qué comando pertenece al DDL (Data Definition Language) y sirve para eliminar una tabla entera?",
        "opciones": ["a) DELETE", "b) DROP TABLE", "c) TRUNCATE", "d) REMOVE"],
        "respuesta": "b"
    },
    {
        "bloque": "III",
        "tema": 4,
        "pregunta": "En Programación Orientada a Objetos, ¿cómo se llama el mecanismo por el cual una clase hereda las propiedades de otra?",
        "opciones": ["a) Polimorfismo", "b) Encapsulamiento", "c) Herencia", "d) Abstracción"],
        "respuesta": "c"
    },
    {
        "bloque": "III",
        "tema": 7,
        "pregunta": "¿Qué lenguaje de marcas se utiliza primordialmente para definir la estructura y el contenido de una página web?",
        "opciones": ["a) CSS", "b) JavaScript", "c) PHP", "d) HTML"],
        "respuesta": "d"
    },
    {
        "bloque": "III",
        "tema": 8,
        "pregunta": "¿Qué acrónimo representa las pautas de accesibilidad para el contenido web publicadas por el W3C?",
        "opciones": ["a) WCAG", "b) WSDL", "c) ACID", "d) POUR"],
        "respuesta": "a"
    },
    {
        "bloque": "III",
        "tema": 9,
        "pregunta": "¿Cómo se llama el tipo de mantenimiento de software que tiene como objetivo corregir errores o 'bugs'?",
        "opciones": ["a) Evolutivo", "b) Perfectivo", "c) Correctivo", "d) Adaptativo"],
        "respuesta": "c"
    },

    // BLOQUE IV - Sistemas y comunicaciones
    {
        "bloque": "IV",
        "tema": 2,
        "pregunta": "¿Qué tecnología permite que múltiples sistemas operativos se ejecuten simultáneamente en una misma máquina física?",
        "opciones": ["a) Contenerización", "b) Virtualización", "c) Backup diferencial", "d) RAID 0"],
        "respuesta": "b"
    },
    {
        "bloque": "IV",
        "tema": 5,
        "pregunta": "En criptografía, ¿qué tipo de clave utiliza el algoritmo RSA?",
        "opciones": ["a) Simétrica", "b) Asimétrica (clave pública y privada)", "c) Hash irreversible", "d) Código César"],
        "respuesta": "b"
    },
    {
        "bloque": "IV",
        "tema": 7,
        "pregunta": "En el modelo OSI, ¿qué capa se encarga del enrutamiento de paquetes y utiliza direcciones IP?",
        "opciones": ["a) Capa de Enlace", "b) Capa de Red", "c) Capa de Transporte", "d) Capa de Sesión"],
        "respuesta": "b"
    },
    {
        "bloque": "IV",
        "tema": 8,
        "pregunta": "¿Qué protocolo seguro se utiliza para la transferencia de hipertexto en la Web moderna?",
        "opciones": ["a) HTTP", "b) FTP", "c) HTTPS", "d) Telnet"],
        "respuesta": "c"
    },
    {
        "bloque": "IV",
        "tema": 9,
        "pregunta": "¿Qué tecnología permite crear un canal cifrado y seguro (túnel) a través de Internet para conectar un usuario con su red corporativa?",
        "opciones": ["a) VLAN", "b) VPN", "c) NAT", "d) ARP"],
        "respuesta": "b"
    },
    {
        "bloque": "IV",
        "tema": 10,
        "pregunta": "¿Qué topología de red LAN conecta todos los nodos a un dispositivo central (como un Switch)?",
        "opciones": ["a) Anillo", "b) Bus", "c) Estrella", "d) Malla"],
        "respuesta": "c"
    }
,
    {"bloque": "I", "tema": 1, "pregunta": "En la Constitución Española, el Título Preliminar comprende los artículos:", "opciones": ["a) 1 al 9", "b) 1 al 10", "c) 1 al 14", "d) 1 al 5"], "respuesta": "a"},
    {"bloque": "I", "tema": 4, "pregunta": "Según la Ley 39/2015, ¿tienen los sábados la consideración de días hábiles?", "opciones": ["a) Sí, siempre.", "b) No, se consideran inhábiles.", "c) Solo en la Administración Local.", "d) Solo si lo establece un Reglamento."], "respuesta": "b"},
    {"bloque": "I", "tema": 6, "pregunta": "¿Qué Ley regula actualmente la Firma Electrónica en España?", "opciones": ["a) Ley 59/2003", "b) Ley 6/2020", "c) Ley 39/2015", "d) Ley 11/2007"], "respuesta": "b"},
    {"bloque": "I", "tema": 8, "pregunta": "El Esquema Nacional de Seguridad (ENS) se regula mediante el:", "opciones": ["a) RD 3/2010", "b) RD 311/2022", "c) RD 4/2010", "d) RD 203/2021"], "respuesta": "b"},
    {"bloque": "II", "tema": 1, "pregunta": "Un byte está compuesto por:", "opciones": ["a) 4 bits", "b) 8 bits", "c) 16 bits", "d) 32 bits"], "respuesta": "b"},
    {"bloque": "II", "tema": 2, "pregunta": "¿Cuál es la velocidad máxima teórica de un puerto USB 3.0?", "opciones": ["a) 480 Mbps", "b) 5 Gbps", "c) 10 Gbps", "d) 40 Gbps"], "respuesta": "b"},
    {"bloque": "II", "tema": 4, "pregunta": "En Unix/Linux, ¿qué comando muestra los procesos en ejecución interactiva y en tiempo real?", "opciones": ["a) ps", "b) ls", "c) top", "d) grep"], "respuesta": "c"},
    {"bloque": "II", "tema": 4, "pregunta": "En Windows, ¿qué sistema de archivos es el más habitual hoy en día, permitiendo cifrado y cuotas de disco?", "opciones": ["a) FAT32", "b) exFAT", "c) NTFS", "d) ReFS"], "respuesta": "c"},
    {"bloque": "III", "tema": 1, "pregunta": "En el modelo relacional, la regla de integridad referencial asegura que:", "opciones": ["a) No haya nulos en la clave primaria.", "b) El valor de la clave ajena coincida con el valor de la clave primaria referenciada o sea nulo.", "c) No existan filas repetidas.", "d) Todos los atributos atómicos tengan el mismo dominio."], "respuesta": "b"},
    {"bloque": "III", "tema": 3, "pregunta": "¿Qué sentencia SQL se utiliza para dar privilegios a un usuario sobre una base de datos?", "opciones": ["a) ALLOW", "b) GRANT", "c) PERMIT", "d) ASSIGN"], "respuesta": "b"},
    {"bloque": "III", "tema": 4, "pregunta": "¿En qué paradigma de programación se basa el encapsulamiento?", "opciones": ["a) Funcional", "b) Procedimental", "c) Orientada a Objetos", "d) Estructurada"], "respuesta": "c"},
    {"bloque": "III", "tema": 5, "pregunta": "En Java, ¿qué palabra reservada se usa para heredar de una clase?", "opciones": ["a) implements", "b) inherits", "c) extends", "d) overrides"], "respuesta": "c"},
    {"bloque": "III", "tema": 9, "pregunta": "¿Qué comando en Git se usa para subir los cambios del repositorio local al remoto?", "opciones": ["a) git fetch", "b) git pull", "c) git push", "d) git commit"], "respuesta": "c"},
    {"bloque": "III", "tema": 8, "pregunta": "Según las pautas WCAG, asegurar que el texto tiene contraste suficiente con su fondo se asocia al principio:", "opciones": ["a) Operable", "b) Perceptible", "c) Comprensible", "d) Robusto"], "respuesta": "b"},
    {"bloque": "IV", "tema": 7, "pregunta": "En la pila de protocolos TCP/IP, ¿en qué capa se ubica el protocolo UDP?", "opciones": ["a) Capa de Aplicación", "b) Capa de Internet", "c) Capa de Transporte", "d) Capa de Acceso a la Red"], "respuesta": "c"},
    {"bloque": "IV", "tema": 8, "pregunta": "¿Qué puerto estándar utiliza el protocolo SMTP para la transmisión de correo saliente?", "opciones": ["a) 21", "b) 25", "c) 110", "d) 143"], "respuesta": "b"},
    {"bloque": "IV", "tema": 3, "pregunta": "¿Qué puerto por defecto usa el protocolo POP3?", "opciones": ["a) 25", "b) 53", "c) 110", "d) 443"], "respuesta": "c"},
    {"bloque": "IV", "tema": 10, "pregunta": "El estándar IEEE 802.11 define las especificaciones para redes:", "opciones": ["a) Ethernet cableadas", "b) Redes LAN inalámbricas (Wi-Fi)", "c) Redes de área metropolitana", "d) Bluetooth"], "respuesta": "b"},
    {"bloque": "IV", "tema": 5, "pregunta": "En un CPD, los sistemas de alimentación ininterrumpida (SAI/UPS) se instalan principalmente para garantizar la:", "opciones": ["a) Confidencialidad", "b) Disponibilidad", "c) Integridad", "d) Autenticación"], "respuesta": "b"},
    {"bloque": "IV", "tema": 6, "pregunta": "¿Cuál de las siguientes es una fibra óptica en la que la luz se propaga en un solo camino, permitiendo mayores distancias?", "opciones": ["a) Fibra Multimodo de índice escalonado", "b) Fibra Multimodo de índice gradual", "c) Fibra Monomodo", "d) Cable coaxial ciego"], "respuesta": "c"}
];
