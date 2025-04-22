// src/utils/weatherAPI.js
export const fetchWeather = async ({ lat, lon }) => {
  const API_KEY = "b0a0d398b83c88a444122d588d69a6bd"; // Replace this with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    main: data.weather[0].main,
    description: data.weather[0].description,
    temp: data.main.temp,
  };
};
