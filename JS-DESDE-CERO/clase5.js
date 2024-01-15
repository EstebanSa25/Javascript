/**
 * FUNCIONES
 */
function saludar(Nombre) {
    if (typeof Nombre==="string"){


    console.log(`Hola ${Nombre}`)
}else{
    console.log(`${Nombre} no es un nombre valido`)
}
}
saludar(2)