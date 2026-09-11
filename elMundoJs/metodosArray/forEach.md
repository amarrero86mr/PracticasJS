.forEach()
Ejecuta una función por cada elemento. No retorna nada (undefined). Se usa para provocar efectos secundarios (guardar en base de datos, imprimir en consola, modificar el DOM).

Con array simple:

JavaScript
const frutas = ["manzana", "banana", "pera"];
frutas.forEach(f => console.log(`Comprar: ${f}`));
// Imprime cada fruta en consola
Con array de objetos:

JavaScript
const productos = [{ item: "Silla", stock: 10 }, { item: "Mesa", stock: 0 }];
productos.forEach(p => {
    if (p.stock === 0) console.log(`Alerta: reposición para ${p.item}`);
});