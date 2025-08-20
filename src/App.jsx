// App.js
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const API_KEY = "YOUR_API_KEY_HERE";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city  name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found or API error");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="App">
      <div className="weather-container">
        <h1>Weather App</h1>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>

        {loading && <div className="loading">Loading weather data...</div>}

        {error && <div className="error">{error}</div>}

        {weatherData && (
          <div className="weather-info">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div className="weather-main">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
              <div className="temperature">
                {Math.round(weatherData.main.temp)}°C
              </div>
            </div>
            <div className="weather-details">
              <div className="condition">{weatherData.weather[0].main}</div>
              <div className="humidity">
                Humidity: {weatherData.main.humidity}%
              </div>
              <div className="feels-like">
                Feels like: {Math.round(weatherData.main.feels_like)}°C
              </div>
            </div>
          </div>
        )}

        <div className="api-note">
          <p>Don't forget to add your free API key from OpenWeatherMap!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
