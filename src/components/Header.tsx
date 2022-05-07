import React, { useEffect, useState } from 'react';

import { Nav } from './nav';
import foto1 from '../assets/location.svg';
import { api } from '../services/api';
import { SaveApi } from './SaveApi';

export function Header() {
  const [resultCeps, setResultCeps] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => setResultCeps(response.data));
    console.log(resultCeps);
  }, [setResultCeps]);

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
        <SaveApi resultCeps={resultCeps} />
      </div>
    </header>
  );
}
