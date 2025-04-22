import React from "react";

const CalendarView = ({ entries, onDateClick }) => {
  const dateMap = entries.reduce((acc, entry) => {
    if (!acc[entry.date]) acc[entry.date] = [];
    acc[entry.date].push(entry);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6 max-w-xl mx-auto">
      <div className="text-center font-semibold mb-2">April</div>
      <div className="grid grid-cols-7 gap-2 text-sm text-center">
        {Array.from({ length: 30 }, (_, i) => {
          const date = `2024-04-${String(i + 1).padStart(2, "0")}`;
          return (
            <div
              key={i}
              className="relative cursor-pointer hover:bg-orange-100 rounded"
              onClick={() => onDateClick(date)}
            >
              <div className="h-8 flex items-center justify-center">
                {i + 1}
              </div>
              {dateMap[date] && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
