# Generadores Pseudoaleatorios y Pruebas Estadísticas

## Descripción del Proyecto

Este proyecto web permite **generar secuencias de números pseudoaleatorios** mediante diferentes algoritmos clásicos y aplicar **pruebas estadísticas** para verificar su aleatoriedad. Está diseñado como material práctico para la materia **Simulación** de la **Universidad Tecnológica Nacional - Facultad Regional Tucumán (UTN-FRT)**.

## Características Principales

- **Generadores de números pseudoaleatorios:**
  - Método Congruencial Aditivo
  - Método Congruencial Mixto
  - Método Congruencial Multiplicativo
  - Método de la Parte Central del Cuadrado
  - Método de Lehmer

- **Pruebas estadísticas implementadas:**
  - Prueba de los Promedios
  - Prueba de la Serie (χ²)
  - Prueba de Frecuencia (χ²)
  - Prueba de Corridas Arriba y Abajo de la Media
  - Prueba de Kolmogorov-Smirnov (K-S)

- **Validación de calidad de números pseudoaleatorios:**  
  Se incluyen herramientas para analizar si los números generados son aptos para simulaciones.

## Tecnologías Utilizadas

- HTML5 + CSS3  
- JavaScript  
- Bootstrap 5.3  

## Instrucciones de Uso

1. Ingresá a la página principal (`index.html`).
2. Seleccioná un **generador** o una **prueba estadística**.
3. Completá los campos solicitados (semilla, iteraciones, valores críticos, etc.).
4. Hacé clic en **"Calcular"** o **"Generar"** para ejecutar el algoritmo.
5. Visualizá los resultados en pantalla.

## Fundamento Matemático

### Generadores

- **Congruencial Aditivo:**
Xₙ = (Xₙ₋₁ + Xₙ₋₂) mod m
- **Congruencial Mixto:**
Xₙ₊₁ = (a · Xₙ + c) mod m
- **Congruencial Multiplicativo:**
Xₙ₊₁ = (a · Xₙ) mod m
- **Parte Central del Cuadrado:** Eleva al cuadrado la semilla y toma los dígitos centrales como nuevo valor.
- **Lehmer:** Variante del multiplicativo que trabaja con precisión de bits: Xₙ₊₁ = (a · Xₙ) mod m


### Pruebas estadísticas

- **Promedios:** Evalúa si la media de los números generados tiende a 0.5.  
- **Serie:** Analiza la independencia de pares sucesivos.  
- **Frecuencia:** Distribuye los valores en intervalos y compara con la distribución uniforme.  
- **Corridas:** Verifica aleatoriedad en secuencias por encima y debajo de la media.  
- **Kolmogorov-Smirnov:** Compara la distribución acumulada empírica con la teórica.

## Estado del Proyecto

Completado ✔️  

Todos los generadores y pruebas funcionan correctamente y han sido validados con datos de ejemplo.

## Descripción de archivos

- **index.html**: Página de inicio con menú hacia los generadores y pruebas.  
- **metodoCongruencialAditivo.html**: Interfaz para el generador congruencial aditivo.  
- **metodoCongruencialMixto.html**: Interfaz para el generador congruencial mixto.  
- **metodoCongruencialMultiplicativo.html**: Interfaz para el generador congruencial multiplicativo.  
- **metodoDeLaParteCentralDelCuadrado.html**: Interfaz para el método de la parte central del cuadrado.  
- **metodoDeLehmer.html**: Interfaz para el generador de Lehmer.  
- **pruebaDeLosPromedios.html**: Interfaz para la prueba estadística de los promedios.  
- **serie.html**: Interfaz para la prueba estadística de la serie (χ²).  
- **frecuencia.html**: Interfaz para la prueba estadística de frecuencia (χ²).  
- **ks.html**: Interfaz para la prueba estadística de Kolmogorov-Smirnov.  
- **corrida.html**: Interfaz para la prueba de corridas arriba y abajo de la media.  
- **functions/congruencialAditivo.js**: Lógica del método congruencial aditivo.  
- **functions/congruencialMixto.js**: Lógica del método congruencial mixto.  
- **functions/congruencialMultiplicativo.js**: Lógica del método congruencial multiplicativo.  
- **functions/parteCentralCuadrado.js**: Lógica del método de la parte central del cuadrado.  
- **functions/lehmer.js**: Lógica del método de Lehmer.  
- **functions/promedios.js**: Prueba estadística de los promedios.  
- **functions/serie.js**: Prueba estadística de la serie (χ²).  
- **functions/frecuencia.js**: Prueba estadística de frecuencia (χ²).  
- **functions/ks.js**: Prueba estadística de Kolmogorov-Smirnov.  
- **functions/corrida.js**: Prueba de corridas arriba y abajo de la media.
- **css/style.css**: Estilos personalizados para inputs, botones y márgenes.  
- **public/calculadora-favicon.png**: Ícono del proyecto visible en la pestaña del navegador.

## Acceso al simulador
Este proyecto está disponible en línea de forma gratuita.
Podés acceder al simulador desde el siguiente enlace:

[Generador de pruebas pseudoaleatorias y pruebas estadísticas](https://simulaciongnape.netlify.app/)

## Equipo de Desarrollo

Este proyecto fue desarrollado por **Facundo Moya**, estudiante de **Ingeniería en Sistemas de Información** de la **Universidad Tecnológica Nacional - Facultad Regional Tucumán (UTN-FRT)**, como trabajo práctico de la materia **Simulación**.

## Gestión del Código

El desarrollo del proyecto se realizó utilizando un flujo de trabajo simple con Git, donde:

- Única rama activa:: `master` (ahora llamada `main` en muchos repositorios)

## Compatibilidad y Diseño

El simulador fue diseñado para ser **responsive** gracias a Bootstrap. Es funcional en cualquier dispositivo, aunque se recomienda el uso en pantallas medianas o grandes para mayor comodidad en formularios y resultados.

## Cómo clonar el repositorio

```bash
git clone https://github.com/facundomoya/gnape.git
