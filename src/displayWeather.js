import fetchImage from './fetchImage';
import fetchData from './fetchData';
import degreeUnit from './degree';
import error from './error';

const display = document.getElementById('display');

const displayWeather = async () => {
  const { cod, main, weather, unit, name } = await fetchData();
  switch (cod) {
    case 200: display.innerHTML = '';
      display.innerHTML += `
    <div class="infoHold">
    <span id="1">City: ${name}</span>
    <span id="1">Humidity: ${main.humidity}</span>
    <span id="1">
      Temperature: ${degreeUnit(unit, main.temp)}
    </span>
    <span id="1">Description: ${weather.description}</span>
    <span id="2">Outcome: ${weather.main}</span>
    </div>
  `;
      display.innerHTML += await fetchImage(weather.main);
      break;
    default: display.innerHTML = '';
      display.innerHTML += error();
  }
};

export default displayWeather;
