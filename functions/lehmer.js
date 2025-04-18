function metodoLehmer() {
    // Obtener valores de los inputs
    const n0 = parseInt(document.getElementById("semillaInput").value);
    const t = parseInt(document.getElementById("digitosDeseadosInput").value);
    const it = parseInt(document.getElementById("totInput").value);

    // Validaciones
    if (isNaN(n0) || isNaN(t) || isNaN(it) || n0 <= 0 || t <= 0 || it <= 0) {
        alert("Valores inválidos. Todos deben ser números positivos.");
        return;
    }

    // Limpiar resultados anteriores
    const output = document.getElementById("output");
    output.innerHTML = "";

    // Inicializar semilla
    let semilla = n0;

    for (let i = 0; i < it; i++) {
        const largok = t.toString().length;
        const calculo1 = semilla * t;
        const calculo1Str = calculo1.toString();

        const k = parseInt(calculo1Str.substring(0, largok));
        const restantesStr = calculo1Str.substring(largok).padStart(3, '0');
        const restantes = parseInt(restantesStr);

        const calculo2 = restantes - k;

        // Asegurar que el número siempre tenga formato decimal válido
        const resultadoDecimal = parseFloat("0." + Math.abs(calculo2).toString().padStart(3, '0'));

        // Mostrar resultado de la iteración
        output.innerHTML += `u${i} = ${resultadoDecimal}<br>`;

        // Actualizar la semilla para la próxima iteración
        semilla = calculo2;
    }
}
