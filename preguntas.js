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
];
