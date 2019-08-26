import error from './error';

const pixabayAPI = process.env.pixabayAPI;

export default async function fetchImage(weather) {
  const weatherData = await fetch(`https://pixabay.com/api/?key=${pixabayAPI}&q=${encodeURIComponent(weather)}&image_type=photo`);
  try {
    const photoData = await weatherData.json();
    if (photoData.hits.length >= 1) {
      const rand = Math.floor(Math.random() * photoData.hits.length + 1);
      return `
      <div id="gif"><img src="${photoData.hits[rand].webformatURL}" alt="image"></div>
    `;
    }
    return error();
  } catch (err) {
    return error();
  }
}
