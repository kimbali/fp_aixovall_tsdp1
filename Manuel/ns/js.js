const API_KEY = "212ebafd80e67458b4fdf2fe666f697f";
const city = "Aixovall";
const units = "metric";
const language = "ca";

const lat = 42.4667;
const lon = 1.4833;

const grados = document.getElementById("grados");
const info = document.getElementById("masInfo");
const maxmin = document.getElementById("maxmin");
const semanaDiv = document.getElementById("semana");

const diesSetmana = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];

// Temps actual
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const descr = data.weather[0].description;
    const tempMax = Math.round(data.main.temp_max);
    const tempMin = Math.round(data.main.temp_min);

    grados.textContent = `${temp} °C`;
    info.textContent = `${descr}`;
    maxmin.textContent = `Màx. ${tempMax}°C - Mín. ${tempMin}°C`;
  })
  .catch(error => console.error("Error carregant el temps actual:", error));

// Previsió setmanal
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    semanaDiv.innerHTML = "";

    data.list.slice(1, 8).forEach((dia) => {
      const date = new Date(dia.dt * 1000);
      const nomDia = diesSetmana[date.getDay()];
      const temp = Math.round(dia.main.temp);
      const icon = dia.weather[0].icon;

       dayHtml = `
        <div style="text-align: center; margin: 0 10px;">
          <h3>${nomDia}</h3>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${dia.weather[0].description}" style="width: 60px; height: 60px;">
          <p>${temp}°C</p>
        </div>
      `;
      semanaDiv.innerHTML += dayHtml;
    });
  })
  .catch(error => console.error("Error carregant la previsió setmanal:", error));
