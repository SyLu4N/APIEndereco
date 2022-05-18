import React, { useState } from 'react';
import { ModalResult } from '../ModalResult';

import { Container, Save } from './styles';

interface ResultProps {
  cep: string;
  street: string;
  district: string;
  cidade: string;
  region: string;
  bairro: string;
  isResult: boolean;
}

export function Result(props: ResultProps) {
  const [isModelResult, setIsModelResult] = useState(false);

  function modelResultOpen() {
    setIsModelResult(true);
  }

  function modelResultClose() {
    setIsModelResult(false);
  }

  return (
    <Container className={props.isResult ? 'result' : 'hidden'}>
      <div>
        <p>Cep: {props.cep}</p>
        <div className="flex">
          <input type="text" value={props.street} disabled />
          <input type="text" disabled value={props.district} />
        </div>
        <input type="text" disabled value={props.cidade} />
        <input type="text" disabled value={props.region} />
      </div>
      <Save>
        <p onClick={modelResultOpen}>Salvar CEP</p>
        <ModalResult
          isOpen={isModelResult}
          modelResultClose={modelResultClose}
          cep={props.cep}
          street={props.street}
          cidade={props.cidade}
          bairro={props.bairro}
        />
      </Save>
    </Container>
  );
}
