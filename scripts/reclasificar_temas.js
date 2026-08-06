// Script de reclasificación de 'tema' en preguntas.js
// - Bloque I: SOLO rellena tema:null (no toca las ya etiquetadas)
// - Bloque II/III/IV: reclasifica TODAS (las ya etiquetadas usan una numeración local
//   antigua 1-10 inconsistente con el temario real; se descarta y se reclasifica por contenido)
// - MIXTO: no se toca
const fs = require('fs');
const path = process.argv[2];
const RAW = fs.readFileSync(path, 'utf8');
const HEADER_END = RAW.indexOf('const baseDeDatos');
const header = RAW.slice(0, HEADER_END);
let code = RAW.replace('const baseDeDatos', 'global.baseDeDatos');
eval(code);
const data = global.baseDeDatos;

function firstMatch(text, rules) {
  for (const [tema, re] of rules) {
    if (re.test(text)) return tema;
  }
  return null;
}

// ---------- BLOQUE I (1-11) - solo para nulls ----------
const rulesI = [
  [2, /Corona\b|Cortes Generales|Diputaciones? Permanentes?|Defensor del Pueblo|Tribunal Constitucional|moci[oó]n de censura|Diputados y Senadores|circunscripci[oó]n electoral|Congreso.*Diputados/i],
  [7, /igualdad efectiva de mujeres y hombres|Ley Org[aá]nica 3\/2007|violencia de g[eé]nero|trato desfavorable a las mujeres|plan(es)? de igualdad/i],
  [11, /RGPD|Reglamento \(UE\) 2016\/679|protecci[oó]n de datos personales|Ley Org[aá]nica 3\/2018|LOPDGDD|firma electr[oó]nica|certificado(s)? electr[oó]nico|DNIe|eIDAS|Esquema Nacional de Seguridad|\bENS\b|CAdES|nodo eIDAS|servicios electr[oó]nicos de confianza|Ley 6\/2020|Centro Criptol[oó]gico Nacional|\bCCN\b/i],
  [10, /Ley 40\/2015|R[eé]gimen Jur[ií]dico del Sector P[uú]blico|Esquema Nacional de Interoperabilidad|\bENI\b|Norma T[eé]cnica de Interoperabilidad|administraci[oó]n electr[oó]nica|servicios? comunes|sede electr[oó]nica|Real Decreto 203\/2021|Resoluci[oó]n de 14 de diciembre de 2015/i],
  [9, /recurso de alzada|recurso de reposici[oó]n|notificaci(o|ó)n(es)?.*(procedimiento|Ley 39)|Ley 39\/2015.*notificaci|acto(s)? administrativo(s)?/i],
  [8, /Ley 39\/2015|Procedimiento Administrativo Com[uú]n|c[oó]mputo de plazos|d[ií]as h[aá]biles|plazo m[aá]ximo.*resoluci[oó]n/i],
  [5, /acceso al empleo p[uú]blico|clases de personal|titulaci[oó]n.*acceso|requisitos.*acceso.*funcion/i],
  [6, /TREBEP|Estatuto B[aá]sico del Empleado P[uú]blico|Ley 53\/1984|Incompatibilidades del personal|vacaciones de los funcionarios|situaciones administrativas/i],
  [4, /Organizaci[oó]n Territorial del Estado|Uni[oó]n Europea|Objetivos de Desarrollo Sostenible|Agenda 2030/i],
  [1, /Constituci[oó]n Espa[ñn]ola|art[ií]culo \d+ de la CE\b|T[ií]tulo [IVXLC]+ de la Constituci[oó]n|derechos fundamentales|Cap[ií]tulo Segundo del T[ií]tulo I|garant[ií]as de las libertades|suspensi[oó]n de los derechos|art[ií]culo \d+ de la Constituci[oó]n/i],
];

// ---------- BLOQUE II (11-16) ----------
const rulesII = [
  [13, /binari|hexadecimal|ASCII|IEEE.?754|\bbit(s)?\b|\bbyte\b|coma flotante|n[uú]mero.*decimal.*binario|agrupaci[oó]n de \d bits|nibble/i],
  [16, /Windows|Active Directory|\bGPO\b|directiva(s)? de grupo|\bNTFS\b|sfc \/scannow|s[ií]mbolo del sistema|Windows Server|Windows Update|pegar sin formato|bloquear (el )?equipo/i],
  [15, /Linux|Unix\b|chmod|permisos.*rwx|\bpwd\b|comando.*grep|proceso zombi|distribuci[oó]n(es)? (de )?Linux|directorio.*configuraci[oó]n.*sistema/i],
  [12, /\bSSD\b|\bHDD\b|\bRAID\b|\bUSB\b|\bSATA\b|\bNAS\b|copia de seguridad|backup|Thin Provisioning|impresora|escáner|digitalizaci[oó]n|formato de imagen|resoluci[oó]n.*pantalla|panel.*LCD|pantalla\b|perif[eé]rico|conector|Lightning|almacenamiento en disco|tecnolog[ií]a de interfaz hardware|SSD.*formato/i],
  [14, /\bkernel\b|planificaci[oó]n de procesos|\bquantum\b|memoria virtual|fragmentaci[oó]n|virtualizaci[oó]n de m[aá]quinas|hipervisor|funciones? de un Sistema Operativo|Registro de Instrucci[oó]n/i],
  [11, /\bCPU\b|procesador(es)?\b|\bALU\b|Unidad de Control|Von Neumann|arquitectura Harvard|\bCISC\b|\bRISC\b|bus de direcciones|memoria RAM|memoria can[eé]|memoria cach[eé]|\bFLOPS\b|taxonom[ií]a de Flynn|arquitectura ARM|multin[uú]cleo/i],
];

// ---------- BLOQUE III (17-25) ----------
const rulesIII = [
  [25, /\bWCAG\b|accesibilidad web|\bPOUR\b|\bATAG\b|usabilidad web|Jakob Nielsen|principios? de accesibilidad/i],
  [21, /NoSQL|MongoDB|Cassandra|Big Data|\bOQL\b|SGDBOO|bases de datos orientad[ao]s a objetos/i],
  [20, /\bSQL\b|\bDDL\b|\bDML\b|\bDROP\b|CREATE TABLE|claves? primaria(s)?|claves? for[aá]nea(s)?|integridad referencial|\bGRANT\b|\bTRUNCATE\b|trigger(s)?|disparador(es)?|\bACID\b|\bCRUD\b|Reglas de Codd|\bOracle\b/i],
  [19, /modelo E-?R\b|entidad.?relaci[oó]n|ANSI.?SPARC|cardinalidad|normalizaci[oó]n|forma normal|\b3FN\b|dependencia funcional|\bSGBD\b|transacci[oó]n en (un|una) (SGBD|base de datos)|diagrama de flujo de datos/i],
  [18, /prueba(s)? (de|unitaria|integraci[oó]n|carga|estr[eé]s|caja negra|caja blanca|funcional|sistema|aceptaci[oó]n|rendimiento)|mantenimiento (correctivo|evolutivo|adaptativo|perfectivo)|mantenimiento.*(corregir errores|bugs|estructura interna)|\bJMeter\b|Selenium|an[aá]lisis est[aá]tico|\bOWASP\b|vulnerabilidad(es)? de (la )?aplicaci[oó]n|calidad del software/i],
  [17, /M[eé]trica.?v3|ciclo de vida|manuales de usuario|elaboraci[oó]n de los manuales|participantes.*tarea|modelo de ciclo de vida|\bSCRUM\b|metodolog[ií]a.*[aá]gil|enfoque [aá]gil|Product Backlog|Manifiesto [ÁA]gil|\bSprint\b|cohesi[oó]n.*acoplamiento/i],
  [23, /orientad[ao] a objetos|herencia\b|encapsulamiento|polimorfismo|clase abstracta|patr[oó]n de dise[ñn]o|\bUML\b|diagrama de clases|diagrama de componentes|\bComposite\b|\bDecorator\b|\bGoF\b|Framework de Colecciones|generalizaci[oó]n entre clases/i],
  [24, /\bHTML5?\b|lenguaje de marcas|Marcado de Hipertexto|\bCSS3?\b|presentaci[oó]n y estilos|JavaScript|\bJS\b|\bXML\b|XHTML|\bREST\b|\bSOAP\b|\bJSON\b|\bORM\b|\bJDBC\b|\bJPA\b|ASP\.NET|\bRazor\b|\bNuGet\b|microservicio(s)?|arquitectura.*(cliente.servidor|multinivel)|\bGit\b|GitHub|repositorio.*(bare|Git)|control de versiones|backend|front-?end|framework.*(javascript|web)|elemento <a>|pautas de accesibilidad/i],
  [22, /\bJava(?!Script)\b|\bPython\b|C\+\+|\bC#\b|\.NET|\bSwift\b|\bRuby\b|F#(?!\w)|algoritmo de ordenaci[oó]n|estructura de datos|\bLIFO\b|\bpila\b|\bcola\b|[aá]rbol binario|[aá]rboles 2-3-4|\bTAD\b|tipo abstracto de datos|bucle|do.?while|operador l[oó]gico|operaci[oó]n l[oó]gica|paradigma de programaci[oó]n|lenguaje.*interpretado|lenguaje.*compilado/i],
];

// ---------- BLOQUE IV (26-33) ----------
const rulesIV = [
  [32, /criptograf[ií]a|cifrado (sim[eé]trico|asim[eé]trico)|algoritmo (sim[eé]trico|asim[eé]trico)|\bRSA\b|\bAES\b|clave (p[uú]blica|privada)|firma (digital|electr[oó]nica)|certificado (SSL|digital|TLS)|\bPKI\b|\bECDSA\b|\bhash\b|TLS\b/i],
  [33, /firewall|cortafuegos|\bVPN\b|Redes? Privadas? Virtuales?|\bIDS\b|\bIPS\b|\bHIDS\b|t[uú]nel|IPsec|SSL.?VPN|\bAAA\b|\bBYOD\b|\bMDM\b|acceso remoto|\bSARA\b|propio dispositivo personal|gesti[oó]n de dispositivos m[oó]viles/i],
  [31, /malware|virus\b|ransomware|Ryuk|phishing|denegaci[oó]n de servicio|\bDoS\b|\bDDoS\b|ataque(s)?|ingenier[ií]a social|amenaza(s)?|\bCERT\b|CCN-CERT|herramienta del CCN\b|honeypot|se[ñn]uelo.*atacantes|MAGERIT|\bPILAR\b|\bKRACK\b/i],
  [29, /\bHTTP\b|\bHTTPS\b|\bFTP\b|\bSMTP\b|\bPOP3\b|\bIMAP\b|correo electr[oó]nico|servicio(s)? web|\bWSIL\b|c[oó]digo de (error|respuesta) HTTP|\bTelnet\b|\bSNMP\b|\bRSVP\b|transferencia de hipertexto|transferencia de (archivos|ficheros) en internet|gesti[oó]n y monitorizaci[oó]n de dispositivos|(administrar|gesti[oó]n de) (los )?dispositivos de una red|sesiones? de comunicaci[oó]n de audio y v[ií]deo/i],
  [28, /direcci[oó]n(es)? IP|\bIPv4\b|\bIPv6\b|subred|m[aá]scara de subred|\bARP\b|\bDNS\b|\bDHCP\b|loopback|multicast|direccionamiento|vector de distancia|\bRIP\b|\bOSPF\b|\bBGP\b|ICMP\w*|\bQoS\b|Calidad de Servicio|\bTCP\b.*\bUDP\b|\bUDP\b.*\bTCP\b|direcci[oó]n f[ií]sica.*direcci[oó]n l[oó]gica|bucles? de enrutamiento|hold.?down|nivel de Red.*OSI|OSI nivel 3/i],
  [27, /modelo OSI|capa(s)? del modelo OSI|capas? OSI|pila (de protocolos )?TCP.?IP|modelo TCP.?IP|niveles del modelo OSI|\bIETF\b/i],
  [30, /topolog[ií]a.*red|\bVLAN\b|\bswitch\b|dominio(s)? de colisi[oó]n|Ethernet|IEEE 802\b|CSMA.?CD|Wi-?Fi|red(es)? inal[aá]mbrica(s)?|\bWPS\b|Bluetooth|Scatternet|Rapid Spanning Tree|red (en )?estrella|punto a punto|portal cautivo|\bPoE\+*\b|Power over Ethernet/i],
  [26, /fibra [oó]ptica|cable (UTP|coaxial|de cobre)|apantallamiento|par trenzado|medios? de transmisi[oó]n|\bMAN\b|\bWAN\b|\bSOHO\b|\bPOLAN\b|jumboframe|diafon[ií]a|induce corrientes en otros pares|\bLPWAN\b|Uni[oó]n Internacional de Telecomunicaciones|especializado en telecomunicaciones/i],
];

let stats = { I: { before: 0, after: 0 }, II: { changed: 0 }, III: { changed: 0 }, IV: { changed: 0 } };

for (const q of data) {
  if (q.bloque === 'I') {
    if (q.tema === null) {
      stats.I.before++;
      const t = firstMatch(q.pregunta, rulesI);
      if (t) { q.tema = t; stats.I.after++; }
    }
  } else if (q.bloque === 'II') {
    const t = firstMatch(q.pregunta, rulesII);
    if (t !== q.tema) { q.tema = t; stats.II.changed++; }
  } else if (q.bloque === 'III') {
    const t = firstMatch(q.pregunta, rulesIII);
    if (t !== q.tema) { q.tema = t; stats.III.changed++; }
  } else if (q.bloque === 'IV') {
    const t = firstMatch(q.pregunta, rulesIV);
    if (t !== q.tema) { q.tema = t; stats.IV.changed++; }
  }
}

console.log(JSON.stringify(stats, null, 2));

// resumen final por bloque+tema
for (const b of ['I', 'II', 'III', 'IV']) {
  const counts = {};
  data.filter(q => q.bloque === b).forEach(q => {
    const k = q.tema === null ? 'null' : q.tema;
    counts[k] = (counts[k] || 0) + 1;
  });
  console.log('Bloque', b, counts);
}

const body = JSON.stringify(data, null, 4);
fs.writeFileSync(path, header + 'const baseDeDatos = ' + body + ';\n');
console.log('TOTAL preguntas', data.length);
