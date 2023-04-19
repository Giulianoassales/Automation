const axios = require('axios');

axios.get('https://swapi.dev/api/films/')
  .then((response) => {
    all = response.data.results
    count = Object.keys(all).length
    for (let i = 0; i<count; i++){
      console.log("Titulo:" + all[i].title)
      console.log("Episodio:" + all[i].episode_id)
      console.log("Fecha de Estreno:" + all[i].release_date)
    } 
  })

  
