import React, { useState } from 'react';
import './styles/App.css';

import { Loading } from './components/Loading';
import { Result } from './components/Result';
import { Form } from './components/Form/Index';
import { Header } from './components/Header';
import { GlobaStyle } from './styles/global';

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
      <Header />
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
      <GlobaStyle />
    </>
  );
}
