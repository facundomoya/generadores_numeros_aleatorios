function pruebaPromedios() {
    const input = document.getElementById('numeros').value;
    const zalfaInput = document.getElementById('zalfa').value;
  
    
    const numeros = input
      .trim()
      .split(/\s+/)
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));
  
    const n = numeros.length;
    const zalfa = parseFloat(zalfaInput);
  
    if (n === 0) {
      document.getElementById('resultado').innerText = "❗ Ingresa al menos un número válido.";
      return;
    }
  
    if (isNaN(zalfa)) {
      document.getElementById('resultado').innerText = "❗ Ingresa un valor válido para Zα.";
      return;
    }
  
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / n;
    const z0 = ((promedio - 0.5) * Math.sqrt(n)) / 0.2886751346;
    console.log(z0);

    const resultado = Math.abs(z0) < zalfa
      ? "✅ Se acepta H₀: No se rechaza la hipotesis de que los numeros provienen de un universo uniformemente distribuido"
      : "❌ Se rechaza H₀: La muestra NO parece uniforme.";
  
    document.getElementById('resultado').innerText = `
      Tamaño de muestra (n): ${n}
      Promedio (X̄): ${promedio.toFixed(5)}
      Z₀: ${z0.toFixed(5)}
      Zα: ${zalfa.toFixed(5)}
      Resultado: ${resultado}
    `;
  }
