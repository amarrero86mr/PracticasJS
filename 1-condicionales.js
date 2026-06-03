/* Ejercicios con condicionales
crear una fn llamada "inspeccionarLocalDeComida"
esta función debe aceptar 3 argumentos
el primer argumento debe ser el nombre del local de comida a inspeccionar
el segundo argumento debe ser un boolean que representa si cumple o no con los requisitos de habiltiación del local
el tercer argumento debe ser un boolean que representa si nos dan o no un soborno
siempre que se ejecute la función deberá mostrar un mensaje por consola diciendo:
"inspeccionando [nombre_local]"

la función debe retornar siempre un boolean que representa si pasa o no la inspección

condiciones de inspección:

debe cumplir con los requisitos de habilitación
o debe darnos un soborno
la función debe mostrar los siguientes mensajes por consola dependiendo de los argumentos dados
si se cumple con los requisitos de habiltiación, se debe mostrar el mensaje "todo en regla"

si no se cumple con los requisitos de habilitación PERO se proporciona un soborno, se debe mostrar el mensaje "guiño guiño"

si no se cumple los requisitos y no hay soborno, se debe mostrar el mensaje "clausurado!"

Tarea agregada por la QA enterprise S.A. incorporation
Testear todas las combinaciones de casos posibles */

// forma de codigo engorrosa, apretujada y poco practica

/* function inspeccionarLocalDeComida(nombreLocal, cumple, donBilletin) {
    console.log("inspeccionando local: " + nombreLocal)
    const habilitado = cumple? cumple : donBilletin? donBilletin : false
    const mensaje = cumple? "todo en regla" : donBilletin? "guiño guiño" : "clausurado!"
    console.log(mensaje)
    return habilitado
}
console.log(inspeccionarLocalDeComida("Cutre Puaj!", true, false)) */

function inspeccionarLocalDeComida(nombreLocal, cumple, donBilletin) {
    if (typeof nombreLocal !== "string") { 
        console.error(cumple + " no es texto")
        return false
    }
    if (typeof cumple !== "boolean") { 
        console.error(cumple + " no es booleano")
        return false
    }
    if (typeof donBilletin !== "boolean") {
        console.error(cumple + "no es booleano")
        return false
    }
    
    console.log("inspeccionando local: " + nombreLocal)
    
    let habilitado;

    if (!cumple && !donBilletin) {
        console.log("clausurado!")
        habilitado = false
    } else if (!cumple && donBilletin){
        console.log("guiño guiño")
        habilitado = true
    } else if (cumple) {
        console.log("todo en regla")
        habilitado = true
    }

    return habilitado
}

console.log(inspeccionarLocalDeComida("Cutre Puaj!",1, false)) 