
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

export default aplicarEfectoRobot;