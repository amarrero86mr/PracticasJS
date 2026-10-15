// ejemplo proporcionado por IA
const chatAppState = { 
  // Lista de conversaciones (Chats individuales o grupales)
  conversaciones: [
    {
      id: "conv_101",
      tipo: "individual", // 'individual' o 'grupo'
      titulo: null,       // Si es grupo, acá va el nombre (ej: "Proyecto Wall-E")
      participantes: ["user_001", "user_002"],
      
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
    }
  ],

  // Diccionario o catálogo de usuarios (evita repetir datos de perfil en cada mensaje)
  usuariosCatalogo: {
    "user_001": { nombre: "Agustín", avatar: "url1" },
    "user_002": { nombre: "Amigo del Robot", avatar: "url2" }
  }
};