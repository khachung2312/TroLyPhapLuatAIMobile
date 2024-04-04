import React, {createContext, useState, useEffect} from 'react';
import theme from './Themes';

interface ThemeContextProps {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider:React.FC = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(theme.light);

  const changeTheme = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    const nightTheme =
      currentHour >= 18 || currentHour <= 6 ? theme.dark : theme.light;
    setCurrentTheme(nightTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{theme: currentTheme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
