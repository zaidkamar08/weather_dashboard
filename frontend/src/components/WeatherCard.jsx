export default function WeatherCard({ weather }) {
  const { name, sys, main, weather: w } = weather;
  const icon = `https://openweathermap.org/img/wn/${w[0].icon}@2x.png`;

const getIconEmoji = (main) => {
  const c = main.toLowerCase();
  if (c.includes("clear")) return "☀️";
  if (c.includes("cloud")) return "☁️";
  if (c.includes("rain")) return "🌧️";
  if (c.includes("drizzle")) return "🌦️";
  if (c.includes("snow")) return "❄️";
  if (c.includes("thunder")) return "⛈️";
  if (c.includes("mist") || c.includes("fog")) return "🌫️";
  return "🌤️";
};

  const themes = {
    clear:    { bg: "linear-gradient(135deg, #f7b733 0%, #e8841a 100%)", shadow: "rgba(247,183,51,0.4)" },
    clouds:   { bg: "linear-gradient(135deg, #5c7a9e 0%, #3d5a80 100%)", shadow: "rgba(61,90,128,0.4)" },
    rain:     { bg: "linear-gradient(135deg, #4facfe 0%, #1a6fb5 100%)", shadow: "rgba(79,172,254,0.4)" },
    drizzle:  { bg: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)", shadow: "rgba(116,185,255,0.4)" },
    snow:     { bg: "linear-gradient(135deg, #a8c0d6 0%, #7f9db2 100%)", shadow: "rgba(168,192,214,0.4)" },
    thunderstorm: { bg: "linear-gradient(135deg, #2d3561 0%, #1a1a2e 100%)", shadow: "rgba(45,53,97,0.5)" },
    mist:     { bg: "linear-gradient(135deg, #8e9eab 0%, #6b7a8d 100%)", shadow: "rgba(107,122,141,0.4)" },
    default:  { bg: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)", shadow: "rgba(67,206,162,0.4)" },
  };

  const key = w[0].main.toLowerCase();
  const theme = themes[key] || themes.default;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric"
  });

  return (
    <div className="weather-card" style={{
      background: theme.bg,
      boxShadow: `0 16px 48px ${theme.shadow}`
    }}>
      <div className="card-bg-circle1" />
      <div className="card-bg-circle2" />

      <div className="card-top">
        <div className="card-location">
          <h2>{name}</h2>
          <span className="country-badge">{sys.country}</span>
          <p className="date">{today}</p>
        </div>
        <div className="weather-icon-wrap">
  <span style={{ fontSize: "3rem", lineHeight: 1 }}>
    {getIconEmoji(w[0].main)}
  </span>
</div>
      </div>

      <div className="card-bottom">
        <div>
          <span className="temp-main">{Math.round(main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="temp-info">
          <p className="desc">{w[0].description}</p>
          <p className="feels">Feels like {Math.round(main.feels_like)}°C</p>
          <div className="minmax">
            <span>H {Math.round(main.temp_max)}°</span>
            <span>L {Math.round(main.temp_min)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}