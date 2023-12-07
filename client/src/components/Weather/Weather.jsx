import React, { useState } from "react";
import * as weatherService from "../../services/weatherService.js";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);

  const updateCity = async (city) => {
    const cityInfo = await weatherService.getCity(city);
    const weatherInfo = await weatherService.getWeather(cityInfo.Key);

    setWeatherData({
      cityInfo,
      weatherInfo,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCity(city);
    setCity("");
  };

  const toggleWeather = () => {
    setIsWeatherOpen((prev) => !prev);
  };

  return (
    <section className={`weather ${isWeatherOpen ? "weather-open" : ""}`}>
      <button className="open-close" onClick={toggleWeather}>
        <p>&#9730;</p>
      </button>
      <div className="weather-card">
        <form className="city-form" onSubmit={handleSubmit}>
          <div className="location-input">
            <input
              type="text"
              name="city"
              placeholder="Enter location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </form>
        <div className="city">
          {" "}
          {weatherData?.cityInfo?.LocalizedName || "City"}
        </div>
        <div className="weather-img">
          {weatherData?.weatherInfo?.WeatherIcon ? (
            <img
              src={`../../../public/images/weather/${weatherData?.weatherInfo?.WeatherIcon}.svg`}
              alt="weather-img"
            />
          ) : (
            <img src="../../../public/images/weather/default.png" alt="default-weather-img" />
          )}
        </div>
        <div className="temperature">
          {weatherData?.weatherInfo?.Temperature?.Metric?.Value ||
            "Temperature"}
          °C
        </div>
        <div className="condition">
          {weatherData?.weatherInfo?.WeatherText || "Weather condition"}
        </div>
      </div>
    </section>
  );
}
