import displayWeather from './displayWeather';

const submit = document.getElementById('submit');

const weatherCall = () => {
  displayWeather();
};
submit.addEventListener('click', weatherCall, false);
