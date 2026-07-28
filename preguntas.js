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
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "I", "tema": 1, "pregunta": "En la Constitución Española, el Título Preliminar comprende los artículos:", "opciones": ["a) 1 al 9", "b) 1 al 10", "c) 1 al 14", "d) 1 al 5"], "respuesta": "a"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "I", "tema": 4, "pregunta": "Según la Ley 39/2015, ¿tienen los sábados la consideración de días hábiles?", "opciones": ["a) Sí, siempre.", "b) No, se consideran inhábiles.", "c) Solo en la Administración Local.", "d) Solo si lo establece un Reglamento."], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "I", "tema": 6, "pregunta": "¿Qué Ley regula actualmente la Firma Electrónica en España?", "opciones": ["a) Ley 59/2003", "b) Ley 6/2020", "c) Ley 39/2015", "d) Ley 11/2007"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "I", "tema": 8, "pregunta": "El Esquema Nacional de Seguridad (ENS) se regula mediante el:", "opciones": ["a) RD 3/2010", "b) RD 311/2022", "c) RD 4/2010", "d) RD 203/2021"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "II", "tema": 1, "pregunta": "Un byte está compuesto por:", "opciones": ["a) 4 bits", "b) 8 bits", "c) 16 bits", "d) 32 bits"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "II", "tema": 2, "pregunta": "¿Cuál es la velocidad máxima teórica de un puerto USB 3.0?", "opciones": ["a) 480 Mbps", "b) 5 Gbps", "c) 10 Gbps", "d) 40 Gbps"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "II", "tema": 4, "pregunta": "En Unix/Linux, ¿qué comando muestra los procesos en ejecución interactiva y en tiempo real?", "opciones": ["a) ps", "b) ls", "c) top", "d) grep"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "II", "tema": 4, "pregunta": "En Windows, ¿qué sistema de archivos es el más habitual hoy en día, permitiendo cifrado y cuotas de disco?", "opciones": ["a) FAT32", "b) exFAT", "c) NTFS", "d) ReFS"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 1, "pregunta": "En el modelo relacional, la regla de integridad referencial asegura que:", "opciones": ["a) No haya nulos en la clave primaria.", "b) El valor de la clave ajena coincida con el valor de la clave primaria referenciada o sea nulo.", "c) No existan filas repetidas.", "d) Todos los atributos atómicos tengan el mismo dominio."], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 3, "pregunta": "¿Qué sentencia SQL se utiliza para dar privilegios a un usuario sobre una base de datos?", "opciones": ["a) ALLOW", "b) GRANT", "c) PERMIT", "d) ASSIGN"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 4, "pregunta": "¿En qué paradigma de programación se basa el encapsulamiento?", "opciones": ["a) Funcional", "b) Procedimental", "c) Orientada a Objetos", "d) Estructurada"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 5, "pregunta": "En Java, ¿qué palabra reservada se usa para heredar de una clase?", "opciones": ["a) implements", "b) inherits", "c) extends", "d) overrides"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 9, "pregunta": "¿Qué comando en Git se usa para subir los cambios del repositorio local al remoto?", "opciones": ["a) git fetch", "b) git pull", "c) git push", "d) git commit"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "III", "tema": 8, "pregunta": "Según las pautas WCAG, asegurar que el texto tiene contraste suficiente con su fondo se asocia al principio:", "opciones": ["a) Operable", "b) Perceptible", "c) Comprensible", "d) Robusto"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 7, "pregunta": "En la pila de protocolos TCP/IP, ¿en qué capa se ubica el protocolo UDP?", "opciones": ["a) Capa de Aplicación", "b) Capa de Internet", "c) Capa de Transporte", "d) Capa de Acceso a la Red"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 8, "pregunta": "¿Qué puerto estándar utiliza el protocolo SMTP para la transmisión de correo saliente?", "opciones": ["a) 21", "b) 25", "c) 110", "d) 143"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 3, "pregunta": "¿Qué puerto por defecto usa el protocolo POP3?", "opciones": ["a) 25", "b) 53", "c) 110", "d) 443"], "respuesta": "c"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 10, "pregunta": "El estándar IEEE 802.11 define las especificaciones para redes:", "opciones": ["a) Ethernet cableadas", "b) Redes LAN inalámbricas (Wi-Fi)", "c) Redes de área metropolitana", "d) Bluetooth"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 5, "pregunta": "En un CPD, los sistemas de alimentación ininterrumpida (SAI/UPS) se instalan principalmente para garantizar la:", "opciones": ["a) Confidencialidad", "b) Disponibilidad", "c) Integridad", "d) Autenticación"], "respuesta": "b"},
    {"oposiciones": ["AGE", "SAS", "Junta de Andalucía", "Diputación de Sevilla"], "bloque": "IV", "tema": 6, "pregunta": "¿Cuál de las siguientes es una fibra óptica en la que la luz se propaga en un solo camino, permitiendo mayores distancias?", "opciones": ["a) Fibra Multimodo de índice escalonado", "b) Fibra Multimodo de índice gradual", "c) Fibra Monomodo", "d) Cable coaxial ciego"], "respuesta": "c"}
,
{
        "pregunta": "De acuerdo con el artículo 64 de la Constitución Española de 1978 (en adelante CE), los actos del Rey, excepto la propuesta y el nombramiento del Presidente del Gobierno, y la disolución de las Cámaras prevista en el artículo 99, serán refrendados por:",
        "opciones": [
            "Los Presidentes del Congreso y el Senado.",
            "Los Ministros o los Secretarios de Estado en función de la materia.",
            "El Presidente del Gobierno y, en su caso, por los Presidentes del Congreso y el Senado.",
            "El Presidente del Gobierno y, en su caso, por los Ministros competentes."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "La suspensión de los derechos y libertades se encuentra regulada en la CE en:",
        "opciones": [
            "En el Capítulo III del Título I.",
            "En sus artículos 52 y 53.",
            "En el artículo 58.",
            "En el Capítulo V del Título I."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Según el artículo 18 de la ley 50/1997, de 27 de noviembre, del Gobierno que regula el funcionamiento del Consejo de Ministros, ¿quién actúa como Secretario de este órgano colegiado?",
        "opciones": [
            "El Vicepresidente Primero.",
            "El Ministro portavoz del Gobierno.",
            "El Ministro de la Presidencia.",
            "El Ministro de Justicia."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "De acuerdo con el artículo 78 de la CE, expirado el mandato de las Cortes Generales o en caso de disolución de las mismas, las Diputaciones Permanentes seguirán ejerciendo sus funciones hasta:",
        "opciones": [
            "La celebración de las elecciones.",
            "La proclamación de los resultados electorales definitivos.",
            "La elección de los nuevos presidentes de cada una de las Cámaras de las Cortes Generales.",
            "La constitución de las nuevas Cortes Generales."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Según establece el artículo 24 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, el plazo máximo para resolver y notificar la resolución de una reclamación ante el Consejo de Transparencia y Buen Gobierno será de:",
        "opciones": [
            "Un mes, transcurrido el cual, la reclamación se entenderá estimada.",
            "Un mes, transcurrido el cual, la reclamación se entenderá desestimada.",
            "Tres meses, transcurrido el cual, la reclamación se entenderá estimada.",
            "Tres meses, transcurrido el cual, la reclamación se entenderá desestimada."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale cuál de los siguientes NO es un compromiso del IV Plan de Gobierno Abierto de España:",
        "opciones": [
            "Participación de los jóvenes en políticas públicas.",
            "Protección de denunciantes.",
            "Huella normativa.",
            "Reforma del marco regulatorio."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Conforme establece el artículo 18 de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, todas las resoluciones de compatibilidad para desempeñar un segundo puesto o actividad en el sector público o el ejercicio de actividades privadas se inscribirán:",
        "opciones": [
            "En el Registro Central de Personal.",
            "En la Oficina de Conflicto de Intereses.",
            "En la Unidad de Personal del Ministerio u Organismo correspondiente.",
            "En los Registros de Personal correspondientes."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "De acuerdo con el artículo 30 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, el grado de dependencia será revisable:",
        "opciones": [
            "A instancia del interesado.",
            "A instancia de los representantes del interesado.",
            "De oficio por las Administraciones Públicas competentes.",
            "Todas las respuestas anteriores son correctas."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Conforme el artículo 49 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, para impulsar la adopción voluntaria de planes de igualdad, el Gobierno establecerá:",
        "opciones": [
            "Medidas de acción positiva, especialmente dirigidas a las pequeñas y las medianas empresas.",
            "Medidas de fomento, especialmente dirigidas a las empresas de 50 o más trabajadores.",
            "Medidas de fomento, especialmente dirigidas a las pequeñas y las medianas empresas.",
            "Medidas de acción positiva, dirigidas a cualquier empresa, sea de capital público o privado."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Con carácter general el documento nacional de identidad tendrá un período de validez, a contar desde la fecha de la expedición o de cada una de sus renovaciones, de:",
        "opciones": [
            "Dos años cuando el solicitante no haya cumplido los cinco años de edad.",
            "Cuatro años, cuando el titular haya cumplido los cinco años de edad y no haya alcanzado los treinta al momento de la expedición o renovación.",
            "Nueve años, cuando el titular haya cumplido los treinta y no haya alcanzado los setenta.",
            "Permanente cuando el titular haya cumplido los sesenta años. 2022 - TAI-L Página 1 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "De acuerdo con el artículo 4 de la Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza, el periodo de vigencia de los certificados cualificados:",
        "opciones": [
            "No será superior a 5 años.",
            "No será superior a 3 años.",
            "Es ilimitado.",
            "No será superior a 6 años."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Indique según el título X de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, ¿cuál de los siguientes NO es un derecho digital?",
        "opciones": [
            "Derecho al testamento digital.",
            "Derecho al olvido en servicios de redes sociales y servicios equivalentes.",
            "Derecho a la desconexión digital en el ámbito laboral.",
            "Derecho a la igualdad y a la no discriminación en el entorno digital."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta correcta sobre lo que establece la Norma Técnica de Interoperabilidad de Protocolos de Intermediación de Datos:",
        "opciones": [
            "Las tecnologías utilizadas para los intercambios se implementarán en base a estándares según lo establecido en la Norma Técnica de Interoperabilidad de Catálogo de estándares.",
            "De forma general en servicios de intercambio se utilizará la versión 2.0 del protocolo SCSP (Sustitución de Certificados en Soporte Papel).",
            "Emisores y Requirentes no mantendrán trazabilidad de los intercambios de datos producidos.",
            "Los intercambios de información se podrán implementar a través de servicios web."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale qué afirmación es correcta con respecto a las soluciones de Ciberseguridad proporcionadas por el Centro Criptológico Nacional (CCN):",
        "opciones": [
            "CLARA, protección y trazabilidad del dato.",
            "ELENA, Simulador de Técnicas de Cibervigilancia.",
            "GLORIA, Gestión de eventos e información de seguridad.",
            "MONICA, Gestor de logs para responder ante incidentes y amenazas."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta correcta referente a los servicios comunes en materia de administración electrónica:",
        "opciones": [
            "SERVINOMINA realiza la gestión completa de las fases de nómina: cálculo, contabilidad y pago.",
            "CIRCAB poderosa herramienta de trabajo en grupo para intercambio de información y trabajo colaborativo.",
            "eVISOR permite a un empleado público la consulta de sus nóminas correspondientes a los cinco últimos años.",
            "ENVIA es una aplicación que hace posible el envío de ficheros de gran volumen entre usuarios."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "La CE regula la institución del Defensor del Pueblo como:",
        "opciones": [
            "Alto comisionado del Congreso de los Diputados.",
            "Alto comisionado de las Cortes Generales.",
            "Alto comisionado del Poder judicial.",
            "Alto comisionado del Gobierno de la nación."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué es WCAG?",
        "opciones": [
            "Unas pautas de accesibilidad de contenidos web promovidas por el W3C.",
            "Una librería de Java EE para la creación de aplicaciones web creada por Oracle.",
            "Un componente del ecosistema Hadoop para el manejo de Big Data.",
            "Un framework javascript especialmente indicado para trabajar con bases de datos no relacionales."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Cuál de los siguientes es el nombre de un conector usado para carga y datos creado por el fabricante Apple?",
        "opciones": [
            "USB-Tipo C",
            "iUSB",
            "iFirewire",
            "Lightning"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Con respecto a las sentencias del lenguaje SQL, indique la respuesta INCORRECTA:",
        "opciones": [
            "Sentencia DELETE sirve para borrar en forma sencilla distintos objetos como por ejemplo base de datos, tablas o índices.",
            "La sentencia INSERT agrega uno o más registros a una tabla en una base de datos relacional.",
            "La sentencia UPDATE modifica los valores de un conjunto de registros existentes en una tabla.",
            "La sentencia GRANT se utiliza para dar permisos a un usuario."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Cuál de los siguientes son los objetos básicos de Kubernetes:",
        "opciones": [
            "Pod, State, Volume, Namespace.",
            "Pod, Service, Volume, Namespace.",
            "Job, Service, Volume, Namespace.",
            "Job, Pod, Volume, Deployment. 2022 - TAI-L Página 2 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "La ALU es una parte de:",
        "opciones": [
            "La memoria.",
            "La CPU.",
            "El bus de operaciones.",
            "El multiplexor de entrada."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta correcta sobre el modelo CISC:",
        "opciones": [
            "La microprogramación es una característica esencial.",
            "Plantea un conjunto reducido de instrucciones para reducir el número de ciclos de reloj de ejecución de cada una de ellas.",
            "Implementa las instrucciones directamente en hardware.",
            "Está muy extendido en el mercado de procesadores para smartphone y tablets por su bajo consumo y buen rendimiento."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En relación con los sistemas RAID señale la respuesta INCORRECTA:",
        "opciones": [
            "El RAID 1+0 exige un mínimo de 4 discos.",
            "RAID 6 amplía el RAID 5 agregando un bloque de paridad.",
            "RAID 5 necesitará un mínimo de 3 discos para ser implementado.",
            "Un RAID 4 distribuye la información a nivel de bloques con dos discos de paridad dedicados."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Cuál de las siguientes es una tecnología de almacenamiento en disco mediante bus serie?",
        "opciones": [
            "SATA",
            "ATA",
            "SCSI",
            "DLT"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Respecto a la norma USB indique la respuesta INCORRECTA:",
        "opciones": [
            "USB Type-C es lo mismo que USB 3.1",
            "La diferencia entre USB 3.1 Gen 1 y USB 3.1 Gen 2 se reduce solamente a la velocidad.",
            "USB 3.2 permite velocidades de hasta 20 Gbps.",
            "Los dispositivos USB 2.0 pueden lograr una velocidad de transferencia máxima hasta de 480 Mbps."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En teoría de grafos, el algoritmo para la determinación del camino más corto, dado un vértice origen, hacia el resto de los vértices en un grafo que tiene pesos en cada arista se denomina:",
        "opciones": [
            "Algoritmo de Kruskal.",
            "Algoritmo de Prim.",
            "Algoritmo de Dijkstra.",
            "Algoritmo de Floyd-Warshall."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Con respecto a los estándares PDF, señale que afirmación NO es correcta:",
        "opciones": [
            "PDF/UA Es el estándar global para la accesibilidad de PDF.",
            "PDF/A proporciona las especificaciones para crear, ver e imprimir documentos digitales para conservarlos a largo plazo.",
            "PDF/E proporciona especificaciones para crear, ver e imprimir documentos utilizados en flujos de trabajo de ingeniería.",
            "PDF/I proporciona especificaciones para crear, ver e imprimir páginas finales listas para imprimir o listas para la prensa."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Cuál de las versiones siguientes es la más reciente del sistema operativo macOS?",
        "opciones": [
            "macOS Sierra",
            "macOS Monterey",
            "macOS Big Sur",
            "macOS Ventura"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Cuál de las siguientes afirmaciones NO es correcta:",
        "opciones": [
            "En Windows de 64 bits, un proceso de 64 bits no puede cargar una biblioteca de vínculos dinámicos (DLL) de 32 bits.",
            "En Windows de 64 bits, un proceso de 32 bits no puede cargar un archivo DLL de 64 bits.",
            "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits solo en el mismo equipo.",
            "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits tanto en el mismo equipo como entre equipos distintos."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Las bases de datos relacionales ofrecen propiedades ACID. Dicho acrónimo se refiere a:",
        "opciones": [
            "Atomicidad, Consistencia, Aislamiento y Durabilidad.",
            "Atomicidad, Coherencia, Integridad y Distribución.",
            "Disponibilidad, Coherencia, Intensidad y Durabilidad.",
            "Atomicidad, Consistencia, Aislamiento y Disponibilidad."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Entre las características obligatorias de un sistema gestor de bases de datos orientadas a objetos, NO se encuentra:",
        "opciones": [
            "Debe permitir construir objetos complejos.",
            "El conjunto de tipos de datos debe ser fijo, consiguiendo así mayor eficiencia en las búsquedas.",
            "Todos los objetos deben tener un identificador que sea independiente de los valores de sus atributos.",
            "El esquema de una BDOO incluye únicamente un conjunto de clases (o de tipos)."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale qué es el Machine Learning Services para SQL Server:",
        "opciones": [
            "Es un conjunto de tecnologías destinadas a la copia y distribución de datos y objetos de base de datos desde una base de datos a otra, para luego sincronizar ambas bases de datos y mantener su coherencia.",
            "Es una característica de SQL Server que proporciona la capacidad de ejecutar scripts de Python y R con datos relacionales.",
            "Es un producto de calidad de datos basado en conocimiento.",
            "Es el servicio principal para almacenar, procesar y proteger los datos. 2022 - TAI-L Página 3 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta correcta relativa al Modelo Entidad/Relación Extendido según establece METRICA v3:",
        "opciones": [
            "Un atributo se define sobre diversos dominios.",
            "El dominio no tiene existencia propia y depende de las entidades, las relaciones o los atributos.",
            "La entidad es aquel objeto, real o abstracto, acerca del cual se desea almacenar información en la base de datos.",
            "La clave candidata es el conjunto de atributos que garantizan la unicidad de las ocurrencias e identifican la ocurrencia unívocamente."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "La arquitectura ANSI/SPARC define para un sistema de gestión de bases de datos tres niveles de abstracción. Indicar la afirmación INCORRECTA:",
        "opciones": [
            "El nivel externo contiene las vistas externas de la base de datos y permite a cada tipo de usuario ver sólo aquella parte del esquema que le interesa.",
            "El nivel físico define cómo se almacenan los datos y los métodos de acceso.",
            "El nivel contextual define el formato de los campos.",
            "El nivel interno también recibe el nombre de nivel lógico."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Cuál de las siguientes afirmaciones es FALSA:",
        "opciones": [
            "Un intérprete es un programa que ejecuta directamente las instrucciones escritas en un lenguaje de programación dado.",
            "Un compilador es un programa que transforma el código fuente de un programa a su equivalente en otro lenguaje de programación de más bajo nivel.",
            "Un transpilador es un programa que hace de intérprete y de compilador al mismo tiempo.",
            "Un compilador cruzado o cross compiler es un compilador capaz de crear código ejecutable para otra plataforma distinta a aquélla en la que se ejecuta."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "C++ permite especificar más de una función con el mismo nombre en el mismo ámbito. ¿Cómo se denominan estas funciones?",
        "opciones": [
            "Funciones dobles.",
            "Funciones repetidas.",
            "Funciones sobrecargadas.",
            "En C++ no se puede nombrar más de una función con el mismo nombre."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Indica, de las siguientes afirmaciones, cuál es verdadera:",
        "opciones": [
            "Un array o vector es un tipo de dato estructurado que permite almacenar un conjunto de datos homogéneo donde cada elemento se almacena de forma consecutiva en memoria.",
            "Bytecode es el código binario obtenido tras el proceso de compilación (Java).",
            "C++ es un lenguaje de segunda generación.",
            "En C++ la declaración del array: «int vector2[] = {1,2,3,4,10,9,80,70,19};», es incorrecta."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta correcta sobre los tipos de controladores (drivers) JDBC:",
        "opciones": [
            "Los drivers tipo 1 utilizan Java puro para implementar un protocolo de red de proveedores del Sistema Gestor de Base de Datos.",
            "Los drivers tipo 3 utilizan un protocolo de red y middleware para comunicarse con un servidor.",
            "Según la tecnología utilizada para conectarse a la base de datos, los drivers JDBC se categorizan en 3 tipos diferentes.",
            "Los drivers tipo 2 son controladores \"puente\", que utilizan otra tecnología (por ejemplo ODBC) para comunicarse con la base de datos."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta INCORRECTA. Los tipos más corrientes de anomalías de base de datos son:",
        "opciones": [
            "Lecturas no repetibles.",
            "Lecturas hundidas.",
            "Lecturas sucias.",
            "Lecturas fantasma."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Seleccione la respuesta correcta sobre .NET:",
        "opciones": [
            ".NET es un marco multiplataforma gratuito de Google para compilar aplicaciones y servicios en la nube.",
            ".NET es un proyecto de código abierto.",
            ".NET sirve exclusivamente para desarrollar aplicaciones móviles.",
            ".NET admite un amplio rango de lenguajes de programación, a excepción de C# 2022 - TAI-L Página 4 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta INCORRECTA referente al objeto POCO en .NET:",
        "opciones": [
            "Es una estructura de datos de .NET que solo contiene propiedades o campos públicos.",
            "Es el acrónimo de Plain Old CLR Object.",
            "No hereda de otra clase o implementa una interfaz.",
            "Podrá contener miembros como: métodos. eventos y delegados."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Cuál de las siguientes afirmaciones sobre REST es FALSA:",
        "opciones": [
            "REST es el acrónimo de Representational State Transfer.",
            "Los objetos en REST siempre se manipulan a partir de la URI.",
            "URI son las siglas de Unique Resource Identifier.",
            "Utiliza un protocolo cliente/servidor sin estado."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la afirmación correcta con respecto a WSIL:",
        "opciones": [
            "Es un método alternativo al descubrimiento de servicios Web.",
            "Define el modelo de programación y la arquitectura de ejecución para desplegar y buscar servicios Web en el entorno Java EE.",
            "Define un modo de publicar y encontrar información sobre servicios Web.",
            "Es una organización diseñada para promover la interoperatividad de servicios Web entre plataformas, sistemas operativos y lenguajes de programación."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Para detectar, eliminar y/o mitigar las debilidades de una aplicación se pueden realizar diferentes análisis de seguridad durante el ciclo de vida del desarrollo de software, entre los que NO se encuentra:",
        "opciones": [
            "SAST (Static Application Security Testing).",
            "S-SDLC (Secure Software Development Liability Control).",
            "DAST (Dynamic Application Security Testing).",
            "SCA (Software Composition Analysis)."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "El principio de la accesibilidad web que exige que los componentes y la navegación de la interfaz de usuario se puedan utilizar por cualquier persona usuaria es:",
        "opciones": [
            "La perceptibilidad.",
            "La comprensibilidad.",
            "La robustez.",
            "La operabilidad."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Según METRICA v3, ¿qué tipo de pruebas son las que tienen como objetivo verificar el correcto ensamblaje entre los distintos componentes para comprobar que interactúan correctamente a través de sus interfaces, cubren la funcionalidad establecida y se ajustan a los requisitos no funcionales especificados?",
        "opciones": [
            "Pruebas del sistema.",
            "Pruebas de implantación.",
            "Pruebas de regresión.",
            "Pruebas de integración."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Según establece METRICA v3, ¿qué participantes están presentes en la tarea de “Elaboración de los Manuales de Usuario”?",
        "opciones": [
            "Usuarios Expertos.",
            "Consultor de Sistemas de Información.",
            "Equipo de Formación.",
            "Equipo de Proyecto."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Señale la respuesta INCORRECTA sobre el kernel de un Sistema Operativo:",
        "opciones": [
            "Controla todas las funciones importantes del hardware.",
            "Se encarga del procesamiento paralelo de tareas (multitasking).",
            "Es el núcleo del procesador.",
            "Recibe peticiones de servicio de los procesos y los comunica con el hardware. 2022 - TAI-L Página 5 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En un sistema UNIX, cuál es la respuesta INCORRECTA:",
        "opciones": [
            "El GID es el número de identificación de grupo.",
            "El UID es el número de identificación de usuario.",
            "El administrador del sistema se denomina root.",
            "El proceso init se refiere al proceso de arranque de un usuario."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Respecto a la virtualización de máquinas, indique la opción FALSA:",
        "opciones": [
            "Facilita el despliegue de entornos.",
            "Requiere aumentar la inversión en hardware específico para la virtualización.",
            "Posibilita la ejecución de varios sistemas operativos en una única máquina física.",
            "Permite un aprovechamiento mayor de la capacidad del hardware."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Una copia de seguridad (backup) diferencial:",
        "opciones": [
            "Realiza una copia fiel de los datos, lo que implica que un archivo eliminado en el origen, también se eliminará en la copia de seguridad.",
            "Partiendo de una copia de backup completa, realiza una copia de todos los datos modificados desde que se hizo ese backup completo.",
            "Realiza una copia sólo de los datos modificados desde el último backup (sea completo o incremental).",
            "Realiza una copia integral de los datos, copiando todos los contenidos de los sistemas a mantener."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Seleccione la respuesta INCORRECTA sobre la firma electrónica:",
        "opciones": [
            "Se llama Co-firma a la firma múltiple en la que todos los firmantes están al mismo nivel y en la que no importa el orden en el que se firma.",
            "Cuando se firma en formato XAdES (XML Avanzado), el resultado es un fichero de texto XML.",
            "En el formato XAdES se habla de firmas despegadas (detached), envolventes (enveloping) y envueltas (enveloped) según en qué sitio del propio fichero de firma se guarde el documento original.",
            "El formato PAdES (Propietario Avanzado) es el formato propio utilizado por Microsoft Office, si bien existe una implementación abierta que se aplica en Open Office."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Cuál es la respuesta INCORRECTA acerca de la fibra óptica plástica (POF):",
        "opciones": [
            "Está hecha esencialmente de plástico, construida de polimetilmetacrilato envuelto en polímeros fluoruros.",
            "Permite aprovechar todo el ancho de banda y hacerlo sin pérdidas.",
            "Ofrece un núcleo conductor menor que el de la fibra tradicional.",
            "Es muy flexible, lo que hace que se pueda usar sin problema en instalaciones donde los tubos son antiguos."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Cuál es el prefijo de dirección de Multicast en IPv6?",
        "opciones": [
            "::1/128",
            "224.0.0.0/4",
            "FF00::/8",
            "FC00::/7"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Seleccione la respuesta correcta sobre los niveles y servicios del modelo OSI:",
        "opciones": [
            "El modelo OSI se compone de 7 niveles, pero se pude asimilar a un modelo de referencia simplificado de solamente 2 niveles: TCP (Niveles 1 a 4) e IP (Niveles 5, 6 y 7).",
            "Las entidades en un nivel N+1 ofrecen servicios que son utilizados por las entidades del nivel N.",
            "Un servicio confirmado utiliza las 4 primitivas de comunicación entre capas: Request, Indication, Response, Confirm.",
            "Un servicio no confirmado utiliza 3 de las 4 primitivas: Request, Indication, Response."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué parte de un certificado de sitio web necesita un navegador para establecer una conexión segura HTTPS?",
        "opciones": [
            "La clave pública del certificado del sitio web, para que el navegador descifre los mensajes enviados por ese sitio web.",
            "La clave privada del certificado del sitio web, para que el navegador cifre los mensajes que envía al sitio web.",
            "Las claves pública y privada del certificado del sitio web, para poder cifrar y descifrar los mensajes que se intercambia con el sitio web.",
            "Ninguna. Es el sitio web el que debe recibir las claves pública y privada del certificado de la persona que navega."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué es un portal cautivo?",
        "opciones": [
            "Un sitio web bloqueado por un ransomware, cuyo acceso no se recupera hasta que se paga un rescate.",
            "Una página o aplicación web con acceso limitado, generalmente en fase de pruebas como paso previo a ponerse en producción.",
            "Un sitio web que no cumple los criterios del nivel AA de WCAG.",
            "Una página web que gestiona el acceso de los usuarios a una red, generalmente inalámbrica."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué significa CSMA/CD?",
        "opciones": [
            "Acceso múltiple por servicio de portadora y múltiples colisiones.",
            "Acceso múltiple con detección de portadora y detección de colisiones.",
            "Acceso único con múltiples colisiones y detección de portadora.",
            "Acceso único de múltiples portadoras y detección de colisiones."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En el diagrama de clases la relación existente entre “Solicitud Representación” y “Trámite”, ¿qué multiplicidades serían compatibles con los requisitos planteados en el enunciado?",
        "opciones": [
            "‘1’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
            "‘1’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”.",
            "‘0..N’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
            "‘1..N’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En Java SE 17, ¿con qué visibilidad se deben generar los atributos de la clase Data Access Object Solicitudes si se quiere tener acceso directamente desde cualquier otro objeto, sin mediación de métodos?",
        "opciones": [
            "Se usará el modificador \"public\".",
            "Se usará el modificador \"protected\".",
            "No se usará ningún modificador.",
            "Se usará el modificador \"private\". 2022 - TAI-L Página 8 de 14"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Para crear una tabla llamada Usuario, ¿qué sentencia SQL debemos ejecutar?",
        "opciones": [
            "ALTER TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "INSERT TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "CREATE TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
            "DROP TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Se ha heredado una librería compilada que realiza la conexión a un importante servicio de comprobación de Cl@ve PIN, ¿qué patrón de diseño permite reutilizar este objeto?",
        "opciones": [
            "Adaptador (Adapter)",
            "Singleton",
            "Chain of responsibility (Cadena de responsabilidad)",
            "Iterador (Iterator)"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En UML un diagrama de componentes:",
        "opciones": [
            "Describe la estructura del sistema mostrando las clases del sistema, sus atributos y relaciones entre ellas.",
            "Describe cómo un sistema de software se divide en componentes y muestra las dependencias entre ellos.",
            "Sirve para modelar el hardware utilizado en las implementaciones del sistema, los componentes implementados en el hardware y las asociaciones entre componentes en un momento específico.",
            "Muestra una vista completa o parcial de la estructura de un sistema modelado en un momento específico."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En el equipo de desarrollo se ha decidido usar Selenium WebDriver para:",
        "opciones": [
            "Mejorar la accesibilidad de las páginas web facilitando audios a partir del texto.",
            "Automatizar la ejecución de pruebas en el navegador.",
            "Minimizar el tiempo de carga de la página web.",
            "Diseñar páginas web adaptables."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En el contexto de la administración del almacenamiento, ¿qué es el “Thin Provisioning”?",
        "opciones": [
            "Es un mecanismo de despliegue de discos en red para clientes ligeros.",
            "Es una tecnología que permite agregar discos físicos en caliente a las cabinas de la SAN.",
            "Es un método de virtualización de almacenamiento que permite asignar el espacio de almacenamiento de una manera flexible bajo demanda.",
            "Es un método por el que se asigna todo el espacio virtualizado disponible y se va a reduciendo (shrinking) a medida que el cliente lo descarta."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Una vez implementado \"teletrabajo\" mediante VPN, se quiere dotar de mayor seguridad mediante el envío de un código por SMS al teléfono móvil del trabajador. ¿Cómo se denomina a este tipo de validación?",
        "opciones": [
            "Factor electrónico de autenticación.",
            "Autenticación electrónica de usuarios.",
            "Doble factor de autenticación.",
            "Factor único de autenticación."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "Los dispositivos de interconexión de redes de nuestro sistema, son compatibles con POE++. Señale la afirmación correcta con respecto a este término:",
        "opciones": [
            "Las siglas corresponden a Power-of-Ethernet.",
            "Como estándar, recibe la denominación IEEE 802.3at.",
            "La alimentación real recibida es de 25,50 Watts.",
            "Se subdivide en dos tipos: Tipo 3 y Tipo 4."
        ],
        "respuestaCorrecta": 0,
        "bloque": "Examen AGE 2023",
        "tema": "Oficial",
        "oposiciones": [
            "AGE"
        ]
    }
,
{
        "pregunta": "¿Cuál es el plazo máximo para dictar y notificar la resolución expresa en un procedimiento administrativo, según la Ley 39/2015, si la norma reguladora no fija uno distinto?",
        "opciones": [
            "3 meses",
            "6 meses",
            "1 mes",
            "10 días"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Bloque I: Estado y Administración Electrónica",
        "tema": "Tema 8 - Ley 39/2015",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "En la Constitución Española de 1978, ¿qué Título está dedicado a la Corona?",
        "opciones": [
            "Título I",
            "Título II",
            "Título Preliminar",
            "Título III"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque I: Estado y Administración Electrónica",
        "tema": "Tema 1 - La Constitución Española de 1978",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "Según el TREBEP, las vacaciones de los funcionarios públicos retribuidas tendrán una duración mínima de:",
        "opciones": [
            "20 días hábiles",
            "22 días hábiles",
            "30 días naturales",
            "15 días hábiles"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque I: Estado y Administración Electrónica",
        "tema": "Tema 6 - El Personal Funcionario",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "¿A qué capa del modelo OSI pertenece el protocolo IP?",
        "opciones": [
            "Capa de Enlace",
            "Capa de Red",
            "Capa de Transporte",
            "Capa de Presentación"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 29 - Modelo OSI y TCP/IP",
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En Linux, ¿qué comando se utiliza para cambiar los permisos de un archivo?",
        "opciones": [
            "chown",
            "ls",
            "chmod",
            "pwd"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 18 - Sistemas Operativos. Linux",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué tipo de diagrama UML se utiliza para modelar el comportamiento dinámico de un sistema mostrando la interacción entre objetos en un orden temporal?",
        "opciones": [
            "Diagrama de Clases",
            "Diagrama de Secuencia",
            "Diagrama de Casos de Uso",
            "Diagrama de Despliegue"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 22 - Análisis Estructurado y UML",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál de las siguientes memorias es volátil?",
        "opciones": [
            "ROM",
            "EPROM",
            "RAM",
            "EEPROM"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 14 - Estructura y Componentes de un Ordenador",
        "oposiciones": [
            "AGE",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En el contexto de bases de datos relacionales, ¿qué es la cardinalidad de una relación?",
        "opciones": [
            "El número de columnas de una tabla",
            "El número de tuplas (filas) de una tabla",
            "El número de tablas en la base de datos",
            "El número de claves foráneas"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 20 - Modelo Relacional",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué nivel de RAID proporciona espejado (mirroring) sin paridad ni striping?",
        "opciones": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 10"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 14 - Estructura y Componentes",
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "¿Qué etiqueta de HTML5 se utiliza para definir el contenido principal del documento?",
        "opciones": [
            "<main>",
            "<body>",
            "<section>",
            "<article>"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - Tecnologías Web",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "¿Cuál de las siguientes metodologías pertenece al enfoque ágil de desarrollo de software?",
        "opciones": [
            "Métrica v3",
            "Modelo en Cascada",
            "Scrum",
            "Modelo en V"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 21 - Ciclo de Vida del Software",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "En Java, ¿qué modificador de acceso permite que un miembro de una clase sea accesible solo dentro de su propio paquete y por subclases en otros paquetes?",
        "opciones": [
            "public",
            "private",
            "protected",
            "default"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - Programación Orientada a Objetos",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué puerto utiliza por defecto el protocolo HTTPS?",
        "opciones": [
            "80",
            "21",
            "443",
            "25"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 33 - Tecnologías Web e Internet",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En el ámbito de la criptografía asimétrica, para enviar un mensaje cifrado a un destinatario garantizando la confidencialidad, el emisor cifra el mensaje con:",
        "opciones": [
            "La clave privada del emisor",
            "La clave pública del emisor",
            "La clave privada del receptor",
            "La clave pública del receptor"
        ],
        "respuestaCorrecta": 3,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 32 - Seguridad en Redes",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál es la dirección de loopback estándar en IPv4?",
        "opciones": [
            "127.0.0.1",
            "192.168.1.1",
            "255.255.255.0",
            "10.0.0.1"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 31 - Protocolos de Internet",
        "oposiciones": [
            "AGE",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "Según la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales, ¿a qué edad se adquiere la capacidad para prestar consentimiento para el tratamiento de datos personales?",
        "opciones": [
            "13 años",
            "14 años",
            "16 años",
            "18 años"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque I: Estado y Administración Electrónica",
        "tema": "Tema 11 - Protección de Datos",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué componente de la CPU se encarga de realizar operaciones aritméticas y lógicas?",
        "opciones": [
            "Unidad de Control (UC)",
            "Unidad Aritmético Lógica (ALU)",
            "Registros",
            "Caché"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 14 - Estructura y Componentes",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál de las siguientes formas normales (Bases de Datos) exige que la tabla esté en 2FN y no existan dependencias funcionales transitivas de los atributos no principales respecto de la clave primaria?",
        "opciones": [
            "1FN",
            "2FN",
            "3FN",
            "FNBC"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 23 - Diseño de Bases de Datos",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "En Active Directory, ¿cuál es la unidad contenedora más pequeña a la que se le pueden asignar directivas de grupo (GPO) o delegar autoridad administrativa?",
        "opciones": [
            "Dominio",
            "Bosque",
            "Sitio",
            "Unidad Organizativa (OU)"
        ],
        "respuestaCorrecta": 3,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 17 - SO Windows y Active Directory",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué protocolo se utiliza fundamentalmente para la transferencia de archivos en internet?",
        "opciones": [
            "SMTP",
            "FTP",
            "SNMP",
            "HTTP"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 31 - Protocolos TCP/IP",
        "oposiciones": [
            "AGE",
            "SAS",
            "Junta Andalucía"
        ]
    }
,
{
        "pregunta": "En el modelo relacional de bases de datos, ¿qué regla garantiza que ninguna clave primaria o parte de ella pueda tener un valor nulo?",
        "opciones": [
            "Integridad referencial",
            "Integridad de entidad",
            "Integridad de dominio",
            "Regla de restricción de nulos"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 20 - Modelo Relacional",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "En Java, ¿cuál de las siguientes interfaces pertenece al Framework de Colecciones y NO permite elementos duplicados?",
        "opciones": [
            "List",
            "Collection",
            "Set",
            "Map"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - Programación Orientada a Objetos",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué sistema de archivos es el más utilizado por defecto en las distribuciones modernas de Linux?",
        "opciones": [
            "NTFS",
            "FAT32",
            "ext4",
            "HFS+"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 18 - Sistemas Operativos. Linux",
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En Windows Server, ¿qué tecnología permite implementar políticas de seguridad, distribuir software y administrar configuraciones de usuario a través del Active Directory?",
        "opciones": [
            "Directivas de Grupo (GPO)",
            "Windows Server Update Services (WSUS)",
            "Remote Desktop Services (RDS)",
            "Domain Name System (DNS)"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 17 - SO Windows y Active Directory",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál de los siguientes es un algoritmo de cifrado asimétrico?",
        "opciones": [
            "AES",
            "DES",
            "RSA",
            "3DES"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 32 - Seguridad en Redes",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "Al definir la arquitectura de una aplicación web JEE, ¿qué patrón de diseño se utiliza habitualmente para separar los datos de la interfaz de usuario y del control de la lógica de negocio?",
        "opciones": [
            "Singleton",
            "Factory Method",
            "MVC (Modelo-Vista-Controlador)",
            "Observer"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 24 - Patrones de Diseño",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "En SQL, ¿qué instrucción se utiliza para eliminar todos los registros de una tabla de forma rápida y sin registrar las eliminaciones de filas individuales en el registro de transacciones?",
        "opciones": [
            "DROP TABLE",
            "DELETE FROM",
            "TRUNCATE TABLE",
            "REMOVE ALL"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 19 - SGBD y SQL",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué comando de Linux se utiliza para buscar patrones de texto dentro de los archivos?",
        "opciones": [
            "find",
            "grep",
            "locate",
            "tar"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 18 - SO Linux",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "¿Cuál es la longitud, en bits, de una dirección IPv6?",
        "opciones": [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 31 - Protocolos TCP/IP e IPv6",
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "Según las pautas de accesibilidad para el contenido web (WCAG), el criterio de proporcionar alternativas textuales para todo contenido no textual se asocia al principio de:",
        "opciones": [
            "Perceptible",
            "Operable",
            "Comprensible",
            "Robusto"
        ],
        "respuestaCorrecta": 0,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 28 - Accesibilidad",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál es el lenguaje estándar del W3C para transformar documentos XML en otros formatos como HTML?",
        "opciones": [
            "XPath",
            "XQuery",
            "XSLT",
            "DTD"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - Tecnologías Web y XML",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "En las redes Ethernet, ¿qué protocolo se encarga de resolver direcciones IP a direcciones MAC físicas?",
        "opciones": [
            "DHCP",
            "DNS",
            "ARP",
            "ICMP"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 30 - Redes LAN y Protocolos",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué estructura de datos utiliza el principio LIFO (Last In, First Out)?",
        "opciones": [
            "Cola (Queue)",
            "Pila (Stack)",
            "Lista enlazada",
            "Árbol Binario"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - Programación Básica",
        "oposiciones": [
            "AGE",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En la metodología SCRUM, el evento donde el equipo sincroniza sus actividades diarias y crea un plan para las siguientes 24 horas recibe el nombre de:",
        "opciones": [
            "Sprint Planning",
            "Sprint Retrospective",
            "Sprint Review",
            "Daily Scrum"
        ],
        "respuestaCorrecta": 3,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 21 - Metodologías Ágiles",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "Una red de almacenamiento dedicada de alta velocidad que conecta servidores a sus unidades lógicas de almacenamiento separándolas de la red LAN se conoce como:",
        "opciones": [
            "NAS (Network Attached Storage)",
            "SAN (Storage Area Network)",
            "DAS (Direct Attached Storage)",
            "WAN (Wide Area Network)"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 14 - Hardware y Almacenamiento",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Cuál de los siguientes NO es un tipo válido de diagrama estructural en UML 2.x?",
        "opciones": [
            "Diagrama de Componentes",
            "Diagrama de Clases",
            "Diagrama de Actividad",
            "Diagrama de Paquetes"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 22 - Análisis Estructurado y UML",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "En el modelo OSI, ¿cuál es la función principal de la Capa de Transporte (Capa 4)?",
        "opciones": [
            "Enrutamiento de paquetes IP",
            "Codificación y compresión de datos",
            "Control de flujo y entrega fiable de datos de extremo a extremo",
            "Acceso al medio físico (MAC)"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 29 - Modelo OSI",
        "oposiciones": [
            "AGE",
            "SAS",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En la gestión de memoria de un Sistema Operativo, ¿cómo se denomina el problema donde el espacio de memoria libre se divide en pequeños bloques no contiguos que no pueden utilizarse eficientemente?",
        "opciones": [
            "Paginación",
            "Segmentación",
            "Fragmentación Externa",
            "Swapping (Intercambio)"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 16 - Conceptos de Sistemas Operativos",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "Respecto a las pruebas de software, aquellas pruebas funcionales en las que el probador no tiene conocimiento del código fuente interno del sistema se denominan:",
        "opciones": [
            "Pruebas de Caja Blanca",
            "Pruebas de Caja Negra",
            "Pruebas de Regresión",
            "Pruebas Estructurales"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 26 - Calidad y Pruebas",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué protocolo estándar de red se utiliza para la gestión y monitorización de dispositivos en redes IP (ej. routers, switches, servidores)?",
        "opciones": [
            "SMTP",
            "SNMP",
            "LDAP",
            "IGMP"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 31 - Protocolos de Red",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "Si un microprocesador tiene un bus de direcciones de 32 bits, ¿cuál es la cantidad máxima de memoria RAM física que puede direccionar de forma directa?",
        "opciones": [
            "2 Gigabytes",
            "4 Gigabytes",
            "8 Gigabytes",
            "16 Gigabytes"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 14 - Estructura del Ordenador",
        "oposiciones": [
            "AGE",
            "Diputación Sevilla"
        ]
    },
    {
        "pregunta": "En Java, el proceso de ocultar los detalles de implementación de un objeto y exponer solo una interfaz pública y segura se denomina:",
        "opciones": [
            "Polimorfismo",
            "Herencia",
            "Sobrecarga",
            "Encapsulamiento"
        ],
        "respuestaCorrecta": 3,
        "bloque": "Bloque III: Desarrollo de Sistemas",
        "tema": "Tema 25 - POO y Java",
        "oposiciones": [
            "AGE",
            "Junta Andalucía"
        ]
    },
    {
        "pregunta": "En ciberseguridad, un ataque que intenta hacer que un servidor o recurso de red no esté disponible para sus usuarios legítimos se conoce como:",
        "opciones": [
            "Phishing",
            "Spoofing",
            "DoS (Denial of Service)",
            "Man-in-the-Middle"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque IV: Sistemas y Comunicaciones",
        "tema": "Tema 32 - Seguridad en Redes",
        "oposiciones": [
            "AGE",
            "SAS"
        ]
    },
    {
        "pregunta": "¿Qué comando SQL se utiliza para conceder privilegios o permisos a un usuario sobre un objeto de base de datos?",
        "opciones": [
            "ALLOW",
            "GRANT",
            "REVOKE",
            "PERMIT"
        ],
        "respuestaCorrecta": 1,
        "bloque": "Bloque II: Tecnología Básica",
        "tema": "Tema 19 - SGBD",
        "oposiciones": [
            "AGE"
        ]
    },
    {
        "pregunta": "¿Qué tipo de firma electrónica, según el reglamento europeo eIDAS, se crea mediante dispositivos cualificados de creación de firmas y se basa en un certificado cualificado?",
        "opciones": [
            "Firma Electrónica Simple",
            "Firma Electrónica Avanzada",
            "Firma Electrónica Cualificada",
            "Sello Electrónico"
        ],
        "respuestaCorrecta": 2,
        "bloque": "Bloque I: Estado y Administración Electrónica",
        "tema": "Tema 10 - Administración Electrónica",
        "oposiciones": [
            "AGE",
            "Junta Andalucía",
            "SAS"
        ]
    }
];