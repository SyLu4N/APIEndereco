import React, { FormEvent, SetStateAction } from 'react';

import { Container } from './styles';
import { newError } from '../../utils/newError';
import { searchCep } from '../../services/searchCep';
import { Cep } from './InputCep';

interface FormProps {
  isLoading: boolean;
  cep: string;
  setCep: React.Dispatch<SetStateAction<string>>;
  setStreet: (value: string) => void;
  setDistrict: (value: string) => void;
  setCity: (value: string) => void;
  setRegion: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  setIsResult: (value: boolean) => void;
}

export function Form(props: FormProps) {
  let error: boolean;

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      isCep(props.cep);

      if (!error) {
        props.setIsLoading(true);
        const newCEP = await searchCep(props.cep);

        if (newCEP.erro) {
          props.setIsResult(false);
          newError('CEP inválido ou incorreto');
        }

        props.setIsResult(true);
        props.setIsLoading(false);
        props.setStreet(newCEP.logradouro);
        props.setCity(newCEP.localidade);
        props.setDistrict(newCEP.bairro);
        props.setRegion(newCEP.uf);
      }
    } catch (err) {
      return props.setIsLoading(false);
    }
  }

  function isCep(cep: string): void {
    const errorParagraph = document.querySelectorAll('.errorParagraph');
    errorParagraph.forEach((err) => err.remove());

    if (cep.length !== 9 && cep.length !== 8) {
      error = true;
      return newError('CEP Inválido');
    }

    error = false;
  }

  return (
    <Container className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="">
        <p className="paragraph">Digite seu CEP:</p>
        <Cep cep={props.cep} setCep={props.setCep} />
        <button className="button" disabled={props.isLoading}>
          Buscar CEP
        </button>
      </label>
    </Container>
  );
}
