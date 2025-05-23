const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Aixovall';
const units = 'metric'; // centigrades o 'imperial' per Fahrenheit
const language = 'ca';
const ciudad = document.getElementById("ciudad");
const temperatura = document.getElementById("temperatura");
const clima = document.getElementById("clima");
const max = document.getElementById("max");
const min = document.getElementById("min");
const velocidad = document.getElementById('velocidad');
const rafagas = document.getElementById('rafagas');
const orientacion = document.getElementById('orientacion');
const sensacio = document.getElementById('senstermic');
const altura = document.getElementById('altura');
const alturaMar = document.getElementById('altura-mar');
const imatge1 = document.getElementById('imatge1');
const imatge2 = document.getElementById('imatge2');
const imatge3 = document.getElementById('imatge3');
const imatge4 = document.getElementById('imatge4');
const infoData1 = document.getElementById('date1');
const infoData2 = document.getElementById('date2');
const infoData3 = document.getElementById('date3');
const infoData4 = document.getElementById('date4');
const textData1 = document.getElementById('desc1');
const textData2 = document.getElementById('desc2');
const textData3 = document.getElementById('desc3');
const textData4 = document.getElementById('desc4');

// WEATHER of today
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui: ', data);
    console.log("nhbgv");
    temperatura.textContent=`${Math.round(data.main.temp)}ºC`;
    max.textContent=`Màx. ${Math.round(data.main.temp_max)}º`;
    min.textContent=`Mín. ${Math.round(data.main.temp_min)}º`;
    ciudad.textContent=data.name;
    console.log(data.weather[0].description)
    clima.textContent = clima.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    const windspeed=data.wind.speed;
    const direction=data.wind.deg;
    const rafaguesData=data.wind.gust;
    const feelsLike=data.main.feels_like;
    const height=data.main.grnd_level;
    const seaHeight=data.main.sea_level;
    velocidad.textContent=`${windspeed} km/h`;
    orientacion.textContent=`${direction} º d'orientació`;
    rafagas.textContent=`${rafaguesData} de ràfagues`;
    sensacio.textContent=`${Math.round(feelsLike)}ºC de sensació tèrmica`;
    altura.textContent = `${height} m d'altura `
    alturaMar.textContent = `${seaHeight} hPa de pressió `
  })
  .catch(error => console.error('Error amb la petició:', error));

// FORECAST of the week
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('Previsió de 5 dies: ', data);
    
    // let icona=data.list.weather[0].icon;
    let icona = data.list[0].weather[0].icon;
    let icona2 = data.list[1].weather[0].icon;
    let icona3= data.list[2].weather[0].icon;
    let icona4= data.list[3].weather[0].icon;
    let data1= data.list[0].dt_txt;
    let data2= data.list[1].dt_txt;
    let data3= data.list[2].dt_txt;
    let data4= data.list[3].dt_txt;
    let infoText1= data.list[0].weather[0].description;
    let infoText2= data.list[1].weather[0].description;
    let infoText3= data.list[2].weather[0].description;
    let infoText4= data.list[3].weather[0].description;
    textData1.textContent = infoText1
    textData2.textContent = infoText2;
    textData3.textContent = infoText3;
    textData4.textContent = infoText4;

    infoData1.textContent=data1;
    infoData2.textContent=data2;
    infoData3.textContent=data3;
    infoData4.textContent=data4;
    imatge1.src=`https://openweathermap.org/img/wn/${icona}@2x.png`;
    imatge2.src=`https://openweathermap.org/img/wn/${icona2}@2x.png`;
    imatge3.src=`https://openweathermap.org/img/wn/${icona3}@2x.png`;
    imatge4.src=`https://openweathermap.org/img/wn/${icona4}@2x.png`;

    data.list.forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleString(); // Temps en format llegible
      const temperature = item.main.temp; // Temperatura
      const description = item.weather[0].description; // Descripció de l'estat del temps
      const icon = item.weather[0].icon; // Codi de l'icona del temps
      console.log(
        `A les ${time} hi haurà ${description} amb una temperatura de ${temperature}°C. Icona: ${icon}`
      );
    });
  })
  .catch(error => {
    console.error('Hi ha hagut un error:', error);
  });
