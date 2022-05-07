import React from 'react';

import { Nav } from './nav';
import foto1 from '../assets/location.svg';

export function Header() {
  return (
    <header>
      <Nav />

      <h1>CONSULTA CEP</h1>
      <p className="max text p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum delectus
        corporis sed assumenda velit blanditiis iste at, mollitia
      </p>
      <div className="image">
        <img src={foto1} alt="" />
      </div>
    </header>
  );
}
