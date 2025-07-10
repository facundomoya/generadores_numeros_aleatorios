function calcularSerie() {
    const entrada = document.getElementById('valores').value;
    const valores = entrada.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    const n = Math.floor(valores.length / 2);
    const x = parseInt(document.getElementById('subintervalos').value);
    const x2Alfa = parseFloat(document.getElementById('chiCritico').value);

    if (n === 0 || !x || isNaN(x2Alfa)) {
        document.getElementById('resultado').innerText = '⚠️ Por favor, completá todos los campos correctamente.';
        return;
    }

    const Fe = n / (x * x);

    const Fo = Array.from({ length: x }, () => Array(x).fill(0));

    for (let i = 0; i < n; i++) {
        const u1 = valores[2 * i];
        const u2 = valores[2 * i + 1];

        const j = Math.floor(u1 * x);
        const k = Math.floor(u2 * x);

        Fo[j][k]++;
    }

    let sumatoria = 0;
    for (let j = 0; j < x; j++) {
        for (let k = 0; k < x; k++) {
            sumatoria += Math.pow(Fo[j][k] - Fe, 2);
        }
    }

    const x2Calculado = (x * x / n) * sumatoria;
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
