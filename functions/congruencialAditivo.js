function congruencialAditivo() {
    const semillasStr = document.getElementById("semillasInput").value.trim();
    const m = parseInt(document.getElementById("moduloInput").value);
    const iteraciones = parseInt(document.getElementById("iteracionesInput").value);
    const output = document.getElementById("output");

    let semillas = semillasStr.split(/\s+/).map(n => parseInt(n)).filter(n => !isNaN(n));

    if (semillas.length < 2 || isNaN(m) || isNaN(iteraciones) || m <= 0 || iteraciones <= 0) {
        alert("Verifica que ingresaste al menos 2 semillas válidas, módulo e iteraciones.");
        return;
    }

    output.innerHTML = "";
    let resultados = [...semillas]; // clonamos las semillas para operar

    for (let i = semillas.length; i < semillas.length + iteraciones; i++) {
        const nuevo = (resultados[i - 1] + resultados[i - semillas.length]) % m;
        resultados.push(nuevo);
        const u = nuevo / m;
        output.innerHTML += `u${i - semillas.length} = ${u}<br>`;
    }
}
