const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchBox.value);
    }
}

function getResults(query){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=8d758e37dc9da5b1b2c4348d74dfa71c`)
    .then(weather => {
        return weather.json();
    })
    .then(display);
}

function display(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)} °C`;

    let weathers = document.querySelector('.current .weather');
    weathers.innerText = weather.weather[0].main;

    let hiLo = document.querySelector('.hi-lo');
    hiLo.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)} °C`;
}

function dateBuilder(d){
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}