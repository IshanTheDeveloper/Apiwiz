// src/components/EntryForm.jsx
import React, { useState } from "react";
import MoodSelector from "./MoodSelector";

const EntryForm = ({ onSave, weather }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood || note.trim() === "")
      return alert("Please select mood and add a note");
    onSave({ date: today, mood: selectedMood, note, weather });
    setSelectedMood(null);
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-6 max-w-xl mx-auto"
    >
      <div className="text-lg font-semibold mb-2 text-center">{today}</div>
      <div className="text-center font-medium mb-2">
        How are you feeling today?
      </div>
      <MoodSelector
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
      <textarea
        className="w-full border rounded p-2 mt-4 mb-2"
        placeholder="Add a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="bg-orange-400 text-white w-full py-2 rounded hover:bg-orange-500 cursor-pointer">
        Save
      </button>
    </form>
  );
};

export default EntryForm;
