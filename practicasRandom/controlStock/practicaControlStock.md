## Control de Inventario y Stock (Librería)
(Enfocado en manipulación de Objetos y condicionales)

Crear una función llamada actualizarStock que reciba 2 argumentos:
* deposito (Objeto): Las marcas de cuadernos (propiedades) y su cantidad disponible en unidades (valores).

* pedido (Objeto): Las marcas solicitadas y la cantidad que se quiere comprar.

La función debe descontar el stock del depósito según el pedido y devolver el objeto deposito con las cantidades restantes.

```javascript
function actualizarStock(deposito, pedido) {
    // ... tu código
}

const depositoLiniers = { rivadavia: 50, exito: 100, gloria: 20 };
const pedidoCliente = { rivadavia: 500, gloria: 10 };

// Ejemplo de uso:
// actualizarStock(depositoLiniers, pedidoCliente);
// Esperado: { rivadavia: 0, exito: 100, gloria: 10 }
```

* BONUS: Si se pide más stock del disponible o una marca que no existe en el depósito, la cantidad disponible de esa marca NO debe quedar menor a 0 y se debe mostrar un mensaje por consola diciendo: "Faltan X unidades de la marca Y para completar el pedido".

> TIP: Podés recorrer las propiedades del pedido usando Object.keys(pedido)