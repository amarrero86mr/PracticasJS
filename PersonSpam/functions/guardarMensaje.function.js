import chatAppState from "../ejemploObjMensaje"


function gurdarMensaje (/*chat */ destinatario, msn) {
    //luego remplazaremos chatAppState por lo pasado
    const hayDestinatario = chatAppState.conversaciones.some(a => a.nombre === destinatario)

    if (!hayDestinatario) {
        
    }

}