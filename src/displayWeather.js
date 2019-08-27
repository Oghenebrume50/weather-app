import fetchImage from './fetchImage';
import fetchData from './fetchData';
import degreeUnit from './degree';
import { errorMessage } from './error';

const showinfo = (main, unit, weather, name) => `<div class="infoHold">
  <span id="1">City: ${name}</span>
  <span id="1">Humidity: ${main.humidity}</span>
  <span id="1">
    Temperature: ${degreeUnit(unit, main.temp)}
  </span>
  <span id="1">Description: ${weather.description}</span>
  <span id="2">Outcome: ${weather.main}</span>
  </div>
  `;

const displayWeather = async () => {
  const display = document.getElementById('display');
  const { cod, main, weather, unit, name } = await fetchData();

  switch (cod) {
    case 200: display.innerHTML = '';
      display.innerHTML += showinfo(main, unit, weather, name);
      display.innerHTML += await fetchImage(weather.main);
      break;
    default: display.innerHTML = '';
      display.innerHTML += await errorMessage();
  }
};

export default displayWeather;
