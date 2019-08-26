import error from './error';

const weatherAPI = process.env.weatherAPI;

const fetchData = () => {
  const location = document.getElementById('location').value;
  const unit = document.getElementById('unit').value;
  const weatherData = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${weatherAPI}`;
  return fetch(weatherData, {
    mode: 'cors',
  }).then((data) => data.json()).then((res) => ({
    cod: res.cod,
    main: res.main,
    weather: res.weather[0],
    name: res.name,
    unit,
  })).catch(() => error());
};

export default fetchData;
