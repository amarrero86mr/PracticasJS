## [.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

Funciona exactamente igual que `.reduce()`, pero recorre el array de derecha a izquierda (del último elemento al primero).

* Con array simple:

```JavaScript
const palabras = ["JavaScript", "es", "genial"];
const frase = palabras.reduceRight((acc, p) => `${acc} ${p}`);
// "genial es JavaScript"
```

* Con array de objetos (Últimas transacciones prioritarias):

```JavaScript
const pagos = [{ id: 1, monto: 100 }, { id: 2, monto: 500 }];
const desglose = pagos.reduceRight((acc, p) => `${acc} <- [ID ${p.id}: $${p.monto}]`, "Fin");
// "Fin <- [ID 2: $500] <- [ID 1: $100]"
```