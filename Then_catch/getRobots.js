const axios = require('axios');

axios.get('https://swapi.dev/api/people/')
  .then((response) => {
    all = response.data.results

    count = Object.keys(all).length 
       
    for (let i = 0; i<count; i++){
        if (all[i].name === "C-3PO" || all[i].name === "R2-D2"){
            console.log("Nombre: " + all[i].name)
            console.log("Altura: " + all[i].height)
            console.log("Sexo: " + all[i].gender)
        }    
      }
    }
  ).catch(error => 
    console.log("catch error robots")) 

    