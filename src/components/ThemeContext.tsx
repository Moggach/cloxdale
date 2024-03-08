import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', // Default theme
  setLightTheme: () => {}, 
  setDarkTheme: () => {},
  setTooDarkTheme: () => {} 

});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light'); // default theme

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  const setTooDarkTheme = () => setTheme('tooDark');


  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme, setTooDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);