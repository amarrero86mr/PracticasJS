// creacion de input mensaje -->
// input para escribir mensaje (evio con tecla enter o bonton)
// boton de envio de mensaje
// no debe verse en la pantalla principal

import cambioVenta from "../app.person.js";

// deve recivir cllback para modificar chat
function creacionCasillaMsn (chat, chatSelected, destinatario, setStorage, guardarMensaje, ) {

    const formMsn = document.createElement('form');
    formMsn.className = 'formMsn'

    const casillaMensaje = document.createElement('textarea');
    casillaMensaje.className = 'casillaMensaje';
    // casillaMensaje.type = 'text'
    const btnEnviar = document.createElement('button');
    btnEnviar.className= 'btnEnviar';
    btnEnviar.type = 'submit';
    const btnImg = document.createElement('img')
    btnImg.src = './assets/flecha.svg'
    btnEnviar.appendChild(btnImg)

    formMsn.appendChild(casillaMensaje);
    formMsn.appendChild(btnEnviar)

    formMsn.addEventListener('submit', (e)=>{
        e.preventDefault();
        //funcion callback modificar chat

        let msn = casillaMensaje.value;
        if (msn.trim() === '') return

        guardarMensaje(chat, chatSelected, destinatario, msn, setStorage);
        casillaMensaje.value = '';

         cambioVenta(destinatario)
    })

    return formMsn
}

export default creacionCasillaMsn;