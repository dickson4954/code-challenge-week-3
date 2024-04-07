
let films = "http://localhost:3000/films"
function getmovies(){
    fetch(films)
    .then(res=>res.json())
    .then((data=>console.log(data)
))
    
}
console.log(getmovies())


document.addEventListener("DOMContentLoaded",async(event)=>{
    const movies=await getmovies()
    displaymovies(movies)
})

function displaymovies(movies){
    const moviescard=movies.map=((movies)=>{

        return `

        
        `
    })
}

