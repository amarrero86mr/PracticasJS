## [.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Combina o acumula todos los elementos del array en un único resultado (que puede ser un número, un objeto, un string o un nuevo array).

* Con array simple (Sumatoria):

```JavaScript
const notas = [8, 9, 10];
const suma = notas.reduce((acc, nota) => acc + nota, 0);
// 27
```

* Con array de objetos (Totalizar valor de inventario):

```JavaScript
const carrito = [{ item: "Remera", precio: 1500 }, { item: "Pantalón", precio: 3500 }];
const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
// 5000
```