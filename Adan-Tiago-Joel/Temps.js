// API key de OpenWeatherMap
const API_KEY = '70e9c67c12891f08f3cf4f13740f1342';

// Elementos del DOM
const cityList = document.querySelector('.city-list');
const menuIcon = document.querySelector('.menu-icon');
const cities = ['Barcelona', 'Madrid', 'Paris', 'Andorra']

const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('card');
      
      const icon = data.weather[0].icon;
      const temp = Math.round(data.main.temp);
      const cityName = data.name;
      const time = new Date().toLocaleTimeString();

      cityCard.innerHTML = `
        <span class="city">${cityName}</span>
        <span class="icon"><img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon"></span>
        <span class="temp">${temp}°C</span>
        <span class="hour">${time}</span>
        <button class="remove-btn">Eliminar</button>
      `;
      
      const removeBtn = cityCard.querySelector('.remove-btn');
      removeBtn.addEventListener('click', () => {
        cityCard.remove();
      });

      cityList.appendChild(cityCard);
    })
    .catch(error => console.log('Error al obtener datos:', error));
};

cities.forEach(city => getWeather(city));

menuIcon.addEventListener('click', () => {
  alert('Agregar más opciones aquí...');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}