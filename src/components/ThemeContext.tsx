import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', // Default theme
  setLightTheme: () => {}, 
  setDarkTheme: () => {} 
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light'); // default theme

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);