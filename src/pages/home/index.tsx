import React, { useEffect, useState } from 'react';

import { Loading } from '../../components/Loading';
import { Result } from '../../components/Result';
import { Form } from '../../components/Form/Index';
import { Main } from '../../components/Main';
import { api } from '../../services/api';

export default function SearchCEP() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [resultCeps, setResultCeps] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => setResultCeps(response.data));
  }, [setResultCeps]);

  return (
    <>
      <Main resultCeps={resultCeps} />
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
            resultCeps={resultCeps}
            setResultCeps={setResultCeps}
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
