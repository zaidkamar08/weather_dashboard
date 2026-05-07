import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

const API_BASE = "http://localhost:5000/api/weather";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchByCity = async (city) => {
  setLoading(true);
  setError("");
  try {
    const res = await fetch(`https://weather-dashboard-vl15.onrender.com/api/weather/city?city=${city}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    setWeather(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

const fetchByLocation = () => {
  if (!navigator.geolocation)
    return setError("Geolocation not supported");
  setLoading(true);
  setError("");
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      try {
        const res = await fetch(
`https://weather-dashboard-vl15.onrender.com/api/weather/coords?lat=${coords.latitude}&lon=${coords.longitude}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    () => { setError("Location denied."); setLoading(false); }
  );
};



  

  useEffect(() => {
    fetchByLocation();
  }, []);

  return (
  <div className="app">
    <div className="header">
      <div className="header-icon">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      </div>
      <div>
        <h1>Weather Dashboard</h1>
        <p>Real-time weather for any city</p>
      </div>
    </div>

    <SearchBar onSearch={fetchByCity} onLocate={fetchByLocation} />

    {loading && (
      <div className="status-box">
        <div className="spinner" />
        <span>Fetching weather data...</span>
      </div>
    )}
    {error && !loading && (
      <p className="error">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="#c0392b" style={{width:16,height:16,flexShrink:0}}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        {error}
      </p>
    )}
    {weather && !loading && (
      <div className="results">
        <WeatherCard weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
    )}
    <p className="footer">Powered by OpenWeatherMap</p>
  </div>
);
}
