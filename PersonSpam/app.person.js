import creacionVentanaPrincipal from "./components/ventanaPrincipal.js";
import creacionNavegador from "./components/navegador.js";
import chatAppState from "./ejemploObjMensaje.js";

// vinculacion del html
const root = document.querySelector('.root');


// creacion de header -->
// dentro del Header crear boton de inicio lleva a vista principal
const header = document.createElement('header');
header.className = 'headerPerson';

const logoInicioPerson = document.createElement('a')
logoInicioPerson.className = 'logoInicio'
logoInicioPerson.addEventListener('click', (e) =>{
    e.preventDefault();
    divMain.innerHTML = '';
    divMain.appendChild(creacionVentanaPrincipal(funcionPrueba))

})

const logoSvg = document.createElement('img')
logoSvg.src = './assets/logoPersonSvg.svg'

const tituloPerson = document.createElement('h2')
tituloPerson.textContent = 'PersonSpam'

logoInicioPerson.appendChild(logoSvg)
header.appendChild(logoInicioPerson)
header.appendChild(tituloPerson)
root.appendChild(header)

// creacion de ventana de vistas de paginas se va a encargar de cambiar las visatas
const divMain = document.createElement('div');
divMain.className = 'divMain'

// funcion de creacionde vista principal
divMain.appendChild(creacionVentanaPrincipal(funcionPrueba))

// funcion de prueba de ventana de prueba
export default function funcionPrueba (nombre) {
        
    divMain.innerHTML = ''
    divMain.appendChild(creacionNavegador(chatAppState))
}

root.appendChild(divMain)
// creacion de navegacion lateral izquierdo -->
// lista los destinatarios (orden ultima interacion) y su ultimo mensaje
// al clickear elemento en la lista debe mostrar la conversacion en ventana de conversacion
// no debe cargarse chats con la vista proncipal - puede verse vacia

// creacion de ventana conversaciones -->
// lista las conversaciones ordenadas por fecha crecientemene y enfocando los ultimos chats
// no debe verse en la pantalla principal

// creacion de input mensaje -->
// input para escribir mensaje (evio con tecla enter o bonton)
// boton de envio de mensaje
// no debe verse en la pantalla principal
