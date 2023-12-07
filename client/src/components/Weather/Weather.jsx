import React, { useState} from "react";
import * as weatherService from "../../services/weatherService.js";

// const cityForm = document.querySelector(".city-form");

// const updateCity = async (city) => {
//   const cityDets = await weatherService.getCity(city);
//   const weather = await weatherService.getWeather(cityDets.Key);

//   return {
//     cityDets,
//     weather,
//   };
// };

// cityForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const city = cityForm.city.value.trim();
//   cityForm.reset();

//   updateCity(city)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });


export default function Weather() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const updateCity = async (city) => {
    const cityInfo = await weatherService.getCity(city);
    const weatherInfo = await weatherService.getWeather(cityInfo.Key);

       console.log(cityInfo)
       console.log(weatherInfo)

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

  return (
    <section
      className="weather">
        <div className="open-close">
            <p>^</p>
        </div>
      <div className="weather-card">
        <form className="city-form" onSubmit={handleSubmit}
        >
            <div className="location-input">
        <input type="text" name="city" placeholder="Enter location"    value={city}
              onChange={(e) => setCity(e.target.value)} />
      </div>  
        </form>
      <div className="city"> {weatherData?.cityInfo?.LocalizedName || "City"}</div>
      <div className="weather-img">
        <img src={weatherData?.weatherInfo?.WeatherIcon || "Weather icon"} alt="weather-img" />
      </div>
      <div className="temperature">{weatherData?.weatherInfo?.Temperature?.Metric?.Value || "Temperature"}
          °C</div>
      <div className="condition">{weatherData?.weatherInfo?.WeatherText || "Weather condition"}</div>
      </div>
    </section>
  );
}
