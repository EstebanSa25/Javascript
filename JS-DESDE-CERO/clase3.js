/**
 * OPERADORES DE ASIGNACION
 * =
 */
let alumno
let profe ="Juan"
alumno = profe

/**
 * OPERADORES ARITMETICOS
 * (+)
 * Operador de concatenacion
 */

// + - * / %
// let a=5
// let b=3

// a**=b
// console.log(a)
let nombre="Beto"
let apellido='Quiroga'

let nombreCompleto=nombre + " "+ apellido
// console.log(nombreCompleto)

//Template String
let nickname=`Mi nombre es: ${nombre} y mi apellido es ${apellido}`
// console.log(nickname)


/**
 * OPERACIONES DE COMPARACION
 */

//ES IGUAL ==(Compara solo el valor)
//ES ESTRICTAMENTE IGUAL ===(Compara valor y tipo de dato)
// ES DIFERENTE != (Verifica que los valores sean diferentes)
// ES ESTRICTAMENTE DIFERENTE !==
// let a=true
// let b=false
// let resultado = a!==b

// console.log(resultado)

/**
 * OPERADORES COMPARACION
 */

//Mayor que >
//Menor que <
// mayor o igual que>=
//menor o igual que <=

// let a=20
// let b=20
// console.log(a<=b)

/**
 * OPERADORES LOGICOS
 * AND (&&)
 * OR (||)
 */

// let a=10
// let b=20
// let c=30
//saber si b es mayor que a y mayor que c

// let resp= (b > a) || (b > c)
// console.log(resp)


/**
 * OPERADORES UNARIOS
 */
// let a =10
// a--
// console.log(a)

/**
 * operadores ternarios
 */
// let a = 5
// let b = 8
// let c = b > a ? "ES VERDAD!!!!" : "ESTO ES FALSO!!!"
// console.log(c)

/**
 * TYPE COERCION
 */

let a=true
let b=true
let resp=a+b
console.log(typeof resp)

//NaN not a number