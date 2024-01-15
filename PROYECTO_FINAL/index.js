/**
 * Logica para crear pedidos y cobrar los pedidos del usuario
 */
const usuario={
    nombre:"Beto",
    edad : 30,
    deuda:0
}
let pedido=[]
let costoPedido=0
const mostrarMenu=()=> {
  console.log(`CODIGO - PRODUCTO - COSTO`)
   //productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} -$${producto.costo}`))
   for(let producto of productos){
    console.log(`${producto.codigo} - ${producto.nombre} -$${producto.costo}`)
   }
}



const pedirProducto=cod=>{
    if (!cod) return "ingrese un codigo valido"
    const productoEncontrado=productos.find(producto => producto.codigo===cod)
    if (!productoEncontrado) return "El producto no existe"
    pedido.push(productoEncontrado)
    console.log(`Su producto ha sido agregado a su pedido`)
    return verPedido()
}
const verPedido =()=>pedido
const calcularCosto =()=>{
    let costo=0
   for(producto of pedido){
    costo+= producto.costo
   }
   costoPedido=costo
   return costoPedido
}
const finalizarPedido=()=>{
    calcularCosto()
    usuario.deuda+=costoPedido
    pedido=[]
    costoPedido=0
    return `${usuario.nombre}, tu debes pagar $${usuario.deuda}`
}

const pagarPedido=montoEntregado=>{
    if(typeof montoEntregado==="number"){

 
if (montoEntregado< usuario.deuda){
    return `No te alcanza para pagar tu pedido`
}else if(montoEntregado=== usuario.deuda){
    usuario.deuda=0
    return `Tu pedido ha sido pagado`
}else{
    console.log( `Tu pedido ha sido pagado y tu cambio es de ${montoEntregado-usuario.deuda}`)
    usuario.deuda=0
}
}else{
    return `Digite un numero valido`
}
}