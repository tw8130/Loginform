import React, { useState } from 'react';
import Login from './components/Login';
import ThemeContext from './ThemeContext';

const App = () => {
  const themes = {
    light: {
      background: '#f0f0f0',
      text: '#333',
    },
    dark: {
      background: '#333',
      text: '#f0f0f0',
    },
  };

  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <Login />
    </ThemeContext.Provider>
  );
};

export default App;
