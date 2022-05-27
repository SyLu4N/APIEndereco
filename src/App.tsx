import React, { useState } from 'react';
import { MainRouter as Routes } from './router';

import { CepProvider } from './CepContext';
import { Nav } from './components/nav';
import { GlobaStyle } from './styles/global';
import { Footer } from './components/Footer';

import { ligthTheme } from './styles/themes';

export default function App() {
  const [theme, setTheme] = useState(ligthTheme);

  return (
    <CepProvider>
      <Nav setTheme={setTheme} />
      <Routes />
      <GlobaStyle theme={theme} />
      <Footer />
    </CepProvider>
  );
}
