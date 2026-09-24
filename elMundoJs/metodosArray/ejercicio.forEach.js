/* 
Ejercicio 2.1: Notificador de saldos

Método: .forEach()

Qué debe hacer la función: Imprimir por consola el mensaje "Cuenta N° [índice + 1]: $[monto]" por cada elemento del array. La función no debe retornar nada.

Argumento que recibe: Un array de números (saldos). Ej: [1500, 0, 4300]
*/

const saldos = [1500, 0, 4300];

function notificarSaldos(saldos) {
    saldos.forEach((element, index) => {
        console.log(`Cuenta Nº ${index + 1}: $ ${element}`)
    });
}
notificarSaldos(saldos);

/* 
Ejercicio 2.2: Generador de reportes de stock

Método: .forEach()

Qué debe hacer la función: Imprimir por consola "[producto]: Quedan [cantidad] unidades" si la cantidad es mayor a 0, o "[producto]: SIN STOCK" si la cantidad es 0. La función no debe retornar nada.

Argumento que recibe: Un array de objetos con las claves producto y cantidad. Ej: [{ producto: "Teclado", cantidad: 5 }, { producto: "Mouse", cantidad: 0 }]
*/

const productos = [{ producto: "Teclado", cantidad: 5 }, { producto: "Mouse", cantidad: 0 }, { producto: "auricular", cantidad: 0 }]

function listarProductos(productos) {
    productos.forEach((item) => {
        const quedan = item.cantidad ? 'quedan: ' + item.cantidad + ' unidades.' : 'SIN STOCK';
        console.log(`${item.producto}: ${quedan} `)
    })
}
listarProductos(productos);