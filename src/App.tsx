import React, { useState } from 'react';
import './styles/App.css';

import foto1 from './images/location.svg';
import { Loading } from './components/Loading';
import { Result } from './components/Result';
import { Form } from './components/Form/Index';
import { Nav } from './components/nav';
import { Save } from './components/Save';

export function SearchCEP() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);

  return (
    <>
      <header>
        <Nav />

        <h1>CONSULTA CEP</h1>
        <p className="max text p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          delectus corporis sed assumenda velit blanditiis iste at, mollitia
        </p>
        <div className="image">
          {<img src={foto1} alt="" />}
          {/*           <div>{isResult ? <Save street={street} cep={cep} /> : ''}</div>
           */}{' '}
        </div>
      </header>

      <Form
        isLoading={isLoading}
        cep={cep}
        setCep={setCep}
        setStreet={setStreet}
        setDistrict={setDistrict}
        setCity={setCity}
        setRegion={setRegion}
        setIsLoading={setIsLoading}
        setIsResult={setIsResult}
      />

      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <Result
            cep={cep}
            street={street}
            region={region}
            city={city}
            district={district}
            isResult={isResult}
          />
        )}
      </main>
    </>
  );
}
