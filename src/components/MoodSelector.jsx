import React from "react";

const moods = [
  { icon: "😀", label: "Happy", color: "bg-yellow-300" },
  { icon: "😐", label: "Neutral", color: "bg-gray-300" },
  { icon: "😟", label: "Sad", color: "bg-blue-300" },
  { icon: "😡", label: "Angry", color: "bg-red-300" },
  { icon: "😌", label: "Calm", color: "bg-green-300" },
];

const MoodSelector = ({ selectedMood, setSelectedMood }) => {
  return (
    <div className="flex justify-between py-2 cursor-pointer">
      {moods.map((mood) => (
        <button
          key={mood.label}
          onClick={() => setSelectedMood(mood)}
          className={`text-3xl transition p-2 rounded-full cursor-pointer ${
            selectedMood?.label === mood.label ? mood.color : "bg-white border"
          }`}
        >
          {mood.icon}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
