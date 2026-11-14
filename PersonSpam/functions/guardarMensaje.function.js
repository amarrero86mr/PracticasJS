

function guardarMensaje(chat, chatSelected, destinatario, msn, setStorage, remitente = "user_001") {
    //luego remplazaremos chatAppState por lo pasado
    const hayDestinatario = chat.conversaciones.some(a => a.nombre === destinatario)

    if (!hayDestinatario) {
        // console.log('destinatario: ', destinatario, ' , no encontrado');
        return
    }
    //chatAppState y convesaciones se eliminaran, les sera pasado una parte del chat
    const ids = Object.keys(chat.conversaciones[chatSelected].mensajes);

    let nuevoIdMsg = "msg_002";
    if (ids.length > 0) {

        const ultimoId = ids[ids.length - 1]; // 
        const numeroActual = parseInt(ultimoId.replace("msg_", ""), 10);
        const siguienteNumero = numeroActual + 1;

        const numeroFormateado = String(siguienteNumero).padStart(3, '0');

        nuevoIdMsg = `msg_${numeroFormateado}`;
    }

    

    const timestampActual = Date.now()
    const nuevoMensaje = {
        id: nuevoIdMsg,
        remitenteId: remitente,
        texto: msn,
        timestamp: timestampActual,
    }

    chat.conversaciones[chatSelected].mensajes.push(nuevoMensaje)
    chat.conversaciones[chatSelected].ultimoMensaje = {
        texto: msn,
        timestamp: timestampActual,
        remitenteId: remitente
    }

    
    setStorage(chat)
}
export default guardarMensaje;