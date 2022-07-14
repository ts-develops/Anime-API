const base_url = 'https://api.jikan.moe/v4/anime'


function animeSearch(){
    fetch (base_url)
.then (result => result.json())
.then(data => console.log(data))
.catch (error => console.warn(error.message))
}

function pageLoad(){

}

window.addEventListener('load', pageLoad)
const click  = document.getElementById('button')
click.addEventListener('click', animeSearch)