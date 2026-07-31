// ======================================================================
// Banco de preguntas — TAI Prep
// Esquema único (canónico) por pregunta:
//   id            : identificador estable (usado en localStorage para fallos/historial)
//   bloque        : "I" | "II" | "III" | "IV"
//   tema          : número de tema dentro del bloque (null si es de un examen oficial
//                    y no se ha podido acotar a un único tema del temario)
//   origen        : "temario"  -> pregunta de elaboración propia sobre el resumen del tema
//                    "oficial"  -> pregunta real de un examen oficial (OEP)
//   pregunta      : enunciado
//   opciones      : array de 4 textos, SIN prefijo "a)" "b)"... (la app genera las letras)
//   respuestaIndex: índice (0-based) de la opción correcta dentro de "opciones"
//   oposiciones   : array de administraciones a las que aplica
//                    ["AGE","SAS","Junta de Andalucía","Diputación de Sevilla"],
//                    o null si es una pregunta de cultura TIC general aplicable a todas
// ======================================================================

const baseDeDatos = [
    {
        "id": 0,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "¿Qué artículo de la Constitución Española de 1978 establece que la soberanía nacional reside en el pueblo español?",
        "opciones": [
            "Artículo 1.1",
            "Artículo 1.2",
            "Artículo 2",
            "Artículo 9.3"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 1,
        "bloque": "I",
        "tema": 2,
        "origen": "temario",
        "pregunta": "¿Quién es el Alto Comisionado de las Cortes Generales encargado de defender los derechos fundamentales?",
        "opciones": [
            "El Presidente del Tribunal Constitucional",
            "El Defensor del Pueblo",
            "El Rey",
            "El Fiscal General del Estado"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 2,
        "bloque": "I",
        "tema": 4,
        "origen": "temario",
        "pregunta": "Según el TREBEP, ¿qué tipo de personal es aquel nombrado para funciones expresamente calificadas de confianza o asesoramiento especial?",
        "opciones": [
            "Funcionario de carrera",
            "Funcionario interino",
            "Personal laboral",
            "Personal eventual"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 3,
        "bloque": "I",
        "tema": 6,
        "origen": "temario",
        "pregunta": "¿Qué documento emitido por la Dirección General de la Policía acredita electrónicamente la identidad personal de su titular?",
        "opciones": [
            "El Certificado FNMT",
            "El DNI electrónico",
            "La firma biométrica",
            "El pasaporte estándar"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 4,
        "bloque": "I",
        "tema": 7,
        "origen": "temario",
        "pregunta": "En materia de Protección de Datos, ¿qué derecho permite al interesado exigir que sus datos personales sean borrados cuando ya no sean necesarios para los fines que fueron recogidos?",
        "opciones": [
            "Derecho de acceso",
            "Derecho de portabilidad",
            "Derecho de supresión (olvido)",
            "Derecho de oposición"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 5,
        "bloque": "I",
        "tema": 8,
        "origen": "temario",
        "pregunta": "¿Qué esquema tiene por objeto establecer la política de seguridad en la utilización de medios electrónicos en el sector público español?",
        "opciones": [
            "Esquema Nacional de Interoperabilidad (ENI)",
            "Esquema Nacional de Seguridad (ENS)",
            "Reglamento General de Protección de Datos (RGPD)",
            "Plan de Transformación Digital"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 6,
        "bloque": "II",
        "tema": 1,
        "origen": "temario",
        "pregunta": "En la arquitectura de ordenadores, ¿qué componente de la CPU se encarga de decodificar las instrucciones?",
        "opciones": [
            "La ALU (Unidad Aritmético Lógica)",
            "La Unidad de Control (UC)",
            "El bus de datos",
            "La memoria caché"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 7,
        "bloque": "II",
        "tema": 2,
        "origen": "temario",
        "pregunta": "¿Cuál de los siguientes es un dispositivo de almacenamiento de estado sólido sin partes mecánicas móviles?",
        "opciones": [
            "HDD",
            "Cinta magnética",
            "SSD",
            "CD-ROM"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 8,
        "bloque": "II",
        "tema": 3,
        "origen": "temario",
        "pregunta": "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        "opciones": [
            "Cola (Queue)",
            "Lista enlazada",
            "Pila (Stack)",
            "Árbol binario"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 9,
        "bloque": "II",
        "tema": 4,
        "origen": "temario",
        "pregunta": "En sistemas Linux, ¿qué directorio se utiliza habitualmente para almacenar los archivos de configuración del sistema?",
        "opciones": [
            "/bin",
            "/home",
            "/var",
            "/etc"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 10,
        "bloque": "II",
        "tema": 5,
        "origen": "temario",
        "pregunta": "¿Qué tipo de bases de datos son MongoDB o Cassandra?",
        "opciones": [
            "Relacionales",
            "NoSQL",
            "Jerárquicas estáticas",
            "Orientadas a objetos puras"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 11,
        "bloque": "III",
        "tema": 1,
        "origen": "temario",
        "pregunta": "En el modelo E-R, si una entidad A se relaciona con muchas entidades de B, y una entidad B solo se relaciona con una de A, la cardinalidad es:",
        "opciones": [
            "1:1",
            "1:N",
            "N:M",
            "Recursiva"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 12,
        "bloque": "III",
        "tema": 3,
        "origen": "temario",
        "pregunta": "En SQL, ¿qué comando pertenece al DDL (Data Definition Language) y sirve para eliminar una tabla entera?",
        "opciones": [
            "DELETE",
            "DROP TABLE",
            "TRUNCATE",
            "REMOVE"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 13,
        "bloque": "III",
        "tema": 4,
        "origen": "temario",
        "pregunta": "En Programación Orientada a Objetos, ¿cómo se llama el mecanismo por el cual una clase hereda las propiedades de otra?",
        "opciones": [
            "Polimorfismo",
            "Encapsulamiento",
            "Herencia",
            "Abstracción"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 14,
        "bloque": "III",
        "tema": 7,
        "origen": "temario",
        "pregunta": "¿Qué lenguaje de marcas se utiliza primordialmente para definir la estructura y el contenido de una página web?",
        "opciones": [
            "CSS",
            "JavaScript",
            "PHP",
            "HTML"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 15,
        "bloque": "III",
        "tema": 8,
        "origen": "temario",
        "pregunta": "¿Qué acrónimo representa las pautas de accesibilidad para el contenido web publicadas por el W3C?",
        "opciones": [
            "WCAG",
            "WSDL",
            "ACID",
            "POUR"
        ],
        "respuestaIndex": 0,
        "oposiciones": null
    },
    {
        "id": 16,
        "bloque": "III",
        "tema": 9,
        "origen": "temario",
        "pregunta": "¿Cómo se llama el tipo de mantenimiento de software que tiene como objetivo corregir errores o 'bugs'?",
        "opciones": [
            "Evolutivo",
            "Perfectivo",
            "Correctivo",
            "Adaptativo"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 17,
        "bloque": "IV",
        "tema": 2,
        "origen": "temario",
        "pregunta": "¿Qué tecnología permite que múltiples sistemas operativos se ejecuten simultáneamente en una misma máquina física?",
        "opciones": [
            "Contenerización",
            "Virtualización",
            "Backup diferencial",
            "RAID 0"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 18,
        "bloque": "IV",
        "tema": 5,
        "origen": "temario",
        "pregunta": "En criptografía, ¿qué tipo de clave utiliza el algoritmo RSA?",
        "opciones": [
            "Simétrica",
            "Asimétrica (clave pública y privada)",
            "Hash irreversible",
            "Código César"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 19,
        "bloque": "IV",
        "tema": 7,
        "origen": "temario",
        "pregunta": "En el modelo OSI, ¿qué capa se encarga del enrutamiento de paquetes y utiliza direcciones IP?",
        "opciones": [
            "Capa de Enlace",
            "Capa de Red",
            "Capa de Transporte",
            "Capa de Sesión"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 20,
        "bloque": "IV",
        "tema": 8,
        "origen": "temario",
        "pregunta": "¿Qué protocolo seguro se utiliza para la transferencia de hipertexto en la Web moderna?",
        "opciones": [
            "HTTP",
            "FTP",
            "HTTPS",
            "Telnet"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 21,
        "bloque": "IV",
        "tema": 9,
        "origen": "temario",
        "pregunta": "¿Qué tecnología permite crear un canal cifrado y seguro (túnel) a través de Internet para conectar un usuario con su red corporativa?",
        "opciones": [
            "VLAN",
            "VPN",
            "NAT",
            "ARP"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 22,
        "bloque": "IV",
        "tema": 10,
        "origen": "temario",
        "pregunta": "¿Qué topología de red LAN conecta todos los nodos a un dispositivo central (como un Switch)?",
        "opciones": [
            "Anillo",
            "Bus",
            "Estrella",
            "Malla"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 23,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "En la Constitución Española, el Título Preliminar comprende los artículos:",
        "opciones": [
            "1 al 9",
            "1 al 10",
            "1 al 14",
            "1 al 5"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 24,
        "bloque": "I",
        "tema": 4,
        "origen": "temario",
        "pregunta": "Según la Ley 39/2015, ¿tienen los sábados la consideración de días hábiles?",
        "opciones": [
            "Sí, siempre.",
            "No, se consideran inhábiles.",
            "Solo en la Administración Local.",
            "Solo si lo establece un Reglamento."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 25,
        "bloque": "I",
        "tema": 6,
        "origen": "temario",
        "pregunta": "¿Qué Ley regula actualmente la Firma Electrónica en España?",
        "opciones": [
            "Ley 59/2003",
            "Ley 6/2020",
            "Ley 39/2015",
            "Ley 11/2007"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 26,
        "bloque": "I",
        "tema": 8,
        "origen": "temario",
        "pregunta": "El Esquema Nacional de Seguridad (ENS) se regula mediante el:",
        "opciones": [
            "RD 3/2010",
            "RD 311/2022",
            "RD 4/2010",
            "RD 203/2021"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 27,
        "bloque": "II",
        "tema": 1,
        "origen": "temario",
        "pregunta": "Un byte está compuesto por:",
        "opciones": [
            "4 bits",
            "8 bits",
            "16 bits",
            "32 bits"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 28,
        "bloque": "II",
        "tema": 2,
        "origen": "temario",
        "pregunta": "¿Cuál es la velocidad máxima teórica de un puerto USB 3.0?",
        "opciones": [
            "480 Mbps",
            "5 Gbps",
            "10 Gbps",
            "40 Gbps"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 29,
        "bloque": "II",
        "tema": 4,
        "origen": "temario",
        "pregunta": "En Unix/Linux, ¿qué comando muestra los procesos en ejecución interactiva y en tiempo real?",
        "opciones": [
            "ps",
            "ls",
            "top",
            "grep"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 30,
        "bloque": "II",
        "tema": 4,
        "origen": "temario",
        "pregunta": "En Windows, ¿qué sistema de archivos es el más habitual hoy en día, permitiendo cifrado y cuotas de disco?",
        "opciones": [
            "FAT32",
            "exFAT",
            "NTFS",
            "ReFS"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 31,
        "bloque": "III",
        "tema": 1,
        "origen": "temario",
        "pregunta": "En el modelo relacional, la regla de integridad referencial asegura que:",
        "opciones": [
            "No haya nulos en la clave primaria.",
            "El valor de la clave ajena coincida con el valor de la clave primaria referenciada o sea nulo.",
            "No existan filas repetidas.",
            "Todos los atributos atómicos tengan el mismo dominio."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 32,
        "bloque": "III",
        "tema": 3,
        "origen": "temario",
        "pregunta": "¿Qué sentencia SQL se utiliza para dar privilegios a un usuario sobre una base de datos?",
        "opciones": [
            "ALLOW",
            "GRANT",
            "PERMIT",
            "ASSIGN"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 33,
        "bloque": "III",
        "tema": 4,
        "origen": "temario",
        "pregunta": "¿En qué paradigma de programación se basa el encapsulamiento?",
        "opciones": [
            "Funcional",
            "Procedimental",
            "Orientada a Objetos",
            "Estructurada"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 34,
        "bloque": "III",
        "tema": 5,
        "origen": "temario",
        "pregunta": "En Java, ¿qué palabra reservada se usa para heredar de una clase?",
        "opciones": [
            "implements",
            "inherits",
            "extends",
            "overrides"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 35,
        "bloque": "III",
        "tema": 9,
        "origen": "temario",
        "pregunta": "¿Qué comando en Git se usa para subir los cambios del repositorio local al remoto?",
        "opciones": [
            "git fetch",
            "git pull",
            "git push",
            "git commit"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 36,
        "bloque": "III",
        "tema": 8,
        "origen": "temario",
        "pregunta": "Según las pautas WCAG, asegurar que el texto tiene contraste suficiente con su fondo se asocia al principio:",
        "opciones": [
            "Operable",
            "Perceptible",
            "Comprensible",
            "Robusto"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 37,
        "bloque": "IV",
        "tema": 7,
        "origen": "temario",
        "pregunta": "En la pila de protocolos TCP/IP, ¿en qué capa se ubica el protocolo UDP?",
        "opciones": [
            "Capa de Aplicación",
            "Capa de Internet",
            "Capa de Transporte",
            "Capa de Acceso a la Red"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 38,
        "bloque": "IV",
        "tema": 8,
        "origen": "temario",
        "pregunta": "¿Qué puerto estándar utiliza el protocolo SMTP para la transmisión de correo saliente?",
        "opciones": [
            "21",
            "25",
            "110",
            "143"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 39,
        "bloque": "IV",
        "tema": 3,
        "origen": "temario",
        "pregunta": "¿Qué puerto por defecto usa el protocolo POP3?",
        "opciones": [
            "25",
            "53",
            "110",
            "443"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 40,
        "bloque": "IV",
        "tema": 10,
        "origen": "temario",
        "pregunta": "El estándar IEEE 802.11 define las especificaciones para redes:",
        "opciones": [
            "Ethernet cableadas",
            "Redes LAN inalámbricas (Wi-Fi)",
            "Redes de área metropolitana",
            "Bluetooth"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 41,
        "bloque": "IV",
        "tema": 5,
        "origen": "temario",
        "pregunta": "En un CPD, los sistemas de alimentación ininterrumpida (SAI/UPS) se instalan principalmente para garantizar la:",
        "opciones": [
            "Confidencialidad",
            "Disponibilidad",
            "Integridad",
            "Autenticación"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 42,
        "bloque": "IV",
        "tema": 6,
        "origen": "temario",
        "pregunta": "¿Cuál de las siguientes es una fibra óptica en la que la luz se propaga en un solo camino, permitiendo mayores distancias?",
        "opciones": [
            "Fibra Multimodo de índice escalonado",
            "Fibra Multimodo de índice gradual",
            "Fibra Monomodo",
            "Cable coaxial ciego"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 43,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el artículo 64 de la Constitución Española de 1978 (en adelante CE), los actos del Rey, excepto la propuesta y el nombramiento del Presidente del Gobierno, y la disolución de las Cámaras prevista en el artículo 99, serán refrendados por:",
        "opciones": [
            "Los Presidentes del Congreso y el Senado.",
            "Los Ministros o los Secretarios de Estado en función de la materia.",
            "El Presidente del Gobierno y, en su caso, por los Presidentes del Congreso y el Senado.",
            "El Presidente del Gobierno y, en su caso, por los Ministros competentes."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 44,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La suspensión de los derechos y libertades se encuentra regulada en la CE en:",
        "opciones": [
            "En el Capítulo III del Título I.",
            "En sus artículos 52 y 53.",
            "En el artículo 58.",
            "En el Capítulo V del Título I."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 45,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 18 de la ley 50/1997, de 27 de noviembre, del Gobierno que regula el funcionamiento del Consejo de Ministros, ¿quién actúa como Secretario de este órgano colegiado?",
        "opciones": [
            "El Vicepresidente Primero.",
            "El Ministro portavoz del Gobierno.",
            "El Ministro de la Presidencia.",
            "El Ministro de Justicia."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 46,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el artículo 78 de la CE, expirado el mandato de las Cortes Generales o en caso de disolución de las mismas, las Diputaciones Permanentes seguirán ejerciendo sus funciones hasta:",
        "opciones": [
            "La celebración de las elecciones.",
            "La proclamación de los resultados electorales definitivos.",
            "La elección de los nuevos presidentes de cada una de las Cámaras de las Cortes Generales.",
            "La constitución de las nuevas Cortes Generales."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 47,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según establece el artículo 24 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, el plazo máximo para resolver y notificar la resolución de una reclamación ante el Consejo de Transparencia y Buen Gobierno será de:",
        "opciones": [
            "Un mes, transcurrido el cual, la reclamación se entenderá estimada.",
            "Un mes, transcurrido el cual, la reclamación se entenderá desestimada.",
            "Tres meses, transcurrido el cual, la reclamación se entenderá estimada.",
            "Tres meses, transcurrido el cual, la reclamación se entenderá desestimada."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 48,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál de los siguientes NO es un compromiso del IV Plan de Gobierno Abierto de España:",
        "opciones": [
            "Participación de los jóvenes en políticas públicas.",
            "Protección de denunciantes.",
            "Huella normativa.",
            "Reforma del marco regulatorio."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 49,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Conforme establece el artículo 18 de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, todas las resoluciones de compatibilidad para desempeñar un segundo puesto o actividad en el sector público o el ejercicio de actividades privadas se inscribirán:",
        "opciones": [
            "En el Registro Central de Personal.",
            "En la Oficina de Conflicto de Intereses.",
            "En la Unidad de Personal del Ministerio u Organismo correspondiente.",
            "En los Registros de Personal correspondientes."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 50,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el artículo 30 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, el grado de dependencia será revisable:",
        "opciones": [
            "A instancia del interesado.",
            "A instancia de los representantes del interesado.",
            "De oficio por las Administraciones Públicas competentes.",
            "Todas las respuestas anteriores son correctas."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 51,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Conforme el artículo 49 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, para impulsar la adopción voluntaria de planes de igualdad, el Gobierno establecerá:",
        "opciones": [
            "Medidas de acción positiva, especialmente dirigidas a las pequeñas y las medianas empresas.",
            "Medidas de fomento, especialmente dirigidas a las empresas de 50 o más trabajadores.",
            "Medidas de fomento, especialmente dirigidas a las pequeñas y las medianas empresas.",
            "Medidas de acción positiva, dirigidas a cualquier empresa, sea de capital público o privado."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 52,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con carácter general el documento nacional de identidad tendrá un período de validez, a contar desde la fecha de la expedición o de cada una de sus renovaciones, de:",
        "opciones": [
            "Dos años cuando el solicitante no haya cumplido los cinco años de edad.",
            "Cuatro años, cuando el titular haya cumplido los cinco años de edad y no haya alcanzado los treinta al momento de la expedición o renovación.",
            "Nueve años, cuando el titular haya cumplido los treinta y no haya alcanzado los setenta.",
            "Permanente cuando el titular haya cumplido los sesenta años. 2022 - TAI-L Página 1 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 53,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el artículo 4 de la Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza, el periodo de vigencia de los certificados cualificados:",
        "opciones": [
            "No será superior a 5 años.",
            "No será superior a 3 años.",
            "Es ilimitado.",
            "No será superior a 6 años."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 54,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique según el título X de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, ¿cuál de los siguientes NO es un derecho digital?",
        "opciones": [
            "Derecho al testamento digital.",
            "Derecho al olvido en servicios de redes sociales y servicios equivalentes.",
            "Derecho a la desconexión digital en el ámbito laboral.",
            "Derecho a la igualdad y a la no discriminación en el entorno digital."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 55,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta sobre lo que establece la Norma Técnica de Interoperabilidad de Protocolos de Intermediación de Datos:",
        "opciones": [
            "Las tecnologías utilizadas para los intercambios se implementarán en base a estándares según lo establecido en la Norma Técnica de Interoperabilidad de Catálogo de estándares.",
            "De forma general en servicios de intercambio se utilizará la versión 2.0 del protocolo SCSP (Sustitución de Certificados en Soporte Papel).",
            "Emisores y Requirentes no mantendrán trazabilidad de los intercambios de datos producidos.",
            "Los intercambios de información se podrán implementar a través de servicios web."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 56,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale qué afirmación es correcta con respecto a las soluciones de Ciberseguridad proporcionadas por el Centro Criptológico Nacional (CCN):",
        "opciones": [
            "CLARA, protección y trazabilidad del dato.",
            "ELENA, Simulador de Técnicas de Cibervigilancia.",
            "GLORIA, Gestión de eventos e información de seguridad.",
            "MONICA, Gestor de logs para responder ante incidentes y amenazas."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 57,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta referente a los servicios comunes en materia de administración electrónica:",
        "opciones": [
            "SERVINOMINA realiza la gestión completa de las fases de nómina: cálculo, contabilidad y pago.",
            "CIRCAB poderosa herramienta de trabajo en grupo para intercambio de información y trabajo colaborativo.",
            "eVISOR permite a un empleado público la consulta de sus nóminas correspondientes a los cinco últimos años.",
            "ENVIA es una aplicación que hace posible el envío de ficheros de gran volumen entre usuarios."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 58,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La CE regula la institución del Defensor del Pueblo como:",
        "opciones": [
            "Alto comisionado del Congreso de los Diputados.",
            "Alto comisionado de las Cortes Generales.",
            "Alto comisionado del Poder judicial.",
            "Alto comisionado del Gobierno de la nación."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 59,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es WCAG?",
        "opciones": [
            "Unas pautas de accesibilidad de contenidos web promovidas por el W3C.",
            "Una librería de Java EE para la creación de aplicaciones web creada por Oracle.",
            "Un componente del ecosistema Hadoop para el manejo de Big Data.",
            "Un framework javascript especialmente indicado para trabajar con bases de datos no relacionales."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 60,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes es el nombre de un conector usado para carga y datos creado por el fabricante Apple?",
        "opciones": [
            "USB-Tipo C",
            "iUSB",
            "iFirewire",
            "Lightning"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 61,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con respecto a las sentencias del lenguaje SQL, indique la respuesta INCORRECTA:",
        "opciones": [
            "Sentencia DELETE sirve para borrar en forma sencilla distintos objetos como por ejemplo base de datos, tablas o índices.",
            "La sentencia INSERT agrega uno o más registros a una tabla en una base de datos relacional.",
            "La sentencia UPDATE modifica los valores de un conjunto de registros existentes en una tabla.",
            "La sentencia GRANT se utiliza para dar permisos a un usuario."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 62,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál de los siguientes son los objetos básicos de Kubernetes:",
        "opciones": [
            "Pod, State, Volume, Namespace.",
            "Pod, Service, Volume, Namespace.",
            "Job, Service, Volume, Namespace.",
            "Job, Pod, Volume, Deployment. 2022 - TAI-L Página 2 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 63,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La ALU es una parte de:",
        "opciones": [
            "La memoria.",
            "La CPU.",
            "El bus de operaciones.",
            "El multiplexor de entrada."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 64,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta sobre el modelo CISC:",
        "opciones": [
            "La microprogramación es una característica esencial.",
            "Plantea un conjunto reducido de instrucciones para reducir el número de ciclos de reloj de ejecución de cada una de ellas.",
            "Implementa las instrucciones directamente en hardware.",
            "Está muy extendido en el mercado de procesadores para smartphone y tablets por su bajo consumo y buen rendimiento."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 65,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación con los sistemas RAID señale la respuesta INCORRECTA:",
        "opciones": [
            "El RAID 1+0 exige un mínimo de 4 discos.",
            "RAID 6 amplía el RAID 5 agregando un bloque de paridad.",
            "RAID 5 necesitará un mínimo de 3 discos para ser implementado.",
            "Un RAID 4 distribuye la información a nivel de bloques con dos discos de paridad dedicados."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 66,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes es una tecnología de almacenamiento en disco mediante bus serie?",
        "opciones": [
            "SATA",
            "ATA",
            "SCSI",
            "DLT"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 67,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Respecto a la norma USB indique la respuesta INCORRECTA:",
        "opciones": [
            "USB Type-C es lo mismo que USB 3.1",
            "La diferencia entre USB 3.1 Gen 1 y USB 3.1 Gen 2 se reduce solamente a la velocidad.",
            "USB 3.2 permite velocidades de hasta 20 Gbps.",
            "Los dispositivos USB 2.0 pueden lograr una velocidad de transferencia máxima hasta de 480 Mbps."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 68,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En teoría de grafos, el algoritmo para la determinación del camino más corto, dado un vértice origen, hacia el resto de los vértices en un grafo que tiene pesos en cada arista se denomina:",
        "opciones": [
            "Algoritmo de Kruskal.",
            "Algoritmo de Prim.",
            "Algoritmo de Dijkstra.",
            "Algoritmo de Floyd-Warshall."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 69,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con respecto a los estándares PDF, señale que afirmación NO es correcta:",
        "opciones": [
            "PDF/UA Es el estándar global para la accesibilidad de PDF.",
            "PDF/A proporciona las especificaciones para crear, ver e imprimir documentos digitales para conservarlos a largo plazo.",
            "PDF/E proporciona especificaciones para crear, ver e imprimir documentos utilizados en flujos de trabajo de ingeniería.",
            "PDF/I proporciona especificaciones para crear, ver e imprimir páginas finales listas para imprimir o listas para la prensa."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 70,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las versiones siguientes es la más reciente del sistema operativo macOS?",
        "opciones": [
            "macOS Sierra",
            "macOS Monterey",
            "macOS Big Sur",
            "macOS Ventura"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 71,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál de las siguientes afirmaciones NO es correcta:",
        "opciones": [
            "En Windows de 64 bits, un proceso de 64 bits no puede cargar una biblioteca de vínculos dinámicos (DLL) de 32 bits.",
            "En Windows de 64 bits, un proceso de 32 bits no puede cargar un archivo DLL de 64 bits.",
            "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits solo en el mismo equipo.",
            "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits tanto en el mismo equipo como entre equipos distintos."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 72,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Las bases de datos relacionales ofrecen propiedades ACID. Dicho acrónimo se refiere a:",
        "opciones": [
            "Atomicidad, Consistencia, Aislamiento y Durabilidad.",
            "Atomicidad, Coherencia, Integridad y Distribución.",
            "Disponibilidad, Coherencia, Intensidad y Durabilidad.",
            "Atomicidad, Consistencia, Aislamiento y Disponibilidad."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 73,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Entre las características obligatorias de un sistema gestor de bases de datos orientadas a objetos, NO se encuentra:",
        "opciones": [
            "Debe permitir construir objetos complejos.",
            "El conjunto de tipos de datos debe ser fijo, consiguiendo así mayor eficiencia en las búsquedas.",
            "Todos los objetos deben tener un identificador que sea independiente de los valores de sus atributos.",
            "El esquema de una BDOO incluye únicamente un conjunto de clases (o de tipos)."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 74,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale qué es el Machine Learning Services para SQL Server:",
        "opciones": [
            "Es un conjunto de tecnologías destinadas a la copia y distribución de datos y objetos de base de datos desde una base de datos a otra, para luego sincronizar ambas bases de datos y mantener su coherencia.",
            "Es una característica de SQL Server que proporciona la capacidad de ejecutar scripts de Python y R con datos relacionales.",
            "Es un producto de calidad de datos basado en conocimiento.",
            "Es el servicio principal para almacenar, procesar y proteger los datos. 2022 - TAI-L Página 3 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 75,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta relativa al Modelo Entidad/Relación Extendido según establece METRICA v3:",
        "opciones": [
            "Un atributo se define sobre diversos dominios.",
            "El dominio no tiene existencia propia y depende de las entidades, las relaciones o los atributos.",
            "La entidad es aquel objeto, real o abstracto, acerca del cual se desea almacenar información en la base de datos.",
            "La clave candidata es el conjunto de atributos que garantizan la unicidad de las ocurrencias e identifican la ocurrencia unívocamente."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 76,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La arquitectura ANSI/SPARC define para un sistema de gestión de bases de datos tres niveles de abstracción. Indicar la afirmación INCORRECTA:",
        "opciones": [
            "El nivel externo contiene las vistas externas de la base de datos y permite a cada tipo de usuario ver sólo aquella parte del esquema que le interesa.",
            "El nivel físico define cómo se almacenan los datos y los métodos de acceso.",
            "El nivel contextual define el formato de los campos.",
            "El nivel interno también recibe el nombre de nivel lógico."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 77,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál de las siguientes afirmaciones es FALSA:",
        "opciones": [
            "Un intérprete es un programa que ejecuta directamente las instrucciones escritas en un lenguaje de programación dado.",
            "Un compilador es un programa que transforma el código fuente de un programa a su equivalente en otro lenguaje de programación de más bajo nivel.",
            "Un transpilador es un programa que hace de intérprete y de compilador al mismo tiempo.",
            "Un compilador cruzado o cross compiler es un compilador capaz de crear código ejecutable para otra plataforma distinta a aquélla en la que se ejecuta."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 78,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "C++ permite especificar más de una función con el mismo nombre en el mismo ámbito. ¿Cómo se denominan estas funciones?",
        "opciones": [
            "Funciones dobles.",
            "Funciones repetidas.",
            "Funciones sobrecargadas.",
            "En C++ no se puede nombrar más de una función con el mismo nombre."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 79,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indica, de las siguientes afirmaciones, cuál es verdadera:",
        "opciones": [
            "Un array o vector es un tipo de dato estructurado que permite almacenar un conjunto de datos homogéneo donde cada elemento se almacena de forma consecutiva en memoria.",
            "Bytecode es el código binario obtenido tras el proceso de compilación (Java).",
            "C++ es un lenguaje de segunda generación.",
            "En C++ la declaración del array: «int vector2[] = {1,2,3,4,10,9,80,70,19};», es incorrecta."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 80,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta sobre los tipos de controladores (drivers) JDBC:",
        "opciones": [
            "Los drivers tipo 1 utilizan Java puro para implementar un protocolo de red de proveedores del Sistema Gestor de Base de Datos.",
            "Los drivers tipo 3 utilizan un protocolo de red y middleware para comunicarse con un servidor.",
            "Según la tecnología utilizada para conectarse a la base de datos, los drivers JDBC se categorizan en 3 tipos diferentes.",
            "Los drivers tipo 2 son controladores \"puente\", que utilizan otra tecnología (por ejemplo ODBC) para comunicarse con la base de datos."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 81,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA. Los tipos más corrientes de anomalías de base de datos son:",
        "opciones": [
            "Lecturas no repetibles.",
            "Lecturas hundidas.",
            "Lecturas sucias.",
            "Lecturas fantasma."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 82,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Seleccione la respuesta correcta sobre .NET:",
        "opciones": [
            ".NET es un marco multiplataforma gratuito de Google para compilar aplicaciones y servicios en la nube.",
            ".NET es un proyecto de código abierto.",
            ".NET sirve exclusivamente para desarrollar aplicaciones móviles.",
            ".NET admite un amplio rango de lenguajes de programación, a excepción de C# 2022 - TAI-L Página 4 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 83,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA referente al objeto POCO en .NET:",
        "opciones": [
            "Es una estructura de datos de .NET que solo contiene propiedades o campos públicos.",
            "Es el acrónimo de Plain Old CLR Object.",
            "No hereda de otra clase o implementa una interfaz.",
            "Podrá contener miembros como: métodos. eventos y delegados."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 84,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál de las siguientes afirmaciones sobre REST es FALSA:",
        "opciones": [
            "REST es el acrónimo de Representational State Transfer.",
            "Los objetos en REST siempre se manipulan a partir de la URI.",
            "URI son las siglas de Unique Resource Identifier.",
            "Utiliza un protocolo cliente/servidor sin estado."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 85,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la afirmación correcta con respecto a WSIL:",
        "opciones": [
            "Es un método alternativo al descubrimiento de servicios Web.",
            "Define el modelo de programación y la arquitectura de ejecución para desplegar y buscar servicios Web en el entorno Java EE.",
            "Define un modo de publicar y encontrar información sobre servicios Web.",
            "Es una organización diseñada para promover la interoperatividad de servicios Web entre plataformas, sistemas operativos y lenguajes de programación."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 86,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Para detectar, eliminar y/o mitigar las debilidades de una aplicación se pueden realizar diferentes análisis de seguridad durante el ciclo de vida del desarrollo de software, entre los que NO se encuentra:",
        "opciones": [
            "SAST (Static Application Security Testing).",
            "S-SDLC (Secure Software Development Liability Control).",
            "DAST (Dynamic Application Security Testing).",
            "SCA (Software Composition Analysis)."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 87,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "El principio de la accesibilidad web que exige que los componentes y la navegación de la interfaz de usuario se puedan utilizar por cualquier persona usuaria es:",
        "opciones": [
            "La perceptibilidad.",
            "La comprensibilidad.",
            "La robustez.",
            "La operabilidad."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 88,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según METRICA v3, ¿qué tipo de pruebas son las que tienen como objetivo verificar el correcto ensamblaje entre los distintos componentes para comprobar que interactúan correctamente a través de sus interfaces, cubren la funcionalidad establecida y se ajustan a los requisitos no funcionales especificados?",
        "opciones": [
            "Pruebas del sistema.",
            "Pruebas de implantación.",
            "Pruebas de regresión.",
            "Pruebas de integración."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 89,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según establece METRICA v3, ¿qué participantes están presentes en la tarea de “Elaboración de los Manuales de Usuario”?",
        "opciones": [
            "Usuarios Expertos.",
            "Consultor de Sistemas de Información.",
            "Equipo de Formación.",
            "Equipo de Proyecto."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 90,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA sobre el kernel de un Sistema Operativo:",
        "opciones": [
            "Controla todas las funciones importantes del hardware.",
            "Se encarga del procesamiento paralelo de tareas (multitasking).",
            "Es el núcleo del procesador.",
            "Recibe peticiones de servicio de los procesos y los comunica con el hardware. 2022 - TAI-L Página 5 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 91,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En un sistema UNIX, cuál es la respuesta INCORRECTA:",
        "opciones": [
            "El GID es el número de identificación de grupo.",
            "El UID es el número de identificación de usuario.",
            "El administrador del sistema se denomina root.",
            "El proceso init se refiere al proceso de arranque de un usuario."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 92,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Respecto a la virtualización de máquinas, indique la opción FALSA:",
        "opciones": [
            "Facilita el despliegue de entornos.",
            "Requiere aumentar la inversión en hardware específico para la virtualización.",
            "Posibilita la ejecución de varios sistemas operativos en una única máquina física.",
            "Permite un aprovechamiento mayor de la capacidad del hardware."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 93,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Una copia de seguridad (backup) diferencial:",
        "opciones": [
            "Realiza una copia fiel de los datos, lo que implica que un archivo eliminado en el origen, también se eliminará en la copia de seguridad.",
            "Partiendo de una copia de backup completa, realiza una copia de todos los datos modificados desde que se hizo ese backup completo.",
            "Realiza una copia sólo de los datos modificados desde el último backup (sea completo o incremental).",
            "Realiza una copia integral de los datos, copiando todos los contenidos de los sistemas a mantener."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 94,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Seleccione la respuesta INCORRECTA sobre la firma electrónica:",
        "opciones": [
            "Se llama Co-firma a la firma múltiple en la que todos los firmantes están al mismo nivel y en la que no importa el orden en el que se firma.",
            "Cuando se firma en formato XAdES (XML Avanzado), el resultado es un fichero de texto XML.",
            "En el formato XAdES se habla de firmas despegadas (detached), envolventes (enveloping) y envueltas (enveloped) según en qué sitio del propio fichero de firma se guarde el documento original.",
            "El formato PAdES (Propietario Avanzado) es el formato propio utilizado por Microsoft Office, si bien existe una implementación abierta que se aplica en Open Office."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 95,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál es la respuesta INCORRECTA acerca de la fibra óptica plástica (POF):",
        "opciones": [
            "Está hecha esencialmente de plástico, construida de polimetilmetacrilato envuelto en polímeros fluoruros.",
            "Permite aprovechar todo el ancho de banda y hacerlo sin pérdidas.",
            "Ofrece un núcleo conductor menor que el de la fibra tradicional.",
            "Es muy flexible, lo que hace que se pueda usar sin problema en instalaciones donde los tubos son antiguos."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 96,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el prefijo de dirección de Multicast en IPv6?",
        "opciones": [
            "::1/128",
            "224.0.0.0/4",
            "FF00::/8",
            "FC00::/7"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 97,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Seleccione la respuesta correcta sobre los niveles y servicios del modelo OSI:",
        "opciones": [
            "El modelo OSI se compone de 7 niveles, pero se pude asimilar a un modelo de referencia simplificado de solamente 2 niveles: TCP (Niveles 1 a 4) e IP (Niveles 5, 6 y 7).",
            "Las entidades en un nivel N+1 ofrecen servicios que son utilizados por las entidades del nivel N.",
            "Un servicio confirmado utiliza las 4 primitivas de comunicación entre capas: Request, Indication, Response, Confirm.",
            "Un servicio no confirmado utiliza 3 de las 4 primitivas: Request, Indication, Response."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 98,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué parte de un certificado de sitio web necesita un navegador para establecer una conexión segura HTTPS?",
        "opciones": [
            "La clave pública del certificado del sitio web, para que el navegador descifre los mensajes enviados por ese sitio web.",
            "La clave privada del certificado del sitio web, para que el navegador cifre los mensajes que envía al sitio web.",
            "Las claves pública y privada del certificado del sitio web, para poder cifrar y descifrar los mensajes que se intercambia con el sitio web.",
            "Ninguna. Es el sitio web el que debe recibir las claves pública y privada del certificado de la persona que navega."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 99,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es un portal cautivo?",
        "opciones": [
            "Un sitio web bloqueado por un ransomware, cuyo acceso no se recupera hasta que se paga un rescate.",
            "Una página o aplicación web con acceso limitado, generalmente en fase de pruebas como paso previo a ponerse en producción.",
            "Un sitio web que no cumple los criterios del nivel AA de WCAG.",
            "Una página web que gestiona el acceso de los usuarios a una red, generalmente inalámbrica."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 100,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué significa CSMA/CD?",
        "opciones": [
            "Acceso múltiple por servicio de portadora y múltiples colisiones.",
            "Acceso múltiple con detección de portadora y detección de colisiones.",
            "Acceso único con múltiples colisiones y detección de portadora.",
            "Acceso único de múltiples portadoras y detección de colisiones."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 101,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el diagrama de clases la relación existente entre “Solicitud Representación” y “Trámite”, ¿qué multiplicidades serían compatibles con los requisitos planteados en el enunciado?",
        "opciones": [
            "‘1’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
            "‘1’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”.",
            "‘0..N’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
            "‘1..N’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 102,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Java SE 17, ¿con qué visibilidad se deben generar los atributos de la clase Data Access Object Solicitudes si se quiere tener acceso directamente desde cualquier otro objeto, sin mediación de métodos?",
        "opciones": [
            "Se usará el modificador \"public\".",
            "Se usará el modificador \"protected\".",
            "No se usará ningún modificador.",
            "Se usará el modificador \"private\". 2022 - TAI-L Página 8 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 103,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Para crear una tabla llamada Usuario, ¿qué sentencia SQL debemos ejecutar?",
        "opciones": [
            "ALTER TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "INSERT TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "CREATE TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "DROP TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 104,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Se ha heredado una librería compilada que realiza la conexión a un importante servicio de comprobación de Cl@ve PIN, ¿qué patrón de diseño permite reutilizar este objeto?",
        "opciones": [
            "Adaptador (Adapter)",
            "Singleton",
            "Chain of responsibility (Cadena de responsabilidad)",
            "Iterador (Iterator)"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 105,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En UML un diagrama de componentes:",
        "opciones": [
            "Describe la estructura del sistema mostrando las clases del sistema, sus atributos y relaciones entre ellas.",
            "Describe cómo un sistema de software se divide en componentes y muestra las dependencias entre ellos.",
            "Sirve para modelar el hardware utilizado en las implementaciones del sistema, los componentes implementados en el hardware y las asociaciones entre componentes en un momento específico.",
            "Muestra una vista completa o parcial de la estructura de un sistema modelado en un momento específico."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 106,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el equipo de desarrollo se ha decidido usar Selenium WebDriver para:",
        "opciones": [
            "Mejorar la accesibilidad de las páginas web facilitando audios a partir del texto.",
            "Automatizar la ejecución de pruebas en el navegador.",
            "Minimizar el tiempo de carga de la página web.",
            "Diseñar páginas web adaptables."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 108,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Una vez implementado \"teletrabajo\" mediante VPN, se quiere dotar de mayor seguridad mediante el envío de un código por SMS al teléfono móvil del trabajador. ¿Cómo se denomina a este tipo de validación?",
        "opciones": [
            "Factor electrónico de autenticación.",
            "Autenticación electrónica de usuarios.",
            "Doble factor de autenticación.",
            "Factor único de autenticación."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 109,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Los dispositivos de interconexión de redes de nuestro sistema, son compatibles con POE++. Señale la afirmación correcta con respecto a este término:",
        "opciones": [
            "Las siglas corresponden a Power-of-Ethernet.",
            "Como estándar, recibe la denominación IEEE 802.3at.",
            "La alimentación real recibida es de 25,50 Watts.",
            "Se subdivide en dos tipos: Tipo 3 y Tipo 4."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 110,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el plazo máximo para dictar y notificar la resolución expresa en un procedimiento administrativo, según la Ley 39/2015, si la norma reguladora no fija uno distinto?",
        "opciones": [
            "3 meses",
            "6 meses",
            "1 mes",
            "10 días"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 111,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En la Constitución Española de 1978, ¿qué Título está dedicado a la Corona?",
        "opciones": [
            "Título I",
            "Título II",
            "Título Preliminar",
            "Título III"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 112,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el TREBEP, las vacaciones de los funcionarios públicos retribuidas tendrán una duración mínima de:",
        "opciones": [
            "20 días hábiles",
            "22 días hábiles",
            "30 días naturales",
            "15 días hábiles"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 113,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿A qué capa del modelo OSI pertenece el protocolo IP?",
        "opciones": [
            "Capa de Enlace",
            "Capa de Red",
            "Capa de Transporte",
            "Capa de Presentación"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 114,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Linux, ¿qué comando se utiliza para cambiar los permisos de un archivo?",
        "opciones": [
            "chown",
            "ls",
            "chmod",
            "pwd"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 115,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué tipo de diagrama UML se utiliza para modelar el comportamiento dinámico de un sistema mostrando la interacción entre objetos en un orden temporal?",
        "opciones": [
            "Diagrama de Clases",
            "Diagrama de Secuencia",
            "Diagrama de Casos de Uso",
            "Diagrama de Despliegue"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 116,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes memorias es volátil?",
        "opciones": [
            "ROM",
            "EPROM",
            "RAM",
            "EEPROM"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 117,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el contexto de bases de datos relacionales, ¿qué es la cardinalidad de una relación?",
        "opciones": [
            "El número de columnas de una tabla",
            "El número de tuplas (filas) de una tabla",
            "El número de tablas en la base de datos",
            "El número de claves foráneas"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 118,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué nivel de RAID proporciona espejado (mirroring) sin paridad ni striping?",
        "opciones": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 10"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 119,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué etiqueta de HTML5 se utiliza para definir el contenido principal del documento?",
        "opciones": [
            "<main>",
            "<body>",
            "<section>",
            "<article>"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 120,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes metodologías pertenece al enfoque ágil de desarrollo de software?",
        "opciones": [
            "Métrica v3",
            "Modelo en Cascada",
            "Scrum",
            "Modelo en V"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 121,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Java, ¿qué modificador de acceso permite que un miembro de una clase sea accesible solo dentro de su propio paquete y por subclases en otros paquetes?",
        "opciones": [
            "public",
            "private",
            "protected",
            "default"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 122,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué puerto utiliza por defecto el protocolo HTTPS?",
        "opciones": [
            "80",
            "21",
            "443",
            "25"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 123,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el ámbito de la criptografía asimétrica, para enviar un mensaje cifrado a un destinatario garantizando la confidencialidad, el emisor cifra el mensaje con:",
        "opciones": [
            "La clave privada del emisor",
            "La clave pública del emisor",
            "La clave privada del receptor",
            "La clave pública del receptor"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 124,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la dirección de loopback estándar en IPv4?",
        "opciones": [
            "127.0.0.1",
            "192.168.1.1",
            "255.255.255.0",
            "10.0.0.1"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 125,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales, ¿a qué edad se adquiere la capacidad para prestar consentimiento para el tratamiento de datos personales?",
        "opciones": [
            "13 años",
            "14 años",
            "16 años",
            "18 años"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 126,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué componente de la CPU se encarga de realizar operaciones aritméticas y lógicas?",
        "opciones": [
            "Unidad de Control (UC)",
            "Unidad Aritmético Lógica (ALU)",
            "Registros",
            "Caché"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 127,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes formas normales (Bases de Datos) exige que la tabla esté en 2FN y no existan dependencias funcionales transitivas de los atributos no principales respecto de la clave primaria?",
        "opciones": [
            "1FN",
            "2FN",
            "3FN",
            "FNBC"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 128,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Active Directory, ¿cuál es la unidad contenedora más pequeña a la que se le pueden asignar directivas de grupo (GPO) o delegar autoridad administrativa?",
        "opciones": [
            "Dominio",
            "Bosque",
            "Sitio",
            "Unidad Organizativa (OU)"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 129,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué protocolo se utiliza fundamentalmente para la transferencia de archivos en internet?",
        "opciones": [
            "SMTP",
            "FTP",
            "SNMP",
            "HTTP"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 130,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el modelo relacional de bases de datos, ¿qué regla garantiza que ninguna clave primaria o parte de ella pueda tener un valor nulo?",
        "opciones": [
            "Integridad referencial",
            "Integridad de entidad",
            "Integridad de dominio",
            "Regla de restricción de nulos"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 131,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Java, ¿cuál de las siguientes interfaces pertenece al Framework de Colecciones y NO permite elementos duplicados?",
        "opciones": [
            "List",
            "Collection",
            "Set",
            "Map"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 132,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué sistema de archivos es el más utilizado por defecto en las distribuciones modernas de Linux?",
        "opciones": [
            "NTFS",
            "FAT32",
            "ext4",
            "HFS+"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 133,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Windows Server, ¿qué tecnología permite implementar políticas de seguridad, distribuir software y administrar configuraciones de usuario a través del Active Directory?",
        "opciones": [
            "Directivas de Grupo (GPO)",
            "Windows Server Update Services (WSUS)",
            "Remote Desktop Services (RDS)",
            "Domain Name System (DNS)"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 134,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes es un algoritmo de cifrado asimétrico?",
        "opciones": [
            "AES",
            "DES",
            "RSA",
            "3DES"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 135,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Al definir la arquitectura de una aplicación web JEE, ¿qué patrón de diseño se utiliza habitualmente para separar los datos de la interfaz de usuario y del control de la lógica de negocio?",
        "opciones": [
            "Singleton",
            "Factory Method",
            "MVC (Modelo-Vista-Controlador)",
            "Observer"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 136,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En SQL, ¿qué instrucción se utiliza para eliminar todos los registros de una tabla de forma rápida y sin registrar las eliminaciones de filas individuales en el registro de transacciones?",
        "opciones": [
            "DROP TABLE",
            "DELETE FROM",
            "TRUNCATE TABLE",
            "REMOVE ALL"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 137,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué comando de Linux se utiliza para buscar patrones de texto dentro de los archivos?",
        "opciones": [
            "find",
            "grep",
            "locate",
            "tar"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 138,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la longitud, en bits, de una dirección IPv6?",
        "opciones": [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 139,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según las pautas de accesibilidad para el contenido web (WCAG), el criterio de proporcionar alternativas textuales para todo contenido no textual se asocia al principio de:",
        "opciones": [
            "Perceptible",
            "Operable",
            "Comprensible",
            "Robusto"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 140,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el lenguaje estándar del W3C para transformar documentos XML en otros formatos como HTML?",
        "opciones": [
            "XPath",
            "XQuery",
            "XSLT",
            "DTD"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 141,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En las redes Ethernet, ¿qué protocolo se encarga de resolver direcciones IP a direcciones MAC físicas?",
        "opciones": [
            "DHCP",
            "DNS",
            "ARP",
            "ICMP"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 142,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué estructura de datos utiliza el principio LIFO (Last In, First Out)?",
        "opciones": [
            "Cola (Queue)",
            "Pila (Stack)",
            "Lista enlazada",
            "Árbol Binario"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 143,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En la metodología SCRUM, el evento donde el equipo sincroniza sus actividades diarias y crea un plan para las siguientes 24 horas recibe el nombre de:",
        "opciones": [
            "Sprint Planning",
            "Sprint Retrospective",
            "Sprint Review",
            "Daily Scrum"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 144,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Una red de almacenamiento dedicada de alta velocidad que conecta servidores a sus unidades lógicas de almacenamiento separándolas de la red LAN se conoce como:",
        "opciones": [
            "NAS (Network Attached Storage)",
            "SAN (Storage Area Network)",
            "DAS (Direct Attached Storage)",
            "WAN (Wide Area Network)"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 145,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes NO es un tipo válido de diagrama estructural en UML 2.x?",
        "opciones": [
            "Diagrama de Componentes",
            "Diagrama de Clases",
            "Diagrama de Actividad",
            "Diagrama de Paquetes"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 146,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el modelo OSI, ¿cuál es la función principal de la Capa de Transporte (Capa 4)?",
        "opciones": [
            "Enrutamiento de paquetes IP",
            "Codificación y compresión de datos",
            "Control de flujo y entrega fiable de datos de extremo a extremo",
            "Acceso al medio físico (MAC)"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 147,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En la gestión de memoria de un Sistema Operativo, ¿cómo se denomina el problema donde el espacio de memoria libre se divide en pequeños bloques no contiguos que no pueden utilizarse eficientemente?",
        "opciones": [
            "Paginación",
            "Segmentación",
            "Fragmentación Externa",
            "Swapping (Intercambio)"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 148,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Respecto a las pruebas de software, aquellas pruebas funcionales en las que el probador no tiene conocimiento del código fuente interno del sistema se denominan:",
        "opciones": [
            "Pruebas de Caja Blanca",
            "Pruebas de Caja Negra",
            "Pruebas de Regresión",
            "Pruebas Estructurales"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 149,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué protocolo estándar de red se utiliza para la gestión y monitorización de dispositivos en redes IP (ej. routers, switches, servidores)?",
        "opciones": [
            "SMTP",
            "SNMP",
            "LDAP",
            "IGMP"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 150,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Si un microprocesador tiene un bus de direcciones de 32 bits, ¿cuál es la cantidad máxima de memoria RAM física que puede direccionar de forma directa?",
        "opciones": [
            "2 Gigabytes",
            "4 Gigabytes",
            "8 Gigabytes",
            "16 Gigabytes"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 151,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Java, el proceso de ocultar los detalles de implementación de un objeto y exponer solo una interfaz pública y segura se denomina:",
        "opciones": [
            "Polimorfismo",
            "Herencia",
            "Sobrecarga",
            "Encapsulamiento"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 152,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En ciberseguridad, un ataque que intenta hacer que un servidor o recurso de red no esté disponible para sus usuarios legítimos se conoce como:",
        "opciones": [
            "Phishing",
            "Spoofing",
            "DoS (Denial of Service)",
            "Man-in-the-Middle"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "id": 153,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué comando SQL se utiliza para conceder privilegios o permisos a un usuario sobre un objeto de base de datos?",
        "opciones": [
            "ALLOW",
            "GRANT",
            "REVOKE",
            "PERMIT"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 154,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué tipo de firma electrónica, según el reglamento europeo eIDAS, se crea mediante dispositivos cualificados de creación de firmas y se basa en un certificado cualificado?",
        "opciones": [
            "Firma Electrónica Simple",
            "Firma Electrónica Avanzada",
            "Firma Electrónica Cualificada",
            "Sello Electrónico"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 155,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según la Ley 7/1985, Reguladora de las Bases del Régimen Local, ¿cuál de los siguientes es un órgano de existencia obligatoria en todas las Diputaciones Provinciales?",
        "opciones": [
            "La Comisión Especial de Cuentas",
            "El Defensor del Ciudadano Local",
            "El Consejo de Alcaldes",
            "La Junta de Gobierno Local, solo en provincias de más de 500.000 habitantes"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 156,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué norma constituye el estatuto básico de los municipios y provincias en el ordenamiento jurídico español?",
        "opciones": [
            "La Constitución Española de 1978",
            "La Ley 39/2015 del Procedimiento Administrativo Común",
            "La Ley 7/1985, Reguladora de las Bases del Régimen Local",
            "El Estatuto de Autonomía de la Comunidad respectiva"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "Diputación de Sevilla",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 157,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Estatuto de Autonomía para Andalucía, ¿quién ostenta la suprema representación de la Comunidad Autónoma y la ordinaria del Estado en Andalucía?",
        "opciones": [
            "El Presidente del Parlamento de Andalucía",
            "El Presidente de la Junta de Andalucía",
            "El Delegado del Gobierno en Andalucía",
            "El Consejero de la Presidencia"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "Diputación de Sevilla",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 158,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el ámbito de la Diputación de Sevilla (e INPRO), ¿qué plataforma de la Administración General del Estado se utiliza habitualmente para la interconexión de registros (SIR)?",
        "opciones": [
            "Notific@​",
            "Cl@ve",
            "GEISER / ORVE",
            "Inside"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 159,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el órgano máximo de gobierno y administración de una provincia según la Ley de Bases del Régimen Local?",
        "opciones": [
            "El Presidente de la Diputación",
            "El Pleno de la Diputación",
            "La Junta de Gobierno Provincial",
            "El Consejo Provincial"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 160,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En la Junta de Andalucía, ¿cuál es el instrumento principal para la tramitación electrónica de expedientes por parte de la administración?",
        "opciones": [
            "Trew@",
            "Alfresco",
            "SARA",
            "Portafirmas AGE"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "Junta de Andalucía",
            "SAS",
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 161,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con la Ley de Bases del Régimen Local, ¿cuál de los siguientes servicios NO es de prestación obligatoria en todos los municipios independientemente de su población?",
        "opciones": [
            "Alumbrado público",
            "Cementerio",
            "Recogida de residuos",
            "Transporte colectivo urbano de viajeros"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "Diputación de Sevilla"
        ]
    },
    {
        "id": 162,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿A qué institución andaluza le corresponde el control externo del sector público de la Comunidad Autónoma de Andalucía y de las Entidades Locales andaluzas?",
        "opciones": [
            "Cámara de Cuentas de Andalucía",
            "Tribunal de Cuentas del Estado",
            "Consejo Consultivo de Andalucía",
            "Defensor del Pueblo Andaluz"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "Diputación de Sevilla",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 163,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Para la integración de los Ayuntamientos de Sevilla con la pasarela de pagos electrónicos autonómica, ¿qué plataforma se suele utilizar como referencia en Andalucía?",
        "opciones": [
            "Pasarela de Pagos del Estado",
            "Plataforma de Contratación",
            "Plataforma de Pago Telemático de la Junta de Andalucía",
            "Red SARA"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "Diputación de Sevilla",
            "Junta de Andalucía"
        ]
    },
    {
        "id": 164,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según la normativa de administración electrónica (Ley 39/2015 y Ley 40/2015), ¿qué es el Esquema Nacional de Interoperabilidad (ENI)?",
        "opciones": [
            "El conjunto de criterios y recomendaciones que rigen las políticas de seguridad en el uso de medios electrónicos.",
            "El documento que regula los salarios de los empleados TIC en la administración.",
            "El conjunto de criterios y recomendaciones que deberán ser tenidos en cuenta por las Administraciones Públicas para asegurar la interoperabilidad.",
            "Una red de fibra óptica exclusiva para las diputaciones."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE",
            "Diputación de Sevilla",
            "Junta de Andalucía",
            "SAS"
        ]
    },
    {
        "id": 165,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 68 de la CE, ¿cuál es la circunscripción electoral en nuestro sistema electoral?",
        "opciones": [
            "La provincia.",
            "El municipio.",
            "La Comunidad Autónoma.",
            "Distrito Municipal."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 166,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según establece el artículo 34 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los responsables y encargados de tratamiento comunicarán a la Agencia Española de Protección de Datos, las designaciones, nombramientos y ceses de los delegados de protección de datos en el plazo de:",
        "opciones": [
            "10 días.",
            "15 días.",
            "1 mes.",
            "3 meses."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 167,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad, ¿cuál de las siguientes medidas de seguridad afecta a la dimensión de Confidencialidad?",
        "opciones": [
            "Bloqueo de puesto de trabajo.",
            "Firma electrónica.",
            "Registro de la actividad.",
            "Criptografía."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 168,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En SQL, ¿cómo se pueden eliminar los datos en una tabla, pero no la propia definición de la tabla?",
        "opciones": [
            "DROP TABLE",
            "DELETE",
            "REMOVE",
            "ERASE"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 169,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes términos hace referencia a patrones generales de software para asignación de responsabilidades en el diseño orientado a objetos?",
        "opciones": [
            "OOD",
            "GRASP",
            "Booch",
            "Fan-In & Fan-Out"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 170,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según METRICA v3, ¿cuál es diagrama que describe en detalle un determinado escenario de un caso de uso?",
        "opciones": [
            "Diagrama de Interacción.",
            "Diagrama de representación.",
            "Diagrama de flujo de datos.",
            "Diagrama de casos de uso."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 171,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál de las siguientes NO es una librería de Java proporcionada por la Apache Foundation:",
        "opciones": [
            "Log4J",
            "httpclient",
            "commons-io",
            "Mockete"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 172,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál es un estándar OASIS que define los mecanismos para establecer y compartir contextos de seguridad, y para obtener claves de contextos de seguridad:",
        "opciones": [
            "WS-Addressing",
            "WS-Federation",
            "WS-SecureConversation",
            "WS-Policy"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 173,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el motor web desarrollado por The Mozilla Foundation?",
        "opciones": [
            "WebKit",
            "Firefox",
            "Gecko",
            "Edge"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 174,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué término está relacionado con XML-binary Optimized Packaging (XOP)?",
        "opciones": [
            "Reconstituted XML Infoset",
            "XOP Header",
            "XOP Package",
            "Optimized Document"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 175,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes NO es un framework para javascript?",
        "opciones": [
            "Angular",
            "Bootstrap",
            "React",
            "JDBC"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 176,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes herramientas NO es un software para el control de versiones?",
        "opciones": [
            "JMeter",
            "Subversion",
            "Mercurial",
            "GIT"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 177,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿En qué campo del objeto de Kubernetes hay que incluir los valores que permiten identificar unívocamente al objeto?",
        "opciones": [
            "kind",
            "spec",
            "apiVersion",
            "metadata"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 178,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes NO es un protocolo de correo electrónico?",
        "opciones": [
            "IMAP",
            "SMTP",
            "Outlook",
            "POP3"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 179,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De los siguientes protocolos, ¿cuál se utiliza para administrar dispositivos de una red?",
        "opciones": [
            "SMTP",
            "DNS",
            "FTP",
            "CMIP"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 180,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el comando usado por el administrador SNMP que se utiliza para recuperar datos voluminosos de una tabla MIB grande?",
        "opciones": [
            "GET",
            "GET BULK",
            "GET NEXT",
            "GET RESPONSE"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 181,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es ECDSA?",
        "opciones": [
            "Un algoritmo de firma.",
            "Un estándar estadounidense de cableado.",
            "Un organismo regulador internacional.",
            "Un protocolo de nivel de enlace."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 182,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de estos equipos de interconexión trabaja a nivel de red (nivel 3 del modelo OSI)?",
        "opciones": [
            "Enrutadores (Routers).",
            "Puentes (Bridges).",
            "Conmutadores (Switches).",
            "Concentradores (Hubs)."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 183,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes organismos está especializado en telecomunicaciones de la Organización de las Naciones Unidas (ONU), encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras?",
        "opciones": [
            "ICANN",
            "ITU",
            "IEEE",
            "TIA"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 184,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Entre los protocolos que puede usar una VPN para proporcionar cifrado NO se encuentra:",
        "opciones": [
            "PPTP/MPPE",
            "IPSec",
            "L2TP/IPSec",
            "KSEC 1.1"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 185,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿A qué se corresponden las siglas de Red SOHO?",
        "opciones": [
            "Small Own, Home Own.",
            "Small Office, Home Own.",
            "Small Office, Home Office.",
            "Small Office, House Office."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 186,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Dentro de los dispositivos Android, es posible encontrar un gran número de capas de personalización. Señale cuál NO es una de ellas:",
        "opciones": [
            "MIUI",
            "PenPoint OS",
            "One UI",
            "OriginOS"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 187,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale qué paquete R en SQL Server Machine Learning Services permite realizar transformaciones y manipulaciones de datos, resúmenes estadísticos, visualizaciones y muchas formas de modelado:",
        "opciones": [
            "Revoscalepy",
            "Microsoftml",
            "Revoscaler",
            "SqlRutils"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 188,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes lenguajes está relacionado con el desarrollo en backend?",
        "opciones": [
            "GO",
            "SASS",
            "XML",
            "ANGULAR"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 189,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuáles son los diferentes tipos de configuración contemplados para WPS:",
        "opciones": [
            "PIN, PBC, USB",
            "PIN, NFC, USB",
            "PIN, USB",
            "PIN, PBC, NFC, USB"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 190,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la Constitución Española de 1978 es correcta?",
        "opciones": [
            "Fue sancionada por el Rey el 6 de diciembre.",
            "Entró en vigor el mismo día de su publicación en el BOE.",
            "Consta de 11 Títulos, incluyendo el Preliminar, y 168 artículos.",
            "Fue ratificada en referéndum el 31 de octubre."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 191,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "¿Qué artículo de la Constitución limita el uso de la informática para garantizar el honor y la intimidad personal?",
        "opciones": [
            "Artículo 18.1",
            "Artículo 18.4",
            "Artículo 20",
            "Artículo 9.3"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 192,
        "bloque": "I",
        "tema": 2,
        "origen": "temario",
        "pregunta": "¿Cuántos Diputados componen actualmente el Congreso de los Diputados?",
        "opciones": [
            "300",
            "350",
            "400",
            "Entre 300 y 400, determinado por el Rey."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 193,
        "bloque": "I",
        "tema": 3,
        "origen": "temario",
        "pregunta": "Según la organización de la AGE, ¿cuál de los siguientes es un Órgano Directivo y NO Superior?",
        "opciones": [
            "Ministro",
            "Secretario de Estado",
            "Subsecretario",
            "Presidente del Gobierno"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 194,
        "bloque": "I",
        "tema": 4,
        "origen": "temario",
        "pregunta": "¿Qué institución ejerce la función legislativa en la Unión Europea junto con el Consejo de la Unión Europea?",
        "opciones": [
            "La Comisión Europea",
            "El Consejo Europeo",
            "El Parlamento Europeo",
            "El Tribunal de Justicia de la UE"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 195,
        "bloque": "I",
        "tema": 5,
        "origen": "temario",
        "pregunta": "Según el TREBEP, ¿qué titulación se exige para el acceso al Grupo C, Subgrupo C1?",
        "opciones": [
            "Título de Graduado en ESO",
            "Título de Bachiller o Técnico",
            "Título Universitario de Grado",
            "Título de Técnico Superior"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 196,
        "bloque": "I",
        "tema": 6,
        "origen": "temario",
        "pregunta": "Según el régimen disciplinario de los empleados públicos, ¿a los cuántos años prescriben las faltas muy graves?",
        "opciones": [
            "Al año",
            "A los 2 años",
            "A los 3 años",
            "A los 4 años"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 197,
        "bloque": "I",
        "tema": 8,
        "origen": "temario",
        "pregunta": "En el Procedimiento Administrativo Común (Ley 39/2015), si los plazos se señalan por días, se entienden siempre como:",
        "opciones": [
            "Días naturales, salvo que la ley disponga otra cosa.",
            "Días hábiles, excluyendo sábados, domingos y festivos.",
            "Días hábiles, incluyendo los sábados.",
            "Días laborables según el calendario del interesado."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 198,
        "bloque": "I",
        "tema": 9,
        "origen": "temario",
        "pregunta": "El recurso de alzada se interpone contra resoluciones y actos que:",
        "opciones": [
            "Ponen fin a la vía administrativa.",
            "No ponen fin a la vía administrativa.",
            "Son firmes en vía administrativa.",
            "Derivan de un procedimiento sancionador penal."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 199,
        "bloque": "I",
        "tema": 11,
        "origen": "temario",
        "pregunta": "Según el RGPD, los derechos ARSULIPO incluyen:",
        "opciones": [
            "Acceso, Rectificación, Supresión, Limitación, Portabilidad, Oposición.",
            "Análisis, Rectificación, Seguridad, Uso, Portabilidad, Olvido.",
            "Acceso, Redirección, Supresión, Localización, Protección, Oposición.",
            "Acceso, Replicación, Supresión, Legalidad, Propiedad, Oposición."
        ],
        "respuestaIndex": 0,
        "oposiciones": null
    },
    {
        "id": 200,
        "bloque": "II",
        "tema": 12,
        "origen": "temario",
        "pregunta": "¿Qué número decimal corresponde al binario 1011?",
        "opciones": [
            "10",
            "11",
            "12",
            "13"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 201,
        "bloque": "II",
        "tema": 12,
        "origen": "temario",
        "pregunta": "¿Cuántos caracteres puede representar el estándar ASCII original de 7 bits?",
        "opciones": [
            "64",
            "128",
            "256",
            "512"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 202,
        "bloque": "II",
        "tema": 13,
        "origen": "temario",
        "pregunta": "En la seguridad de la información, asegurar que los datos no sean modificados por entidades no autorizadas se conoce como:",
        "opciones": [
            "Confidencialidad",
            "Integridad",
            "Disponibilidad",
            "No repudio"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 203,
        "bloque": "II",
        "tema": 13,
        "origen": "temario",
        "pregunta": "En criptografía asimétrica, para que alguien te envíe un mensaje cifrado de forma segura, ¿qué clave debe usar?",
        "opciones": [
            "Tu clave privada",
            "Tu clave pública",
            "Su clave privada",
            "Una clave de sesión simétrica generada por el servidor"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 204,
        "bloque": "II",
        "tema": 14,
        "origen": "temario",
        "pregunta": "¿Qué componente de la Arquitectura de Von Neumann dirige el funcionamiento de las demás unidades decodificando instrucciones?",
        "opciones": [
            "Memoria Principal",
            "Unidad Aritmético Lógica (ALU)",
            "Unidad de Control (UC)",
            "Bus de Direcciones"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 205,
        "bloque": "II",
        "tema": 16,
        "origen": "temario",
        "pregunta": "En planificación de procesos, ¿qué algoritmo asigna a cada proceso un intervalo de tiempo de CPU equitativo llamado 'quantum'?",
        "opciones": [
            "FCFS (First Come, First Served)",
            "SJF (Shortest Job First)",
            "Round Robin",
            "Planificación por Prioridades no apropiativa"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 206,
        "bloque": "II",
        "tema": 17,
        "origen": "temario",
        "pregunta": "¿Qué comando de la consola de Windows (CMD) se utiliza para comprobar la conectividad de red con otro equipo enviando paquetes ICMP?",
        "opciones": [
            "ipconfig",
            "ping",
            "tracert",
            "netstat"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 207,
        "bloque": "II",
        "tema": 18,
        "origen": "temario",
        "pregunta": "Si un archivo en Linux tiene permisos '755', ¿qué permisos tiene el usuario propietario?",
        "opciones": [
            "Lectura y Ejecución",
            "Lectura y Escritura",
            "Solo Ejecución",
            "Lectura, Escritura y Ejecución"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 208,
        "bloque": "II",
        "tema": 19,
        "origen": "temario",
        "pregunta": "¿Qué propiedad de las transacciones (ACID) garantiza que si una transacción tiene éxito, los cambios sobrevivirán a cualquier fallo del sistema?",
        "opciones": [
            "Atomicidad",
            "Consistencia",
            "Aislamiento",
            "Durabilidad"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 209,
        "bloque": "II",
        "tema": 20,
        "origen": "temario",
        "pregunta": "En el modelo relacional, una Clave Primaria (Primary Key)...",
        "opciones": [
            "Puede contener valores nulos.",
            "No puede contener valores nulos.",
            "Es siempre un único atributo, nunca compuesto.",
            "Hace referencia a un registro de otra tabla."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 210,
        "bloque": "III",
        "tema": 21,
        "origen": "temario",
        "pregunta": "En la metodología ágil Scrum, ¿quién es el responsable de priorizar y gestionar el Product Backlog?",
        "opciones": [
            "El Scrum Master",
            "El Product Owner",
            "El Equipo de Desarrollo",
            "El Cliente Final"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 211,
        "bloque": "III",
        "tema": 22,
        "origen": "temario",
        "pregunta": "En UML, ¿cuál de los siguientes es un diagrama de comportamiento o dinámico?",
        "opciones": [
            "Diagrama de Clases",
            "Diagrama de Componentes",
            "Diagrama de Casos de Uso",
            "Diagrama de Despliegue"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 212,
        "bloque": "III",
        "tema": 23,
        "origen": "temario",
        "pregunta": "Al pasar del Modelo E-R al Relacional, las relaciones Muchos a Muchos (N:M)...",
        "opciones": [
            "Se resuelven propagando la clave del primero al segundo.",
            "No están permitidas en el Modelo E-R.",
            "Se transforman creando una nueva tabla intermedia.",
            "Se unifican en una única gran tabla universal."
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 213,
        "bloque": "III",
        "tema": 24,
        "origen": "temario",
        "pregunta": "En el diseño de sistemas, ¿cuál es el objetivo ideal de cohesión y acoplamiento?",
        "opciones": [
            "Alta cohesión y alto acoplamiento.",
            "Baja cohesión y bajo acoplamiento.",
            "Alta cohesión y bajo acoplamiento.",
            "Baja cohesión y alto acoplamiento."
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 214,
        "bloque": "III",
        "tema": 25,
        "origen": "temario",
        "pregunta": "¿Qué característica distingue a un lenguaje de programación interpretado?",
        "opciones": [
            "Traduce todo el código a un ejecutable nativo antes de ejecutarse.",
            "Traduce y ejecuta el código línea a línea.",
            "Solo puede ser ejecutado en el sistema operativo Windows.",
            "No soporta Programación Orientada a Objetos."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 215,
        "bloque": "III",
        "tema": 26,
        "origen": "temario",
        "pregunta": "¿Cómo se denominan las pruebas de software que asumen que el probador desconoce la estructura interna del código (se basan en entradas y salidas)?",
        "opciones": [
            "Pruebas de Caja Blanca",
            "Pruebas de Caja Negra",
            "Pruebas de Integración Ascendente",
            "Pruebas de Regresión Lógica"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 216,
        "bloque": "III",
        "tema": 27,
        "origen": "temario",
        "pregunta": "¿Qué tipo de mantenimiento se aplica cuando se modifica el software para mejorar su estructura interna sin cambiar su funcionalidad (ej. refactorización)?",
        "opciones": [
            "Correctivo",
            "Evolutivo",
            "Adaptativo",
            "Perfectivo"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 217,
        "bloque": "III",
        "tema": 28,
        "origen": "temario",
        "pregunta": "¿Qué acrónimo define los cuatro principios básicos de accesibilidad web de las WCAG 2.1?",
        "opciones": [
            "WAI-ARIA",
            "POUR (Perceptible, Operable, Comprensible, Robusto)",
            "ACID",
            "AJAX"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 218,
        "bloque": "IV",
        "tema": 29,
        "origen": "temario",
        "pregunta": "¿Cuántas capas tiene el Modelo OSI de la ISO?",
        "opciones": [
            "4",
            "5",
            "7",
            "9"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 219,
        "bloque": "IV",
        "tema": 30,
        "origen": "temario",
        "pregunta": "¿Qué dispositivo de red de capa 2 crea dominios de colisión independientes por cada puerto, aprendiendo las direcciones MAC?",
        "opciones": [
            "Hub (Concentrador)",
            "Switch (Conmutador)",
            "Repetidor",
            "Router (Enrutador)"
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 220,
        "bloque": "IV",
        "tema": 31,
        "origen": "temario",
        "pregunta": "¿Qué protocolo se utiliza en redes IP para traducir una dirección IP lógica a una dirección MAC física?",
        "opciones": [
            "DNS",
            "DHCP",
            "ICMP",
            "ARP"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 221,
        "bloque": "IV",
        "tema": 31,
        "origen": "temario",
        "pregunta": "¿Qué puerto utiliza habitualmente el servicio web seguro HTTPS?",
        "opciones": [
            "80",
            "21",
            "443",
            "22"
        ],
        "respuestaIndex": 2,
        "oposiciones": null
    },
    {
        "id": 222,
        "bloque": "IV",
        "tema": 32,
        "origen": "temario",
        "pregunta": "¿Qué diferencia principal existe entre un IDS y un IPS en seguridad perimetral?",
        "opciones": [
            "El IDS es hardware y el IPS es software.",
            "El IDS solo avisa de una intrusión, mientras que el IPS puede bloquearla proactivamente.",
            "El IDS cifra la conexión y el IPS la descifra.",
            "No hay diferencia, son el mismo sistema bajo distintos estándares."
        ],
        "respuestaIndex": 1,
        "oposiciones": null
    },
    {
        "id": 223,
        "bloque": "IV",
        "tema": 33,
        "origen": "temario",
        "pregunta": "¿Qué protocolo/formato de mensajes utilizan los servicios web SOAP exclusivamente?",
        "opciones": [
            "JSON",
            "YAML",
            "HTML",
            "XML"
        ],
        "respuestaIndex": 3,
        "oposiciones": null
    },
    {
        "id": 224,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "Según el artículo 1 de la Constitución, España se constituye en un:",
        "opciones": [
            "Estado democrático y de Derecho.",
            "Estado social y democrático de Derecho.",
            "Estado liberal y democrático de Derecho.",
            "Estado autonómico, social y de Derecho."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 225,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "¿Qué fecha entró en vigor la Constitución Española?",
        "opciones": [
            "El 6 de diciembre de 1978.",
            "El 27 de diciembre de 1978.",
            "El 29 de diciembre de 1978.",
            "El 1 de enero de 1979."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 226,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "La soberanía nacional reside en:",
        "opciones": [
            "El Rey.",
            "Las Cortes Generales.",
            "El pueblo español.",
            "El Gobierno de la Nación."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 227,
        "bloque": "I",
        "tema": 1,
        "origen": "temario",
        "pregunta": "¿Qué artículo establece que \"La ley limitará el uso de la informática...\"?",
        "opciones": [
            "Artículo 18.1",
            "Artículo 18.4",
            "Artículo 20.1",
            "Artículo 9.3"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 228,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según la Constitución Española, la ley que limita el uso de la informática para proteger el honor y la intimidad personal y familiar, mencionada en el artículo 18:",
        "opciones": [
            "Será orgánica.",
            "Podrá ser orgánica o real decreto ley.",
            "Podrá ser orgánica, real decreto ley o real decreto.",
            "Podrá ser orgánica o real decreto."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 229,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el número mínimo de parlamentarios necesarios para conseguir una mayoría absoluta en una votación en el Parlamento de Andalucía según el Estatuto de Autonomía de Andalucía?",
        "opciones": [
            "51.",
            "52.",
            "53.",
            "55."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 230,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la duración máxima de una asignación temporal por desplazamiento a un centro de salud diferente para los pacientes en Andalucía?",
        "opciones": [
            "3 meses.",
            "6 meses.",
            "1 año.",
            "Sin límite, mientras dure el desplazamiento."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 231,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo se denominan los centros que ejercen la competencia para la obtención, procesamiento y suministro de unidades de sangre y derivados sanguíneos para la cobertura de las necesidades de transfusión de los hospitales andaluces?",
        "opciones": [
            "Centros de Transfusión, Tejidos y Células.",
            "Centros de Transfusión, Trasplantes y Criopreservación.",
            "Centros de Trasplantes, Transfusión y Criopreservación.",
            "Centros de Trasplantes y Tratamiento de Células."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 232,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo se denomina actualmente la Consejería competente en materia de salud en Andalucía?",
        "opciones": [
            "Consejería de Salud y Familia.",
            "Consejería de Salud y Familias.",
            "Consejería de Salud.",
            "Consejería de Salud y Consumo."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 233,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿En qué dirección de correo deberá un profesional del SAS informar de que ha recibido un correo sospechoso de phishing?",
        "opciones": [
            "scam@juntadeandalucia.es",
            "phishing@juntadeandalucia.es",
            "abuse@juntadeandalucia.es",
            "malware@juntadeandalucia.es"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 234,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes es un canal para comunicar incidencias en Ayuda Digital?",
        "opciones": [
            "Telegram.",
            "Whatsapp.",
            "Twitter.",
            "Todos son canales válidos para comunicar incidencias en Ayudad Digital."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 235,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuáles son las Direcciones Generales que dependen de la Dirección Gerencia del Servicio Andaluz de Salud?",
        "opciones": [
            "la Dirección General de Asistencia Sanitaria y Resultados en Salud, la Dirección General de Personal, la Dirección General de Gestión Económica y Servicios y la Dirección General de Tecnologías de la Información y Comunicaciones",
            "la Dirección General de Asistencia Sanitaria y Resultados en Salud, la Dirección General de Personal, la Dirección General de Gestión Económica y Servicios y la Dirección General de Sistemas de Información y Comunicaciones",
            "la Dirección General de Asistencia Sanitaria y Cuidados en Salud, la Dirección General de Personal, la Dirección General de Gestión Económica y Servicios y la Dirección General de Sistemas de Información y Comunicaciones",
            "la Dirección General de Asistencia Sanitaria y Cuidados en Salud, la Dirección General de Personal, la Dirección General Económica y Servicios Generales y la Dirección General de Tecnologías de la Información y Comunicaciones"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 236,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué sistemas de identificación permiten el acceso a TODOS los servicios disponibles en ClicSalud+?",
        "opciones": [
            "Tarjeta sanitaria y correo electrónico.",
            "Documento identificativo y contraseña personalizada.",
            "Certificado digital, DNIe o sistema Cl@ve.",
            "Número de tarjeta sanitaria y contraseña personalizada."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 237,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo se organiza la información en Confluence?",
        "opciones": [
            "Por proyectos y tareas.",
            "Por espacios y páginas.",
            "Por issues y comentarios.",
            "Por sprints y épicas."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 238,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué tipos de metodologías ágiles se pueden gestionar en JIRA?",
        "opciones": [
            "Solo Business.",
            "Scrum y Kanban.",
            "Business y Software.",
            "SGI y SGA."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 239,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué comando permite verificar el estado de un repositorio en Git?",
        "opciones": [
            "git status",
            "git situation",
            "git check",
            "git verify"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 240,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes es una de las principales características de Java?",
        "opciones": [
            "No soporta la programación orientada a objetos.",
            "Es un lenguaje no compilado.",
            "Es multiplataforma gracias a la JVM (Java Virtual Machine).",
            "No permite el manejo de excepciones."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 241,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es la máquina JVM en el contexto del lenguaje de programación Java?",
        "opciones": [
            "Un entorno de ejecución que convierte el código BYTECODE en instrucciones que el hardware puede interpretar.",
            "El compilador que convierte los ficheros .java a .class (BYTECODE).",
            "La biblioteca de clases para desarrollar aplicaciones Java.",
            "Un sistema operativo diseñado específicamente para ejecutar programas Java."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 242,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes es una de las principales características de Python?",
        "opciones": [
            "Es un lenguaje de bajo nivel.",
            "Es un lenguaje interpretado y de tipado dinámico.",
            "Solo permite programación orientada a objetos.",
            "Requiere la compilación previa de código antes de ejecutarse."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 243,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué operador se utiliza para la concatenación de 2 cadenas de caracteres en Python?",
        "opciones": [
            "*",
            "+",
            "&",
            "."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 244,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes siglas corresponden al Lenguaje de Marcado de Hipertexto?",
        "opciones": [
            "HMTL.",
            "HLMT.",
            "HLTM.",
            "HTML."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 245,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes lenguajes es el más adecuado para crear una API (Application Programming Interface) que interactúe con bases de datos desde una aplicación web?",
        "opciones": [
            "Python.",
            "HTML.",
            "CSS.",
            "Wordpress."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 246,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué atributo se debe emplear en un elemento <a> para indicar el enlace web al que va dirigido?",
        "opciones": [
            "href",
            "link",
            "target",
            "src"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 247,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes servicios a profesionales NO está disponible en mGerhonte?",
        "opciones": [
            "Modificación de cuenta bancaria.",
            "Solicitud de permisos y vacaciones.",
            "Ambos servicios están disponibles.",
            "Ninguno de estos servicios están disponibles."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 248,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre los sistemas informáticos y su jerarquía de niveles es correcta?",
        "opciones": [
            "Los niveles más bajos en la jerarquía se ocupan únicamente del almacenamiento de datos.",
            "En la jerarquía de niveles, el sistema operativo actúa como una capa de abstracción entre el hardware y el software de aplicación.",
            "En la jerarquía de sistemas informáticos, el software de aplicación interactúa directamente con el hardware.",
            "Los sistemas informáticos siempre siguen una jerarquía estricta, sin excepción."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 249,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué característica define mejor un sistema con alta disponibilidad?",
        "opciones": [
            "Puede dar acceso a un alto número de usuarios simultáneamente.",
            "Permite compartir un alto número de recursos.",
            "Permite ejecutar un alto número de tareas en paralelo por cada CPU.",
            "Garantiza un tiempo mínimo de inactividad y una recuperación rápida."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 250,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la combinación de teclas para bloquear un equipo como medida de seguridad en el sistema operativo Microsoft Windows?",
        "opciones": [
            "Windows + L",
            "Windows + D",
            "Windows + G",
            "Windows + Esc"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 251,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Microsoft dejará de ofrecer actualizaciones de seguridad desde Windows Update, asistencia técnica y correcciones de seguridad de forma gratuita para Windows 10 después del:",
        "opciones": [
            "14 de octubre de 2025.",
            "11 de noviembre de 2025.",
            "31 de diciembre de 2025.",
            "Ninguna de estas fechas es la correcta."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 252,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En general, en el sistema operativo Microsoft Windows, para pegar sin formato se utiliza la combinación de teclas:",
        "opciones": [
            "Ctrl + V",
            "Windows + Ctrl + V",
            "Ctrl + Mays + V",
            "Windows + Mays + V"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 253,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes comandos es el menos aconsejable de ejecutar en un equipo con sistema operativo Linux?",
        "opciones": [
            "sudo wc -l /etc/passwd",
            "sudo init 6",
            "sudo rm -rf /",
            "sudo shutdown -r now"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 254,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la opción correcta con respecto al software libre:",
        "opciones": [
            "Es software que debe ofrecerse sin costo alguno.",
            "Es software que permite a los usuarios modificar, distribuir y mejorar el software.",
            "Es software que únicamente se puede usar en proyectos sin ánimo de lucro.",
            "Es software que siempre debe ser utilizado en su versión original."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 255,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En las redes de telecomunicaciones, ¿cómo se clasifica una red MAN?",
        "opciones": [
            "Como una red que conecta dispositivos dentro de un edificio o una pequeña oficina.",
            "Como una red que utiliza exclusivamente tecnología inalámbrica.",
            "Como una red de redes, que se extiende a nivel mundial.",
            "Como una red que abarca una ciudad o área metropolitana."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 256,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Dadas las siguientes direcciones IP y máscara de subred, determine si ambas IPs pertenecen a la misma subred: - IP1: 10.0.1.5 - IP2: 10.0.2.10 - Máscara de subred: 255.255.255.0",
        "opciones": [
            "Sí, están en la misma subred.",
            "No, no están en la misma subred.",
            "Depende del tipo de red utilizada.",
            "No hay información suficiente para determinar si están o no en la misma subred."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 257,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿En qué capa del modelo OSI opera principalmente un switch?",
        "opciones": [
            "Capa de aplicación.",
            "Capa de transporte.",
            "Capa de enlace de datos.",
            "Capa de red."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 258,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿En qué capa del modelo OSI opera principalmente un router?",
        "opciones": [
            "Capa de enlace de datos.",
            "Capa de red.",
            "Capa de transporte.",
            "Capa física."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 259,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes servicios se basa en el protocolo TCP?",
        "opciones": [
            "SNMP.",
            "UDP.",
            "HTTP.",
            "TFTP."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 260,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el objeto de la Orden de 2 de junio de 2017 según su artículo 1?",
        "opciones": [
            "Reducir los costes de instalación en infraestructuras de comunicación de la Administración andaluza en consonancia con los avances tecnológicos.",
            "Diseñar redes de fibra e inalámbricas que den servicio a todos los andaluces, incluyendo a la Administración andaluza y al tejido empresarial.",
            "Mejorar la velocidad de las conexiones a internet en los hogares de todos los andaluces, así como dotar a la empresa privada de las necesarias infraestructuras de comunicaciones para el avance de la economía andaluza.",
            "Establecer los requisitos necesarios para el diseño e implementación de infraestructuras de cableado estructurado y red de área local inalámbrica en los edificios de los organismos cuya adhesión a la Red Corporativa de la Junta de Andalucía es obligatoria."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 261,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué tipo de redes se incluyen en las directrices de la Orden de 2 de junio de 2017?",
        "opciones": [
            "Redes inalámbricas y redes de fibra óptica externa.",
            "Redes de internet público y redes 5G.",
            "Redes cableadas.",
            "Redes locales cableadas y redes inalámbricas."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 262,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el objetivo principal de la Calidad de Servicio (QoS) en redes IP?",
        "opciones": [
            "Garantizar el uso exclusivo de ancho de banda por aplicaciones críticas.",
            "Priorizar el tráfico de red sensible a retrasos y pérdida de datos, como voz y video.",
            "Reducir la velocidad de transmisión de datos en la red.",
            "Garantizar que todo el tráfico de red reciba el mismo tratamiento."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 263,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes protocolos se utiliza específicamente para establecer y controlar sesiones de comunicación de audio y vídeo en redes IP?",
        "opciones": [
            "L2CAP",
            "OppusIP",
            "H.323",
            "802.11b"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 264,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la herramienta de Inteligencia Artificial generativa de Zoom de la que pueden hacer uso un número limitado de profesionales de la Junta de Andalucía?",
        "opciones": [
            "AI Companion.",
            "Copilot.",
            "LlaMa.",
            "Claude Sonnet."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 265,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes protocolos es utilizado por las redes VPN para cifrar los datos transmitidos?",
        "opciones": [
            "HTTP/HTTPS",
            "SSL/TLS",
            "FTP/SFTPS",
            "VPN/SVPN"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 266,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el propósito principal de una Red Privada Virtual, cuyas siglas en inglés son VPN?",
        "opciones": [
            "Asegurar que los dispositivos conectados a una red compartan el mismo ancho de banda y así poder acceder a la red corporativa por esa igualdad.",
            "Permitir el acceso remoto seguro a una red privada a través de internet.",
            "Encapsular las IPs públicas para poder acceder a redes privadas.",
            "Dotar de una conexión 4G o 5G para poder acceder a la red corporativa."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 267,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta:",
        "opciones": [
            "La Unidad de Seguridad TIC (USTIC) del Servicio Andaluz de Salud (SAS) tiene como finalidad principal la creación de las condiciones necesarias de confianza en el uso de los medios electrónicos, a través de medidas para garantizar la seguridad de los sistemas, los datos, las comunicaciones, y los servicios electrónicos, que permita a los ciudadanos y al SAS, el ejercicio de derechos y el cumplimiento de deberes a través de estos medios.",
            "La Unidad de Sistemas TIC (USTIC) del SAS tiene como finalidad principal la creación de las condiciones necesarias de confianza en el uso de los medios electrónicos, a través de medidas para garantizar la seguridad de los sistemas, los datos, las comunicaciones, y los servicios electrónicos, que permita a los ciudadanos y al SAS, el ejercicio de derechos y el cumplimiento de deberes a través de estos medios.",
            "La Unidad de Servicios TIC (USTIC) del SAS tiene como finalidad principal la creación de las condiciones necesarias de confianza en el uso de los medios electrónicos, a través de medidas para garantizar la seguridad de los sistemas, los datos, las comunicaciones, y los servicios electrónicos, que permita a los ciudadanos y al SAS, el ejercicio de derechos y el cumplimiento de deberes a través de estos medios.",
            "La Unidad de Soluciones TIC (USTIC) del SAS tiene como finalidad principal la creación de las condiciones necesarias de confianza en el uso de los medios electrónicos, a través de medidas para garantizar la seguridad de los sistemas, los datos, las comunicaciones, y los servicios electrónicos, que permita a los ciudadanos y al SAS, el ejercicio de derechos y el cumplimiento de deberes a través de estos medios."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 268,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el propósito principal de la Red SARA en España?",
        "opciones": [
            "Gestionar las redes sociales oficiales del gobierno español.",
            "Ofrecer servicios de correo electrónico a las empresas privadas.",
            "Conectar las infraestructuras de comunicaciones y servicios básicos de las Administraciones Públicas españolas.",
            "Proporcionar acceso público a internet para los ciudadanos, origen de la implantación de Andalucía Vuela."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 269,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la función principal de un firewall?",
        "opciones": [
            "Filtrar el correo \"spam\" entrante.",
            "Monitorizar, filtrar y controlar el tráfico de red entrante y saliente.",
            "Detectar virus y malware entrante y saliente.",
            "Garantizar el cifrado del tráfico de red entrante y saliente."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 270,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es un CERT en el ámbito de la seguridad informática?",
        "opciones": [
            "Es un equipo de personas dedicado a prevenir, detectar y responder eficazmente a los incidentes de seguridad que puedan materializarse sobre los sistemas informáticos.",
            "Es un sistema automatizado de gestión de contraseñas que permite recuperar accesos para redes privadas.",
            "Un protocolo de red diseñado para optimizar la velocidad de transferencia de datos en conexiones inalámbricas.",
            "Un software para la creación de copias de seguridad en la nube."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 271,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el principal objetivo del modelo de referencia ANSI/SPARC en el contexto de las bases de datos?",
        "opciones": [
            "Establecer un conjunto de reglas para la creación de interfaces gráficas de usuario en bases de datos.",
            "Definir un estándar para la arquitectura de los sistemas de gestión de bases de datos.",
            "Regular los tipos de datos utilizados en bases de datos relacionales.",
            "Mejorar la velocidad de consultas en bases de datos distribuidas."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 272,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Dónde se encontraría la definición de un tipo de datos \"integer\" según el modelo de referencia ANSI/SPARC para Bases de Datos?",
        "opciones": [
            "En el Núcleo de la Base de Datos.",
            "En el Esquema de Tabla.",
            "En el Diccionario de Datos.",
            "En la Capa de Aplicación."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 273,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es la normalización en un Sistema Gestor de Bases de Dato (SGBD)?",
        "opciones": [
            "El proceso de optimizar la consulta de datos mediante el análisis de los índices.",
            "El proceso de reducir la redundancia y mejorar la estructura de las tablas mediante la aplicación de reglas.",
            "El proceso de encriptar los datos antes de almacenarlos en la base de datos.",
            "El proceso de preparación de copias de seguridad automáticas para prevenir pérdidas de datos."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 274,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes Sistemas Gestores de Bases de datos (SGBD) NO es relacional?",
        "opciones": [
            "Oracle Database.",
            "Microsoft SQL Server.",
            "MySQL.",
            "Apache Hbase."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 275,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De los siguientes, ¿cuál es un Sistema Gestor de Bases de Datos (SGBD)?",
        "opciones": [
            "MariaDB.",
            "SQLighten.",
            "DataForge.",
            "MongoSQL."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 276,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes Sistemas Gestores de Bases de Datos (SGBD) es de código abierto?",
        "opciones": [
            "Microsoft SQL Server.",
            "Oracle Database.",
            "PostgreSQL.",
            "IBM DB2."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 277,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es una transacción en un Sistema Gestor de Bases de Datos (SGBD)?",
        "opciones": [
            "Un conjunto de operaciones que se ejecutan de manera atómica para garantizar la consistencia.",
            "Un solo comando de lectura o escritura sobre la base de datos.",
            "Un proceso de optimización de consultas.",
            "Una operación de respaldo de la base de datos."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 278,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el objetivo principal de la Ley 8/2011, de 28 de abril?",
        "opciones": [
            "Regular el uso de tecnologías de la información en las extintas Agencias Públicas Sanitarias.",
            "Definir las competencias de las comunidades autónomas en materia de seguridad.",
            "Establecer medidas para la protección de las infraestructuras críticas.",
            "Regular la protección de datos personales."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 279,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el objetivo principal de la herramienta PILAR?",
        "opciones": [
            "Desarrollar aplicaciones de software.",
            "Monitorear el tráfico de red en tiempo real.",
            "Proporcionar servicios de almacenamiento en la nube.",
            "Analizar y gestionar riesgos en sistemas de información."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 280,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el principal objetivo de la metodología MAGERIT?",
        "opciones": [
            "Realizar auditorías de cumplimiento normativo.",
            "Gestionar exclusivamente la seguridad física de los sistemas informáticos.",
            "Garantizar la instalación adecuada de hardware en las organizaciones.",
            "Proporcionar una guía para el análisis y gestión de riesgos en sistemas de información."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 281,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es la evaluación de impacto relativa a la protección de datos (EIPD)?",
        "opciones": [
            "Es un proceso para evaluar de manera anticipada los potenciales riesgos a los que están expuestos los datos personales en función de las actividades de tratamiento que se llevan a cabo con los mismos.",
            "Es un proceso para el análisis de las consecuencias que supondría la eliminación de datos personales obsoletos de los sistemas de información.",
            "Es un procedimiento que evalúa el rendimiento de los sistemas de protección de datos, pero no se refiere a los riesgos para los derechos y libertades de las personas.",
            "Es un proceso que se realiza en el momento en el que se produce una violación de datos con el fin de evaluar las consecuencias de la fuga."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 282,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Reglamento (UE) 2016/679 RGPD, ¿qué derecho tiene una persona física en relación con sus datos personales?",
        "opciones": [
            "Derecho a la protección de los datos de carácter personal que le conciernan.",
            "Derecho a obtener beneficios económicos por sus datos personales.",
            "Derecho a compartir libremente los datos de otras personas.",
            "Ninguna de las opciones es correcta."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 283,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta acerca de la aplicación GUInE (Gestión de Unidades de Ingresos Económicos):",
        "opciones": [
            "Es la aplicación que utilizan los profesionales que trabajan en las Unidades de Ingresos Económicos.",
            "Es una aplicación que gestiona la información sobre las incapacidades temporales de los trabajadores.",
            "Es una aplicación integral para la gestión de aquellos servicios, actividades y entrega de bienes, susceptibles de generar una liquidación en el ámbito del Servicio Andaluz de Salud.",
            "Las respuestas A) y C) son correctas."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 284,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es @firma?",
        "opciones": [
            "Un sistema de mensajería instantánea para la Administración de la Junta de Andalucía.",
            "Una plataforma corporativa de autenticación y firma basada en certificados electrónicos para procedimientos administrativos, trámites y servicios de la Administración de la Junta de Andalucía.",
            "Un software para la edición de documentos legales de la Junta de Andalucía.",
            "La aplicación para el Registro de Entrada y Salida unificado para toda la Junta de Andalucía."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 285,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la dirección del acortador de URLs de páginas web y recursos publicados por la Junta de Andalucía?",
        "opciones": [
            "https://junta.es/",
            "https://jda.es/",
            "https://lajunta.es/",
            "https://andalucia.es/"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 286,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué tipo de red es la Intranet del SAS desde el punto de vista del acceso a la misma?",
        "opciones": [
            "Pública.",
            "Semi-pública.",
            "Privada.",
            "Ninguna de las anteriores."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 287,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes sería la plataforma más adecuada para crear un curso virtual?",
        "opciones": [
            "Blogger.",
            "Moodle.",
            "Prezzi.",
            "Genialy."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 288,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué aplicaciones informáticas (APPs) para dispositivos móviles están disponibles en el SAS?",
        "opciones": [
            "App SIGLO Almacen, App mGERHONTE, App móvil ayudaDIGITAL.",
            "App SIGLO Almacen, App Salud Andalucía, App mGERHONTE, App móvil ayudaDIGITAL.",
            "App SIGLO Almacen, App Dona Sangre, App Salud Andalucía, App mGERHONTE, App móvil ayudaDIGITAL, App \"061 Andalucía Personas Sordas\".",
            "App SIGLO Almacen, App Salud Andalucía, App mGERHONTE, App móvil ayudaDIGITAL, App \"061 Andalucía Personas Sordas\"."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 289,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué sistema de información del SAS permite la difusión de los resultados obtenidos de la explotación de los distintos Sistemas de Información?",
        "opciones": [
            "INFOSAS.",
            "eINFO.",
            "INFOWEB.",
            "Ninguna de las respuestas es correcta."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 290,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique qué funcionalidades están incluidas en GERHONTE para la gestión de los Recursos Humanos del Servicio Andaluz de Salud:",
        "opciones": [
            "Turnos y absentismo. Desempeño profesional. Nóminas. Relaciones Laborales. Expedientes. Plantilla. Fiscalización. Formación.",
            "Turnos y absentismo. Nóminas. Fiscalización. Formación.",
            "Turnos y absentismo. Desempeño profesional. Nóminas. Plantilla. Fiscalización. Formación.",
            "Turnos y absentismo. Nóminas. Relaciones Laborales. Expedientes. Plantilla."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 291,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes sistemas de información es el utilizado en el SAS para el análisis de costes de los Centros de Responsabilidad de Hospitales, Distritos de Atención Primaria y Áreas de Gestión Sanitaria?",
        "opciones": [
            "INFOSAS.",
            "e-Salud.",
            "COAN SSPA.",
            "Listados."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 292,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes herramientas están autorizadas para el control remoto de equipos en el soporte al usuario en el Servicio Andaluz de Salud?",
        "opciones": [
            "AnyDesk.",
            "TeamViewer.",
            "AnyDesk y TeamViewer están autorizadas.",
            "Ni AnyDesk ni TeamViewer están autorizadas."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 293,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿En qué plataforma está basado el sistema TELÉMACO?",
        "opciones": [
            "En Chrome Remote Desktop, autorizado por el SAS.",
            "En ISL Light, alojada en una nube privada exclusiva para el SAS.",
            "En una IA, con acceso remoto mediante software optimizado por el SAS.",
            "Las opciones A) y C) son correctas."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 294,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo pueden los profesionales del SAS acceder al correo corporativo?",
        "opciones": [
            "Solo a través de Webmail (https://correo.juntadeandalucia.es).",
            "Solo a través de Mozilla Thunderbird.",
            "Solo a través de Microsoft Outlook.",
            "Tanto a través de Webmail, como de Mozilla Thunderbird, como de Microsoft Outlook."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 295,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué aplicación debe usar un profesional del SAS para gestionar su contraseña de acceso de manera unificada para los sistemas corporativos del SAS, tales como el correo electrónico, Diraya o e-profesional?",
        "opciones": [
            "Active Directory.",
            "IdenTIC.",
            "AGESCON.",
            "Cualquiera de las anteriores."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 296,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo pueden otros profesionales distintos al solicitante hacer seguimiento y realizar acciones sobre una solicitud en Ayuda Digital en el momento de registrarla?",
        "opciones": [
            "Esto no es posible actualmente.",
            "Añadiendo a los profesionales en el apartado Notificaciones.",
            "Añadiendo a los profesionales en el apartado Seguimiento.",
            "Añadiendo a los profesionales en el apartado Interesados."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 297,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el canal por el que los profesionales comunican más peticiones en Ayuda Digital mensualmente?",
        "opciones": [
            "Correo Electrónico.",
            "Teléfono.",
            "Ayuda Digital Web.",
            "App Ayuda Digital."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 298,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la versión actual de LeTSAS?",
        "opciones": [
            "LeTSAS 5.",
            "LeTSAS 6.",
            "LeTSAS 7.",
            "LeTSAS 8."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 299,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cómo se clasifica LeTSAS dentro de las soluciones tecnológicas del SAS?",
        "opciones": [
            "Como una herramienta de gestión para personal de gestión y servicios.",
            "Como un sistema operativo ligero destinado a optimizar el uso de terminales en el entorno sanitario.",
            "Como un software de análisis de la información para datos clínicos.",
            "Como un estándar normativo de obligado cumplimiento para los profesionales."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 300,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué extensión del nombre de un fichero indica que se trata de un documento de LibreOffice Impress?",
        "opciones": [
            ".odt",
            ".odi",
            ".odp",
            ".odr"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 301,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes funciones en LibreOffice Calc devuelve el número de celdas en un intervalo que cumplen un determinado criterio?",
        "opciones": [
            "SUMAR.SI()",
            "SI()",
            "MAX.SI()",
            "CONTAR.SI()"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 302,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De las siguientes aplicaciones corporativas del SAS, ¿cuál NO permite su acceso mediante el Servicio de Acceso Remoto a Aplicaciones (SARAC)?",
        "opciones": [
            "Vacunas.",
            "Programa de Detección Precoz de Cáncer Colorrectal.",
            "SIGLO.",
            "COAN SSPA."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 303,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué elemento HTML se puede utilizar para incluir gráficos mediante scripts de JavaScript?",
        "opciones": [
            "<canvas>",
            "<code>",
            "<script>",
            "<graph>"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 304,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la versión actual de LibreOffice?",
        "opciones": [
            "7.6",
            "14.10",
            "25.2",
            "Ninguna de las anteriores."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 305,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué fórmula daría ERROR al intentar mecanizarla en una celda de una hoja de cálculo de Microsoft Excel para realizar el redondeo a dos cifras del valor de un importe de 121,21€ más el 21% de IVA?",
        "opciones": [
            "+Redondear(121,21*1,21;2)",
            "=+Redondear(121,21*1,21;2)",
            "=Redondear(121,21*1,21;2)",
            "+=Redondear(121,21*1,21;2)"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "SAS"
        ]
    },
    {
        "id": 306,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación a los derechos y deberes de los ciudadanos, el artículo 30 de la Constitución Española indica que:",
        "opciones": [
            "Mediante ley podrán ser de obligado cumplimiento los deberes de los ciudadanos en los casos de grave riesgo, catástrofe o calamidad pública.",
            "Mediante Real Decreto podrán ser de obligado cumplimiento los deberes de los ciudadanos en los casos de grave riesgo, catástrofe o calamidad pública.",
            "Mediante ley podrán eliminarse los deberes de los ciudadanos en los casos de grave riesgo, catástrofe o calamidad pública.",
            "Mediante ley podrán regularse los deberes de los ciudadanos en los casos de grave riesgo, catástrofe o calamidad pública."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 307,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 62 de la Constitución Española, ¿a quién corresponde expedir los decretos acordados en el Consejo de Ministros?",
        "opciones": [
            "Al Rey.",
            "Al Presidente del Gobierno.",
            "Al titular del Ministerio de la Presidencia.",
            "Al Presidente de la Mesa del Congreso."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 308,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 159 de la Constitución Española, el Tribunal Constitucional se compone de:",
        "opciones": [
            "Doce miembros nombrados por el Rey; de ellos, tres serán a propuesta del Congreso por mayoría de tres quintos de sus miembros.",
            "Doce miembros nombrados por el Rey; de ellos, cuatro serán a propuesta del Congreso por mayoría de tres quintos de sus miembros.",
            "Dieciséis miembros nombrados por el Rey; de ellos, cuatro serán a propuesta del Congreso por mayoría de tres quintos de sus miembros.",
            "Dieciséis miembros nombrados por el Rey; de ellos, tres serán a propuesta del Congreso por mayoría de tres quintos de sus miembros."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 309,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 68 de la Constitución Española, indique de cuántos diputados se compone el Congreso:",
        "opciones": [
            "De un mínimo de 250 y de un máximo de 350.",
            "De un mínimo de 300 y de un máximo de 400.",
            "De un mínimo de 300 y de un máximo de 350.",
            "De un mínimo de 350 y de un máximo de 400."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 310,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según se expone en el artículo 113 de la Constitución Española, la moción de censura deberá ser propuesta por:",
        "opciones": [
            "Al menos la décima parte de los Diputados.",
            "Al menos un veinte por ciento de los Diputados.",
            "Al menos la décima parte de cada una de las Cámaras.",
            "Al menos 20 Diputados y 20 Senadores."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 311,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes NO es uno de los 17 Objetivos de Desarrollo Sostenibles de la Agenda 2030?",
        "opciones": [
            "Hambre cero.",
            "Educación de calidad.",
            "Aguas residuales y saneamiento.",
            "Trabajo decente y crecimiento económico."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 312,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según la Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno, ¿cuál de los siguientes NO es miembro de la Comisión de Transparencia y Buen Gobierno?",
        "opciones": [
            "Un Diputado.",
            "Un representante de la Subsecretaria de Estado de Administraciones Públicas.",
            "Un representante del Defensor del Pueblo.",
            "Un representante de la Autoridad Independiente de Responsabilidad Fiscal."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 313,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál es el Título de la Constitución Española relativo a la Organización Territorial del Estado:",
        "opciones": [
            "Título IV.",
            "Título VI.",
            "Título VIII.",
            "Título X."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 314,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el artículo 103.1 de la Constitución Española, la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de:",
        "opciones": [
            "Eficacia, eficiencia, descentralización, desconcentración y cooperación, con sometimiento pleno a la Ley y al Derecho.",
            "Eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.",
            "Eficacia, jerarquía, descentralización, concentración y coordinación, con sometimiento pleno al ordenamiento jurídico.",
            "Eficacia, jerarquía, descentralización, desconcentración y cooperación, con sometimiento pleno a la Ley y al Derecho."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 315,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según lo establecido en el artículo 82 de la Constitución Española, cuando se trate de refundir varios textos legales en uno solo, la delegación legislativa de las Cortes Generales en el Gobierno deberá otorgarse mediante:",
        "opciones": [
            "Una Ley de Bases.",
            "Una Ley Orgánica.",
            "Una Ley Ordinaria.",
            "Un Decreto Legislativo."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 316,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el artículo 51 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, se definen criterios de actuación de las Administraciones públicas. ¿Cuál de los siguientes es uno de ellos?",
        "opciones": [
            "Facilitar la conciliación de la vida familiar y laboral, sin menoscabo de la formación profesional y acción social.",
            "Fomentar la participación en igualdad, tanto en el acceso al empleo público como a lo largo de la carrera profesional.",
            "Establecer medidas cautelares de protección frente al acoso sexual.",
            "Establecer medidas efectivas para eliminar cualquier discriminación retributiva, directa o indirecta, por razón de sexo. 2019 – TAI - LI Página 1 de 14"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 317,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 8 de la Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye:",
        "opciones": [
            "Discriminación indirecta por razón de sexo.",
            "Discriminación directa por razón de sexo.",
            "Discriminación por asociación en razón de sexo.",
            "Discriminación maternal por razón de sexo."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 318,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 26 de la Ley 39/2006, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, señale la opción correcta en relación a la clasificación de los grados de dependencia:",
        "opciones": [
            "Grado I. Dependencia moderada: cuando la persona necesita ayuda para realizar varias actividades básicas de la vida diaria, al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personal.",
            "Grado II. Gran dependencia: cuando la persona necesita ayuda para realizar varias actividades básicas de la vida diaria una o dos veces al día, pero no quiere el apoyo permanente de un cuidador o tiene necesidades de apoyo extenso para su autonomía personal.",
            "Grado III. Dependencia total: cuando la persona necesita ayuda para realizar varias actividades básicas de la vida diaria varias veces al día y, por su pérdida total de autonomía necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonomía personal.",
            "Grado IV. Dependencia máxima: cuando la persona necesita constantemente ayuda para realizar cualquier actividad básica de la vida diaria."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 319,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación al DNIe v3.0, indique la respuesta correcta:",
        "opciones": [
            "Contiene dos certificados electrónicos de componentes: uno de Autenticación y otro de Firma.",
            "La renovación de los certificados incluidos en la tarjeta del DNI electrónico puede realizarse en los Puntos de Actualización del DNIe y a través de Internet.",
            "Actualmente, los certificados electrónicos de Autenticación y de Firma Electrónica que contiene tienen un plazo de validez de 24 meses.",
            "El PIN debe tener un mínimo de 8 caracteres y un máximo de 12."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 320,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La nueva Agenda Digital \"España Digital 2025\" recoge un conjunto de medidas, reformas e inversiones. ¿En cuántos ejes se articulan estas medidas?",
        "opciones": [
            "6",
            "9",
            "12",
            "10"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 321,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué algoritmos criptográficos soporta el DNIe v3.0?",
        "opciones": [
            "RSA, PGP y Blowfish.",
            "RC5 y algoritmo de hash MD5.",
            "ElGamal, algoritmo de hash MD5 y cifrado simétrico Triple DES.",
            "RSA, algoritmo de hash SHA-256 y cifrado simétrico Triple DES y AES."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 322,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con respecto a la prescripción de las sanciones referidas a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, señale cuál de estas afirmaciones es correcta:",
        "opciones": [
            "Las sanciones por importe igual o inferior a 40.000 euros, prescriben en el plazo de diez meses.",
            "Las sanciones por importe igual o inferior a 40.000 euros, prescriben en el plazo de un año.",
            "Las sanciones por importe igual o inferior a 40.000 euros, prescriben en el plazo de dos años",
            "Las sanciones por importe igual o inferior a 40.000 euros, prescriben en el plazo de tres años."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 323,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta en relación al ámbito de aplicación material del Reglamento (UE) 2016/679 en lo que respecta al tratamiento de datos personales:",
        "opciones": [
            "Se aplica al tratamiento total o parcialmente automatizado de datos personales por parte de las autoridades competentes con fines de prevención, investigación, detección o enjuiciamiento de infracciones penales, o de ejecución de sanciones penales, incluida la de protección frente a amenazas a la seguridad pública y su prevención.",
            "Se aplica al tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
            "Se aplica al tratamiento de datos personales efectuado por una persona física en el ejercicio de actividades exclusivamente personales o domésticas.",
            "Se aplica al tratamiento total de datos personales."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 324,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Esquema Nacional de Seguridad, ¿cuál de las siguientes medidas de seguridad afecta a la dimensión de Trazabilidad?",
        "opciones": [
            "Copias de seguridad.",
            "Sellos de tiempo.",
            "Cifrado.",
            "Firma electrónica."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 325,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Conforme al artículo 30 de la Ley 39/2015, de Procedimiento Administrativo Común de las Administraciones Públicas, el cómputo de plazos señalados en días, siempre que por Ley o en el Derecho de la Unión Europea no se exprese otro cómputo, se entienden como:",
        "opciones": [
            "Días hábiles, contados a partir del día siguiente a aquel que tenga la notificación o publicación del acto de que se trate.",
            "Días hábiles, contados a partir del mismo día a aquel que tenga la notificación o publicación del acto de que se trate.",
            "Días naturales, contados a partir del día siguiente a aquel que tenga la notificación o publicación del acto de que se trate.",
            "Días naturales, contados a partir del mismo día a aquel que tenga la notificación o publicación del acto de que se trate."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 326,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La guía de auditoría, que identifica los requisitos a cumplir en conformidad con el Esquema Nacional de Interoperabilidad (ENI), contiene un conjunto de controles apropiados para evaluar el cumplimiento de lo previsto en el ENI, agrupados en tres categorías:",
        "opciones": [
            "Marco organizativo, Marco operacional y Medidas de protección.",
            "Marco organizativo, Marco semántico y Marco de seguridad.",
            "Evaluación organizativa, Evaluación semántica y Evaluación temporal.",
            "Marco organizativo, Marco operacional y Medidas técnicas. 2019 – TAI - LI Página 2 de 14"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 327,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes NO es una Norma Técnica de Interoperabilidad?",
        "opciones": [
            "Catálogo de estándares.",
            "Modelo de Datos para el intercambio de asientos entre las Entidades Registrales.",
            "Protocolo de gestión de recursos de la Administración.",
            "Expediente Electrónico."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 328,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Dentro de los servicios horizontales de Administración Electrónica, indique la afirmación correcta respecto a la funcionalidad principal del producto eVisor:",
        "opciones": [
            "Es un servicio que permite la creación de mapas interactivos para su presentación en portales web, cuadros de mando y otras aplicaciones sin necesidad de conocimientos de georreferenciación ni desarrollos adicionales.",
            "Es una aplicación web de generación de copia auténtica en papel de documentos con firma electrónica y de justificantes de firma electrónica.",
            "Es una herramienta basada en un Sistema de Información Territorial (GIS), que ofrece las funcionalidades necesarias para facilitar la gestión de la información de las Administraciones Públicas mediante la georreferenciación.",
            "Es una herramienta que ofrece el Observatorio de Accesibilidad Web para realizar el servicio de diagnóstico en línea para las Administraciones Públicas."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 329,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué solución común permite la gestión de la nómina de empleados públicos?",
        "opciones": [
            "SOROLLA2",
            "BADARAL",
            "NEDAES",
            "NOMINAe"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 330,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es la arquitectura ARM?",
        "opciones": [
            "Una arquitectura avanzada para microprocesadores RISC.",
            "Una arquitectura para computación en la nube, basada en el intercambio asíncrono de información entre nodos usando agentes autónomos.",
            "Una arquitectura de almacenamiento de información basada en redes de comunicaciones de fibra óptica.",
            "Una arquitectura de computación cuántica."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 331,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la velocidad máxima de transferencia del USB 4.0:",
        "opciones": [
            "Hasta 20 Gbps.",
            "Hasta 30 Gbps.",
            "Hasta 40 Gbps.",
            "Hasta 50 Gbps."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 332,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál de las siguientes es una tecnología de interfaz hardware:",
        "opciones": [
            "Thunderbird",
            "HIT",
            "Thunderbolt",
            "RISC"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 333,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación con el almacenamiento, ¿qué es un SSD?",
        "opciones": [
            "Secure System Disk. Es un sistema de almacenamiento de datos cifrado AES 128.",
            "Solid State Disk. Es un dispositivo de almacenamiento de datos que utiliza discos magnéticos.",
            "Solid State Drive. Es un dispositivo de almacenamiento de datos que utiliza memoria no volátil.",
            "Solid State Device. Es un dispositivo de almacenamiento de datos que utiliza memoria volátil."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 334,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "AV1 es un:",
        "opciones": [
            "Nuevo sistema de realidad aumentada.",
            "Nuevo sistema operativo para la IoT.",
            "Nuevo códec de vídeo.",
            "Nuevo estándar de seguridad para WiFi 6."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 335,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Si un árbol binario lo recorremos siguiendo el orden siguiente: raíz, subárbol izquierdo, subárbol derecho, ¿cuál de los siguientes tipos de recorrido estamos utilizando?",
        "opciones": [
            "Preorden",
            "Inorden",
            "Postorden",
            "Reorden"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 336,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En una distribución Linux, ¿qué directorio contiene, entre otros, los ficheros de configuración tanto a nivel de componentes del sistema operativo en sí, como de los programas y aplicaciones instaladas a posteriori?",
        "opciones": [
            "/root",
            "/bin",
            "/dev",
            "/etc"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 337,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En los sistemas Linux, si se ejecuta el comando chmod 640 para modificar los permisos de un archivo, ¿qué permisos estoy asignando?",
        "opciones": [
            "Acceso de lectura, escritura y ejecución al propietario, acceso de lectura al grupo y ningún acceso al resto de usuarios.",
            "Acceso de lectura, escritura y ejecución al propietario, acceso de lectura y escritura al grupo, y acceso de ejecución al resto de usuarios.",
            "Acceso de lectura y escritura al propietario, acceso de lectura al grupo, y ningún acceso al resto de usuarios.",
            "Acceso de lectura y escritura al propietario, acceso de ejecución al grupo, y ningún acceso al resto de usuarios."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 338,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes NO es un ORM (Mapeador Objeto-Relacional)?",
        "opciones": [
            "ADO.NET Entity Framework",
            "Ruby Hibernation",
            "NHibernate",
            "Hibernate"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 339,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes opciones NO se corresponde con una de las 12 Reglas de Codd?",
        "opciones": [
            "Regla de la no subversión. Si el sistema ofrece una interfaz de acceso a bajo nivel, dicho acceso no se podrá usar para subvertir el sistema (por ejemplo para sortear restricciones de integridad o seguridad).",
            "Tratamiento sistemático de valores nulos. El sistema debe permitir que haya campos nulos. Se debe disponer de una representación de valores desconocidos y no aplicables diferente de los valores normales.",
            "Dependencia de la distribución. Que la base de datos se almacene o gestione de forma distribuida en varios servidores afecta al uso de la misma y a la programación de las aplicaciones de usuario.",
            "Catálogo dinámico en línea basado en el modelo relacional. El sistema debe soportar un catálogo en línea, el catálogo relacional, que da acceso a la estructura de la base de datos y que debe ser accesible a los usuarios autorizados. 2019 – TAI - LI Página 3 de 14"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 340,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la definición correcta en referencia a los diagramas de flujo de datos de Métrica v3:",
        "opciones": [
            "Almacén de datos: representa la información en movimiento utilizada por el sistema.",
            "Proceso de control: representa procesos que coordinan y sincronizan las actividades de otros procesos del diagrama de flujo de datos.",
            "Flujo de control: representa el flujo entre dos procesos de control.",
            "Flujo de datos: representa el movimiento de los datos, y establece la comunicación entre dos almacenes."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 341,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Una tabla se encuentra en Tercera Forma Normal (3FN) si:",
        "opciones": [
            "Está en 2FN y todo atributo que no forma parte de una clave candidata depende de ella al completo.",
            "Está en 2FN y no existe ninguna dependencia transitiva de atributos no principales respecto de las claves.",
            "Está en 2FN y no existen relaciones de dependencia de reunión no triviales que no se generen desde las claves.",
            "Está en 2FN y los atributos que no forman parte de ninguna clave dependen de la clave principal."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 342,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según Métrica v3, en la teoría de la normalización se define el término de Dependencia Funcional como:",
        "opciones": [
            "Un atributo Y depende funcionalmente respecto de otro X, si depende funcionalmente de él en su totalidad, es decir, no depende de ninguno de los posibles atributos que formen parte de X.",
            "Un atributo Y se dice que depende funcionalmente de otro X si, y sólo si, a cada valor de X le corresponde un único valor de Y.",
            "Un atributo depende funcionalmente de otro si, y sólo si, depende de él a través de otro atributo.",
            "Un atributo X sólo puede tomar un único valor de dominio simple."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 343,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el lenguaje C++, si hablamos de un bucle con estructura do…while:",
        "opciones": [
            "Sólo se ejecuta si la condición del bucle es verdadera.",
            "Evalúa la condición del bucle y después se ejecuta al menos una vez.",
            "Se ejecuta una vez antes de evaluar la condición del bucle.",
            "Se ejecuta una sola vez siempre y cuando sea verdadera la condición del bucle."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 344,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta en relación a las tecnologías y herramientas de desarrollo front-end:",
        "opciones": [
            "Sass, Less y Stylus, son preprocesadores de CSS.",
            "Postman es una herramienta que sirve para probar la parte de front-end, no permitiendo validar los servicios REST.",
            "Node js fue construido con el motor de java jre 1.9",
            "Bootstrap es una herramienta de desarrollo que permite realizar test de los servicios REST, aislando al programador del front-end."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 345,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Java, una clase declarada como 'abstract':",
        "opciones": [
            "Puede no estar implementada o estarlo de manera incompleta.",
            "Puede ser instanciada.",
            "No puede ser extendida por subclases.",
            "No existe el modificador abstract en Java."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 346,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En la declaración de una clase en java, ¿mediante qué cláusula es posible definir un listado de uno o varios interfaces para la clase en cuestión?",
        "opciones": [
            "Mediante la cláusula 'interfaces'.",
            "Mediante la cláusula 'declares'.",
            "Mediante la cláusula 'implements'.",
            "En Java no es posible declarar una clase con más de un interface."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 347,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Teniendo una base de datos relacional, con una tabla \"Empleados\" con campos {Id, Nombre, Puesto, Salario,....}, indique cuál sería una forma válida de comenzar la creación de un Trigger en ANSI SQL, si lo que se quiere validar es un cambio de valor del campo \"Salario\":",
        "opciones": [
            "CREATE TRIGGER Validar_salario BEFORE UPDATE OF Salario OF TABLE Empleados",
            "CREATE NEW TRIGGER BEFORE UPDATE OF Salario ON Empleados",
            "CREATE TRIGGER Validar_salario IN Empleados BEFORE UPDATE OF Salario",
            "CREATE TRIGGER Validar_salario BEFORE UPDATE OF Salario ON Empleados"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 348,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Si utilizamos el gestor de base de datos Oracle (v.10g), ¿qué podríamos hacer si dentro de una transacción de la base de datos se quiere establecer un punto de recuperación?",
        "opciones": [
            "Utilizar la sentencia SAVEPOINT y así definir un punto de salvaguarda dentro de una transacción.",
            "Utilizar la sentencia ROLLBACK y así definir un punto de salvaguarda dentro de una transacción",
            "Usar los comandos GRANT para dar permisos adecuados de administrador DBA sobre las tablas.",
            "Utilizar la sentencia RECOVERPOINT y así definir un punto de salvaguarda dentro de una transacción."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 349,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Respecto a los patrones de diseño GoF (Gang of Four), indique cuál de las siguientes definiciones se corresponde con el patrón Decorator:",
        "opciones": [
            "Proporciona el poder agregar una nueva funcionalidad a un objeto dinámicamente.",
            "Proporciona una interfaz unificada para un conjunto de interfaces de un subsistema.",
            "Proporciona un sustituto o representante de otro objeto para controlar el acceso a éste.",
            "Proporciona un modo de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 350,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Cuál de las siguientes afirmaciones NO se corresponde con el lenguaje UML:",
        "opciones": [
            "Una clase se representa mediante un rectángulo con tres secciones, la superior contiene el identificador o nombre de la clase, la central contiene los atributos, y la inferior, las operaciones o métodos que tienen asociados.",
            "Las asociaciones son los elementos que representan las relaciones que existen entre los elementos estructurales que se utilizan en los modelos.",
            "Un tipo de asociación entre elementos estructurales es la dispersión.",
            "La agregación es un tipo de asociación entre elementos estructurales que representa una clase que es parte de otra. 2019 – TAI - LI Página 4 de 14"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 351,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En JAVA, siendo x=6 e y=3 (ambas variables de tipo int), la operación x^y da como resultado:",
        "opciones": [
            "216",
            "63",
            "3",
            "5"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 352,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el entorno de programación .Net, indique que es un NuGet:",
        "opciones": [
            "Una biblioteca de clases base.",
            "Un administrador de paquetes.",
            "Una implementación de .Net.",
            "Un entorno de ejecución."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 353,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál de las siguientes opciones corresponde a una API de Java para el procesamiento de documentos en formato XML.",
        "opciones": [
            "JNA",
            "StAX",
            "JNI",
            "JPaX"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 354,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál NO es una característica de los servicios REST?",
        "opciones": [
            "Utiliza métodos del protocolo HTTP de forma explícita.",
            "La solicitud no requiere que el servidor recupere información de estado de la aplicación.",
            "Son admitidos los formatos XML y JSON para la transmisión o recepción de datos.",
            "Usa la especificación UDDI para publicar y encontrar información sobre los servicios web expuestos."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 355,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique, de entre las siguientes afirmaciones, cuál es relativa a Ruby on Rails (RoR):",
        "opciones": [
            "Es un lenguaje de programación creado por G. Ruby.",
            "Es un framework de control de versiones escrito en el lenguaje Ruby.",
            "Es un framework de desarrollo de aplicaciones web basado en el patrón MVC.",
            "Es un servicio de .NET."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 356,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En una sentencia \"if\" en el lenguaje de programación Python, ¿cómo se identifica el bloque de código a ejecutar si la condición se cumple?",
        "opciones": [
            "El bloque debe estar delimitado por llaves {}",
            "El bloque debe estar delimitado por corchetes []",
            "El bloque debe estar delimitado por corchetes ()",
            "Cada línea del bloque debe estar precedida por el mismo número de espacios en blanco, con la misma sangría."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 357,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el lenguaje XML, ¿cuál de las siguientes sentencias sería correcta para añadir comentarios?",
        "opciones": [
            "<-- Aquí va el comentario /-->",
            "< Aquí va el comentario !>",
            "<!-- Aquí va el comentario -->",
            "<--! Aquí va el comentario -->"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 358,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación con el Real Decreto 1112/2018, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público, indique qué respuesta es INCORRECTA:",
        "opciones": [
            "Las entidades obligadas deberán ofrecer un mecanismo de comunicación para presentar sugerencias y quejas.",
            "La primera revisión de accesibilidad deberá haberse realizado en el caso de los sitios web antes de dos años desde la entrada en vigor de este real decreto.",
            "La primera revisión de accesibilidad deberá haberse realizado en el caso de las aplicaciones móviles, antes de dos años desde la entrada en vigor de este real decreto.",
            "La entidad obligada deberá responder a la persona interesada sobre las solicitudes de información accesible y quejas, en el plazo de veinte días hábiles."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 359,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, ¿cuál es el objetivo de que un contenido sea Distinguible?",
        "opciones": [
            "Crear contenido que pueda presentarse de diferentes formas (por ejemplo, con una disposición más simple) sin perder información o estructura.",
            "Facilitar a los usuarios ver y oír el contenido, incluyendo la separación entre el primer plano y el fondo.",
            "Proporcionar alternativas textuales para todo contenido no textual de modo que se pueda convertir a otros formatos que las personas necesiten, tales como textos ampliados, braille, voz, símbolos o en un lenguaje más simple.",
            "Proporcionar alternativas para los medios tempodependientes."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 360,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según Métrica v3, ¿qué tipo de pruebas consiste en determinar que los tiempos de respuesta están dentro de los intervalos establecidos en las especificaciones del sistema?",
        "opciones": [
            "Pruebas de respuesta.",
            "Pruebas de sobrecarga.",
            "Pruebas de rendimiento.",
            "Pruebas de tiempo."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 361,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el software para control de versiones GIT, hacer un 'commit' es:",
        "opciones": [
            "La acción de introducir comentarios iterativos entre versiones.",
            "La acción de establecer un compromiso de uso (commitment) entre ambas partes.",
            "La acción de descargar la rama de trabajo del repositorio central.",
            "La acción de almacenar una nueva instantánea (snapshot) del estado del proyecto en el historial de GIT."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 362,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál de las siguientes herramientas de software libre se utiliza para realizar pruebas de carga y de estrés, permitiendo simular escenarios de concurrencia de usuarios:",
        "opciones": [
            "Cactus",
            "Mockito",
            "JMeter",
            "Foglight"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 363,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En Linux, ¿cuál de las siguientes opciones utilizaría para conocer qué puertos tiene abiertos un servidor?",
        "opciones": [
            "ntpq",
            "ntport",
            "nmap",
            "traceroute 2019 – TAI - LI Página 5 de 14"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 364,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En sistemas Debian, ¿cuál de los siguientes comandos permitiría descargar la información de los paquetes desde todas las fuentes configuradas?",
        "opciones": [
            "apt update",
            "apt upgrade",
            "apt full-upgrade",
            "apt list"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 365,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el contexto de la administración del almacenamiento, ¿qué es el “Thin Provisioning”?",
        "opciones": [
            "Es un mecanismo de despliegue de discos en red para clientes ligeros.",
            "Es método de virtualización de almacenamiento que permite que el espacio se asigne de forma justa y puntual.",
            "Es una tecnología que permite agregar discos físicos en caliente a las cabinas de la SAN de forma ligera.",
            "Es un método por el que se asigna todo el espacio virtualizado disponible y se va a reduciendo (shrinking) a medida que el cliente lo descarta."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 366,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación a los sistemas RAID, indique qué configuración permite acceso independiente con paridad distribuida:",
        "opciones": [
            "RAID 1",
            "RAID 3",
            "RAID 4",
            "RAID 5"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 367,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Considerando que tanto en el punto de origen como en el punto de destino disponemos de un ordenador de usuario con un cliente de correo electrónico instalado y un servidor de correo electrónico, ¿qué papel juegan los protocolos SMTP, POP3 e IMAP durante el envío de uno de estos correos electrónicos?",
        "opciones": [
            "SMTP se usa desde el ordenador del usuario de origen al servidor de correo electrónico en el origen. POP3 o IMAP se usan entre el servidor de correo en el origen y el servidor de correo en el destino. SMTP se usa de nuevo entre el servidor de correo de destino y el destinatario, para enviarle el mensaje cuando se conecte.",
            "POP3 se usa desde el ordenador del usuario de origen al servidor de correo electrónico en el origen. IMAP se usa entre el servidor de correo en el origen y el servidor de correo en el destino. SMTP se usa entre el servidor de correo de destino y el destinatario, para enviarle el mensaje cuando se conecte.",
            "SMTP se usa desde el ordenador del usuario de origen al servidor de correo electrónico en el origen, así como desde el servidor de origen al servidor de destino. POP3 o IMAP se usan desde el servidor de correo en el destino hasta el ordenador del destinatario, para enviarle el mensaje cuando se conecte.",
            "POP3 o IMAP se usan desde el ordenador del usuario de origen al servidor de correo electrónico en el origen, así como desde el servidor de origen al servidor de destino. SMTP se usa desde el servidor de correo en el destino hasta el ordenador del destinatario, para enviarle el mensaje cuando se conecte."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 368,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En las arquitecturas de microservicios las funcionalidades se implementan mediante la composición de distintos microservicios. Existen dos estrategias para gestionar esta composición, que son:",
        "opciones": [
            "Coreografía y orquestación.",
            "Coreografía y coordinación.",
            "Coordinación y orquestación.",
            "Gestión y orquestación."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 369,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué comando se debe ejecutar para mostrar un listado de los servicios en ejecución en un ordenador con sistema operativo Windows 10?",
        "opciones": [
            "Net view services",
            "Net start process",
            "Net start",
            "Net start all"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 370,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la última versión del protocolo de administración de red SNMP?",
        "opciones": [
            "SNMP v2",
            "SNMP v3",
            "SNMP v4",
            "SNMP v5"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 371,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Indique la afirmación FALSA con respecto al proceso de firma digital?",
        "opciones": [
            "La aplicación o dispositivo digital utilizados para la firma digital crea un resumen del documento a firmar utilizando una función hash.",
            "La aplicación cifra el documento a firmar asegurando la confidencialidad.",
            "La aplicación cifra el resumen del documento a firmar obteniendo a su vez otro documento electrónico que corresponde con la firma electrónica.",
            "Para cifrar el resumen, la aplicación utiliza la clave privada."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 372,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál de las siguientes opciones se corresponde con el concepto de ITIL:",
        "opciones": [
            "Su origen proviene de la metodología Kaizen y ofrece a las organizaciones un instrumento útil para la sistematización de las actividades que dan soporte al ciclo de vida del software.",
            "Es una librería java, referida a la seguridad, que forma parte de la plataforma de Jakarta EE.",
            "Es una colección de mejores prácticas de gestión de servicios de tecnologías de la información.",
            "Es una metodología de análisis y gestión de riesgos de los sistemas de información."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 373,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la última versión estable del protocolo TLS?",
        "opciones": [
            "TLS 1.2",
            "TLS 1.3",
            "TLS 1.4",
            "SSL 3.0"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 374,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál de los siguientes NO es un algoritmo asimétrico:",
        "opciones": [
            "RSA",
            "GOST",
            "ECDSA",
            "ElGamal"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 375,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Sobre redes inalámbricas, indique cuál de las siguientes afirmaciones es INCORRECTA:",
        "opciones": [
            "La frecuencia de 2,4 GHz presenta interferencias con algunas versiones de Bluetooth.",
            "La seguridad del protocolo WEP es superior a la del protocolo WPA2.",
            "El protocolo WPA3 surge, entre otros, a raiz del ataque KRACK, mejorando la modalidad de cifrado WPA2-PSK (AES).",
            "La frecuencia de 5 GHz tiene menor alcance que la de 2,4 GHz."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 376,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "El estándar comercializado con el nombre de Wi-Fi 6 se corresponde con el estándar de IEEE:",
        "opciones": [
            "802.11ax",
            "802.11ac",
            "802.11ac wave 2",
            "802.11az 2019 – TAI - LI Página 6 de 14"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 377,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es el prefijo para las direcciones multicast en el protocolo IPv6?",
        "opciones": [
            "FF80::/10",
            "FF00::/8",
            "FE00::/8",
            "FE80::/10"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 378,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De los siguientes protocolos de enrutamiento, ¿cuál utiliza un algoritmo de vector de distancia?",
        "opciones": [
            "OSPF",
            "IGRP",
            "IS-IS",
            "OLSR"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 379,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el protocolo HTTP, el código de error que indica que el servicio no está disponible es el:",
        "opciones": [
            "500",
            "501",
            "502",
            "503"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 380,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes registros DNS proporciona información sobre las características básicas del dominio y de la zona en la que se encuentra?",
        "opciones": [
            "AAAA",
            "PTR",
            "MX",
            "SOA"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 381,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué modalidad de gestión de dispositivos móviles se basa en permitir al usuario usar su propio dispositivo personal para tareas profesionales o educativas?",
        "opciones": [
            "COPE",
            "BYOD",
            "COBO",
            "CYOD"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 382,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La herramienta del CCN-CERT que permite realizar análisis estático de código dañino a través de múltiples motores antivirus y antimalware para plataformas Windows y Linux es:",
        "opciones": [
            "MARIA",
            "PILAR",
            "CLARA",
            "REYES"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 383,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación con las VPN de nivel de enlace, ¿cuál de los siguientes protocolos NO se utiliza para la implementación de dicha VPN?",
        "opciones": [
            "PPTP (Point-to-Point Tunneling Protocol).",
            "L2F (Layer Two Forwarding).",
            "L2TP (Layer Two Tunneling Protocol).",
            "P2TP (Point two Tunneling Protocol)."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 384,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es una red Scatternet?",
        "opciones": [
            "Es un tipo de red MAN (Metropolitan area network).",
            "Es una red de dispositivos WIFI en LAN (Local area network).",
            "Es un grupo de Piconets.",
            "Es la red utilizada para interconectar CubeSATs."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 385,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En relación a TCP y UDP indique cuál de las siguientes características NO es correcta:",
        "opciones": [
            "TCP es fiable.",
            "UDP obliga al nivel de red a verificar que el envío es correcto.",
            "TCP trabaja con un flujo de bytes.",
            "UDP es un protocolo sin conexión."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 386,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La arquitectura de ordenadores Harvard:",
        "opciones": [
            "Tiene un único espacio de memoria para datos e instrucciones.",
            "Tiene dos espacios de memoria separados, uno para datos y otro para instrucciones.",
            "Es un tipo de arquitectura Von Neumann.",
            "Tiene tres espacios de memoria separados, uno para datos, otro para instrucciones y otro para la memoria no volátil."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 387,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la funcionalidad de la herramienta \"FACILITA\"?",
        "opciones": [
            "Una herramienta de la Agencia Española de Protección de Datos para el tratamiento de datos personales de escaso riesgo.",
            "Una herramienta ofrecida por la Administración Pública que facilita la adecuación del plan de actuación para ayudar a las personas con movilidad reducida.",
            "Una aplicación de código abierto que ofrece la Administración General del Estado para que facilitar la visualización de contenidos multimedia.",
            "Una aplicación para móviles que ofrece la Agencia Estatal de Administración Tributaria para generar y presentar la declaración de la renta."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 388,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En JAVA podemos utilizar el interface PreparedStatement para:",
        "opciones": [
            "Inicializar las variables locales del programa con valores preestablecidos.",
            "Preparar los valores que introduciremos en un archivo de texto externo al programa.",
            "Permitir ejecutar muchas veces una sentencia SQL.",
            "Administrar el consumo de memoria que utilizan los objetos creados."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 389,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Para valorar el nivel de disponibilidad y seguridad de un CPD, el estándar ANSI EIA/TIA 942 estableció:",
        "opciones": [
            "Cuatro niveles, siendo TIER I el de mayor disponibilidad y TIER IV el de menor.",
            "Tres niveles, siendo TIER I el de mayor disponibilidad y TIER III el de menor.",
            "Tres niveles, siendo TIER I el de menor disponibilidad y TIER III el de mayor.",
            "Cuatro niveles, siendo TIER I el de menor disponibilidad y TIER IV el de mayor."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 390,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique cuál de las siguientes característica de JavaScript es INCORRECTA:",
        "opciones": [
            "Es imperativo y dinámico.",
            "Proporciona funciones de segunda clase.",
            "Es débilmente tipado.",
            "Está basado en prototipos. 2019 – TAI - LI Página 7 de 14"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 391,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes derechos recogidos en el Capítulo Segundo del Título I de la Constitución Española NO forma parte de los Derechos Fundamentales y Libertades Públicas (Artículos 15 a 29)?",
        "opciones": [
            "Derecho a sindicarse libremente.",
            "Derecho a la propiedad privada.",
            "Derecho a la producción y creación literaria, artística, científica y técnica.",
            "Derecho a elegir libremente su residencia."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 392,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Título I, Capítulo Cuarto, “De las garantías de las libertades y derechos fundamentales” de la Constitución Española de 1978, señale la opción correcta:",
        "opciones": [
            "Los derechos y libertades reconocidos no vinculan a todas las Administraciones Públicas.",
            "Sólo por ley orgánica podrá regularse el ejercicio de tales derechos y libertades.",
            "Una ley orgánica regulará la institución del Defensor del Pueblo.",
            "El reconocimiento, el respeto y la protección de los principios reconocidos en el Capítulo tercero, informará la judicialización positiva, la práctica legislativa y la actuación de los poderes públicos."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 393,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA de acuerdo con el Título II, artículo 62 de la Constitución Española de 1978. Corresponde al Rey:",
        "opciones": [
            "Convocar a referéndum en los casos previstos en la Constitución, previa autorización de las Cortes Generales.",
            "Convocar y disolver las Cortes Generales y convocar elecciones en los términos previstos en la Constitución.",
            "Proponer el candidato a Presidente de Gobierno y, en su caso, nombrarlo, así como poner fin a sus funciones en los términos previstos en la Constitución.",
            "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 394,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Quién puede ser elegido Defensor del Pueblo, según la Ley Orgánica 3/1981, de 6 de abril?",
        "opciones": [
            "Cualquier Magistrado elegido por las Cortes Generales.",
            "Cualquier Senador elegido por las Cortes Generales.",
            "Cualquier persona que se encuentre en el pleno disfrute de sus derechos civiles.",
            "Cualquier español mayor de edad que se encuentre en el pleno disfrute de sus derechos civiles y políticos."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 395,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el artículo 71 de la Constitución Española de 1978, ¿quién es el competente en las causas contra Diputados y Senadores?",
        "opciones": [
            "Sala de lo Penal del Tribunal Constitucional.",
            "Sala de lo Contencioso Administrativo del Tribunal Supremo.",
            "Sala de lo Penal del Tribunal Supremo.",
            "Sala de lo Civil del Tribunal Supremo."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 396,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según el Título III \"De las Cortes Generales\" de la Constitución Española de 1978, las Cámaras podrán:",
        "opciones": [
            "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentación directa por manifestaciones ciudadanas.",
            "Delegar en las Comisiones Legislativas Permanentes la aprobación de proyectos o proposiciones de ley relativas a los Presupuestos Generales del Estado.",
            "Reunirse en sesión extraordinaria a petición de la mayoría simple de los miembros de cualquiera de las Cámaras.",
            "Nombrar conjuntamente Comisiones de Investigación sobre asuntos de interés público. Sus conclusiones serán vinculantes para los Tribunales."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 397,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según lo establecido en el artículo 159 de la Constitución Española de 1978, los miembros del Tribunal Constitucional serán designados por períodos de:",
        "opciones": [
            "9 años y se renovarán por terceras partes cada 3.",
            "9 años y se renovarán por terceras partes cada 2.",
            "6 años y se renovarán por terceras partes cada 3.",
            "6 años y se renovarán por terceras partes cada 2."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 398,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "El Gobierno se rige, en su organización y funcionamiento, entre otras, por la Ley:",
        "opciones": [
            "Ley 50/1997, de 27 de noviembre.",
            "Ley 50/1999, de 26 de noviembre.",
            "Ley 50/1996, de 28 de noviembre.",
            "Ley 50/1998, de 29 de noviembre."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 399,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La Constitución Española de 1978 en su artículo 113 establece que:",
        "opciones": [
            "El Congreso de los Diputados puede exigir la responsabilidad jurídica del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
            "El Congreso de los Diputados puede exigir la responsabilidad política del Gobierno mediante la adopción por mayoría simple de la moción de censura.",
            "El Congreso de los Diputados puede exigir la responsabilidad civil del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
            "El Congreso de los Diputados puede exigir la responsabilidad política del Gobierno mediante la adopción por mayoría absoluta de la moción de censura."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 400,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA sobre el uso obligatorio de firma requerida a los interesados por parte de las Administraciones Públicas que recoge el artículo 11 de Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        "opciones": [
            "Conocer el estado de la tramitación.",
            "Desistir de acciones.",
            "Presentar declaraciones responsables o comunicaciones.",
            "Formular solicitudes."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 401,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Tal y como se recoge en la Resolución de 14 de diciembre de 2015, de la Dirección de Tecnologías de la Información y las Comunicaciones, por la que se establecen las prescripciones técnicas necesarias para el desarrollo y aplicación del sistema Cl@ve, señale la respuesta correcta:",
        "opciones": [
            "Es un sistema que está dirigido a los ciudadanos que cumplan con los requisitos indicados en las Prescripciones Técnicas.",
            "Ofrece tres niveles de garantía de registro asociados a la forma y a las garantías que ofrezca la comunicación de la información de registro por parte del ciudadano.",
            "Proporcionará a los usuarios tres modalidades de identificación electrónica basadas en el uso de claves concertadas.",
            "Permitirá también el acceso a servicios de firma electrónica, en particular, a servicios de firma de documentos electrónicos mediante certificados electrónicos centralizados."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 402,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta sobre la solicitud de acceso a la información pública que recoge el artículo 17 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno:",
        "opciones": [
            "Sólo se podrá presentar en castellano.",
            "Es obligatorio indicar una dirección de contacto electrónica, a efectos de comunicaciones.",
            "Deberá dirigirse al titular del órgano administrativo o entidad que posea la información.",
            "Deberá motivarse."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 403,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta sobre la vigencia que tienen los certificados electrónicos reconocidos incorporados al documento nacional de identidad, según la legislación vigente:",
        "opciones": [
            "No podrá ser superior a tres años.",
            "No podrá ser superior a cuatro años.",
            "No podrá ser superior a cinco años.",
            "No podrá ser superior a seis años."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 404,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La Ley 56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Información, ¿qué establece sobre la factura electrónica en el artículo 1?",
        "opciones": [
            "Los formatos estructurados de las facturas electrónicas permitirán su visualización y emisión en las distintas lenguas oficiales existentes y en inglés, con la finalidad de garantizar los derechos de los usuarios nacionales y extranjeros.",
            "Los formatos estructurados de las facturas electrónicas permitirán su visualización y emisión en las distintas lenguas oficiales existentes, con la finalidad de garantizar los derechos de los usuarios.",
            "No trata en ningún artículo sobre la factura electrónica.",
            "La factura electrónica solo se utilizará en contratación, estando excluida de la justificación de ayudas y subvenciones."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 405,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué principio relativo al tratamiento de datos personales definido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos) se refiere a que los datos serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados?",
        "opciones": [
            "Limitación de la finalidad.",
            "Exactitud.",
            "Minimización de datos.",
            "Adecuación de datos."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 406,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta respecto a las notificaciones según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        "opciones": [
            "Toda notificación deberá ser cursada dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado.",
            "Cuando los interesados en un procedimiento sean desconocidos, se ignore el lugar de la notificación o bien, intentada ésta, no se hubiese podido practicar, la notificación se hará por medio de un anuncio publicado en el BOE.",
            "Las notificaciones se practicarán preferentemente en papel y, en todo caso, cuando el interesado resulte obligado a recibirlas por esta vía.",
            "Cuando la notificación se practique en el domicilio del interesado, de no hallarse presente éste en el momento de entregarse la notificación, podrá hacerse cargo de ella cualquier persona mayor de dieciséis años que se encuentre en el domicilio y haga constar su identidad."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 407,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, ¿cuál de las siguientes opciones forma parte del contenido mínimo que debe contener una sede electrónica?",
        "opciones": [
            "Relación de los canales de acceso electrónico a dicha sede como instrumento de comunicación para los ciudadanos.",
            "Relación de los Puntos de Acceso General electrónicos que la referencian directa o indirectamente.",
            "Normativa reguladora del Registro al que se acceda a través de la sede electrónica.",
            "Enlace directo al Boletín Oficial correspondiente."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 408,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Marque la respuesta correcta relacionada con el nodo eIDAS español:",
        "opciones": [
            "Para las Administraciones Públicas, la integración con el nodo eIDAS español se realiza a través de @Firma.",
            "Permite el reconocimiento de identidades en soportes físicos emitidas por otros países.",
            "Facilita la aceptación del DNI electrónico en servicios de Administración Electrónica de otras administraciones integrantes de la OCDE.",
            "Utiliza un sistema de intercambio de mensajes conforme al estándar SAML 2.0."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 409,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es la taxonomía de Flynn?",
        "opciones": [
            "Una clasificación de patrones de diseño para objetos de software, centrados en su creación, relación e interacción.",
            "Una clasificación para las computadoras con arquitectura paralela atendiendo al flujo de datos e instrucciones en un sistema.",
            "Una clasificación que pretende clarificar los diferentes tipos de tecnologías, técnicas y mecanismos que abarca el concepto abstracto de “Inteligencia Artificial”.",
            "Una clasificación de los tipos de controladores (drivers) JDBC."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 410,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique, de las siguientes palabras, cuál indica además un número hexadecimal válido:",
        "opciones": [
            "EBOCA",
            "BECADAS",
            "ACCEDA",
            "CEGADA"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 411,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál de las siguientes es un formato de interfaz SSD:",
        "opciones": [
            "HHP",
            "MMVe",
            "MMD",
            "M.2"
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 412,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con respecto a los árboles 2-3-4, señale la respuesta correcta:",
        "opciones": [
            "Cumple las propiedades del árbol binario de búsqueda.",
            "Las hojas pueden estar a distinto nivel.",
            "Los nodos pueden tener 2, 3 o 4 hijos (2-nodo, 3-nodo o 4-nodo).",
            "Las reestructuraciones se realizan desde las hojas hacia la raíz."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 413,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta referente al tipo abstracto de datos (TAD) Cola:",
        "opciones": [
            "Basada en el principio LIFO (last-in, first-out).",
            "Es un tipo especial de lista en la que se pueden insertar y eliminar por cualquier extremo.",
            "Cada nodo tiene dos enlaces, uno al nodo siguiente, y otro al anterior.",
            "Se pude implementar usando una estructura dinámica."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 414,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA acerca de los tipos abstractos de datos (TAD):",
        "opciones": [
            "Es una colección de propiedades y operaciones que se definen mediante una especificación que es independiente de cualquier representación.",
            "Nos permiten diseñar nuestros propios tipos para encapsular lógica algorítmica y proveer abstracción a las capas de software de más alto nivel.",
            "Se pueden escribir usando lenguaje natural, usando pseudo-código o incluso algún lenguaje de programación.",
            "En JAVA, una estructura de datos (interface) debe implementar todas las operaciones definidas en su TAD (class)."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 415,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la función del kernel en un sistema operativo Unix/Linux?",
        "opciones": [
            "Gestionar la interfaz gráfica.",
            "Controlar los procesos, la memoria y la administración de dispositivos.",
            "Proveer servicios de red como TCP/IP.",
            "Facilitar la comunicación entre usuarios a través de terminales."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 416,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA. Android NDK:",
        "opciones": [
            "Es un conjunto de herramientas que permiten implementar partes de las aplicaciones de Android mediante C y C++.",
            "Genera librerías binarias para cada arquitectura de procesador que se pueden invocar desde Java por medio de JNI (Java Native Interface).",
            "Se recomienda su uso con aplicaciones intensivas a nivel computacional, como juegos o simulaciones físicas.",
            "No permite la reutilización de código, no pudiendo usar bibliotecas de otros desarrolladores."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 417,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la característica diferenciadora de las claves foráneas en una base de datos relacional?",
        "opciones": [
            "Un atributo que no tiene relación con otras tablas.",
            "Un atributo que referencia la clave primaria de otra tabla.",
            "Un atributo que puede tener valores duplicados. de datos.",
            "Un atributo que se utiliza solo para consultas."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 418,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes es un Sistema de Gestión de Bases de Datos Orientadas a Objetos (SGDBOO)?",
        "opciones": [
            "Cézanne.",
            "Picasso.",
            "Matisse.",
            "Rembrandt."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 419,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es el lenguaje OQL en el contexto de las bases de datos orientadas a objetos?",
        "opciones": [
            "OQL no es un lenguaje en el contexto de las bases de datos orientadas a objetos.",
            "Un lenguaje de definición de datos.",
            "Un lenguaje de consulta de datos.",
            "Un lenguaje de manipulación de datos."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 420,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "De acuerdo con Métrica v3, en el Modelo Entidad/Relación Extendido, ¿cuál es el término que representa la participación en la relación de cada una de las entidades afectadas?",
        "opciones": [
            "Atributo.",
            "Cardinalidad.",
            "Tipo de Correspondencia.",
            "Dominio."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 421,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta sobre la normalización de bases de datos en Métrica v3:",
        "opciones": [
            "Un atributo tiene dependencia funcional completa de otro si, y sólo si, depende de él a través de otro atributo.",
            "Una entidad está en 1FN si tiene grupos repetitivos, es decir, un atributo puede tomar varios valores de un dominio simple.",
            "Una entidad está en 2FN si está en 1FN y todos los atributos que no forman parte de las claves candidatas tienen dependencia funcional completa respecto de éstas.",
            "Una relación en 3FN estará también en 2FN, pero no en 1FN."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 422,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale, de entre las siguientes opciones, el mecanismo en el Modelo Entidad/Relación Extendido que recoge Métrica v3 consistente en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian:",
        "opciones": [
            "Asociación.",
            "Generalización.",
            "PERT.",
            "Regresión."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 423,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Para las variables a=1, b=2, c=3, d=1 ¿cuál es la operación lógica que da un resultado true?",
        "opciones": [
            "((a>b) or (a<c)) and ((a==c) or (a>=b))",
            "((a>=b) or (a<d)) and ((a>=d) or (c>d))",
            "Not (a==c) and (c>b)",
            "Not (a>=d) and not (c>=b)"
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 424,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta en relación con las funciones y los procedimientos:",
        "opciones": [
            "Una llamada a un procedimiento puede aparecer como operando de una expresión.",
            "El paso de parámetros por referencia envía una copia del valor que tenga el parámetro real, por lo que no se podrá alterar el contenido de la variable.",
            "Los parámetros por referencia se pueden emplear como parámetros de entrada/salida.",
            "Todo procedimiento debe ejecutar una sentencia de return."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 425,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Suponga el siguiente programa escrito en un lenguaje de programación estándar: integer x=0; while x<100 do (x=x+1; print x; x=x-1;)",
        "opciones": [
            "Este programa imprime los números enteros del 1 al 100.",
            "Este programa imprime los números impares del 1 al 100.",
            "Este programa imprime los números pares del 1 al 100.",
            "Este programa es un bucle infinito."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 426,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Referente a los comandos DML del lenguaje SQL, señale la respuesta correcta:",
        "opciones": [
            "DML es acrónimo de Data Manager Language.",
            "Permiten crear nuevas bases de datos, añadiendo y eliminando elementos.",
            "El comando TRUNCATE es un comando DML.",
            "El comando SELECT es un comando DML."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 427,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Referente al comando DROP de SQL, es correcto decir:",
        "opciones": [
            "Es un comando DCL.",
            "Puede ser ejecutado por disparadores (triggers).",
            "Se utiliza para eliminar la estructura de una tabla junto con cualquier dato almacenado en ella.",
            "Utiliza WHERE para condiciones de filtrado."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 428,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA referente a los disparadores o triggers de una base de datos:",
        "opciones": [
            "Son procedimientos que se ejecutan o activan cada vez que ocurre un evento determinado sobre una tabla determinada.",
            "Los eventos que se pueden asociar a la ejecución de un trigger son: INSERT, UPDATE, DELETE.",
            "Puede decidirse que se activen antes o después de un evento determinado.",
            "Un error durante la ejecución de cualquier trigger no cancela automáticamente la operación que lo disparó, la cancelación hay que programarla."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 429,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En diseño y programación orientada a objetos, una relación de generalización entre clases:",
        "opciones": [
            "Implica que la subclase hereda las propiedades, el comportamiento y las relaciones de la superclase, a la vez que puede añadir sus propias propiedades, relaciones y comportamiento.",
            "Describe un conjunto de enlaces, que definen las interconexiones semánticas entre las instancias de las clases que participan en la relación.",
            "Asume una subordinación conceptual del tipo “todo/parte”, o bien “tiene un”.",
            "Se representa mediante una línea discontinua que une la superclase y subclase con un rectángulo al lado de la superclase."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 430,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA respecto al Lenguaje de Modelado Unificado (UML):",
        "opciones": [
            "Es un lenguaje basado en diagramas para la especificación, visualización, construcción y documentación de cualquier sistema software.",
            "Es independiente de las metodologías de análisis y diseño y de los lenguajes de programación que se utilicen en la construcción del software.",
            "Se basa en el paradigma de la orientación a objetos.",
            "Muestra únicamente el modelado estático de un sistema software, que puede utilizarse en las diferentes fases de su ciclo de desarrollo."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 431,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta INCORRECTA. El patrón de diseño “Composite”:",
        "opciones": [
            "Es un patrón de diseño estructural que permite componer objetos en estructuras de árbol.",
            "Sirve para construir objetos complejos a partir de otros más simples y similares entre sí.",
            "Simplifica el tratamiento de los objetos creados que, al poseer de una interfaz común, se tratan todos de la misma manera.",
            "Se recomienda su uso cuando se quiere añadir responsabilidades a objetos concretos de manera dinámica y transparente y sin afectar a otros objetos."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 432,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué es .NET MAUI?",
        "opciones": [
            ".NET MAUI es un marco multiplataforma para crear aplicaciones móviles y de escritorio nativas con C# y XAML.",
            "Es una plataforma para desarrollar aplicaciones en Java.",
            "Es una herramienta de pruebas automatizadas.",
            "Es una plataforma para desarrollar aplicaciones móviles que se puede ejecutar en sistema Android solamente."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 433,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En el ámbito de ASP.NET Core, señale la respuesta correcta respecto a Razor:",
        "opciones": [
            "Razor es la sintaxis de plantillas utilizada en ASP.NET Core para crear vistas dinámicas en aplicaciones web.",
            "Es uno de los lenguajes de programación que se utilizan con ASP.NET Core.",
            "Razor se ejecuta directamente en el navegador del cliente.",
            "Razor utiliza el @símbolo para realizar la transición de C# a HTML."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 434,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La persistencia en Jakarta EE se gestiona principalmente a través de la especificación Jakarta Persistence API (JPA). Indique la respuesta correcta:",
        "opciones": [
            "Una de sus ventajas es que no necesita utilizar un proveedor de JPA.",
            "El lenguaje de consulta similar a SQL pero orientado a objetos de JPA es JPSQL.",
            "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla.",
            "JPA no permite definir relaciones entre entidades del tipo uno a muchos."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 435,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es una característica de los sistemas distribuidos?",
        "opciones": [
            "Falta de transparencia: un nodo no puede acceder a otros nodos del sistema y comunicarse con ellos.",
            "Procesamiento independiente: varias máquinas no pueden procesar la misma función a la vez.",
            "Escalabilidad: la capacidad computacional y de procesamiento puede escalarse hacia arriba según sea necesario cuando se añaden máquinas adicionales.",
            "Comunicación diferencial: usan nodos distintos para comunicarse y sincronizarse a través de redes independientes entre sí."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 436,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la opción correcta sobre la arquitectura de servicios web REST:",
        "opciones": [
            "En la arquitectura REST, el servicio no almacena información sobre el estado del cliente entre peticiones.",
            "El uso de identificadores está basado en SOA.",
            "En la arquitectura REST, la interfaz para acceder a los recursos expuestos puede ser HTTP o FTP.",
            "Es una arquitectura no orientada a recursos."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 437,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes es una diferencia entre HTML y XHTML?",
        "opciones": [
            "HTML exige que las etiquetas se escriban en minúscula, mientras que XHTML no.",
            "XHTML permite que haya elementos no vacíos sin cerrar, mientras que HTML no.",
            "En HTML es obligatorio que los valores de los atributos vayan entre comillas, mientras que en XHTML no.",
            "En XHTML es obligatoria la presencia del elemento <head>."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 438,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué evento de HTML utilizaría para producir un efecto al situar el puntero del ratón sobre un elemento?",
        "opciones": [
            "onclick.",
            "onmouseover.",
            "onmousedown.",
            "onmouseout."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 439,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Con respecto a las solicitudes de información accesible y quejas, el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público establece que:",
        "opciones": [
            "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de veinte días naturales.",
            "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de veinte días hábiles.",
            "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de diez días naturales.",
            "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de diez días hábiles."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 440,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta referente al término ATAG:",
        "opciones": [
            "Son Pautas de Accesibilidad que explican cómo hacer que el contenido web sea más accesible para las personas con discapacidades.",
            "Es una Suite que define una forma de hacer que el contenido web y las aplicaciones web sean más accesibles para las personas con discapacidades.",
            "Son Pautas de Accesibilidad que explican cómo hacer que los agentes de usuario sean accesibles para las personas con discapacidades.",
            "Son un conjunto de normas que deben cumplir las herramientas de autor para ser accesibles y generar contenidos también accesibles."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 441,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes opciones se utilizan para el control de versiones?",
        "opciones": [
            "Mercurial, CVS y Selenium.",
            "GitLab, GitHub y Apache Subversion.",
            "SVN, Git y Cucumber.",
            "Selenium, Cucumber y GitLab."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 442,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Según establece Métrica V3, en la construcción de un sistema de información, las pruebas que permiten verificar que los componentes o subsistemas interactúan correctamente a través de sus interfaces, tanto internas como externas, cubren la funcionalidad establecida y se ajustan a los requisitos especificados en las verificaciones correspondientes son:",
        "opciones": [
            "Pruebas unitarias.",
            "Pruebas de integración.",
            "Pruebas del sistema.",
            "Pruebas de migración."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 443,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes conceptos permite que un proceso ejecute múltiples tareas de manera simultánea o concurrente en un sistema operativo?",
        "opciones": [
            "Segmentación.",
            "Paginación.",
            "Prepaging.",
            "Hilos."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 444,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "El comando sfc /scannow:",
        "opciones": [
            "Examina todos los archivos de sistema protegidos y reemplaza los archivos dañados con una copia en caché.",
            "Rrepara el entorno de arranque ubicado en la partición del sistema.",
            "Muestra o establece la directiva de red de área de almacenamiento (sanSAN) para el sistema operativo.",
            "Analizar uno o varios servidores con una directiva generada por SCW."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 445,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuánta carga útil puede almacenar un jumboframe?",
        "opciones": [
            "7.000 bytes.",
            "1.500 bytes.",
            "9.000 bytes.",
            "10.000 bytes."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 446,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué protocolo hay que utilizar para obtener una dirección física a partir de una dirección lógica?",
        "opciones": [
            "RARP.",
            "NAT.",
            "ARP.",
            "PAT."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 447,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué topología de red consiste en conectar todos los nodos directamente a un nodo central?",
        "opciones": [
            "Estrella.",
            "Anillo.",
            "Bus.",
            "Árbol."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 448,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La regla 3-2-1 de las copias de seguridad consiste en:",
        "opciones": [
            "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar externo a la organización.",
            "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar externo a la organización.",
            "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar interno a la organización.",
            "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar interno a la organización."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 449,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta referente a los sistemas de almacenamiento SAN y NAS:",
        "opciones": [
            "SAN es más económico y fácil de configurar.",
            "SAN es el acrónimo de Storage Attached Network.",
            "NAS es un dispositivo de almacenamiento compartido basado en archivos.",
            "NAS es el acrónimo de Network Area Storage."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 450,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta:",
        "opciones": [
            "Los backups utilizan poca capacidad de almacenamiento.",
            "Los backups son manuales, los snapshots son programables.",
            "Los backups pueden almacenarse en localizaciones y medios distintos.",
            "Los backups son una representación instantánea del estado de un sistema en un momento específico."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 451,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es una ventaja del uso del protocolo IMAP en lugar de POP3?",
        "opciones": [
            "Permite visualizar los correos directamente en el servidor sin descargarlos.",
            "Es más sencillo que POP3.",
            "No requiere autenticación.",
            "Descarga los correos automáticamente del servidor."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 452,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuáles de las siguientes son tecnologías relacionadas con la contenerización y la gestión de contenedores:",
        "opciones": [
            "Docker, Containerd y Podman.",
            "Docker, CRI-O y nginx.",
            "Podman, Kubernetes y Ubuntu.",
            "Docker, Kubernetes y Debian."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 453,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta INCORRECTA respecto a PoE (Power over Ethernet):",
        "opciones": [
            "Power over Ethernet (PoE) es una tecnología que permite que los conmutadores de red transmitan energía y datos a través de un cable Ethernet simultáneamente.",
            "Existen dos tipos: PoE activo y PoE pasivo.",
            "PoE pasivo no se adhiere a ningún estándar IEEE.",
            "El último estándar de PoE activo es el IEEE 802.3at."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 454,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La norma IEEE 802.11 se refiere a:",
        "opciones": [
            "Redes inalámbricas.",
            "Redes de área metropolitana.",
            "Redes integradas para voz y datos.",
            "Seguridad de red."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 455,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes es una herramienta de ticketing para la gestión de incidentes de seguridad en las entidades del ámbito de aplicación del Esquema Nacional de Seguridad?",
        "opciones": [
            "ATENEA.",
            "MONICA.",
            "LUCIA.",
            "INES."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 456,
        "bloque": "I",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta sobre el formato de firma digital CAdES:",
        "opciones": [
            "Es apropiado para firmar ficheros grandes, especialmente si la firma contiene el documento original.",
            "Es el formato de firma que utiliza Microsoft Office.",
            "El resultado es un fichero de texto XML. No es adecuado cuando el fichero original es muy grande.",
            "Es el formato más adecuado cuando el documento original es un PDF."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 457,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta sobre tipos de ataque a un sistema de información:",
        "opciones": [
            "El sniffing es la generación de tráfico utilizando un origen falseado.",
            "El spoofing es la captura del tráfico que circula por una red.",
            "Denegacion de servicio distribuida (DDoS) es un ataque a varios objetivos desde un solo punto, con la finalidad de degradar total o parcialmente los servicios prestados por esos recursos a sus usuarios legítimos.",
            "El barrido (“escaneo”) de puertos es un ataque que trata de obtener información básica acerca de qué servicios se ofrecen en un determinado sistema, así como otros detalles técnicos del mismo."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 458,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál de las siguientes tecnologías NO es una tecnología LPWAN:",
        "opciones": [
            "LoRaWAN.",
            "Bluetooth LE.",
            "SigFox.",
            "NB-IoT."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 459,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de las siguientes respuestas es correcta respecto al modelo OSI de ISO?",
        "opciones": [
            "Las capas o niveles del modelo OSI son: Física, de red, de transporte, de sesión, de presentación y de aplicación.",
            "La versión actual del estándar OSI es la ISO/IEC 7498-1:1994.",
            "La capa de transporte se ocupa, entre otros, de aspectos como el enrutamiento, el reenvío y el direccionamiento a través de una red.",
            "La capa de sesión a menudo se divide en dos subcapas: la capa de control de acceso a los medios (MAC) y la capa de control de enlace lógico (LLC)."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 460,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es la respuesta correcta con respecto modelo TCP/IP?",
        "opciones": [
            "La arquitectura TCP/IP tiene cinco capas o niveles: Acceso a red, Internet, Transporte, Sesión y Aplicación.",
            "TCP y UDP son protocolos de la capa de Internet.",
            "Telnet es un protocolo de la capa de sesión.",
            "ICMP es un protocolo de la capa de Internet."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 461,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Relativa al direccionamiento IPv4, indique la respuesta INCORRECTA:",
        "opciones": [
            "La dirección 172.16.52.63 es una dirección de clase B.",
            "Las direcciones 192.168.123.71 y 192.168.123.133 con máscara de subred 255.255.255.192 se encuentran en la misma red.",
            "Las redes de clase A usan una máscara de subred predeterminada de 255.0.0.0.",
            "En las redes clase C se permite direccionar 254 equipos como máximo."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 462,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Qué código de respuesta HTTP se devuelve si el usuario que hace la petición NO tiene autorización para obtener la información?",
        "opciones": [
            "401",
            "403",
            "405",
            "407"
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 463,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Indique la respuesta correcta sobre el IETF (Internet Engineering Task Force):",
        "opciones": [
            "Es un organismo creador de estándares en Internet.",
            "Es responsable de las funciones administrativas relacionadas con la raíz del sistema de nombres de dominio (DNS), el direccionamiento del protocolo de Internet y otros recursos del protocolo de Internet.",
            "Es responsable de administrar y supervisar la coordinación del sistema de nombres de dominio (DNS) de Internet y sus identificadores únicos, como las direcciones de protocolo de Internet (IP).",
            "Es el Foro de Gobernanza de Internet."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 464,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Sobre tipos de transferencia de archivos en el servicio FTP (File Transfer Protocol), es CORRECTO decir que:",
        "opciones": [
            "El tipo ASCII es adecuado para transferir archivos de texto plano.",
            "El tipo Multimedia es adecuado para transferir imágenes y archivos de audio.",
            "El tipo Binario solo es adecuado para transferir ficheros ejecutables para PC.",
            "El tipo ASCII es adecuado para transferir páginas HTML y las imágenes que puedan contener."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 465,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál de los siguientes ataques consiste en suplantar a una entidad legítima por medio de llamadas telefónicas?",
        "opciones": [
            "Pharming.",
            "Smishing.",
            "Vishing.",
            "Whaling."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 466,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La creación de un señuelo atractivo para potenciales atacantes con el objetivo de aprender sus ataques y poder prevenirlos o defenderlos en el futuro se hace mediante un:",
        "opciones": [
            "IPS.",
            "SIEM.",
            "IDS.",
            "Honeypot."
        ],
        "respuestaIndex": 3,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 467,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "La herramienta del CCN que proporciona visibilidad y control sobre la red es:",
        "opciones": [
            "CARMEN.",
            "EMMA.",
            "MONICA.",
            "OLVIDO."
        ],
        "respuestaIndex": 1,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 468,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale cuál es una resolución válida para una pantalla:",
        "opciones": [
            "8K UHD - 7680 x 3840 píxeles.",
            "Ultra HD - 4320 x 1280 píxeles.",
            "WQHD - 2560 x 1440 píxeles.",
            "HD - 1920 × 1080 píxeles."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 469,
        "bloque": "II",
        "tema": null,
        "origen": "oficial",
        "pregunta": "¿Cuál es un tipo de panel de una pantalla LCD?",
        "opciones": [
            "IPS (In-Plane Switching).",
            "VN (Vertical Nematic).",
            "TA (Twisted Alignment).",
            "PSI (Plane Switching Input)."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 470,
        "bloque": "IV",
        "tema": null,
        "origen": "oficial",
        "pregunta": "El protocolo de IEEE para Rapid Spanning Tree Protocol es:",
        "opciones": [
            "802.1w.",
            "802.1Q.",
            "802.1D.",
            "802.1aq."
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 471,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "En CSS3, ¿cuál de las siguientes unidades de medida NO es relativa?",
        "opciones": [
            "Q",
            "vw",
            "ex",
            "ch"
        ],
        "respuestaIndex": 0,
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "id": 472,
        "bloque": "III",
        "tema": null,
        "origen": "oficial",
        "pregunta": "Señale la respuesta correcta:",
        "opciones": [
            "Xcode es un IDE que contiene herramientas destinadas exclusivamente al desarrollo software para iOS.",
            "Xcode Cloud no existe.",
            "SwiftUI es un framework que facilita la creación de aplicaciones para cualquier dispositivo Apple.",
            "iOS SDK permite el desarrollo de aplicaciones para macOS, iOS, watchOS y tvOS."
        ],
        "respuestaIndex": 2,
        "oposiciones": [
            "AGE"
        ]
    }
];
