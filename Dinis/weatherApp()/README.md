# 🌦 Weather App - Inspirada en l'app d’iPhone

## 🔍 Descripció
Aquesta aplicació mostra la informació meteorològica actual d'una ciutat concreta, extreta en temps real a través de l'API d’OpenWeatherMap. El disseny s’inspira en la Weather App dels dispositius iPhone.

## 🛠 Tecnologies utilitzades
- HTML5
- CSS3 (amb Flexbox i Media Queries)
- JavaScript (fetch + DOM)
- API OpenWeatherMap

## ⚙️ Funcionalitats implementades
- Temperatura actual
- Estat del cel i icona meteorològica
- Sensació tèrmica, humitat i vent
- Hora de sortida i posta del sol
- Disseny responsive

## 🔗 Exemple de crida a la API
```js
fetch('https://api.openweathermap.org/data/2.5/weather?q=Andorra&units=metric&appid=LA_MEVA_API_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

## 🧪 Validació
- Testejat en Chrome i Firefox.
- Revisat amb consola del navegador.
- Comentaris en el codi.

## 📁 Estructura del projecte
```
/weather-app/
├── index.html
├── style.css
├── script.js
└── README.md
```
