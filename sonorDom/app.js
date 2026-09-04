import aplicarEfectoRobot from "./aplicarEfectoRobot.js";
import aplicarCadenaDaftPunk from "./dafta.js";

let mediaRecorder;
let audioChunks = [];
let audioBlob;

const btnGrabar = document.getElementById('btnGrabar');
const btnDetener = document.getElementById('btnDetener');
const btnReproducir = document.getElementById('btnReproducir');

// Inicializar micrófono al cargar la página
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

        mediaRecorder.onstop = () => {
            audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            audioChunks = [];
            btnReproducir.disabled = false;
        };
    });

btnGrabar.onclick = () => {
    mediaRecorder.start();
    btnGrabar.disabled = true;
    btnDetener.disabled = false;
    btnReproducir.disabled = true;
};

btnDetener.onclick = () => {
    mediaRecorder.stop();
    btnGrabar.disabled = false;
    btnDetener.disabled = true;
};

// Procesar y reproducir al presionar el botón
btnReproducir.onclick = async () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const arrayBuffer = await audioBlob.arrayBuffer();
    const decodedBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Muestras pudas del canal 0 (Float32Array)
    const inputSamples = decodedBuffer.getChannelData(0);
    const sampleRate = decodedBuffer.sampleRate;

    // Llama a la función global disponible gracias a audio-effects.js
    //   const outputSamples = aplicarEfectoRobot(inputSamples, sampleRate, 250);

    // alternativa dafta aplicarCadenaDaftPunk()
    const outputSamples = aplicarCadenaDaftPunk(inputSamples, sampleRate)

    // Crear AudioBuffer para reproducción
    const processedBuffer = audioCtx.createBuffer(1, outputSamples.length, sampleRate);
    processedBuffer.copyToChannel(outputSamples, 0);

    const source = audioCtx.createBufferSource();
    source.buffer = processedBuffer;
    source.connect(audioCtx.destination);
    source.start();
};

const formTextVoz = document.getElementById('formTextVoz');
const inpTexVoz = document.getElementById('inpTexVoz');
inpTexVoz.type = 'text';
const btnTexVoz = document.getElementById('btnTexVoz');

formTextVoz.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    let texVoz = data.get("texto");

    if (texVoz.trim() === "") {
        texVoz = "ser humano arrogante! escrive algo"
    }
    //console.log(texVoz);

    // 1. Crear el mensaje
    const mensaje = new SpeechSynthesisUtterance(texVoz);

    // 2. Ajustar parámetros
    mensaje.voice = speechSynthesis[3]; // Lista de 4 tipos de voces, depende del SO
    mensaje.lang = "es-MX"; // Idioma (ej: "es-AR", "es-ES", "en-US")
    mensaje.pitch = 1.2;    // Tono (0 a 2)
    mensaje.rate = 0.9;     // Velocidad (0.1 a 10)

    // 3. Reproducir por los parlantes segun SO
    //window.speechSynthesis.speak(mensaje);
    const nuevaVoz = speechSynthesis.speak(mensaje);
});