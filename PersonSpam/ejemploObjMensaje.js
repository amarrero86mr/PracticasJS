// ejemplo proporcionado por IA
const chatAppState = {
  // Lista de conversaciones (Chats individuales o grupales)
  conversaciones: [
    {
      id: "conv_101",
      // tipo: "individual", // 'individual' o 'grupo'
      // titulo: null,       // Si es grupo, acá va el nombre (ej: "Proyecto Wall-E")
      // participantes: ["user_001", "user_002"],
      destinatario: "user_002",
      nombre: "Amigo del Robot",
      avatar: "https://robohash.org/",

      // Metadatos para la UI (para mostrar el último mensaje rápido sin cargar todo)
      ultimoMensaje: {
        texto: "¡Dale, nos vemos en un rato!",
        timestamp: 1727731200000,
        remitenteId: "user_002"
      },

      // Lista de mensajes de esta conversación específica
      mensajes: [
        {
          id: "msg_901",
          remitenteId: "user_001",
          texto: "¿Viste cómo quedó el filtro de audio?",
          timestamp: 1727731100000,
          leido: true
        },
        {
          id: "msg_902",
          remitenteId: "user_002",
          texto: "¡Dale, nos vemos en un rato!",
          timestamp: 1727731200000,
          leido: false
        }
      ]
    },
    {
      id: "conv_102",
      destinatario: "user_003",
      nombre: "clar kent (soy superman)",
      avatar: "https://robohash.org/",

      
      ultimoMensaje: {
        texto: "y no sabes quien aparecio... lex",
        timestamp: 1727731202222,
        remitenteId: "user_003"
      },

      // Lista de mensajes de esta conversación específica
      mensajes: [
        {
          id: "msg_903",
          remitenteId: "user_001",
          texto: "entonces estaba reporteando con bruce, y??",
          timestamp: 1727731102211,
          leido: true
        },
        {
          id: "msg_904",
          remitenteId: "user_003",
          texto: "y no sabes quien aparecio... lex",
          timestamp: 1727731202222,
          leido: false
        }
      ]
    }
  ],

  // Diccionario o catálogo de usuarios (evita repetir datos de perfil en cada mensaje)
  usuariosCatalogo: {
    "user_001": { nombre: "Agustín", avatar: "url1" },
    "user_002": { nombre: "Amigo del Robot", avatar: "url2" },
    "user_003": { nombre: "clar kent", avatar: "url3" }
  }
};

export default chatAppState;


// const timestamp = 1792639837075;
// const fecha = new Date(timestamp);
// const fechaAhora = new Date().toLocaleString('es-AR', {dateStyle: 'medium'})
// console.log(fechaAhora.valueOf())
// if (fecha.toLocaleString('es-AR', {dateStyle: 'medium'}) == fechaAhora) {
//   const fechaLegible = fecha.toLocaleString('es-AR', {timeStyle:'short'})
//   // console.log(fechaLegible)

// } else {
//   const fechaLegible = fecha.toLocaleString('es-AR', {
//   dateStyle: 'medium', // Muestra la fecha (ej: 30 sept 2024)
//   timeStyle: 'short'   // Muestra la hora (ej: 10:40)
// });
//   // console.log(fechaLegible)
// }


