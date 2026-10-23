// creacion de navegacion lateral izquierdo -->
// lista los destinatarios (orden ultima interacion) y su ultimo mensaje
// al clickear elemento en la lista debe mostrar la conversacion en ventana de conversacion
// no debe cargarse chats con la vista proncipal - puede verse vacia
const fechaAhora = new Date().toLocaleString('es-AR', { dateStyle: 'medium' })


function creacionNavegador(chatApp) {

    const nav = document.createElement('div');
    nav.className = 'navegador';

    // creacion de lista de conversaciones


    const lisatasId = chatApp.conversaciones.toSorted((a, b) => b.ultimoMensaje.timestamp - a.ultimoMensaje.timestamp)

    lisatasId.forEach(chat => {

        // manejo de fechas
        let fechaLegible;
        const fecha = new Date(chat.ultimoMensaje.timestamp);

        if (fecha.toLocaleString('es-AR', { dateStyle: 'medium' }) == fechaAhora) {
            fechaLegible = fecha.toLocaleString('es-AR', { timeStyle: 'short' })
        } else {
            fechaLegible = fecha.toLocaleString('es-AR', {
                dateStyle: 'short' 
            });
            // console.log(fechaLegible)
        }



        const chatLink = document.createElement('div');
        chatLink.id = chat.id;
        chatLink.innerHTML = `
            <div>
            <img src="${chat.avatar}${chat.destinatario}.png" alt="avatar de ${chat.nombre} width="1.5rem">
            <h3>${chat.nombre}</h3>
            </div>
            <div>
            <p>${chat.ultimoMensaje.texto}</p>
            <spam>${fechaLegible}</spam>
            </div>
        `;

        nav.appendChild(chatLink)
    });

    return nav
}

export default creacionNavegador;