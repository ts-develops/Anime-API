const base_url = 'https://api.jikan.moe/v4/anime'


// function animeSearch(){
//     fetch (base_url)
// .then (result => result.json())
// .then(data => console.log(data))
// .catch (error => console.warn(error.message))
// }
const image = document.createElement("img")
document.body.appendChild(image)

const btn = document.querySelector('button')
btn.addEventListener('click', pageLoad)

function pageLoad(){
fetch (base_url)
.then (response => response.json())
.then(json => {
    image.src = json[0].title
})
.catch (error => console.log(error.message))
}

// const click  = document.getElementById('button')


//click.addEventListener('click', animeSearch)