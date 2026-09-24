/* 
.reduce()
Ejercicio 3.1: Promedio de notas

Método: .reduce()

Qué debe hacer la función: Devolver el promedio final (número) redondeado o exacto de todas las notas.

Argumento que recibe: Un array de números (notas). Ej: [7, 8, 9, 10]
*/
const notas = [7, 8, 9, 10,6];

function promediar (notas) {
    const acum = notas.reduce((acc,nota)=> acc+nota)
    const promedio = Math.round(acum/(notas.length));
    return promedio
}
const promedio = promediar(notas)
console.log(promedio)


/* 

Ejercicio 3.2: Balance total de caja

Método: .reduce()

Qué debe hacer la función: Devolver la suma total de dinero ingresado considerando el tipo de movimiento (ingreso suma, egreso resta).

Argumento que recibe: Un array de objetos con las claves monto y tipo. Ej: [{ monto: 1000, tipo: "ingreso" }, { monto: 400, tipo: "egreso" }]
*/
const ingresoEgreso = [
    { monto: 1000, tipo: "ingreso" },
    { monto: 400, tipo: "egreso" },
    { monto: 650, tipo: "egreso" }
];

function balance (movimiento) {
    const total = movimiento.reduce((acc, mov)=> 
        acc + (mov.tipo == "egreso" ? mov.monto*-1 : mov.monto), 0);
    return total
}
const balanceTotal = balance(ingresoEgreso)
console.log(balanceTotal)

