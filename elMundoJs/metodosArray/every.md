## [.every()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

Evalúa si todos los elementos del array cumplen con la condición. Devuelve true solo si la regla se cumple para todos los elementos de la matris, de lo contrario devuelve false.

* Con array simple:

```JavaScript
const temperaturas = [20, 22, 19, 24];
const todasPositivas = temperaturas.every(t => t > 0);
// true
```

* Con array de objetos:

```JavaScript
const equipo = [{ nombre: "Ana", activo: true }, { nombre: "Luis", activo: true }];
const todosActivos = equipo.every(e => e.activo);
// true
```