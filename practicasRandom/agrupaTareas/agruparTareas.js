// Ejemplo de uso:
// agruparTareasPorEstado(tareasProyecto);
// Esperado: { 
//   pendiente: ["Diseñar Base de Datos", "Configurar Servidor"], 
//   "en progreso": ["Crear API en Express"] 
// }


const tareasProyecto = [
    { titulo: "Diseñar Base de Datos", estado: " PENDIENTE " },
    { titulo: "Crear API en Express", estado: "en progreso" },
    { titulo: "Configurar Servidor", estado: "PENDIENTE" }
];

function agruparTareasPorEstado(listaTareas) {
    const listEstados = Object.groupBy(listaTareas, (tarea) => tarea.estado.trim().toLowerCase());

    return listEstados
}

const agrupados = agruparTareasPorEstado(tareasProyecto)

console.log(agrupados)
