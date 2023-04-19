const axios = require('axios');


async function get_films(){
    try{
    const url = await axios.get('https://swapidev./api/films')
    let respuesta = url.data.results

    count = Object.keys(respuesta).length
    for(let i = 0; i<count; i++){
        console.log("Titulo:" + respuesta[i].title)
        console.log("Episodio:" + respuesta[i].episode_id)
        console.log("Fecha de Estreno:" + respuesta[i].release_date)}
    }
    catch(error){
        console.log("test catch async/await")
    }    
     
}

get_films();



