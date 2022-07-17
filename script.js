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
    
    let information =""
    //mapping to change whole data thats being grabbed
    completedata.data.map((values)=> {
        information = ``
    })
})
//if none of the above work catch promise is displayed
.catch (error => console.log(error.message))

// }

// const click  = document.getElementById('button')


//click.addEventListener('click', animeSearch)