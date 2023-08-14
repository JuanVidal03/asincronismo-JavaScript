// Estructura de promesas
const promise = new Promise((resolve, reject) => {
    resolve('Funciona'); // resolución de promesa
});


// EJERCICIOS
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