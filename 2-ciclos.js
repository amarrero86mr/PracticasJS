/* Ejercicios con ciclos
Ejercicio de while
crear una función llamada "mientrasTengasPlata"
esta función deberá recibir tres argumentos
cosa: es un texto que representa el nombre del producto a comprar compulsivamente
precio: representa el precio de la cosa a comprar compulsiuvamente
presupuesto: número que representa la cantidad de dinero a gastar
esta función deberá:
mostrar un mensaje por consola diciendo "me compré un [cosa], me queda $[presupuesto]".
restar el valor de la cosa comprada cada vez que se ejecute el ciclo
luego de finalizar el ciclo while, deberá mostrar un mensaje "ohh no, me gasté toda mi platita en [cosa]"
esta función no devuelve ningún valor
Ejercicio de for
crear una función llamada "meEndeudoPor"
esta función deberá recibir tres argumentos
cosa: es un texto que representa el nombre del producto a comprar compulsivamente
precio: representa el precio de la cosa a comprar compulsiuvamente
cantidad: número que representa la cantidad del producto a comprar
esta función deberá:
mostrar un mensaje por consola diciendo "me endeudé por comprar un [cosa], ya debo $[deuda]".
sumar el valor de la cosa comprada a la deuda cada vez que se ejecute el ciclo
luego de finalizar el ciclo for, deberá mostrar un mensaje "ohh no, me endeudé por $[deuda] comprando [cosa]"
la función deberá devolver el valor de la deuda */


function mientrasTengasPlata( cosa, precio, presupuesto) {
    if (typeof cosa !== "string") {
        console.error("La cosa a comprar debe ser texto")
        return false;
    }
    if (typeof precio !== "number") {
        console.error("El precio debe ser un número")
        return false;
    }
    if (typeof presupuesto !== "number") {
        console.error("El presupuesto debe se un número")
        return false;
    }

    

}