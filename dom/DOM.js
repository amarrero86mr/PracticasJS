/* 
    TAREA:
crear una vista que contenga 3 elementos
un elemento donde se pueda visualizar un número ( por defecto 0 )
un btn con el signo de resta que al hacerle click, reste 1 al número visible
un btn con el signo de suma que al hacerle click, sume 1 al número visible
*/

const numero = document.querySelector('.numero');

const number = document.createElement('h2');
number.textContent = '0';
numero.appendChild(number);

const root = document.querySelector('.root');
root.setAttribute('style', 'display: flex; gap: 10px; margin-top: 20px;');
const botonSuma = document.createElement('button');
botonSuma.textContent = '+';
botonSuma.addEventListener('click', () => {
    number.textContent = parseInt(number.textContent) + 1;
    if (parseInt(number.textContent) > 14) {
        mensajeError(parseInt(number.textContent));
    }
});
root.appendChild(botonSuma);

const botonResta = document.createElement('button');
botonResta.textContent = '-';
botonResta.addEventListener('click', () => {
    number.textContent = parseInt(number.textContent) - 1;
    if (parseInt(number.textContent) < 0) {
        mensajeError(parseInt(number.textContent));
    }
});
root.appendChild(botonResta);

function mensajeError(num) {
    if (num < 0) {
        mensaje.textContent = 'dejemos los negativos para otro momento';
    } else if (num > 14) {
        mensaje.textContent = 'no son muchos numeritos?';
    }
    mensaje.removeAttribute('hidden');
    setTimeout(() => {
        mensaje.setAttribute('hidden', true)
        if (num < 0) {
            number.textContent = '0';
        }
    }, 1200);
}

const mensaje = document.createElement('p');
mensaje.setAttribute('hidden', true);
mensaje.setAttribute('style', 'color: red');
root.appendChild(mensaje);

// pequeño juedo de adivinanza de numeros 

 const divAdivina = document.querySelector('.adivina');
divAdivina.setAttribute('style', 'margin-top: 20px; display: flex; flex-direction: column; align-items: start; gap: 10px;');
const tituloAdivina = document.createElement('h2');
tituloAdivina.textContent = 'Adivina el numero entre 1 y 10';
divAdivina.appendChild(tituloAdivina);
let numeroAdivinar = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const inputAdivina = document.createElement('input');
inputAdivina.setAttribute('type', 'number');
inputAdivina.setAttribute('min', '1');
inputAdivina.setAttribute('max', '10');
divAdivina.appendChild(inputAdivina);

const butonProbarAdivina = document.createElement('button');
butonProbarAdivina.textContent = 'probar';
butonProbarAdivina.addEventListener('click', () => {
    const valorInput = parseInt(inputAdivina.value);
    intentos++;
    if (valorInput === numeroAdivinar) {
        resultadoAdivina.textContent = '¡Correcto! Has adivinado el número en ' + intentos + ' intentos.';
        intentos = 0; // Reiniciar intentos para la próxima ronda
    } else if (valorInput < numeroAdivinar) {
        resultadoAdivina.textContent = 'Demasiado bajo. Intenta de nuevo.';
    } else if (valorInput > numeroAdivinar) {
        resultadoAdivina.textContent = 'Demasiado alto. Intenta de nuevo.';
    } else {
        resultadoAdivina.textContent = 'Por favor, ingresa un número válido entre 1 y 10. y cuenta como intento 😆';
    }
    
});
divAdivina.appendChild(butonProbarAdivina);


const butonResetNumero = document.createElement('button');
butonResetNumero.textContent = 'resetea el numero a adivinar';
butonResetNumero.addEventListener('click', () => {
    numeroAdivinar = Math.floor(Math.random() * 10) + 1;
    resultadoAdivina.textContent = '';
});
divAdivina.appendChild(butonResetNumero);

const resultadoAdivina = document.createElement('p');
divAdivina.appendChild(resultadoAdivina);

