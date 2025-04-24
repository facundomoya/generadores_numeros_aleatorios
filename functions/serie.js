function calcularSerie() {
    const entrada = document.getElementById('valores').value;
    const valores = entrada.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    const n = Math.floor(valores.length / 2);  // Número de pares de números (ui, ui+1)
    const x = parseInt(document.getElementById('subintervalos').value); // Número de celdas (x²)
    const x2Alfa = parseFloat(document.getElementById('chiCritico').value); // Valor crítico de X²α

    if (n === 0 || !x || isNaN(x2Alfa)) {
        document.getElementById('resultado').innerText = '⚠️ Por favor, completá todos los campos correctamente.';
        return;
    }

    const Fe = n / (x * x);  // Frecuencia esperada por celda

    // Inicializar frecuencias observadas (Fo)
    const Fo = Array.from({ length: x }, () => Array(x).fill(0));

    // Clasificar los pares de números en las celdas (j, k)
    for (let i = 0; i < n; i++) {
        const u1 = valores[2 * i];
        const u2 = valores[2 * i + 1];

        const j = Math.floor(u1 * x); // Fila
        const k = Math.floor(u2 * x); // Columna

        Fo[j][k]++;
    }

    // Calcular el estadístico X²
    let sumatoria = 0;
    for (let j = 0; j < x; j++) {
        for (let k = 0; k < x; k++) {
            sumatoria += Math.pow(Fo[j][k] - Fe, 2);
        }
    }

    const x2Calculado = (x * x / n) * sumatoria; // X² calculado
    const pasa = x2Calculado <= x2Alfa;

    let detalle = '';
    for (let j = 0; j < x; j++) {
        for (let k = 0; k < x; k++) {
            detalle += `Celda (${j + 1}, ${k + 1}): Fo = ${Fo[j][k]}, Fe = ${Fe.toFixed(2)}<br>`;
        }
    }

    document.getElementById('resultado').innerHTML = `
        <strong>n (total de pares):</strong> ${n}<br>
        <strong>Fe (esperado por celda):</strong> ${Fe.toFixed(2)}<br><br>
        ${detalle}<br>
        <strong>X² calculado:</strong> ${x2Calculado.toFixed(4)}<br>
        <strong>X²α (crítico):</strong> ${x2Alfa}<br>
        <strong>Resultado:</strong> ${pasa ? '✅ No se rechaza la hipotesis de que los numeros provienen de un universo uniformemente distribuido' : '❌ Se rechaza la hipótesis de uniformidad'}
    `;
}
