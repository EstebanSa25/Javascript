const title=document.getElementById('title')
// title.addEventListener('eventName',evenHandler)
const Holamundo=e=> console.log(`hola ${e.target.textContent}`)
//
//  title.addEventListener('click',Holamundo)
// document.querySelector('button').addEventListener('click',Holamundo)

// Eventos de mouse:
// -click
// -dblclick --doble click a un elemento
// mouseenter --hover
// mouseleave --cuando no esta en hover pero se tuve que hacer hover previamente
// contextmenu --click derecho
// mousedown --dejar presionado el click
// mouseup --soltar cuando se ha dejado presionado el click
// mousemove -- el mouse se mueve dentro de un elemento

// title.addEventListener('contextmenu',e=>{
//  Holamundo(e)
//  e.preventDefault() //Se usa para que no muestre un menu contextual cuando se da click derecho en un elemento
// })
const createMenu=e=>{
 const menu=document.createElement('div')
 const prevmenu=document.getElementById('context-menu')
 menu.id='context-menu'
 if (prevmenu) document.body.removeChild(prevmenu)

 menu.textContent='Soy un menu contextual'
 document.body.appendChild(menu)
 menu.style.padding='1em'
 menu.style.background='#eee'
 menu.style.position='fixed'
 menu.style.top=`${e.pageY}px`
 menu.style.left=`${e.pageX}px`
}

// title.addEventListener('contextmenu',e=>{
//  createMenu(e)
//  e.preventDefault()
// })


// Eventos de teclado:
//keydown
//keyup
//keypress

// const input=document.getElementById('input')
// let x=0,y=0
// addEventListener('keyup',e=>{
//
//     const ball=document.getElementById('ball')
//     const move=()=> ball.style.transform=`translate(${x*20}px,${y*20}px)`
//     const  up=()=> {
//         y--
//         move()
//     }
//     const  down=()=> {
//         y++
//         move()
//     }
//     const  left=()=> {
//         x--
//         move()
//     }
//     const  right=()=> {
//         x++
//         move()
//     }
//  switch (e.key) {
//   case 'ArrowUp':
//       up()
//     break;
//   case 'ArrowDown':
//       down()
//     break;
//   case 'ArrowLeft':
//       left()
//     break;
//   case 'ArrowRight':
//       right()
//     break;
//
//  }
// })
const hola=1,le=1
const form=document.getElementById('form'),
    remmenberPassword=document.getElementById('remmenber-password')



//Enventos de DOM
// addEventListener('DOMContentLoaded',()=>{
//  form.addEventListener('submit',()=>{
//   console.log('Ha enviado el formualario')
//  })
//  remmenberPassword.addEventListener('change',e=>{
//   if (e.target.checked){
//    console.log('El usuario quiere recordar su contraseña')
//   }else{
//    console.log('El usuario no quiere recordar su contraseña')
//   }
//  })
// })

addEventListener('scroll',e=>{
 console.log(screenX,scrollY)
})
addEventListener('resize',e=>{
 console.log(innerWidth,innerHeight)
 console.log(outerHeight,outerWidth)
})

//Eventos multimedia
// const video=document.getElementById('video'),
//     playButton=document.getElementById('play'),
//     pauseButton=document.getElementById('pause')
// playButton.addEventListener('click',()=>{
//  video.play()
// })
// pauseButton.addEventListener('click',()=>{
//  video.pause()
// })

// document.querySelectorAll('div').forEach(el=>{
//  el.addEventListener('click',e=>{
//    console.log(`Hiciste click en el div ${e.target.id}`)
//   e.stopPropagation()
//  })
// })

const gallery=document.getElementById('gallery')
gallery.addEventListener('click',e=>{
 const t=e.target
 const images=Array.from(gallery.querySelectorAll('img'))
 const  i=images.indexOf(t)

 console.log(`Hiciste click en la imagen ${i + 1}`)
})