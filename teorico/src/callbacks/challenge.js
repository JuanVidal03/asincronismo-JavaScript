// importanto recurso XMLHTTPRequest
const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'; // url de la api


// función que obtiene la información
function fetchData(urlAPI, callback) {
    
    // se crea una instancia
    let xhttp = new XMLHTTPRequest();
    // abre una conexión, valor 1 metodo, valor 2 urlAPI, valor 3 estado
    xhttp.open('GET', urlAPI, true);
    // el proceso de tramite de la información
    xhttp.onreadystatechange = function(event){

        // validadno que el valor se haya cargado correctamente
        if(xhttp.readyState === 4){
            // estado de la peticion
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));

                // en caso de no haberse cargado la información
            } else{
                const error = new Error(`Error ${urlAPI}`);
                return callback(error, null);
            }
        }
    }

    // ejecutando la petición
    xhttp.send();
}

// llamado de la función, obteniendo todos los productos
fetchData(`${API}/products`, function(error1, data1){
    // encaso de que haya un error
    if(error1) return console.log(error1);
    // si es exitosa la petición, va acceder al id del primer producto de la api
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        // en caso de un error
        if(error2) return console.log(`Error al obtener el producto: ${error2}`);
        // en caso de que sea exitoso
        fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3){
            // en caso de errore
            if(error3) return console.log(`Error, ${error3}`);
            // mostrando un producto la data
            console.log(data1[0]);
            // mostrando el titulo de un producto
            console.log(data2.title);
            // mostrar el nombre de la categoria
            console.log(data3.name);
        })
    })
})