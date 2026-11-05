// creacion de input mensaje -->
// input para escribir mensaje (evio con tecla enter o bonton)
// boton de envio de mensaje
// no debe verse en la pantalla principal

// deve recivir cllback para modificar chat
function creacionCasillaMsn () {

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

    formMsn.addEventListener('click', (e)=>{
        e.preventDefault();
        //funcion callback modificar chat

    })

    return formMsn
}

export default creacionCasillaMsn;