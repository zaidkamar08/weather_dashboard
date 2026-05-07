const stats = (weather) => {
  const { main, wind, visibility, clouds, sys } = weather;
  const fmt = (ts) => new Date(ts * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return [
    { key: "humidity",   label: "Humidity",     value: `${main.humidity}%`,                  bg: "#eff6ff", color: "#3b82f6" },
    { key: "wind",       label: "Wind",          value: `${wind.speed} m/s`,                  bg: "#f0fdf4", color: "#22c55e" },
    { key: "pressure",   label: "Pressure",      value: `${main.pressure} hPa`,               bg: "#fefce8", color: "#eab308" },
    { key: "visibility", label: "Visibility",    value: `${(visibility/1000).toFixed(1)} km`, bg: "#faf5ff", color: "#a855f7" },
    { key: "cloud",      label: "Cloud Cover",   value: `${clouds.all}%`,                     bg: "#f8fafc", color: "#94a3b8" },
    { key: "sunrise",    label: "Sunrise",       value: fmt(sys.sunrise),                     bg: "#fff7ed", color: "#f97316" },
    { key: "sunset",     label: "Sunset",        value: fmt(sys.sunset),                      bg: "#fff1f2", color: "#f43f5e" },
    { key: "index",      label: "Humidity Level",value: main.humidity > 70 ? "High" : main.humidity > 40 ? "Moderate" : "Low",
                                                                                               bg: "#ecfdf5", color: "#10b981" },
  ];
};

const icons = {
  humidity: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  wind:     <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>,
  pressure: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  visibility: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  cloud:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  sunrise:  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/></svg>,
  sunset:   <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/></svg>,
  index:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
};

export default function WeatherDetails({ weather }) {
  return (
    <div className="details-section">
      <p className="details-title">Weather Details</p>
      <div className="details-grid">
        {stats(weather).map((s) => (
          <div className="detail-card" key={s.key}>
            <div className="detail-icon-wrap" style={{ background: s.bg }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke={s.color} style={{width:18,height:18}}>
                {icons[s.key].props.children}
              </svg>
            </div>
            <p className="detail-label">{s.label}</p>
            <p className="detail-value">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}