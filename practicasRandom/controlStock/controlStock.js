// Ejemplo de uso:
// actualizarStock(depositoLiniers, pedidoCliente);
// Esperado: { rivadavia: 0, exito: 100, gloria: 10 }

const depositoLiniers = { rivadavia: 50, exito: 100, gloria: 20 };
const pedidoCliente = { rivadavia: 500, gloria: 10, bic:32 };

function actualizarStock(deposito, pedido) {
    const faltan = {}
    Object.keys(pedido).forEach(item => {
        if (!(item in deposito) || deposito[item] === undefined) {
            faltan[item] = pedido[item]
        } else if (pedido[item] <= deposito[item]) {
            deposito[item] = deposito[item] - pedido[item]
            pedido[item] = 0
        } else {
            pedido[item] = pedido[item] - deposito[item]
            deposito[item] = 0
            faltan[item] = pedido[item]
        }
    })

    if (Object.keys(faltan).length > 0) {
        console.log('los faltantes del para el Pedido son:')
        Object.keys(faltan).forEach(i => {
            console.log(i.valueOf() + ': ' + faltan[i])
        })
    }
    return deposito
}

const elPedido = actualizarStock(depositoLiniers, pedidoCliente)

console.log(elPedido)