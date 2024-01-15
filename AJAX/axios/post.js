const form=document.getElementById('form')
const persona={
    name:document.getElementById('name').value,
    lastname :document.getElementById('Lastname').value,
    age :document.getElementById('age').value,
    active:document.getElementById('active').value
}

const myHeaders=new Headers()
myHeaders.append('Content-type','application/json')
myHeaders.append('Authorization','Bearer')
const myConfig={
    method:'POST',
    headers:myHeaders,
    body:JSON.encode(persona)
}
const response= await fetch('/la-url-de-mi-api',myConfig)
const data= await response.json()
console.log(data)