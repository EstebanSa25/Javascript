export default class Curso{
    constructor(nombre,poster,clases) {
        this._inscritos=[]
        this._clases = clases;
        this._poster = poster;
        this._nombre = nombre;
    }

    getNombre (){
        return this._nombre
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }

    getClases() {
        return this._clases;
    }

    setClases(clases) {
        this._clases = clases;
    }

    getPoster() {
        return this._poster;
    }

    setPoster(url) {
        this._poster = url;
    }

    getInscritos() {
        return this._inscritos;
    }

    setInscritos(value) {
        this._inscritos = value;
    }
}