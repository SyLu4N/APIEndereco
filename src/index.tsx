import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { SearchCEP } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <SearchCEP />
  </React.StrictMode>,
);
