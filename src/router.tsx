import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import { Local } from './pages/Local';
import Error from './pages/404';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locais" element={<Local />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
