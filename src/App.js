import { useState } from "react";
import { API_KEY, WEATHER_API_URL } from "./services/api";
import InputArea from "./components/inputArea/inputArea";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Forecast from "./components/forecast/forecast";
import "./App.css";

export default function App() {
  const [location, setLocation] = useState(" ");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClick = () => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?q=${location}&lang=pt_br&appid=${API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?q=${location}&lang=pt_br&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      if (weatherResponse.cod === 200) {
        setCurrent(weatherResponse);
        setForecast(forecastResponse);
      } else {
        alert("local inválido");
      }
    });
  };

  return (
    <div className="App">
      <InputArea
        handleChange={handleChange}
        location={location}
        handleClick={handleClick}
      />

      {current && <CurrentWeather data={current} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
