## [.some()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

Recorre el array y evalúa si al menos uno de los elementos cumple con la condición. Devuelve un booleano (true o false).

* Con array simple:

```JavaScript
const notas = [4, 5, 3, 10];
const tieneUnDiez = notas.some(n => n === 10);
// true
```

* Con array de objetos:

```JavaScript
const carrito = [{ producto: "Campera", enOferta: false }, { producto: "Gorra", enOferta: true }];
const hayOfertas = carrito.some(p => p.enOferta);
// true
```