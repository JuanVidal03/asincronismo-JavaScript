// link de la api a usar
const API = 'https://api.escuelajs.co/api/v1';

// función donde hago el fetch de la api
function fetchData(urlApi) {
  return fetch(urlApi);

}

/*
// EJEMPLO PRINCIPAL
// llamado a la funcion y usando metodos para manejo de errore y mostrar la información
fetchData(`${API}/products`)
.then(res => res.json()) // convierte la información traida en formato json
.then(prodcuts => console.log(prodcuts)) // imprimo el contenido json
.catch(err => console.log(`Error: ${err}`)) // para manejo de errores
*/


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