function metodoCentralCuadrado() {
    // Obtener valores de los inputs
    const M = parseInt(document.getElementById("semillaInput").value);
    const N = parseInt(document.getElementById("digitosDeseadosInput").value);
    const TOT = parseInt(document.getElementById("totInput").value);

    // Validaciones
    if (isNaN(M) || isNaN(N) || isNaN(TOT) || M <= 0 || N <= 0 || TOT <= 0) {
        alert("Valores inválidos. Todos deben ser números positivos.");
        return;
    }

    let resultados = [];
    let u = M; // Comenzamos con la semilla inicial

    for (let i = 0; i < TOT; i++) {
        // 1. Calcular X = u²
        let X = u * u;
        let X_str = X.toString();

        // 2. Ajustar si la longitud menos N es impar (multiplicar por 10)
        if ((X_str.length - N) % 2 !== 0) {
            X *= 10;
            X_str = X.toString();
        }

        // 3. Extraer N dígitos centrales
        const start = Math.floor((X_str.length - N) / 2);
        const centralDigits = X_str.substr(start, N);

        // 4. Calcular r = 0.[dígitos centrales]
        const r = parseFloat('0.' + centralDigits);

        // Guardar resultados
        resultados.push({
            iteracion: i + 1,
            ui: u,
            Xi: X,
            digitosCentrales: centralDigits,
            ri: r
        });

        // 5. El nuevo u son los dígitos centrales como entero
        u = parseInt(centralDigits);

        // Si llegamos a cero, terminar
        if (u === 0) {
            break;
        }
    }

    // Mostrar resultados
    const listaResultados = document.getElementById("resultadosLista");
    listaResultados.innerHTML = resultados.map(item => `
        <li>
            <strong>Iteración ${item.iteracion}:</strong><br>
            u${item.iteracion-1} = ${item.ui}<br>
            X${item.iteracion} = ${item.ui}² = ${item.Xi}<br>
            Dígitos centrales: ${item.digitosCentrales}<br>
            r${item.iteracion} = 0.${item.digitosCentrales} = ${item.ri.toFixed(N)}
        </li>
    `).join('');
}