import creacionVentanaPrincipal from "./components/ventanaPrincipal.js";
import creacionNavegador from "./components/navegador.js";
import chatAppState from "./ejemploObjMensaje.js";
import creacionVentanaChat from "./components/ventanaChat.js";
import creacionCasillaMsn from "./components/mensajear.js";
import getStorage from "./functions/storage.function.js";
import selectedDestinatario from "./functions/chatSelect.function.js";
import setStorage from "./functions/setStorage.function.js";

const datosPersonSpam = getStorage();
console.log(datosPersonSpam)
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
    divMain.appendChild(creacionVentanaPrincipal(cambioVenta))
    divMain.style.display = "inherit";
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
divMain.appendChild(creacionVentanaPrincipal(cambioVenta))

// funcion de prueba de ventana de prueba
export default function cambioVenta (nombre) {
    
    const destinatario = selectedDestinatario(datosPersonSpam, nombre, setStorage)
    
    divMain.innerHTML = ''
    divMain.appendChild(creacionNavegador(datosPersonSpam, destinatario))
    
    divMain.appendChild(creacionVentanaChat(datosPersonSpam, destinatario, creacionCasillaMsn))
    divMain.style.display = 'flex';
}

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

root.appendChild(divMain)

// functions en ./functions -> almacenamiento de chats
// - function "getStorage" traer del localStorage el objChat ->temporalChat
// - function "compareDestin" comprar existencias destinatario en pantalla principal
// si es nuevo, cargarlo en futura funcion de guardado y pasar destinatario
// si existe, pasar destinatario
// - no funcion, pasas los datos temporales de temporalChat a creacionNavegador
// - no funcion, pasar los datos del nuevo destinatario o ultimo destinatario a la ventana de chat
// function "setStorage" guardado de los datos temporalChat