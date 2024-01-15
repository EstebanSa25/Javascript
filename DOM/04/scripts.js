// window.open('https://ed.team/','Edteam','width=200,height=400')
// const form=document.getElementById('responsive-tester-form')
//
// if (form){
//     form.addEventListener('submit',()=>{
//         let width=form.querySelector('#width'),
//             height=form.querySelector('#height'),
//             url=form.querySelector('#url')
//
//         if(width && height && url){
//             width=width.value
//             height=height.value
//             url=url.value
//         }
//         window.open(url,url,`innerWidth=${width},innerHeight=${height}`)
//     })
// }
// let contador=0
// setInterval(()=>{
//     contador++
//     if(contador>1){
//         console.log(`hola  ${contador} veces`)
//     }else{
//         console.log(`hola  ${contador} vez`)
//     }
//
// },1000)

// console.log(new Date().toLocaleTimeString())
// setInterval(()=>{
//     const clock=document.getElementById('clock')
//     if (clock) clock.textContent=new Date().toLocaleTimeString()
// },1000)

const aniversario=new Date(2000,4,21)
console.log(aniversario)