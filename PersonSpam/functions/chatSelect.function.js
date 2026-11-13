
function nuevoDestinatario(chat, destinatario, setStorage) {

    const ids = Object.keys(chat.usuariosCatalogo);

    let nuevoId = "user_002";
    let nuevoConvId = ""
    if (ids.length > 0) {

        const ultimoId = ids[ids.length - 1]; // 
        const numeroActual = parseInt(ultimoId.replace("user_", ""), 10);
        const siguienteNumero = numeroActual + 1;

        const numeroFormateado = String(siguienteNumero).padStart(3, '0');

        nuevoId = `user_${numeroFormateado}`;
        nuevoConvId = `conv_${numeroFormateado}`;
        
    }

    chat.usuariosCatalogo[nuevoId] = {
        nombre: destinatario,
        avatar: `https://robohash.org/${nuevoId}`,
    };
    const nuevaConv = {
        id: nuevoConvId,
        destinatario: nuevoId,
        nombe: destinatario,
        avatar: `https://robohash.org/${nuevoId}`,
        ultimoMensaje: [],
        mensajes: [],
    }
    chat.conversaciones[chat.conversaciones.length] = nuevaConv;
    
    //por motivos de practica de funciones y desarrollo comentamos la siguiente linea
    //setStorage(chat);
    return nuevoId;
}


function selectedDestinatario(chat, destinatario, setStorage) {

    // si el nombre conicide, devuelvo chat talcual y nombre
    const existDestinatario = Object.entries(chat.usuariosCatalogo).some(usuario => usuario[1].nombre === destinatario)

    if (!existDestinatario) {
        // si no guardo una nueva conversacion sin mensaje, devuelvo chat y nombre
        const nombe = nuevoDestinatario(chat, destinatario, setStorage)
        return nombe;
    }
    return destinatario;
}

export default selectedDestinatario;