const hash='a9b829324bd286fbf374b2ed4314e988'
const apikey='30f9fa6c69c85b45959513655c1653a8'
const url=`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&nameStartsWith=iron%20man`

const STATUS_OK=200,
    STATUS_CREATED=201,
    STATUS_NOT_FOUND=404

btn.addEventListener('click',()=>{
    loadComics()
})

const loadComics=async ()=>{
  const response=await fetch(url)
    switch (response.status){
        case STATUS_OK:
            const json= await response.json()
            draw(json.data.results)
            break;
        case STATUS_NOT_FOUND:
            console.log('No  se encontro informacion')
            break;
    }

}
const draw = data=>{
    const container=document.createElement('div')
    data.forEach(comic=> {
        console.log(comic)
        const comicHTML=`
       <div>
       <h2>${comic.name}</h2>
     
       <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
</div>
       `
        container.insertAdjacentHTML('beforeend',comicHTML)
    })
    myContent.appendChild(container)
}