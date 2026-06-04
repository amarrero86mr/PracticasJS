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
