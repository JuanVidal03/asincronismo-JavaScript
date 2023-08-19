# Asincronismo con JavaScript - Juan Vidal

En este repositorio se encuentra información relacionada con el asincronismo en JavaScript, siguiendo el curso de "Asincronismo con JavaScript" de Platzi.  

Este repo está separado por dos carpetas pruincipales, una llamada "teorico" y otra "practica", ya que este curso se desarrolla tanto teorica como practicamente.

## Teorico

Dentro de la carpeta 'src' van a estar separadas por carpetas los diferentes temas tratados.

#### Callback 
Los callback son funciones que reciben por parametro otras funciones, por ejemplo:

```
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

function mostrarSaludo(callback) {
    // llamo a la función y le paso por parametro el nombre
    console.log(callback('Juan'));
}
```

Dentro de los callbacks también están los metodos cómo setTimeOut(), setInterval(), entre otros.
(ver el archivo ./teorico/src/callbacks/main.js)

### XMLHTTPRequest
Es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).

Existen 5 estados en un llamado XMLHttpRequest:

0 → Se ha inicializado.
1 → Loading (cargando).
2 → Se ha cargado.
3 → Procesamiento si existe alguna descarga.
4 → Completado.


Métodos y propiedades:

xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
xmlhttp.readyState → Retorna el estado de la petición (0, 1, 2, 3, 4).
xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
xmlhttp.send() → Envía la petición.

(ver el archivo ./teorico/src/callbacks/challenge.js)

### Promesas
Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.

Las promesas pueden suceder:

<ul>
    <li>Ahora</li>
    <li>En el futuro</li>
    <li>Nunca</li>
</ul>

Las promes son constructores que reciben dos parametros; resolve y reject. Con resolve damos solucione a nuestra promesa, más que con reject manejamos los errores.

Almacenamos nuestra promesa en una variable y luego damos solución a está usando los metodos then() y catch(), dependiendo si el resultado es positivo o negativo, y por ultimo usamos el metodo .finally() para decir que el proceso ha terminado

Un ejemplo claro de esto es:

```
// numero de vacas
const vacas = 5;

const contarVacas = new Promise((resolve, reject) => {
    // validando cuantas vacas hay
    if (vacas > 10) {
        resolve(`Tenemos ${vacas} vacas en la granja`); // resolviendola
    } else {
        reject('No tenemos más de 10 vacas en la granja'); // rechazandola
    }
})

// en caso de ser positivo
contarVacas.then(res => {
    console.log(res);
    // en caso de ser negativo
}).catch(err => {
    console.log(err);
    // cuando el proceso haya terminado
}).finally(() => {
    console.log('Fin proceso');
})
```
#### Fetch

Otro ejemplo de promesas pero más aplicadas a la vida real es la forma de hacer peticiones http usando fetch.

Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.

Un ejemplo de una petición get a la API de platzi:

```
// url de la api a usar
const API = 'https://api.escuelajs.co/api/v1';

// función donde hago el fetch de la api
function fetchData(urlApi) {
  return fetch(urlApi);
}

// llamado de la función
fetchData(`${API}/products`)
  .then(res => res.json())
  .then(products => {
    // todos los productos
    console.log('TODOS LOS PRODUCTOS')
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`) // solo el primer producto
  })
  .then(res => res.json())
  .then(product => {
    // primer producto
    console.log('PRIMER PRODUCTO')
    console.log(product)
    return fetchData(`${API}/categories/${product.category.id}`) // categoria del primer producto
  }) 
  .then(res => res.json())
  .then(product => {
    // imprimiendo el primer producto
    console.log('NOMBRE CATEGORIA')
    console.log(product.name)
  }) 
  .catch(err => console.log(`Error al obtener un solo producto: ${err}`)) // manejo de errore
  .finally(() =>  console.log('Fin de la petición')); // fin de la petición
```
Para hacer peticiones tipo "POST" use usa la siguiente estructura:

```
// url de la API
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  // defiendo el metodo post para el envio
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response;
}

const data = {
  "title": "Oversize T-shirt",
  "price": 59.99,
  "description": "Beauty oversize t-shirt",
  "categoryId": 1,
  "images": ["https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
}

postData(`${API}/products`, data)
  .then(res => res.json())
  .then(data => console.log(data))
```

#### Async / Await

Esta es una manera de hacer peticiones http, viene con una de las ultimas versiones de ECMAScript, es muy eficiente a la hora de usarla, ya que con usar dos palabras reservadas del lenguaje se puede evitar hacer todo el proceso con fetch, aqui se muestra un ejemplo claro de cómo sería su uso:

```
// generando una promesa para luego llamarla desde una función asincrona
const promiseFunction = () => {
  
  return new Promise((resolve, reject) => {
    // operador ternario para dar solución a la promesa
    (true)
      ? setTimeout(() => resolve('Async!'), 3000)
      : reject(new Error('Error!'))
  })
}

// funcion asincrona
const asyncFunction = async () => {
  // llamando y haciendo una espera a la funcion
  const functionResponse = await promiseFunction();
  // mostrando el resultado
  console.log(functionResponse);

}

asyncFunction();
```

Un ejemplo claro de como hacer peticiones tipo get usando try y catch para el manejo de errores es el siguiente: (cabe recalcar que try y catch se usa para manejar los errores de una manera ordenada en los procesos asincronos)

```
const API = 'https://api.escuelajs.co/api/v1'; // url de la api

const fetchData = async(urlApi) => {
  const response = await fetch(urlApi); // la respuesta de la API
  const data = response.json(); // la convertirmos a un formato json

  return data; // retornamos todos los productos
}

// mostrando los productos y sus variantes
const showingProducts = async(urlApi) => {
  // se usa try y catch para el manejoi de errore en las peticiones asincronas
  try {
    const products = await fetchData(`${urlApi}/products`); // todos los productos
    console.log(products);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`); // oobteniendo un solo producto
    console.log(product)
    const categoria = await fetchData(`${urlApi}/categories/${product.category.id}`); // obteniendo la categoria
    console.log(categoria);

    // en caso de que ocurra un error
  } catch (error) {
    console.log(`Hubo un error al obtener la data: ${error}`);
  }
}


showingProducts(API);
```

La anterior informacion y ejemplos están en la siguiente ruta: teorico/src/async

## Practico