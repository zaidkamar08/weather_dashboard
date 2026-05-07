import { useState } from "react";

export default function SearchBar({ onSearch, onLocate }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-search">Search</button>
      <button type="button" className="btn-locate" onClick={onLocate}>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        </svg>
        Locate
      </button>
    </form>
  );
}