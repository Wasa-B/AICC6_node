import React, { useEffect, useState } from 'react'
import { Icons } from '../../assets/icons';

const ModeControlls = () => {
  const [darkMode, setDarkMode] = useState(false);
  const rootElement = document.documentElement;

  useEffect(() => {
    darkMode
      ? rootElement.classList.add('dark')
      : rootElement.classList.remove('dark');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button onClick={toggleTheme}>
      <img
        src={darkMode ? Icons.MoonFill : Icons.SunFill}
        alt=""
        className="w-5 h-5 invert-[1]"
      />
    </button>
  );
}

export default ModeControlls
