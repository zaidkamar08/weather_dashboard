const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Route 1: Get weather by city name
app.get("/api/weather/city", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City name is required" });

  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      error: err.response?.data?.message || "Failed to fetch weather",
    });
  }
});

// Route 2: Get weather by coordinates (geolocation)
app.get("/api/weather/coords", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: "Lat and lon required" });

  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { lat, lon, appid: API_KEY, units: "metric" },
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      error: err.response?.data?.message || "Failed to fetch weather",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
