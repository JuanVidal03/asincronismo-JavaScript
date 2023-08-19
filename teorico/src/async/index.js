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