/* 
.findIndex()
Ejercicio 3.1

Método: .findIndex()

Qué debe hacer la función: Devolver el índice del primer elemento que sea un string vacío "".

Argumento que recibe: Un array de strings. Ej: ["hola", "mundo", "", "javascript"]
*/
const palabras = ["hola", "mundo", "", "javascript"];

function posVacio(pal) {
    return pal.findIndex(a => a.trim() === "")
};
const posicion = posVacio(palabras)
console.log(posicion);
/* 
Ejercicio 3.2

Método: .findIndex()

Qué debe hacer la función: Devolver el índice del primer usuario que no tenga stock (stock === 0).

Argumento que recibe: Un array de objetos con las claves item y stock. Ej: [{ item: "A", stock: 10 }, { item: "B", stock: 0 }, { item: "C", stock: 5 }]
*/
const stock = [
    { item: "A", stock: 10 },
    { item: "B", stock: 20 },
    { item: "C", stock: 0 },
    { item: "D", stock: 5 },
];
function stockVacio(inv) {
    return inv.findIndex(i => i.stock === 0)
};
const itemVacio = stockVacio(stock)
console.log(itemVacio);