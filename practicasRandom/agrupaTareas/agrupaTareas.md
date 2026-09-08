## Agrupador de Tareas por Estado (Kanban / To-Do)
(Enfocado en estructuración de datos y normalización)

Crear una función llamada agruparTareasPorEstado que reciba 1 argumento:
* listaTareas (Array de Objetos): Cada objeto tiene el titulo de la tarea y su estado ("pendiente", "en progreso", "finalizado").

La función debe corregir la propiedad estado aplicando .trim() y .toLowerCase(), y devolver un nuevo objeto donde las claves sean los estados normalizados y el valor sea un array con los títulos de las tareas.

```javascript
function agruparTareasPorEstado(listaTareas) {
    // ... tu código
}

const tareasProyecto = [
    { titulo: "Diseñar Base de Datos", estado: " PENDIENTE " },
    { titulo: "Crear API en Express", estado: "en progreso" },
    { titulo: "Configurar Servidor", estado: "PENDIENTE" }
];

// Ejemplo de uso:
// agruparTareasPorEstado(tareasProyecto);
// Esperado: { 
//   pendiente: ["Diseñar Base de Datos", "Configurar Servidor"], 
//   "en progreso": ["Crear API en Express"] 
// }
```

* *BONUS:* Si un estado no existe todavía en el objeto resultado, inicializalo como un array vacío antes de hacer el .push().

>*TIP:* Para transformar los valores podés usar texto.toLowerCase().trim(). Podés resolverlo con .reduce() o con un bucle .forEach().