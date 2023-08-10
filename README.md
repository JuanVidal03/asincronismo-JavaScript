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


##Practico