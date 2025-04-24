function calcularKS() {
    const entrada = document.getElementById('valores').value;
    const valores = entrada.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    const n = valores.length;
    const dAlfa = parseFloat(document.getElementById('dAlfa').value);
  
    if (n === 0 || isNaN(dAlfa)) {
      document.getElementById('resultado').innerText = '⚠️ Por favor, completá todos los campos correctamente.';
      return;
    }
  
    // Ordenar los valores de menor a mayor
    const valoresOrdenados = [...valores].sort((a, b) => a - b);
  
    let Dn = 0;
    let detalle = '';
  
    // Calcular Dn = Máx |(i/n) - u(i)|
    for (let i = 0; i < n; i++) {
      const ui = valoresOrdenados[i];
      const fnxi = (i + 1) / n;
      const diferencia = Math.abs(fnxi - ui);
  
      detalle += `i=${i + 1}, ui=${ui.toFixed(4)}, Fn(xi)=${fnxi.toFixed(4)}, |Fn(xi) - ui|=${diferencia.toFixed(4)}<br>`;
  
      if (diferencia > Dn) {
        Dn = diferencia;
      }
    }
  
    const pasa = Dn < dAlfa;
  
    document.getElementById('resultado').innerHTML = `
      <strong>n (tamaño de la muestra):</strong> ${n}<br><br>
      ${detalle}<br>
      <strong>D<sub>n</sub> calculado:</strong> ${Dn.toFixed(5)}<br>
      <strong>D<sub>α,n</sub> (crítico):</strong> ${dAlfa}<br>
      <strong>Resultado:</strong> ${pasa ? '✅ No se rechaza la hipotesis de que los numeros provienen de un universo uniformemente distribuido' : '❌ Se rechaza la hipótesis de uniformidad'}
    `;
  }
  