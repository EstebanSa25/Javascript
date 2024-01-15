let ws=null
const setText=data=>{
    const msg=`<div>${data}</div>`
    chat.insertAdjacentHTML('beforeend',msg)
}
btnConnect.addEventListener('click',e=>{
    ws=new WebSocket('wss://demos.kaazing.com/echo')
    ws.onopen=()=>setText('Conectado')
    ws.onclose=()=>setText('Desconectado')
    ws.onerror=e=>setText(e)
    ws.onmessage=e=>{
        setText(e.data)
    }
})

btnDisconnect.addEventListener('click',e=>{
ws.close
})

btnSend.addEventListener('click',e=>{
    ws.send(txtMsg.value)
})