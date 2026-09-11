.flat()
Aplana arrays anidados hasta la profundidad indicada (por defecto 1 nivel). No transforma los elementos, solo desanida.

Con array simple:

JavaScript
const matriz = [1, 2, [3, 4, [5, 6]]];
const aplanado = matriz.flat(2); // Profundidad 2
// [1, 2, 3, 4, 5, 6]
Con array de objetos:

JavaScript
const departamentos = [
    [{ depto: "A1", expensas: 5000 }],
    [{ depto: "B2", expensas: 6000 }]
];
const listaPlana = departamentos.flat();
// [{ depto: "A1", expensas: 5000 }, { depto: "B2", expensas: 6000 }]