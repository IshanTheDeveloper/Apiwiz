// src/components/Header.jsx
import React from "react";

const Header = ({ weather }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-orange-800">MoodMate</h1>
      {weather && (
        <div className="flex items-center space-x-2 text-orange-600">
          <span>☀️</span>
          <span>{weather.temp}°C</span>
        </div>
      )}
    </div>
  );
};

export default Header;
