import React, { useState } from 'react';

import { Container } from './styles';
import { Content } from '../Content';
import { Form } from '../Form/Index';
import { Loading } from '../Loading';
import { Result } from '../Result';

export function Main() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);

  return (
    <Container>
      <Content />
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
      {isLoading ? (
        <Loading />
      ) : (
        <Result
          cep={cep}
          street={street}
          region={region}
          bairro={district}
          cidade={city}
          district={district}
          isResult={isResult}
        />
      )}
    </Container>
  );
}
