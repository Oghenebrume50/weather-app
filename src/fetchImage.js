const display = document.getElementById('display');
const pixabayAPI = process.env.pixabayAPI;

export default async function fetchImage(weather) {
  const weatherData = await fetch(`https://pixabay.com/api/?key=${pixabayAPI}&q=${encodeURIComponent(weather)}&image_type=photo`);
  try {
    const photoData = await weatherData.json();
    if (photoData.hits.length >= 1) {
      const rand = Math.floor(Math.random() * photoData.hits.length + 1);
      display.innerHTML += `
      <div id="gif"><img src="${photoData.hits[rand].webformatURL}" alt="image"></div>
    `;
    }
  } catch (err) {
    display.innerHTML += `<span>
        <img src="../dist/assets/img/11.png" alt="error">
      </span>`;
  }
}
