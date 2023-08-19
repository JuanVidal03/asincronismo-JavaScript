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