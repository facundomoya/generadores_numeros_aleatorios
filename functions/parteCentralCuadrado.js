function metodoCentralCuadrado() {
    const M = parseInt(document.getElementById("semillaInput").value);
    const N = parseInt(document.getElementById("digitosDeseadosInput").value);
    const TOT = parseInt(document.getElementById("totInput").value);

    if (isNaN(M) || isNaN(N) || isNaN(TOT) || M <= 0 || N <= 0 || TOT <= 0) {
        alert("Valores inválidos. Todos deben ser números positivos.");
        return;
    }

    let resultados = [];
    let u = M;

    for (let i = 0; i < TOT; i++) {
        let X = u * u;
        let X_str = X.toString();

        if ((X_str.length - N) % 2 !== 0) {
            X *= 10;
            X_str = X.toString();
        }

        const start = Math.floor((X_str.length - N) / 2);
        const centralDigits = X_str.substr(start, N);
        const r = parseFloat('0.' + centralDigits);

        resultados.push({
            iteracion: i + 1,
            ui: u,
            Xi: X,
            digitosCentrales: centralDigits,
            ri: r
        });

        u = parseInt(centralDigits);

        if (u === 0) {
            break;
        }
    }

    const listaResultados = document.getElementById("resultadosLista");
    listaResultados.innerHTML = resultados.map(item => `
        <li>
            <strong>Iteración ${item.iteracion}:</strong><br>
            u${item.iteracion - 1} = ${item.ui}<br>
            X${item.iteracion} = ${item.ui}² = ${item.Xi}<br>
            Dígitos centrales: ${item.digitosCentrales}<br>
            r${item.iteracion} = 0.${item.digitosCentrales} = ${item.ri.toFixed(N)}
        </li>
    `).join('');
}
