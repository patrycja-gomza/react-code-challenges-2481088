import { useState } from 'react';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`page ${isDarkMode ? 'dark-mode' : ''}`}>
      <button
        className='dark-mode-button'
        onClick={toggleMode}
      >
        Dark Mode
      </button>
      <button
        className='light-mode-button'
        onClick={toggleMode}
      >
        Light Mode
      </button>
    </div>
  )
}
