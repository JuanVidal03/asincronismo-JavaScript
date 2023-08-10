// los callbacks son funciones que reciben cómo parametro otras funciones

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

function mostrarSaludo(callback) {
    // llamo a la función y le paso por parametro el nombre
    console.log(callback('Juan'));
}
// se ejecuta una funcio´n que está dentro de otra
// se llama callback sin parentesis para que no se ejecute de inmediato
mostrarSaludo(saludar);


// EJEMPLO DE CALLBACKS CON OPERACIONES
function suma(num1,num2) {
    return num1 + num2
}

function resta(num1,num2) {
    return num1 - num2
}

function operacion(num1, num2, callback) {
    

    console.log(callback(num1, num2));
}

operacion(3, 5, resta);

// OTRA DE CALLBACKS SON LOS INTERVALOS
// va a hacer este console.log despues de 5 segundos, es un metodo que recibe como parametro una funcion más el tiempo de demora
setTimeout(() => {
    console.log('Hola mundo');
}, 5000)