function calcularCorridas() {
    const entrada = document.getElementById('valores').value;
    const valores = entrada.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    const n = valores.length;
    const x2Alfa = parseFloat(document.getElementById('x2Alfa').value);
  
    if (n === 0 || isNaN(x2Alfa)) {
      document.getElementById('resultado').innerText = '⚠️ Por favor, completá todos los campos correctamente.';
      return;
    }
  
    // Paso 2: Secuencia binaria
    const binaria = valores.map(v => v > 0.5 ? 1 : 0);
  
    // Paso 3: Longitudes de corrida (frecuencia observada)
    const frecuenciasObservadas = {};
    let longitudActual = 1;
  
    for (let i = 1; i < binaria.length; i++) {
      if (binaria[i] === binaria[i - 1]) {
        longitudActual++;
      } else {
        frecuenciasObservadas[longitudActual] = (frecuenciasObservadas[longitudActual] || 0) + 1;
        longitudActual = 1;
      }
    }
    frecuenciasObservadas[longitudActual] = (frecuenciasObservadas[longitudActual] || 0) + 1;
  
    // Paso 4 y 5: X² considerando TODAS las longitudes observadas y extra si Fe > 0.5
    const maxLongitud = Math.max(...Object.keys(frecuenciasObservadas).map(Number));
    let x2Calculado = 0;
    let detalle = '';
  
    for (let i = 1; ; i++) {
      const Fei = (n - i + 3) / Math.pow(2, i + 1);
      const Foi = frecuenciasObservadas[i] || 0;
  
      if (Foi === 0 && Fei < 0.5 && i > maxLongitud) break; // ya no hay nada útil
      if (Fei <= 0) break; // por seguridad
  
      const contribucion = Fei > 0 ? Math.pow(Foi - Fei, 2) / Fei : 0;
      x2Calculado += contribucion;
  
      detalle += `Longitud ${i}: Fo = ${Foi}, Fe = ${Fei.toFixed(4)}, contribución = ${contribucion.toFixed(4)}<br>`;
    }
  
    const pasa = x2Calculado <= x2Alfa;
  
    document.getElementById('resultado').innerHTML = `
      <strong>n (tamaño de la muestra):</strong> ${n}<br>
      <strong>Secuencia binaria:</strong> ${binaria.join(', ')}<br><br>
      ${detalle}<br>
      <strong>X² calculado:</strong> ${x2Calculado.toFixed(4)}<br>
      <strong>X²α (crítico):</strong> ${x2Alfa}<br>
      <strong>Resultado:</strong> ${pasa ? '✅ No se rechaza la hipotesis de que los numeros provienen de un universo uniformemente distribuido' : '❌ Se rechaza la hipótesis de uniformidad'}
    `;
  }
  