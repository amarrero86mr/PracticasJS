/* 
.flatMap()
Ejercicio 5.1: Extractor de hashtags

Método: .flatMap()

Qué debe hacer la función: Separar los hashtags de cada publicación y devolver un único array plano con todos los hashtags individuales.

Argumento que recibe: Un array de strings (frases de hashtags). Ej: ["#js #web", "#css #design"]
*/
const hashtags = ["#js #web", "#css #design", "#html #css"];
function listadoIndividual(lis) {
    return lis.flatMap(par => par.split(" "));
};
console.log(listadoIndividual(hashtags))

function listadoIndividualFor(lis) {
    const hashindividuales = [];
    lis.flatMap(par => {
        let palabra = "";
        for (let x = 0; x < par.length; x++) {
            if (par[x] != " ") {
                palabra = palabra.concat(par[x]);
            }
            if (par[x] === " " || x === par.length - 1) {
                hashindividuales.push(palabra);
                palabra = "";
            }
        };
    });
    return hashindividuales
};
console.log(listadoIndividualFor(hashtags))

/* 
Ejercicio 5.2: Aplanador de habilidades

Método: .flatMap()

Qué debe hacer la función: Devolver un único array plano con todas las habilidades (skills) de todos los empleados sin subarrays anidados.

Argumento que recibe: Un array de objetos con las claves empleado y skills (donde skills es un array de strings). Ej: [{ empleado: "Luis", skills: ["JS", "React"] }, { empleado: "Maria", skills: ["Python", "SQL"] }] 
*/

const employeeSkills = [
    { empleado: "Luis", skills: ["JS", "React"] },
    { empleado: "Maria", skills: ["Python", "SQL"] }
];

function habilitys (hab) {
    return hab.flatMap(employee => employee.skills);
}
console.log(habilitys(employeeSkills))
