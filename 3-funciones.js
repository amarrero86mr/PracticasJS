/* 
Ejercicios de funciones
---------- -- ---------
Crear una función llamda "cebarMates"
Esta función deberá recibir 2 argumentos ( las unidades serán mililitros )
aguaDelTermo: Cantidad de agua del termo
capacidadDelMate: Carga del mate
La función deberá cebar todos los mates posibles hasta que el termo no tenga mas agua para un mate completo.

Luego de cebar todos los mates posibles, deberá mostrarme el mensaje por consola "cebé X mates, me sobró X ml de agua en el termo".

Al finalizar la ejecucuón de esta función, deberá devolver el agua sobrante del termo.

*/

/* function cebarMates(aguaDelTermo, capacidadDelMate) {
    const matesCebados = Math.floor(aguaDelTermo / capacidadDelMate)
    const aguaSobrante = aguaDelTermo % capacidadDelMate
    console.log("cebé " + matesCebados + ", sobró " + aguaSobrante + " ml de agua en el termo.")
    return aguaSobrante
}

console.log(cebarMates(1200, 95)) */

function cebarMates(aguaDelTermo, capacidadDelMate) {
    let matesCebados = 0;
    let aguaSobrante;
    for (let x = 0; x < aguaDelTermo; x += capacidadDelMate) {
        if (x !== 0) {
            matesCebados++
        }
        aguaSobrante = aguaDelTermo - x
    }
    console.log("cebé " + matesCebados + ", sobró " + aguaSobrante + " ml de agua en el termo.")
    return aguaSobrante
}
console.log(cebarMates(1200, 95))

/* 
Crear una función llamada "todoLoQuePuedaComer"
Esta función deberá recibir
conCuantoSeLlena: representa la cantidad de porcione que una persona puede comer
conCuantoLoHechan: representa un valor en pesos del límite de comida del restaurante para una persona
precioPorPorcion: el precio que le cuesta al restaurante cada porcion
La función deberá mostrar un mensaje por consola cada vez que el cliente come una nueva poción "ñam! ñam!.

si el cliente comió tantas porciones como su estómago permitió, debe mostrar el mensaje por consola "uff estoy que exploto, no puedo mas!"

en caso de que el cliente pueda seguir comiendo pero llegó al límite de "presupuesto" del restaurante, se debe mostrar el mensaje por consola "saquenlo a patadas al dogor!" y se debe finalizar el ciclo (si ponemos un return dentro del "while", se sale del while y de la función)

cada vez que el cliente se come una porción, se checkear si se ha llegado al límite de "presupuesto" del restaurante
*/
/* function todoLoQuePuedaComer(conCuantoSeLlena, conCuantoLoHechan, precioPorPorcion) {
    let cont = 0;
    for (let x = 0; x < conCuantoSeLlena; x++) {
        cont++
        if (conCuantoLoHechan < cont * precioPorPorcion) {
            console.log("saquenlo a patadas al dogor!")
            return (conCuantoLoHechan - (x * precioPorPorcion))
        }
        console.log("ñam! ñam!");
    }
    console.log("uff estoy que exploto, no puedo mas!")
    return (conCuantoLoHechan - cont * precioPorPorcion)
}
console.log(todoLoQuePuedaComer(2, 300, 151)) */

function todoLoQuePuedaComer(conCuantoSeLlena, conCuantoLoHechan, precioPorPorcion) {
    let cont = 1;
    while (cont <= conCuantoSeLlena) {
        if (conCuantoLoHechan < cont * precioPorPorcion) {
            console.log("saquenlo a patadas al dogor!")
            return (conCuantoLoHechan - ((cont-1) * precioPorPorcion))
        }
        console.log("ñam! ñam!");
        cont++
    }    
    console.log("uff estoy que exploto, no puedo mas!")
    return (conCuantoLoHechan - conCuantoSeLlena * precioPorPorcion)
}
console.log(todoLoQuePuedaComer(2, 300, 151))