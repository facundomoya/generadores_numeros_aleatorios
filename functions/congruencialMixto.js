function metodoCongruencialMixto() {
    const n0 = BigInt(document.getElementById("semillaInput").value);
    const a = BigInt(document.getElementById("digitosDeseadosInput").value);
    const c = BigInt(document.getElementById("digitosDeseadosInput2").value);
    const m = BigInt(document.getElementById("digitosDeseadosInput3").value);
    const it = parseInt(document.getElementById("totInput").value);

    if (n0 <= 0 || a <= 0 || c <= 0 || m <= 0 || isNaN(it) || it <= 0) {
        alert("Valores inválidos. Todos deben ser números positivos.");
        return;
    }

    const output = document.getElementById("output");
    output.innerHTML = "";

    let semilla = n0;

    for (let i = 0; i < it; i++) {
        const calculo1 = (a * semilla + c);
        const calculo2 = calculo1 % m;

        const resultadoDecimal = Number(calculo2) / Number(m); 

        output.innerHTML += `u${i} = ${resultadoDecimal}<br>`;

        semilla = calculo2;
    }
}
