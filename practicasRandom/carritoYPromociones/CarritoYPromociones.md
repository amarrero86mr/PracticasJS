## Carrito de Compras y Filtro de Promociones
(Enfocado en filtrado, ordenamiento y recorte de Arrays)

Crear una función llamada obtenerProductosSugeridos que reciba 2 argumentos:

* productos (Array de Objetos): Cada objeto tiene nombre, precio, categoria ("tecnologia", "hogar", "ropa") y disponible (booleano).

* limite (Número): La cantidad máxima de sugerencias a devolver.

La función debe devolver un nuevo array únicamente con los productos de la categoría "tecnologia" que estén disponibles (disponible === true), ordenados de menor a mayor precio, y recortado a la cantidad indicada por limite.

```javascript
function obtenerProductosSugeridos(productos, limite) {
    // ... tu código
}

const catalogo = [
    { nombre: "Teclado Mecánico", precio: 45000, categoria: "tecnologia", disponible: true },
    { nombre: "Cafetera", precio: 30000, categoria: "hogar", disponible: true },
    { nombre: "Mouse Gamer", precio: 15000, categoria: "tecnologia", disponible: true },
    { nombre: "Monitor 24", precio: 120000, categoria: "tecnologia", disponible: false },
    { nombre: "Auriculares", precio: 25000, categoria: "tecnologia", disponible: true }
];

// Ejemplo de uso:
// obtenerProductosSugeridos(catalogo, 2);
// Esperado: [ 
//   { nombre: "Mouse Gamer", precio: 15000, categoria: "tecnologia", disponible: true }, 
//   { nombre: "Auriculares", precio: 25000, categoria: "tecnologia", disponible: true } 
// ]
```

* *BONUS:* Si la cantidad de productos filtrados es menor al límite pedido, devolver todos los encontrados sin lanzar error.

> *TIP:* Podés encadenar .filter(), .toSorted() (o .sort()) y .slice().