## [.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Busca y devuelve el primer elemento que cumpla con la condición, es decir si la función resulta verdadera. A diferencia de `.filter()`, ni bien encuentra una coincidencia, frena y te devuelve el objeto o valor directo (no un array). Si no encuentra nada, devuelve undefined.

* Con array simple:

```JavaScript
const numeros = [4, 9, 12, 25];
const primerMultiploDeTres = numeros.find(n => n % 3 === 0);
// 9 (devuelve el primer número que cumple, no un array con todos)
```

* Con array de objetos:

```JavaScript
const usuarios = [{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }];
const usuarioBuscado = usuarios.find(u => u.id === 2);
// { id: 2, nombre: "Luis" }
```