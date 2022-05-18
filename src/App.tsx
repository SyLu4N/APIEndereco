import React from 'react';
import { MainRouter as Routes } from './router';

import { CepProvider } from './CepContext';
import { Nav } from './components/nav';
import { GlobaStyle } from './styles/global';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CepProvider>
      <Nav />
      <Routes />
      <GlobaStyle />
      <Footer />
    </CepProvider>
  );
}
