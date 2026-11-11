
function nuevoDestinatario(chat, destinatario) {

    const ids = Object.keys(chat.usuariosCatalogo);

    let nuevoId = "user_002";
    if (ids.length > 0) {

        const ultimoId = ids[ids.length - 1]; // 
        const numeroActual = parseInt(ultimoId.replace("user_", ""), 10);
        const siguienteNumero = numeroActual + 1;

        const numeroFormateado = String(siguienteNumero).padStart(3, '0');

        nuevoId = `user_${numeroFormateado}`;
    }

    chat.usuariosCatalogo[nuevoId] = {
        nombre: destinatario,
        avatar: `https://robohash.org/${nuevoId}`
    };

    
    return nuevoId;
}


function selectedDestinatario(chat, destinatario) {

    // si el nombre conicide, devuelvo chat talcual y nombre
    const existDestinatario = Object.entries(chat.usuariosCatalogo).some(usuario => usuario[1].nombre === destinatario)

    if (!existDestinatario) {
        // si no guardo una nueva conversacion sin mensaje, devuelvo chat y nombre
        const nombe = nuevoDestinatario(chat, destinatario)
        return nombe;
    }
    return destinatario;
}

export default selectedDestinatario;