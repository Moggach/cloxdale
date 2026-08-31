import React from 'react';

const THEME_STORAGE_KEY = 'theme';

const ThemeContext = React.createContext({
  theme: 'light', // Default theme
  setLightTheme: () => {},
  setDarkTheme: () => {},
  setTooDarkTheme: () => {}

});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light'); // default theme

  React.useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) setTheme(stored);
  }, []);

  const updateTheme = (next: string) => {
    setTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  const setLightTheme = () => updateTheme('light');
  const setDarkTheme = () => updateTheme('dark');
  const setTooDarkTheme = () => updateTheme('tooDark');


  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme, setTooDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);