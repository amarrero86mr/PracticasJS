## [.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
Ejecuta una función por cada elemento. No retorna nada. Se usa para provocar efectos secundarios (guardar en base de datos, imprimir en consola, modificar el DOM). .forEach() no muta/modifica el array.

* Con array simple:

```JavaScript
const frutas = ["manzana", "banana", "pera"];
frutas.forEach(f => console.log(`Comprar: ${f}`));
// Imprime cada fruta en consola
```

* Con array de objetos:

```JavaScript
const productos = [{ item: "Silla", stock: 10 }, { item: "Mesa", stock: 0 }];
productos.forEach(p => {
    if (p.stock === 0) console.log(`Alerta: reposición para ${p.item}`);
});
```

>**tip:** este metodo puede recivir hasta tres argumentos por callback

```Javascript
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);
```