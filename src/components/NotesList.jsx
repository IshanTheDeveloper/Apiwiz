import React from "react";

const NotesList = ({ entries, onDelete }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow max-w-xl mx-auto">
      <h2 className="text-center text-lg font-semibold mb-4">All Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 cursor-pointer">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-orange-100 p-3 rounded shadow text-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{entry.mood.icon}</span>
                <span>{entry.note}</span>
              </div>
              <button
                className="text-red-500 text-xs hover:underline cursor-pointer"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
            <div className="mt-2 text-xs text-right text-gray-600">
              {entry.date} • {entry.weather?.temp}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
