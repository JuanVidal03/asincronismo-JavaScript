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


## Practico