 let films = "http://localhost:3001/films"
      document.addEventListener('DOMContentLoaded', async(event)=>{
          const films = await showFiles()
           viewMoviePoster(films)
           
      })
         
      
      function showFiles() {
          return fetch("http://localhost:3001/films",{
              method:"GET",
              headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json"
              }
          }
          )
              .then(res => res.json())
              .then(films => films)
      }
      
      const ul = document.getElementById("films")
      function movieTitles() {
          return fetch("http://localhost:3001/films")
          .then(res => res.json())
          .then(title => title.map(movie => {
            let li = document.createElement("li");
            li.textContent = `
            <div>
            <h3 id="${movie.id}"class="movies">${movie.TITLE}</h3> 
            </div>`
            ul.appendChild(li)
          }))
      }
      function viewMoviePoster(films){
        const card = document.querySelector('#photo')
        const box = document.createElement('div')
       const view = document.querySelectorAll(".movies")
       view.forEach(movieposters =>{
        movieposters.addEventListener('click',(event)=>{
          //console.log(event.target.id)
          const foundfilm = films.find((element)=>element.id === event.target.id)
          box.innerHTML =`
          <img src=${foundfilm.poster}>`
          card.appendChild(box)
        })
       })
      }