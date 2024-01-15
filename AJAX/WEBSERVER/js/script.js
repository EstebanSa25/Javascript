const c=document.getElementById('myContent')
const b=document.getElementById('btnLoad')
b.addEventListener('click',evt=>{
    const xhr=new XMLHttpRequest()
    console.log('objeto creado: ',xhr.readyState)
    xhr.open('GET','http://localhost:63342/AJAX/WEBSERVER/data.html?',true)
    console.log('Objeto abierto: ', xhr.readyState)
    //Que debe hacer con la data
    xhr.addEventListener('load',e=>{
        console.log(e.target)
        console.log('OBJETO CARGADO ',xhr.readyState)
    c.innerHTML=e.target.responseText
    })

    //Realice la peticion
    xhr.send()
    console.log('Accion solicitado ',xhr.readyState)
})