import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import CalendarView from "./components/CalendarView";
import NotesList from "./components/NotesList";
import { fetchWeather } from "./utils/weatherAPI";
import "./index.css";

const App = () => {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("moodEntries");
    return stored ? JSON.parse(stored) : [];
  });
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDayMode, setIsDayMode] = useState(true); // State to toggle between day and night mode

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLocation(coords);
        const data = await fetchWeather(coords);
        setWeather(data);
      });
    }
  }, []);

  const handleNewEntry = (entry) => {
    // Ensure the entry date is in the correct format (YYYY-MM-DD)
    const formattedDate = new Date(entry.date).toISOString().split("T")[0];
    const updatedEntry = { ...entry, date: formattedDate };

    const updated = [...entries, updatedEntry];
    setEntries(updated);
    localStorage.setItem("moodEntries", JSON.stringify(updated));
  };

  const handleDeleteEntry = (indexToDelete) => {
    const updated = entries.filter((_, index) => index !== indexToDelete);
    setEntries(updated);
    localStorage.setItem("moodEntries", JSON.stringify(updated));
  };

  const handleDateClick = (date) => {
    // Ensure the clicked date is in the correct format (YYYY-MM-DD)
    const formattedDate = new Date(date).toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const filteredEntries = selectedDate
    ? entries.filter((entry) => entry.date === selectedDate)
    : entries;

  const toggleTheme = () => {
    setIsDayMode((prevMode) => !prevMode); // Toggle between day and night mode
  };

  return (
    <div
      className={`min-h-screen py-10 px-4 flex flex-col items-center ${
        isDayMode
          ? "bg-gradient-to-br from-[#f2709c] to-[#ff9472]"
          : "bg-gradient-to-br from-[#2c3e50] to-[#34495e]"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6">
        <Header weather={weather} />
        <EntryForm onSave={handleNewEntry} weather={weather} />
        <CalendarView entries={entries} onDateClick={handleDateClick} />
      </div>
      <div className="bg-white mt-10 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <NotesList entries={filteredEntries} onDelete={handleDeleteEntry} />
      </div>

      {/* Toggle Button for Day/Night Mode */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 left-4 p-2
          h-12.5 w-13 rounded-full transition-colors cursor-pointer ${
            isDayMode ? "bg-yellow-300 text-black" : "bg-gray-700 text-white"
          }`}
      >
        {isDayMode ? "Night" : "Day"}
      </button>
    </div>
  );
};

export default App;
