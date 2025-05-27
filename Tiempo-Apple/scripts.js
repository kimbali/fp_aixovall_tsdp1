const key='5ef7ce3c1123aeb7437b50252730ecbf';
let call=`https://api.openweathermap.org/data/3.0/onecall?lat=42.4764&lon=1.4895&appid=${key}`;

async function meteo(){
  fetch(call)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos del clima:', data);
  })
  .catch(error => {
    console.error('Hubo un error con la llamada a la API:', error);
  });
}
meteo();