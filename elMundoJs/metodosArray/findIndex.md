## [.findIndex()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

Hace exactamente lo mismo que `.find()`, pero en lugar de devolver el elemento, devuelve el índice (la posición numérica) donde se encuentra. Si no lo encuentra, devuelve -1. Es decir, devuelve la posicion del elemento que cumpla con la funcion proporcionada.

* Con array simple:

```JavaScript
const letras = ["a", "b", "c", "d"];
const posicion = letras.findIndex(l => l === "c");
// 2 (porque "c" está en el índice 2)
```

* Con array de objetos:

```JavaScript
const tareas = [{ id: 101, completada: false }, { id: 102, completada: true }];
const indexTarea = tareas.findIndex(t => t.completada === true);
// 1
```