// AgeCalculator.js

import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);
  const [theme, setTheme] = useState('light');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const diffInMilliseconds = today - birthDateObj;
    const ageInYears = Math.floor(diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  const clearInput = () => {
    setBirthDate('');
    setAge(null);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${theme}-theme`}>
      <video autoPlay loop muted className="background-video">
        <source src="background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="calculator">
        <div className="parallax-image"></div>
        <h1 className={`neon-red-text ${theme}-text`}><b>Age Calculator</b></h1>
        <label htmlFor="birthDate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge} className="calculate-button">Calculate Age</button>
        {age !== null && (
          <p className="age-result">Your age is: {age} years</p>
        )}
        <button onClick={clearInput} className="clear-button">Clear</button>
        <button onClick={toggleTheme} className="theme-button">Toggle Theme</button>
      </div>
    </div>
  );
};

export default AgeCalculator;
