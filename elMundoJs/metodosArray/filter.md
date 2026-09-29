## [.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Crea un nuevo array con todos los elementos que pasen una condición (devuelven true). Si ninguno cumple, devuelve un array vacío [].

* Con array simple:

```JavaScript
const edades = [15, 22, 17, 30, 12];
const mayoresDeEdad = edades.filter(e => e >= 18);
// [22, 30]
```

* Con array de objetos:

```JavaScript
const productos = [{ item: "Remera", stock: 5 }, { item: "Pantalón", stock: 0 }];
const conStock = productos.filter(p => p.stock > 0);
// [{ item: "Remera", stock: 5 }]
```