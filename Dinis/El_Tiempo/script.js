const API_KEY= "43012035ea348394ef9196172a7355c3";
const ciutat= "Andorra la vella";
const url= 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ca&appid=${API_KEY}';

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data);
});

