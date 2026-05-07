# Kloudzen - Weather Dashboard

A full-stack weather dashboard that displays real-time weather data for any city using the OpenWeatherMap API.

## Live Demo
https://kloudzen.netlify.app

## Features
- Search weather by city name
- Auto-detect location using browser geolocation
- Displays temperature, humidity, wind speed, pressure, visibility, cloud cover, sunrise and sunset
- Dynamic card background based on weather condition
- Fully responsive design

## Tech Stack

**Frontend**
- React.js
- Vite
- CSS

**Backend**
- Node.js
- Express.js
- Axios
- OpenWeatherMap API

## Project Structure
weather-dashboard/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── frontend/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── SearchBar.jsx
│       ├── WeatherCard.jsx
│       └── WeatherDetails.jsx
└── package.json

## API Endpoints
- GET /api/weather/city?city=London
- GET /api/weather/coords?lat=51.5&lon=-0.1

## Deployment
- Frontend deployed on Netlify
- Backend deployed on Render

## Setup Instructions

1. Clone the repository
2. Add your OpenWeatherMap API key in backend/.env
3. Run npm install in both frontend and backend folders
4. Run npm run dev in frontend and npm run dev in backend
