// creacion de ventana conversaciones -->
// lista las conversaciones ordenadas por fecha crecientemene y enfocando los ultimos chats

// no debe verse en la pantalla principal
function creacionVentanaChat (chat) {
    const listaChat = chat.conversaciones[0].mensajes
    
    const ventanaChat = document.createElement('div')
    ventanaChat.className = "ventanaChat"
    // lista paginada (20 mensajes) voton de mostrar mas (al final)
    //20 mensajes for en cuenta regresiva listando los mensajes de mayor a menor (timestamp)
    for (let i = listaChat.length ;i > listaChat.length - 20; i--) {
        if (listaChat[i]) {
            
            const fecha = new Date(listaChat[i].timestamp);
            const fechaLegible = fecha.toLocaleString('es-AR', { timeStyle: 'short' })
            
            const mesnaje = document.createElement('div');
            mesnaje.id = listaChat[i].id;
            mesnaje.className = listaChat[i].remitenteId;
            
            const textoMsn = document.createElement('p');
            textoMsn.innerText = listaChat[i].texto;
            mesnaje.appendChild(textoMsn)
            
            const fechaMsn = document.createElement('samp');
            fechaMsn.className = "fechaMsn"
            fechaMsn.innerText = fechaLegible
            mesnaje.appendChild(fechaMsn);
            
            ventanaChat.appendChild(mesnaje)
        }
    }
    // con CSS invertimos el orden
    // y mosicionamos mensajes segun id => classname

    return ventanaChat
}

export default creacionVentanaChat;