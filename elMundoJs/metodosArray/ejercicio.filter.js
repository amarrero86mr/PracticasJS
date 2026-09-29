/* 
.filter()
Ejercicio 1.1

Método: .filter()

Qué debe hacer la función: Devolver un nuevo array únicamente con los números pares.

Argumento que recibe: Un array de números. Ej: [1, 2, 3, 4, 5, 6]
*/
const numeros = [1, 2, 3, 4, 5, 6];

function pares(num) {
    return num.filter(n => n % 2 === 0)
};
const listaPares = pares(numeros);
console.log(listaPares);

/* 
Ejercicio 1.2

Método: .filter()

Qué debe hacer la función: Devolver un nuevo array con los usuarios cuyo rol sea "admin".

Argumento que recibe: Un array de objetos con las claves nombre y rol. Ej: [{ nombre: "Ana", rol: "admin" }, { nombre: "Pedro", rol: "user" }, { nombre: "Lucia", rol: "admin" }]
*/
const rols = [
    { nombre: "Ana", rol: "admin" },
    { nombre: "Pedro", rol: "user" },
    { nombre: "Lucia", rol: "admin" }
];
function esAdmin(roles) {
    return roles.filter(r => r.rol === "admin")
};
const admins = esAdmin(rols);
console.log(admins);