#Asincronismo con JavaScript - Juan Vidal

En este repositorio se encuentra información relacionada con el asincronismo en JavaScript, siguiendo el curso de "Asincronismo con JavaScript" de Platzi.  

Este repo está separado por dos carpetas pruincipales, una llamada "teorico" y otra "practica", ya que este curso se desarrolla tanto teorica como practicamente.

##Teorico

Dentro de la carpeta 'src' van a estar separadas por carpetas los diferentes temas tratados.

####Callback 
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
(ver el archivo ./src/callbacks/main.js)

###XMLHTTPRequest
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



(ver el archivo ./src/callbacks/challenge.js)


##Practico