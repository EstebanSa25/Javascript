// const title=document.getElementById('title'),
//  title2=document.querySelector('#title'),
//  listItems=document.querySelectorAll(' ul li'),
//  secondItem=document.querySelector(' ul li:nth-child(2)'),
//     list=document.getElementById('List')
//  //list=document.getElementById('list')
// title.style.background='yellow'
// console.log(title2)
// console.log(listItems[0])
// console.log(secondItem)
// console.log(list.querySelector('li'))
// const items=document.querySelectorAll('li') ,
//     elementlist=document.getElementsByTagName('li')
// console.log(items)
// console.log(elementlist)


// const nodelist=Array.from(document.querySelectorAll('li'))
// nodelist.map(el=> {
//    if (el.textContent.trim().toLocaleUpperCase()==='OBJECT'){
//        el.remove()
//    }
// })


const nodelist=document.querySelectorAll('li')
for (let el of nodelist){
    if (el.textContent.trim().toLocaleUpperCase()==='OBJECT'){
     el.remove()
   }
}

// const title=document.getElementById('title')
// if (title){
//     title.style.background='yellow'
// }
// console.log("HOLA MUNDO")

// const title=document.querySelector('h1')
// title.id='title'
// title.classList.add('main-title','title-fron-page')

// const title=document.querySelector('h1')
// console.log(`Text-content --${title.textContent}`)
// console.log(`Inner --${title.innerHTML}`)
// console.log(`Outer --${title.outerHTML}`)
// const title=document.querySelector('h1')
// title.innerHTML=`Hola mama,<em>estoy en clase</em>`

///////crear elementos
const profesorContainer=document.getElementById('teacher')
const profesor=document.createElement('p')
profesor.textContent='Alexys Lozada'
profesor.classList.add('teacher')
if (profesorContainer && profesorContainer.querySelector('span')){
    profesorContainer.querySelector('span').appendChild(profesor)
}
