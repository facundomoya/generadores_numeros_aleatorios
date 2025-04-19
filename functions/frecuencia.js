function calcularFrecuencia() {
    const entrada = document.getElementById('valores').value;
    const valores = entrada.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    const n = valores.length;
    const x = parseInt(document.getElementById('subintervalos').value);
    const x2Alfa = parseFloat(document.getElementById('chiCritico').value); // Renombrado
  
    if (n === 0 || !x || isNaN(x2Alfa)) {
      document.getElementById('resultado').innerText = '⚠️ Por favor, completá todos los campos correctamente.';
      return;
    }
  
    const tamañoIntervalo = 1 / x;
    const Fe = n / x;
  
    // Inicializar frecuencias observadas
    const Fo = new Array(x).fill(0);
  
    // Clasificar cada valor en su subintervalo
    valores.forEach(valor => {
      if (valor < 0 || valor > 1) return; // ignorar fuera de rango
      let indice = Math.floor(valor * x);
      if (indice >= x) indice = x - 1; // evitar que valor = 1.0 cause overflow
      Fo[indice]++;
    });
  
    // Calcular sumatoria de (Fo - Fe)^2
    let sumatoria = 0;
    for (let i = 0; i < x; i++) {
      sumatoria += Math.pow(Fo[i] - Fe, 2);
    }
  
    // Multiplicar por x/n (inverso de Fe)
    const x2Calculado = sumatoria * (x / n);
    const pasa = x2Calculado <= x2Alfa;
  
    let detalle = '';
    for (let i = 0; i < x; i++) {
      const li = (i * tamañoIntervalo).toFixed(4);
      const ls = ((i + 1) * tamañoIntervalo).toFixed(4);
      detalle += `Intervalo ${i + 1} [${li} - ${ls}]: Fo = ${Fo[i]}, Fe = ${Fe.toFixed(2)}<br>`;
    }
  
    document.getElementById('resultado').innerHTML = `
      <strong>n (total de valores):</strong> ${n}<br>
      <strong>Fe (esperado):</strong> ${Fe.toFixed(2)}<br><br>
      ${detalle}<br>
      <strong>X² calculado:</strong> ${x2Calculado.toFixed(4)}<br>
      <strong>X²α crítico:</strong> ${x2Alfa}<br>
      <strong>Resultado:</strong> ${pasa ? '✅ No se rechaza la hipótesis de uniformidad' : '❌ Se rechaza la hipótesis de uniformidad'}
    `;
  }
  