/* 
.some()
Ejercicio 4.1

Método: .some()

Qué debe hacer la función: Retornar true si al menos un número es negativo, o false en caso contrario.

Argumento que recibe: Un array de números. Ej: [5, 12, -3, 8]
*/
const numeros = [5, 12, 0, 8];

function negativeNum(num) {
    return num.some(n => n < 0)
};
const negativo = negativeNum(numeros);
console.log(negativo);


/* 
Ejercicio 4.2

Método: .some()

Qué debe hacer la función: Retornar true si al menos una tarea figura con completada: true.

Argumento que recibe: Un array de objetos con las claves tarea y completada. Ej: [{ tarea: "Comprar pan", completada: false }, { tarea: "Estudiar JS", completada: true }]
*/
const tareas = [
    { tarea: "Comprar pan", completada: false },
    { tarea: "Estudiar JS", completada: true },
    { tarea: "Pasear al perro", completada: false }
];
function hayUnCompletado(tar) {
    return tar.some(t => t.completada === true)
};
const completo = hayUnCompletado(tareas);
console.log(completo);