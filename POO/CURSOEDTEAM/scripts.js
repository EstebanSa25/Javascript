//                                  Clase 1
//Objetos literales
// const usuario1={
//     //Atributos del objeto
//     nombres:"Beto Junior",
//     apellidos:"Quiroga M.",
//     edad:29,
//     correo:"beto@ed.team",
//     activo:true,
//     //Metodos del objeto
//     presentarse(){
//         console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años`)
//     }
// }

//a valores que ya fueron seteados se le cambia el valor se
// actualiza despues de esa asignacion en cambio si declaramos un nuevo atributo se asigna al objeto siempre
//
// usuario1.presentarse()
// alumno1.whoIsyourFather()

 // console.log(usuario1)


//Funcion constructora
// function Usuario(nombres,apellidos,correo,activo){
// this.nombres=nombres
//     this.apellidos=apellidos
//     this.correo=correo
//     this.activo=activo
//      this.saludar = ()=> {
//     console.log(`Hola soy ${this.nombres}`)
//     }
// }
// const beto=new Usuario('Beto','Quiroga','beto@ed.team',true)
// const alexys=new Usuario('Alexys','Lozada','Alexys@ed.team',true)


//clases
class Usuario{
    constructor(nombres,apellidos,correo,activo) {
        this.nombres=nombres,
            this.apellidos=apellidos,
            this.correo=correo,
            this.activo=activo
    }
    presentarse(){
        return `Hola soy ${this.nombres} y mi correo es: ${this.correo}`
    }
    //Metodos getters y setters
    //GET ->obtener
    //SET ->Dar
    getAppelidos (){
        return this.apellidos
    }
    getNombres (){
        return this.nombres
    }
    setApellidos(apellidos){
        this.apellidos=apellidos
    }
}
//Herencia
class Profesor extends Usuario{
    constructor(nombres,apellidos,correo,activo,cursosDictados,calificacion) {
        super(nombres,apellidos,correo,activo)
        this.cursosDictados=cursosDictados
        this.calificacion=calificacion

    }
}

class alumno extends Usuario{
    constructor(nombres,apellidos,correo,activo,cursosTomados) {
        super(nombres,apellidos,correo,activo);
        this.cursosTomados=cursosTomados
    }
}
//instacianciar un objeto
 const beto=new alumno('Beto','Quiroga','beto@ed.team',true,["html","Drupal"])
 const alexys=new Profesor('Alexys','Lozada','Alexys@ed.team',true,["BD","Java"],10)

//imprimir instancias
    // console.log(beto)
    // console.log(alexys)

//
console.log(alexys)