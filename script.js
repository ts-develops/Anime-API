// name of the API
const base_url = 'https://api.jikan.moe/v4/anime'

//promising to return fetch API
fetch (base_url)
.then (data => {
// turning it into array of data
return data.json()
})
.then(completedata => {
    //accessing data to return specific array and information
    //console.log(completedata.data[2].title)

    let information = " "
    //mapping to change whole data thats being grabbed
    completedata.data.map((values)=> {
        // using += lets data be displayed for all the API data(not one specific information)
        information += `<div class="card" style="width: 20rem">
        <img class="card-img-top" src="${values.images.jpg.image_url}" alt="anime" />
        <div class="card-body text-center">
          <h5 class="card-title">${values.title}</h5>
        </div>
      </div>`
document.getElementById('cards-data').innerHTML= information
    })
})
//if none of the above work catch promise is displayed
.catch (error => console.log(error.message))

// }

// const click  = document.getElementById('button')


//click.addEventListener('click', animeSearch)