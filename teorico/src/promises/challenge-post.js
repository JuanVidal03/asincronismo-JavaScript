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