export default class Usuario {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
            this.apellidos = apellidos,
            this.correo = correo,
            this.activo = activo
    }
    presentarse() {
        return `Hola soy ${this.nombres} y mi correo es: ${this.correo}`
    }
    //Metodos getters y setters
    //GET ->obtener
    //SET ->Dar
    getAppelidos() {
        return this.apellidos
    }
    getNombres() {
        return this.nombres
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos
    }

}