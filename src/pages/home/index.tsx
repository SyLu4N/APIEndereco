import React, { useState } from 'react';

import { Loading } from '../../components/Loading';
import { Result } from '../../components/Result';
import { Form } from '../../components/Form/Index';
import { Main } from '../../components/Main';

export default function SearchCEP() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);

  return (
    <>
      <Main />
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
