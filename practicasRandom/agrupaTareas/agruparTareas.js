// Ejemplo de uso:
// agruparTareasPorEstado(tareasProyecto);
// Esperado: { 
//   pendiente: ["Diseñar Base de Datos", "Configurar Servidor"], 
//   "en progreso": ["Crear API en Express"] 
// }


const tareasProyecto = [
    { titulo: "Diseñar Base de Datos", estado: " PENDIENTE " },
    { titulo: "Crear API en Express", estado: "en progreso" },
    { titulo: "Configurar Servidor", estado: "PENDIENTE" },
    { titulo: "diseñar views client", estado: "finalizado" }
];

function agruparTareasPorEstado(listaTareas) {
    const listaEstados = {};
    
    listaTareas.forEach(tarea => {
        const est = tarea.estado.trim().toLowerCase();
        
        // Corregido: verificamos en el acumulador (listaEstados)
        if (!listaEstados[est]) {
            listaEstados[est] = [];
        }
        //en vez de if
        // listaEstados[est] = listaEstados[est] || []
        
        listaEstados[est].push(tarea.titulo);
    });

    return listaEstados;
}

const agrupados = agruparTareasPorEstado(tareasProyecto)

console.log(agrupados)
