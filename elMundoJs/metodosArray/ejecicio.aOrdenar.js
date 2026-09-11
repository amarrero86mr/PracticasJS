/* 
Ejercicio 1.1: Precios con descuento

Método: .map()

Qué debe hacer la función: Devolver un nuevo array con todos los precios con un 15% de descuento aplicado.

Argumento que recibe: Un array de números (precios). Ej: [100, 200, 300]

Ejercicio 1.2: Formateador de nombres de usuario

Método: .map()

Qué debe hacer la función: Devolver un nuevo array de strings con el formato "Usuario: [nombre] ([rol])".

Argumento que recibe: Un array de objetos con las claves nombre y rol. Ej: [{ nombre: "Ana", rol: "admin" }, { nombre: "Pedro", rol: "user" }]

.forEach()
Ejercicio 2.1: Notificador de saldos

Método: .forEach()

Qué debe hacer la función: Imprimir por consola el mensaje "Cuenta N° [índice + 1]: $[monto]" por cada elemento del array. La función no debe retornar nada.

Argumento que recibe: Un array de números (saldos). Ej: [1500, 0, 4300]

Ejercicio 2.2: Generador de reportes de stock

Método: .forEach()

Qué debe hacer la función: Imprimir por consola "[producto]: Quedan [cantidad] unidades" si la cantidad es mayor a 0, o "[producto]: SIN STOCK" si la cantidad es 0. La función no debe retornar nada.

Argumento que recibe: Un array de objetos con las claves producto y cantidad. Ej: [{ producto: "Teclado", cantidad: 5 }, { producto: "Mouse", cantidad: 0 }]

.reduce()
Ejercicio 3.1: Promedio de notas

Método: .reduce()

Qué debe hacer la función: Devolver el promedio final (número) redondeado o exacto de todas las notas.

Argumento que recibe: Un array de números (notas). Ej: [7, 8, 9, 10]

Ejercicio 3.2: Balance total de caja

Método: .reduce()

Qué debe hacer la función: Devolver la suma total de dinero ingresado considerando el tipo de movimiento (ingreso suma, egreso resta).

Argumento que recibe: Un array de objetos con las claves monto y tipo. Ej: [{ monto: 1000, tipo: "ingreso" }, { monto: 400, tipo: "egreso" }]

.reduceRight()
Ejercicio 4.1: Inversor de ruta de archivos

Método: .reduceRight()

Qué debe hacer la función: Construir y devolver un string que concatene todas las carpetas separadas por / pero en orden inverso (desde la última hasta la primera).

Argumento que recibe: Un array de strings (nombres de carpetas). Ej: ["documentos", "proyectos", "javascript"]

Ejercicio 4.2: Historial de cambios más recientes

Método: .reduceRight()

Qué debe hacer la función: Retornar un string acumulado con el formato "[version]: [cambio] | " procesando los elementos desde el último registrado hasta el primero.

Argumento que recibe: Un array de objetos con las claves version y cambio. Ej: [{ version: "v1.0", cambio: "Inicio" }, { version: "v1.1", cambio: "Fix login" }]

.flatMap()
Ejercicio 5.1: Extractor de hashtags

Método: .flatMap()

Qué debe hacer la función: Separar los hashtags de cada publicación y devolver un único array plano con todos los hashtags individuales.

Argumento que recibe: Un array de strings (frases de hashtags). Ej: ["#js #web", "#css #design"]

Ejercicio 5.2: Aplanador de habilidades

Método: .flatMap()

Qué debe hacer la función: Devolver un único array plano con todas las habilidades (skills) de todos los empleados sin subarrays anidados.

Argumento que recibe: Un array de objetos con las claves empleado y skills (donde skills es un array de strings). Ej: [{ empleado: "Luis", skills: ["JS", "React"] }, { empleado: "Maria", skills: ["Python", "SQL"] }]

.flat()
Ejercicio 6.1: Limpiador de matrices simples

Método: .flat()

Qué debe hacer la función: Desanidar una matriz de 3 niveles de profundidad y devolver un array totalmente plano de números.

Argumento que recibe: Un array con múltiples niveles de anidación. Ej: [1, [2, [3, [4]]]]

Ejercicio 6.2: Aplanador de estructura organizacional

Método: .flat()

Qué debe hacer la función: Aplanar un array de departamentos anidados en 1 nivel de profundidad para devolver un array simple con todos los objetos de personas.

Argumento que recibe: Un array que contiene subarrays de objetos con las claves nombre y puesto. Ej: [[{ nombre: "Carlos", puesto: "Dev" }], [{ nombre: "Ana", puesto: "QA" }]]
*/