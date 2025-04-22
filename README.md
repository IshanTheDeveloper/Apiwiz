MoodMate – Interactive Mood Journal with Weather Integration

--Objective

MoodMate is a responsive and interactive web application that allows users to log their daily mood alongside real-time weather data. The app integrates geolocation and a public weather API to enhance personal journaling with environmental context, promoting mindful self-reflection.

Features :

--User Interface

Clean, responsive layout for mobile and desktop
Calendar view to browse past mood entries
Prominent display of the current date
Light and Dark mode toggle

--Mood Logging

Select from 5 or more mood options using icons
Input daily notes with form validation
Save mood, note, and weather for each day
Visual feedback and confirmation after saving entry

--Weather Integration

Uses browser Geolocation API
Fetches real-time weather via OpenWeatherMap API
Displays temperature and condition icon
Stores weather data with each mood entry

--Calendar and Filters

Calendar with markers for days with entries
Click on a date to view entries for that specific day
Smooth transitions and mood indicators

--Tech Stack

Technology Purpose
React.js Frontend framework
Tailwind CSS Styling and layout
JavaScript Application logic
OpenWeatherMap Real-time weather API integration
LocalStorage Storing mood entries on the browser
HTML5/CSS3 Markup and responsive design

Folder Structure

/src
├── /components
│ ├── Header.jsx
│ ├── EntryForm.jsx
│ ├── CalendarView.jsx
│ └── NotesList.jsx
└── MoodSelector.jsx

├── /utils
│ └── weatherAPI.js
├── App.jsx
└── index.css
