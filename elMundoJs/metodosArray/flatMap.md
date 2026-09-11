.flatMap()
Aplica una transformación a cada elemento (como .map()) y luego aplana el resultado 1 nivel de profundidad.

Con array simple:

JavaScript
const frases = ["hola mundo", "javascript moderno"];
const palabras = frases.flatMap(f => f.split(" "));
// ["hola", "mundo", "javascript", "moderno"]
Con array de objetos:

JavaScript
const pedidos = [{ cliente: "Ana", tags: ["tech", "oferta"] }, { cliente: "Luis", tags: ["hogar"] }];
const todosLosTags = pedidos.flatMap(p => p.tags);
// ["tech", "oferta", "hogar"]