import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  //Use state hook to set the theme with an initial value from local storage or 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //Function to toggle the theme between 'light' and 'dark'
  function handleThemeSwitch() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  //Use effect hook to set the theme in local storage replace componentdidmount method
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  //Update the theme in local storage whenever it changes (replace componentuptdate method)
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Render a switch to toggle the theme and the About component
  return (
    <div className={`form-check form-switch App ${theme}-theme`}>
      <input
        onClick={handleThemeSwitch}
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Theme switch
      </label>
      {/* <About theme={theme} /> */}
    </div>
  );
}

export default ThemeSwitcher;
