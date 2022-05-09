import React from 'react';

import { CepInput } from './styles';

interface CepProps {
  cep: string;
  setCep: (value: string) => void;
}

export function Cep(props: CepProps) {
  function validCep(value: string): void {
    const CEP = document.querySelector('.CEP') as HTMLInputElement;
    const errorParagraph = document.querySelectorAll('.errorParagraph');
    errorParagraph.forEach((err) => err.remove());

    if (CEP.classList.contains('errorInput')) {
      CEP.classList.remove('errorInput');
    }

    if (value.length > props.cep.length) {
      if (props.cep.length === 4) {
        const newCep = value + '-';
        return props.setCep(newCep);
      }

      const newCep = value.replace(/[a-zA-Z]/g, '');
      return props.setCep(newCep);
    } else {
      props.setCep(value);
    }
  }

  return (
    <CepInput
      placeholder="Ex: 08474012"
      maxLength={props.cep.indexOf('-') === -1 ? 8 : 9}
      type="string"
      className="CEP success"
      onChange={(e) => validCep(e.target.value)}
      value={props.cep}
    />
  );
}
