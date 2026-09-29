/* 
.find()
Ejercicio 2.1

Método: .find()

Qué debe hacer la función: Encontrar y devolver el primer número que sea mayor a 50.

Argumento que recibe: Un array de números. Ej: [10, 25, 60, 45, 80]
*/
const numeros = [10, 25, 60, 45, 80, 55];

function mayorCincuenta(num) {
    return num.find(n => n > 50)
};
const masCincuenta = mayorCincuenta(numeros);
console.log(masCincuenta);

/* 
Ejercicio 2.2

Método: .find()

Qué debe hacer la función: Encontrar y devolver el objeto del producto cuyo id coincida con el buscado (ej: id 3).

Argumento que recibe: Un array de objetos con las claves id y nombre. Ej: [{ id: 1, nombre: "Mouse" }, { id: 3, nombre: "Teclado" }, { id: 5, nombre: "Monitor" }]
*/
const prod = [
    { id: 1, nombre: "Mouse" },
    { id: 3, nombre: "Teclado" },
    { id: 5, nombre: "Monitor" }
];
const id = 3;

function BusquedaId (productos, idBuscado) {
    return productos.find(p => p.id === idBuscado)
};
const productoEncontrado = BusquedaId(prod, id);
console.log(productoEncontrado);