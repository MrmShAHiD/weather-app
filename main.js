const input = document.querySelector('.search-box');
const main = document.querySelector('#place');
const celcius = document.querySelector('#celcius');
const highLow = document.querySelector('.high-low');
const button = document.querySelector('.submit-button');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8d758e37dc9da5b1b2c4348d74dfa71c')
        .then(response => response.json())
        .then(data => console.log(data))

    .catch(error => alert('Wrong city name!'));
})