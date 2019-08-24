import degreeUnit from './degree';
import fetchImage from './fetchImage';

const display = document.getElementById('display');
const submit = document.getElementById('submit');
const weatherAPI = process.env.weatherAPI;

const weatherCall = () => {
  const location = document.getElementById('location').value;
  const unit = document.getElementById('unit').value;
  const weatherData = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${weatherAPI}`;
  fetch(weatherData, {
    mode: 'cors',
  }).then((data) => data.json()).then((res) => {
    switch (res.cod) {
      case 200: fetchImage(res.weather[0].main);
        display.innerHTML = '';
        display.innerHTML += `
      <div class="infoHold">
      <span id="1">City: ${res.name}</span>
      <span id="1">Humidity: ${res.main.humidity}</span>
      <span id="1">
        Temperature: ${degreeUnit(unit, res.main.temp)}
      </span>
      <span id="1">Description: ${res.weather[0].description}</span>
      <span id="2">Outcome: ${res.weather[0].main}</span>
      </div>
    `;
        break;
      default: display.innerHTML = '';
        display.innerHTML += `<span>
        <img src="../dist/assets/img/11.png" alt="error">
      </span>`;
    }
  }).catch(() => {
    display.innerHTML += `<span>
        <img src="../dist/assets/img/11.png" alt="error">
      </span>`;
  });
};
submit.addEventListener('click', weatherCall, false);
