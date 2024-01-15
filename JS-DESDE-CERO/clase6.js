/**
 * ARRAYS
 */
let amigos=["Pedro","Gabriel","Erick","Daniel"]

// Agregar elementos a mi array

//amigos.push("Gaston")
//let dato=amigos.pop("Gaston")
//let dato=amigos.slice(0,2)
//console.log(dato)
//console.log(amigos)

//foreach necesita como parametro una funcion
// let dato=amigos.forEach(amigo=>console.log(`Hola ${amigo}`))
// console.log(amigos)

//.map()
// let dato=amigos.map(amigo=>`Hola ${amigo}`)
// console.log(amigos)
// console.log(dato)

//filter
let numeros=[10,436,45,52,33,9,2,54]
// let nuevoArray=[]
// nuevoArray=numeros.filter(num=> num>20)
// console.log(nuevoArray)

// let nuevoArray=[]
// nuevoArray=numeros.find(num=> num%2===1)
// console.log(nuevoArray)

// let nuevoArray=[]
// nuevoArray=numeros.includes(436)
// console.log(nuevoArray)

// let nuevoArray
// nuevoArray=numeros.some(num=> typeof num==="string")
// console.log(nuevoArray)

// let nuevoArray=[]
// nuevoArray=numeros.every(num=> typeof num==="number")
// console.log(nuevoArray)

/**
 * Strings
 */
// let texto="Alberto"
// let texto2="alberto"
// let texto3="ALBERTO"

// console.log(`slice| ${texto.slice(3,10)}`)
// dato=texto.split("")
// console.log(dato)

// let dato2=texto.toLocaleLowerCase()
// console.log(dato2)

/**
 * OBJETOS
 */
let alumno={
    nombre:"Beto",
    edad:21,
    suscriptor:false,
    ciudad:"Lima"
}
let valores=Object.keys(alumno)
console.log(valores)

/**
 * Math y Date
 */
const valor=Math.max(10,10,24)
console.log(valor)

const valord=new Date()
console.log(valord.getUTCDate())
