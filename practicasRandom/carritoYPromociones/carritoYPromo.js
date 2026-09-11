// Ejemplo de uso:
// obtenerProductosSugeridos(catalogo, 2);
// Esperado: [ 
//   { nombre: "Mouse Gamer", precio: 15000, categoria: "tecnologia", disponible: true }, 
//   { nombre: "Auriculares", precio: 25000, categoria: "tecnologia", disponible: true } 
// ]

const catalogo = [
    { nombre: "Teclado Mecánico", precio: 45000, categoria: "tecnologia", disponible: true },
    { nombre: "Cafetera", precio: 30000, categoria: "hogar", disponible: true },
    { nombre: "Mouse Gamer", precio: 15000, categoria: "tecnologia", disponible: true },
    { nombre: "Monitor 24", precio: 120000, categoria: "tecnologia", disponible: false },
    { nombre: "Auriculares", precio: 25000, categoria: "tecnologia", disponible: true }
];

function obtenerProductosSugeridos(productos, limite) {
    const filtrados = []
    let acc = limite
    productos.forEach(producto => {
        if (producto.categoria === "tecnologia" && producto.disponible === true) {
            filtrados.push(producto)

        }
    })
    filtrados.sort((a, b) => a.precio - b.precio)
    if (acc < filtrados.length) {
        const resultado = filtrados.slice(0, acc)
        return resultado
    }
    return filtrados
}
const filtrados = obtenerProductosSugeridos(catalogo, 2)
console.log(filtrados)

//sugerencia, posibles filtraciones de categoria
function obtenerProductosSugeridosDos(productos, limite, tipo ) {
    const categ = tipo || "tecnologia"
    return productos
        
        .filter(p => p.categoria === categ && p.disponible)
        
        .sort((a, b) => a.precio - b.precio)
        
        .slice(0, limite);
}
const filtradosDos = obtenerProductosSugeridosDos(catalogo, 2, "hogar");
console.log(filtradosDos);