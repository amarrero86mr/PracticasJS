function aplicarHighPass(audioBuffer, sampleRate, cutoff = 230) {
  const resultado = new Float32Array(audioBuffer.length);
  const RC = 1.0 / (2 * Math.PI * cutoff), dt = 1.0 / sampleRate, alpha = RC / (RC + dt);
  let lastIn = 0, lastOut = 0;
  for (let i = 0; i < audioBuffer.length; i++) {
    resultado[i] = alpha * (lastOut + audioBuffer[i] - lastIn);
    lastIn = audioBuffer[i]; lastOut = resultado[i];
  }
  return resultado;
}

function aplicarEfectoRobot(audioBuffer, sampleRate, freqRobot = 300) {
  const largo = audioBuffer.length;
  const resultado = new Float32Array(largo);

  for (let i = 0; i < largo; i++) {
    const t = i / sampleRate;
    // Generamos la onda portadora senoidal pura mediante matemática
    const portadora = Math.sin(2 * Math.PI * freqRobot * t);
    resultado[i] = audioBuffer[i] * portadora;
  }

  return resultado;
}

function aplicarCompresion(audioBuffer, umbral = 0.2) {
  const resultado = new Float32Array(audioBuffer.length);
  for (let i = 0; i < audioBuffer.length; i++) {
    let s = audioBuffer[i];
    if (s > umbral) s = umbral + (s - umbral) * 0.1;
    else if (s < -umbral) s = -umbral + (s + umbral) * 0.1;
    resultado[i] = s * 2.5; // Gain boost tras comprimir
  }
  return resultado;
}

function aplicarBoostAgudos(audioBuffer, sampleRate) {
  const resultado = new Float32Array(audioBuffer.length);
  const alpha = 0.8; // Factor de acentuación de agudos original 0.6
  for (let i = 1; i < audioBuffer.length; i++) {
    resultado[i] = audioBuffer[i] + alpha * (audioBuffer[i] - audioBuffer[i - 1]);
  }
  return resultado;
}

function aplicarPhaser(audioBuffer, sampleRate, rate = 0.5, depth = 0.002) {
  const resultado = new Float32Array(audioBuffer.length);
  for (let i = 0; i < audioBuffer.length; i++) {
    const delayMuestras = Math.floor((Math.sin(2 * Math.PI * rate * (i / sampleRate)) + 1) * depth * sampleRate);
    const muestraPrev = (i >= delayMuestras) ? audioBuffer[i - delayMuestras] : 0;
    resultado[i] = (audioBuffer[i] + muestraPrev * 0.7) * 0.7;
  }
  return resultado;
}

function aplicarCadenaDaftPunk(inputSamples, sampleRate) {
  // 1. Filtrado de graves para limpiar cuerpo (High-Pass ~230Hz)
  let paso1 = aplicarHighPass(inputSamples, sampleRate, 230);

  // 2. Modulación Robótica Base (Ring Modulator limpio a 330Hz)
  let paso2 = aplicarEfectoRobot(paso1, sampleRate, 330);

  // 3. Compresión Fuerte (Sonido monótono aplanado)
  let paso3 = aplicarCompresion(paso2, 0.15);

  // 4. Boost de presencia/brillo (2.5kHz+)
  let paso4 = aplicarBoostAgudos(paso3, sampleRate);

  // 5. Phaser Sutil (Movimiento metálico)
  let resultadoFinal = aplicarPhaser(paso4, sampleRate);

  return resultadoFinal;
}

export default aplicarCadenaDaftPunk;