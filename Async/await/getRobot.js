const axios = require('axios');


async function get_robot(){
    try{
    const url = await axios.get('https://swapi.dev./api/people')
    let respuesta = url.data.results

    count = Object.keys(respuesta).length
    for(let i = 0; i<count; i++){
        if (respuesta[i].name === "C-3PO" || respuesta[i].name === "R2-D2"){
            console.log("Nombre: " + respuesta[i].name)
            console.log("Altura: " + respuesta[i].height)
            console.log("Sexo: " + respuesta[i].gender)
            }
        }    
    }
    catch(error){
        console.log("test catch async/await")
    }    
     
}

get_robot();