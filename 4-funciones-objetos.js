/* Crear una función llamada "escribirConColores"
Esta función deberá recibir 2 argumentos ( ambos objetos )

el primer agumento ( lapicera ): será un objeto que tendrá un conjunto de colores (propiedades del obj) 
y cantidad de tinta (cc) para cada color (valor de las propiedades). ejemplo
{ rojo: 50, azul: 100, verde: 20 }

el segundo argumento (texto): será un objeto que tendrá un conjunto de colores (propiedades del obj) y
 cantidad de palabras (1 pablara = 0.1cc) a escribir (valor de las propiedades)

 { rojo: 7, azul: 300, verde: 60 }
la función debe calcular cuanta tinta me queda luego de escribir el texto pedido. 
debe devolver el obj lapicera con la tinta restante

ejemplo:

function escribirConColores(lapicera, texto ) {
    // ...codigo
}
*/
/* 
const lapicera_uriel = { rojo: 50, azul: 100, verde: 20 }
const texto_uriel = { rojo: 500, azul: 0, verde: 100}

const resultado = escribirConColores(lapicera_uriel,texto_uriel)
console.log(resultado)
// se espera que resultado sea
// { rojo:0, azul:100, verde:10 }
BONUS: si gasto tinta de mas o de un color que no existe, 
la tinta NO se debe ser menor a 0 y se debe mostrar un mensaje por consola 
diciendo: "te falta X cc de tinta para escribir el texto dado"

TIP: Object.keys(obj) nos devuelve una lista de todas las popiedades del obj como string, ejemplo:

const obj = { rojo: 50, azul: 100, verde: 20 };
const keys = Object.keys(obj);
// keys es [ "rojo", "azul", "verde" ]
Los arrays ( listas ) tienen una propiedad llamada "lenght" que nos indica 
la cantidad de elementos del array. en este caso obj tiene un lenght de 3. 
Recuerden que los indicies de un array comienzan SIEMPRE desde 0 */

const lapicera_uriel = { rojo: 50, azul: 100, verde: 9 }
const texto_uriel = { rojo: 500, azul: 0, verde: 100 }

function escribirConColores(lapicera, texto) {

    Object.keys(texto).map(color => {
        if (lapicera[color] && lapicera[color] >= texto[color] * 0.1) {
            // (1 pablara = 0.1cc)
            lapicera[color] = lapicera[color] - (texto[color] * 0.1)
            // texto escrito -tinta parciamente gastada
        }
        else if (lapicera[color] && lapicera[color] < texto[color] * 0.1) {
            texto[color] = texto[color] - lapicera[color]*10
            lapicera[color] = 0
            // texto escrito parcialmente - tinta en cero
        } else {
            // texto no escrito
        }
    })
}
escribirConColores(lapicera_uriel,texto_uriel)
console.log(lapicera_uriel)