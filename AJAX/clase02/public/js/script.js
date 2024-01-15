

const c = document.getElementById('myContent')
const b = document.getElementById('btnLoadJSON')
const l = document.getElementById('loading')
const STATUS_OK = 200
const STATUS_CREATED = 201
const STATUS_UNAUTHORIZED = 401
const STATUS_NOTFOUND = 404
const STATUS_INTERNALSERVERERROR = 500
l.style.display = 'none'

b.addEventListener('click', evt => {
    l.style.display = 'block'

    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/json', true)

    // Qué se debe hacer con la data?
    xhr.addEventListener('load', e => {
        switch (e.target.status) {
            case STATUS_OK:
                const data = JSON.parse(e.target.responseText)
                draw(data)
                break;
            case STATUS_UNAUTHORIZED:
                c.textContent='No estas autorizado para realizar esta accion'
                break;
            case STATUS_NOTFOUND:
                c.textContent='Hubo un error en el servidor'
                break;
            case STATUS_INTERNALSERVERERROR:
                c.textContent='No existe informacion....'
                break;

        }
        console.log(e.target.status)

        l.style.display = 'none'
    })

    // Realice la petición
    xhr.send()
})
const draw=data=>{
    c.innerHTML=''
    const f=document.createDocumentFragment()

    data.forEach(n=>{
        const container = document.createElement('div'),
            title=document.createElement('h2'),
            content=document.createElement('p'),
            datenew=document.createElement('span')
        title.textContent=n.Titulo
        content.textContent=n.Contenido
        datenew.textContent=n.Fecha
        container.appendChild(title)
        container.appendChild(content)
        container.appendChild(datenew)
        f.appendChild(container)
    })
    c.appendChild(f)
}
