import React, { useEffect, useState } from 'react';
import { MainRouter as Routes } from './router';

import { CepProvider } from './CepContext';
import { Header } from './components/Header';
import { GlobaStyle } from './styles/global';
import { Footer } from './components/Footer';

import { ligthTheme, darkTheme } from './styles/themes';

export default function App() {
  const [theme, setTheme] = useState(ligthTheme);
  const getThemeStorage = localStorage.getItem('theme');

  const themeStorage = () => {
    if (getThemeStorage === 'darkTheme') return setTheme(darkTheme);
    if (getThemeStorage === 'ligthTheme') return setTheme(ligthTheme);
    return setTheme(ligthTheme);
  };

  const teste = themeStorage;
  console.log(teste);

  /* useEffect(() => {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme);
  }, [theme, setTheme]); */

  return (
    <CepProvider>
      <Header setTheme={setTheme} /* themeStorage={themeStorage} */ />
      <Routes />
      <GlobaStyle theme={theme} />
      <Footer />
    </CepProvider>
  );
}
