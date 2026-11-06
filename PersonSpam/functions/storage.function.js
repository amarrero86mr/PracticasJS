
// traer los datos del localStorage

function getStorage() {
  const datosGuardados = localStorage.getItem("personSpam");
  
  if (datosGuardados) {
    return JSON.parse(datosGuardados);
  }

  // Devolvés la estructura base, pero sin chats cargados
  return {
    conversaciones: [],
    usuariosCatalogo: {}
  };
}
export default getStorage;