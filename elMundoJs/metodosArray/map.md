## [.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Crea un **nuevo array** transformando cada elemento uno por uno. El array resultante siempre tiene la misma cantidad de elementos que el original.

### ejemplos:

* Con array simple:

```JavaScript
const precios = [100, 200, 300];
const preciosConIVA = precios.map(p => p * 1.21);
// [121, 242, 363]
```

* Con array de objetos:

```JavaScript
const usuarios = [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }];
const nombres = usuarios.map(u => u.nombre);
// ["Ana", "Luis"]
```