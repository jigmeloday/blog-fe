'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<any>(undefined);

const getLocalStorage = () => {
 if ( typeof window !== 'undefined') {
  const value = localStorage.getItem('theme');
  return value || false;
 }
};

export const ThemeContextProvider = ({ children }) => {
 const [theme, setTheme] = useState( () => getLocalStorage());
 const toggle = () => {
  setTheme(!theme);
 };

 useEffect(() => {
  localStorage.setItem( 'theme', theme as any);
 }, [theme]);

 return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
