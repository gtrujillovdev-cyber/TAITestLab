import random
import os
import json

# Banco de preguntas de la propia app web (mismo directorio).
DB_PATH = os.path.join(os.path.dirname(__file__), 'preguntas.js')

LETRAS = ['a', 'b', 'c', 'd', 'e', 'f']


def cargar_preguntas():
    if not os.path.exists(DB_PATH):
        print(f"Error: no se encuentra la base de datos de preguntas ({DB_PATH}).")
        return []

    with open(DB_PATH, 'r', encoding='utf-8') as f:
        contenido = f.read()

    # preguntas.js es un script clásico ("const baseDeDatos = [...];"),
    # no JSON puro. El array en sí sigue sintaxis JSON válida (comillas
    # dobles, sin comas colgantes), así que basta con aislarlo e
    # interpretarlo como JSON. OJO: el comentario de cabecera del fichero
    # incluye un ejemplo de array entre corchetes, así que no vale con
    # buscar el primer '[' del fichero a secas: hay que anclarlo a partir
    # de la declaración real "const baseDeDatos = [...]".
    marcador = 'const baseDeDatos'
    marcador_idx = contenido.find(marcador)
    if marcador_idx == -1:
        print("Error: no se ha encontrado 'const baseDeDatos' en preguntas.js.")
        return []

    inicio = contenido.find('[', marcador_idx)
    fin = contenido.rfind(']')
    if inicio == -1 or fin == -1 or fin < inicio:
        print("Error: no se ha podido localizar el array de preguntas dentro de preguntas.js.")
        return []

    try:
        return json.loads(contenido[inicio:fin + 1])
    except json.JSONDecodeError as e:
        print(f"Error al interpretar preguntas.js como JSON: {e}")
        return []


def formatear_bloque_tema(p):
    if p.get('origen') == 'oficial':
        return f"Bloque {p['bloque']} · Examen Oficial"
    return f"Bloque {p['bloque']} - Tema {p.get('tema')}"


def generar_examen():
    preguntas = cargar_preguntas()
    if not preguntas:
        return

    print("========================================")
    print("   APP DE TEST: OPOSICIÓN TAI (AGE)")
    print("========================================")
    print(f"Base de datos cargada: {len(preguntas)} preguntas disponibles.\n")
    print("Opciones de test:")
    print("1. Test rápido (5 preguntas)")
    print("2. Test medio (10 preguntas)")
    print("3. Test completo aleatorio (30 preguntas)")
    print("4. Seleccionar un Bloque específico (I, II, III o IV)")

    opcion = input("Elige una opción (1/2/3/4): ").strip()

    examen = []

    if opcion == '1':
        num_preg = min(5, len(preguntas))
        examen = random.sample(preguntas, num_preg)
    elif opcion == '2':
        num_preg = min(10, len(preguntas))
        examen = random.sample(preguntas, num_preg)
    elif opcion == '3':
        num_preg = min(30, len(preguntas))
        examen = random.sample(preguntas, num_preg)
    elif opcion == '4':
        bloque = input("Introduce el bloque (I, II, III, IV): ").strip().upper()
        preguntas_bloque = [p for p in preguntas if p['bloque'] == bloque]
        if not preguntas_bloque:
            print("No se han encontrado preguntas para ese bloque.")
            return
        num_preg = min(10, len(preguntas_bloque))
        examen = random.sample(preguntas_bloque, num_preg)
        print(f"\nGenerando test del Bloque {bloque} con {num_preg} preguntas...")
    else:
        print("Opción no válida.")
        return

    respuestas_usuario = []
    # Orden de opciones mostrado por pregunta (se baraja para no memorizar
    # siempre la misma posición), guardado para poder corregir después.
    orden_opciones = []

    print("\n--- COMIENZA EL TEST ---")
    for i, p in enumerate(examen):
        opciones_idx = list(range(len(p['opciones'])))
        random.shuffle(opciones_idx)
        orden_opciones.append(opciones_idx)

        letras_validas = LETRAS[:len(opciones_idx)]

        print(f"\nPregunta {i + 1} [{formatear_bloque_tema(p)}]:")
        print(p['pregunta'])
        for letra, idx_original in zip(letras_validas, opciones_idx):
            print(f"  {letra}) {p['opciones'][idx_original]}")

        resp = ""
        while resp not in letras_validas:
            resp = input(f"Tu respuesta ({'/'.join(letras_validas)}): ").strip().lower()
            if resp not in letras_validas:
                print(f"Por favor, introduce una de: {', '.join(letras_validas)}.")
        respuestas_usuario.append(resp)

    # Corrección
    print("\n========================================")
    print("            RESULTADOS FINALES")
    print("========================================")
    aciertos = 0
    fallos = 0

    for i, p in enumerate(examen):
        opciones_idx = orden_opciones[i]
        letras_validas = LETRAS[:len(opciones_idx)]
        # Índice (dentro de p['opciones']) marcado por el usuario, según la
        # letra elegida y el orden barajado mostrado en pantalla.
        marcada_idx = opciones_idx[letras_validas.index(respuestas_usuario[i])]
        correcta_idx = p['respuestaIndex']

        if marcada_idx == correcta_idx:
            aciertos += 1
        else:
            correcta_letra = letras_validas[opciones_idx.index(correcta_idx)]
            print(f"\n[X] FALLO en la Pregunta {i + 1}:")
            print(p['pregunta'])
            print(f"Marcaste: {respuestas_usuario[i]}) {p['opciones'][marcada_idx]}")
            print(f"Correcta: {correcta_letra}) {p['opciones'][correcta_idx]}")
            if p.get('explicacion'):
                print(f"💡 {p['explicacion']}")
            fallos += 1

    # Misma fórmula que usa la web app (TAI.utils.computeScore): el INAP
    # descuenta 1/3 por cada fallo, sin bajar de 0.
    nota_neta = max(0, aciertos - fallos / 3)
    nota_sobre_10 = (nota_neta / len(examen)) * 10

    print("\n--- RESUMEN ---")
    print(f"Preguntas totales: {len(examen)}")
    print(f"Aciertos: {aciertos}")
    print(f"Fallos: {fallos}")
    print(f"NOTA FINAL: {nota_sobre_10:.2f} / 10.00")

    if nota_sobre_10 >= 5:
        print("\n✅ ¡Aprobado! Vas por muy buen camino.")
    else:
        print("\n❌ Suspenso. Sigue repasando los temas donde has fallado.")


if __name__ == "__main__":
    generar_examen()
