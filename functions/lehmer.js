function metodoLehmer() {
    // Obtener los valores de los inputs
    let n = document.getElementById('semillaInput').value;
    let t = document.getElementById('digitosDeseados').value;
    let d = document.getElementById('dInput').value;

    // Convertir los valores a números enteros
    let nInt = parseInt(n);
    let tInt = parseInt(t);
    let dInt = parseInt(d);

    // Verificar si la conversión a números fue exitosa
    if (isNaN(nInt) || isNaN(tInt) || isNaN(dInt)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return; // Detener la ejecución si alguno no es un número válido
    }

    // Array para almacenar los resultados
    let resultados = [];

    // Paso 1: Realizamos el cálculo de n * t
    let primerResultado = nInt * tInt;

    // Convertimos el resultado a una cadena para poder extraer los dígitos
    let resultadoString = primerResultado.toString();

    // Paso 2: Tomamos los primeros 'k' dígitos donde k es el número de dígitos de t
    let k = t.length; // La cantidad de dígitos de t
    let primerosKDigitos = resultadoString.substring(0, k); // Los primeros k dígitos del producto

    // Paso 3: Tomamos los siguientes 2 dígitos después de los primeros 'k'
    let siguientes2Digitos = resultadoString.substring(k, k + 2); // Los siguientes 2 dígitos

    // Paso 4: Restamos los primeros k dígitos menos los siguientes 2 dígitos
    let resultadoResta = parseInt(primerosKDigitos) - parseInt(siguientes2Digitos);

    // Paso 5: Agregar un 0 al principio del resultado de la resta
    let nuevoValor = "0" + resultadoResta;

    // Guardamos los resultados en el array
    resultados.push({
        iteracion: 1, // La iteración se puede incrementar si es necesario para iteraciones sucesivas
        P: primerResultado,
        L: primerosKDigitos,
        R: siguientes2Digitos,
        ni_plus_1: resultadoResta,
        ri: nuevoValor
    });

    // Mostrar resultados en la tabla
    const tabla = document.getElementById("resultadosBody");
    tabla.innerHTML = resultados.map(item => `
        <tr>
            <td>${item.iteracion}</td>
            <td>${item.P}</td>
            <td>${item.L}</td>
            <td>${item.R}</td>
            <td>${item.ni_plus_1}</td>
            <td>${item.ri}</td>
        </tr>
    `).join(""); // Crear las filas de la tabla dinámicamente
}
