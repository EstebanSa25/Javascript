import Curso from "./Class/Curso.js";
import Profesor from "./Class/Profesor.js";
import Alumno from "./Class/Alumno.js";
const elem=document.getElementById('cursos')

//imprime un curso en el DOM
const mostrarCurso=(curso)=>{//Recibe un objeto de tipo curso
    const hijo=document.createElement('div')
    hijo.classList.add('card')
    hijo.innerHTML=`
 <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
</div>
 <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
<div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <span class="small">Cantidad de clases: ${curso.getClases()}</span>
      </div>
    </div>
`
    elem.appendChild(hijo)
}

const formulario=document.getElementById('formCursos')

formulario.addEventListener('submit',e=>{
    e.preventDefault()
    const target=e.target

const curso=new Curso(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value)
    mostrarCurso(curso)
    // mostrarCurso()
})
//llamadas a la funcion
const profe=new Profesor('Beto','Quiroga','beto@ed.team',true,["JS","React"],10)
console.log(profe)
const alumno1=new Alumno('Juanito','Perez','Juan@ed.team',false,['HTML','CSS'])
const alumno2=new Alumno('Maria','Rodriguez','maria@ed.team',false,['Drupal','JS'])



const html=new Curso('HTML DESDE CERO','nada',7)
html.setInscritos([...html.getInscritos() ,alumno1])
console.log(html)
html.setInscritos([...html.getInscritos(),alumno2])

const formUsuarios=document.getElementById('formUsuarios')
const btnUsuario=formUsuarios.querySelector('#buttonUsuario')
const UsuarioRol=document.getElementById('rolUsuario')
const usuario_input=document.createElement('div')
const Rol=(rol)=>{

    let label=''
    if (rol==="Profesor"){
         label='Cursos dictados'
    }else if(rol==="Alumno"){
        label='Cursos inscritos'
    }
    usuario_input.classList.add('form-item')
    usuario_input.innerHTML=`
      <label>
                   ${label}
                    <input type="text"  name="cursos${rol}" required>
                </label>
      `
    btnUsuario.insertAdjacentElement('beforebegin',usuario_input)
    btnUsuario.value=`Crear ${rol}`
}

UsuarioRol.addEventListener('change',()=>{
if (UsuarioRol.value==='Profesor'){
    Rol(UsuarioRol.value)
}else{
    Rol(UsuarioRol.value)
}

})

addEventListener('DOMContentLoaded',()=>{
    if (UsuarioRol.value==='Profesor'){
        Rol(UsuarioRol.value)
    }else{
        Rol(UsuarioRol.value)
    }

})

formUsuarios.addEventListener('submit',e=>{


    const target=e.target
   if (target.rolUsuario.value==='Profesor'){
       try {
           console.log('Profesor')
           console.log(target.cursosProfesor.value)
           const profeCreado=new Profesor(target.nombreUsuario.value,target.apellidoUsuario.value,target.correoUsuario.value,target.activoUsuario.value,[target.cursosProfesor.value],10)
           console.log(profeCreado)
       }catch (error) {
           console.log(error)
       }

   }else if (target.rolUsuario.value==='Alumno'){
       const alumnoCreado=new Alumno(target.nombreUsuario.value,target.apellidoUsuario.value,target.correoUsuario.value,target.activoUsuario.value,[target.cursosAlumno.value])
       console.log(alumnoCreado)
   }
    e.preventDefault()

})

