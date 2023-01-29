import React, { useState, useEffect } from 'react';
import About from '../About/About';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function handleThemeSwitch() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`form-check form-switch App ${theme}-theme`}>
      <input onClick={handleThemeSwitch} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme switch</label>
      <About theme={theme} />
    </div>
  );
}

export default ThemeSwitcher;