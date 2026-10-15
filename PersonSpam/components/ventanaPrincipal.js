import funcionPrueba from "../app.person.js";

function creacionVentanaPrincipal(funcionPrueba) {
    // creacion de vista principal -->
    // cracion de input (habre conversacion con un destinatario o crea un destinatario nuevo)
    // debe mantener el header.

    const vistaPrincipal = document.createElement('div');
    vistaPrincipal.className = 'vistaPincipal';

    // creacion de formulario obligatorio solicitando destinatario
    const formPrincipal = document.createElement('form');
    formPrincipal.className = 'formPrincipal';
    const tituloFromPrincipal = document.createElement('h2');
    tituloFromPrincipal.innerText = 'Nuevo Chat';
    formPrincipal.appendChild(tituloFromPrincipal);

    const divFormPrincipal = document.createElement('fieldset')
    formPrincipal.appendChild(divFormPrincipal);

    const legendFormPrincipal = document.createElement('legend')
    legendFormPrincipal.innerText = 'Destinatario'
    divFormPrincipal.appendChild(legendFormPrincipal)

    const inputFormPrincipal = document.createElement('input')
    inputFormPrincipal.className = 'inputFromPrincipal'
    inputFormPrincipal.placeholder = 'nick del destinatario'
    divFormPrincipal.appendChild(inputFormPrincipal)

    const btnFormPrincipal = document.createElement('button');
    btnFormPrincipal.className = 'btnFromPrincipal';
    btnFormPrincipal.innerText = 'Comenzar Chat'
    btnFormPrincipal.type = 'submit';
    divFormPrincipal.appendChild(btnFormPrincipal);

    vistaPrincipal.appendChild(formPrincipal)
    
    formPrincipal.addEventListener('click', (e) =>{
        e.preventDefault();

        const destinatario = inputFormPrincipal.value.trim()
        if (!destinatario || destinatario === ''){ return }

        funcionPrueba(destinatario);
    })
    
    
    
    
    return vistaPrincipal
}

export default creacionVentanaPrincipal;