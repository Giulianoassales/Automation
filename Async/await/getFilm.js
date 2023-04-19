const axios = require('axios');


async function get_films(){
    const url = await axios.get('https://swapi.dev./api/films')
    let respuesta = url.data.results

    count = Object.keys(respuesta).length
    for(let i = 0; i<count; i++){
        console.log("Titulo:" + respuesta[i].title)
        console.log("Episodio:" + respuesta[i].episode_id)
        console.log("2Fecha de Estreno:" + respuesta[i].release_date)
      } 
}

get_films();



