/* 
.reduceRight()
Ejercicio 4.1: Inversor de ruta de archivos

Método: .reduceRight()

Qué debe hacer la función: Construir y devolver un string que concatene todas las carpetas separadas por / pero en orden inverso (desde la última hasta la primera).

Argumento que recibe: Un array de strings (nombres de carpetas). Ej: ["documentos", "proyectos", "javascript"]
*/
const carpetas = ["documentos", "proyectos", "javascript"];
function concatenar(carpetas) {
    return carpetas.reduceRight((acc, palabra) => acc.concat(' / ' + palabra))
    //se omite al final , "" para evitar la primer "/"
}
console.log(concatenar(carpetas))

/* 
Ejercicio 4.2: Historial de cambios más recientes

Método: .reduceRight()

Qué debe hacer la función: Retornar un string acumulado con el formato "[version]: [cambio] | " procesando los elementos desde el último registrado hasta el primero.

Argumento que recibe: Un array de objetos con las claves version y cambio. Ej: [{ version: "v1.0", cambio: "Inicio" }, { version: "v1.1", cambio: "Fix login" }]
*/
const historial = [{ version: "v1.0", cambio: "Inicio" }, { version: "v1.1", cambio: "Fix login" }, { version: "v1.2", cambio: "Contactos" }];

function concatVersion(his) {
    return his.reduceRight((acc, obj) => {
        const sep = his.length == his.indexOf(obj) + 1 ? "" : " | ";
        return acc.concat(sep + Object.values(obj).join(': '));
    }, '')
}

console.log(concatVersion(historial));