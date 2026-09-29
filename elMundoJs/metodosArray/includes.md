## [.includes()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

Determina si un array incluye un determinado valor, devolviendo true o false según corresponda. 

>Nota: Funciona perfecto para strings y números directos, no evalúa propiedades dentro de objetos complejos.

>Tambien distingue mayúsculas y minúsculas

* Con array simple:

```JavaScript
const permisos = ["leer", "escribir", "ejecutar"];
const puedeBorrar = permisos.includes("borrar");
// false
```

* Con array de strings (ej. tags):
>que lo que 

```JavaScript
const tecnologias = ["js", "react", "node"];
const usaReact = tecnologias.includes("react");
// true
```