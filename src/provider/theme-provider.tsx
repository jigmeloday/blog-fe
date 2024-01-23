'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/context/theme-context';

const ThemeProvider = ({ children }) => {
 const { theme } = useContext(ThemeContext);
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 if (mounted) {
  return <div className={theme ? 'dark' : 'light'}>{children}</div>;
 }
};

export default ThemeProvider;
