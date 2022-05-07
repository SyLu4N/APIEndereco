import React, { useState } from 'react';
import { ModalResult } from './ModalResult';

interface ResultProps {
  cep: string;
  street: string;
  district: string;
  city: string;
  region: string;
  isResult: boolean;
}

export function Result(props: ResultProps) {
  const [isModelResult, setIsModelResult] = useState(false);

  function modelResultOpen() {
    setIsModelResult(true);
    console.log('bati');
  }

  function modelResultClose() {
    setIsModelResult(false);
  }

  return (
    <div className={props.isResult ? 'result' : 'hidden'}>
      <div>
        <p className="paragraph">Cep: {props.cep}</p>
        <div className="flex">
          <input type="text" className="rua" value={props.street} disabled />
          <input
            type="text"
            className="bairro"
            disabled
            value={props.district}
          />
        </div>
        <input type="text" className="cidade" disabled value={props.city} />
        <input type="text" className="uf" disabled value={props.region} />
      </div>
      <div className="save">
        <p onClick={modelResultOpen}>Salvar CEP</p>
        <ModalResult
          isOpen={isModelResult}
          modelResultClose={modelResultClose}
          cep={props.cep}
        />
      </div>
    </div>
  );
}
