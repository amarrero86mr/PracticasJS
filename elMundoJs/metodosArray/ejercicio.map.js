/*  
Ejercicio 1.1: Precios con descuento

Método: .map()

Qué debe hacer la función: Devolver un nuevo array con todos los precios con un 15% de descuento aplicado.

Argumento que recibe: Un array de números (precios). Ej: [100, 200, 300]

Ejercicio 1.2: Formateador de nombres de usuario

Método: .map()

Qué debe hacer la función: Devolver un nuevo array de strings con el formato "Usuario: [nombre] ([rol])".

Argumento que recibe: Un array de objetos con las claves nombre y rol. Ej: [{ nombre: "Ana", rol: "admin" }, { nombre: "Pedro", rol: "user" }] */

//ejercicio 1.1.map()
const precios = [100, 200, 300];

function aplicarDescuento(precios, descuento = 15) {
    return precios.map(a => 
            a * (1 - descuento / 100));
};

const preciosConDescuento = aplicarDescuento(precios);
console.log(preciosConDescuento)

//ejercicio 1.2.map()
const empleados = [{ nombre: "Ana", rol: "admin" }, { nombre: "Pedro", rol: "user" }]

function listaFromateada (empleados){
    return empleados.map(a => 
       `Usuario: ${a.nombre} (${a.rol})`
    )
    
}
const ListaEmpladosFormateados = listaFromateada(empleados)
console.log(ListaEmpladosFormateados)
