// console.log(parent.hasChildNodes())
// const childs=Array.from(parent.children)
// const newElement=document.createElement('h2')
// const childPrent=childs.filter(child=>child.children.lenght>0)[0],
// grandSons=childPrent.children,
// grandSon3=childs.filter(child=>child.textContent.trim()==='Nieto-3'[0])
// parent.insertBefore(newElement,grandSon3)
/** DOM traversing
 * Hijos
     * childNodes
    * children
    * firtsChild
    * firstElementChild
    * lastChild
    * lastElementChild
    * hasChildNodes
 *Hermanos
    * nextSibling
    * nextElementSibling
    * previousSibling
    * previousElementSibling
 * Padre
 * parentNode
 * parentElement
 */
//  newElement.textContent="Soy un nuevo elemento"
// const grandson=document.getElementById('grandson2')
// console.log(grandson.parentElement.parentElement)


// parent.appendChild(newElement)
// childPrent.insertBefore(newElement,grandSon3)
// console.log(childs.filter(child => child.children.length>0))

// const post=document.getElementById('post')
 const ad=document.createElement('div')
// ad.id='publicidad'
 ad.textContent='Publicidad'
// const getMiddleChild=element=>{
//     const childs =element.children,
//         l=childs.length,
//         i=Math.floor(l/2)
//     return childs[i]
// }
// console.log(getMiddleChild(post))
// const middleChild=getMiddleChild(post)
//
// post.insertBefore(ad,middleChild)

// const parent=document.getElementById('parent')
/**
 *Posiciones
    * beforebegin
        * hermano anterior
    * afterbegin
        * primer hijo
    * beforeend
        * ultimo hijo
    * afterend
        * hermano siguiente
 */
// parent.insertAdjacentElement('afterbegin',ad)
// parent.replaceChild(ad,parent.children[0])
//clonar y eliminar elementos
 //const newBuyBlock=$0.cloneNode(true)
//CreateDocumentFragment()

// const teachers=['Alexys','Beto','Alvaro','Daniel','Jon']
// const teacherList=document.createElement('ul')
// const teacherListContainer=document.getElementById('teacher-list')
// const teacherListFragment=document.createDocumentFragment()
// teacherListContainer.appendChild(teacherList)
// for (let teacher of teachers){
// const li=document.createElement('li')
//  teacherListFragment.appendChild(li)
//  li.textContent=teacher
// }
// teacherList.appendChild(teacherListFragment)
//
// const template=document.getElementById('template')
//
// const myNewTemplate=template.content.cloneNode(true)
// myNewTemplate.querySelector('h2').textContent='EDteam'
// myNewTemplate.querySelector('p').textContent='tu futuro te esta esperando'
// document.getElementById('content').appendChild(myNewTemplate)

const title=document.querySelector('h1'),
    description=document.querySelector('p')
// title.style.color='red'
//
// const mediumBp=matchMedia('(min-width:640px) and (orientation:portrait)')
// const changeColor=()=>{
// if (mediumBp.matches){
//  document.body.style.background='red'
// }else{
//  document.body.style.background='yellow'
// }
// }
// addEventListener('DOMContentLoaded',changeColor)
// addEventListener('resize',changeColor)

console.log(getComputedStyle(title).fontSize)
//$0.getBoundingClientRect()