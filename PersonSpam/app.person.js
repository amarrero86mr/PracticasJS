import creacionVentanaPrincipal from "./components/ventanaPrincipal.js";
// vinculacion del html
const root = document.querySelector('.root');


// creacion de header -->
// dentro del Header crear boton de inicio lleva a vista principal
const header = document.createElement('header');
header.className = 'headerPerson';

const logoInicioPerson = document.createElement('a')
logoInicioPerson.className = 'logoInicio'

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

// function creacionVentanaPrincipal () {
// // creacion de vista principal -->
// // cracion de input (habre conversacion con un destinatario o crea un destinatario nuevo)
// // debe mantener el header.

// const vistaPrincipal = document.createElement('div');
// vistaPrincipal.className = 'vistaPincipal';

// // creacion de formulario obligatorio solicitando destinatario
// const formPrincipal = document.createElement('form');
// formPrincipal.className = 'formPrincipal';
// const tituloFromPrincipal = document.createElement('h2');
// tituloFromPrincipal.innerText = 'Nuevo Chat';
// formPrincipal.appendChild(tituloFromPrincipal);

// const divFormPrincipal = document.createElement('fieldset')
// formPrincipal.appendChild(divFormPrincipal);

// const legendFormPrincipal = document.createElement('legend')
// legendFormPrincipal.innerText = 'Destinatario'
// divFormPrincipal.appendChild(legendFormPrincipal)

// const inputFormPrincipal = document.createElement('input')
// inputFormPrincipal.className = 'inputFromPrincipal'
// inputFormPrincipal.placeholder = 'nick del destinatario'
// divFormPrincipal.appendChild(inputFormPrincipal)

// const btnFormPrincipal = document.createElement('button');
// btnFormPrincipal.className = 'btnFromPrincipal';
// btnFormPrincipal.innerText = 'Comenzar Chat'
// divFormPrincipal.appendChild(btnFormPrincipal);

// vistaPrincipal.appendChild(formPrincipal)
//  return vistaPrincipal
// }
divMain.appendChild(creacionVentanaPrincipal())
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
