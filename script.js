async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === 200) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        `;
    } else {
        alert('City not found');
    }
}
