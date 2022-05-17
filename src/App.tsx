import React from 'react';
import { MainRouter as Routes } from './router';

import { Nav } from './components/nav';
import { GlobaStyle } from './styles/global';

export default function App() {
  return (
    <>
      <Nav />
      <Routes />
      <GlobaStyle />
    </>
  );
}
