import React, { FormEvent, useEffect, useState, useRef } from 'react';
import './styles/App.css';
import { newError } from './utils/newError';
import { searchCep } from './utils/searchCep';

import foto1 from './images/location.svg';

function App() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let error: boolean;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      isCep(cep);

      if (!error) {
        setIsLoading(true);
        const newCEP = await searchCep(cep);
        setIsLoading(false);
        setStreet(newCEP.logradouro);
        setCity(newCEP.localidade);
        setDistrict(newCEP.bairro);
        setRegion(newCEP.uf);
      }
    } catch (err) {
      return;
    }
  }

  useEffect(() => {
    const button = document.querySelector('button') as HTMLButtonElement;
    const result = document.querySelector('.result') as HTMLDivElement;
    const loader = document.querySelector(
      '.loader-container',
    ) as HTMLDivElement;

    if (isLoading) {
      button.disabled = true;
      result.classList.add('hidden');
      loader.classList.remove('hidden');
    } else {
      button.disabled = false;
      loader.classList.add('hidden');
      result.classList.remove('hidden');
    }
  }, [isLoading, setIsLoading]);

  function isCep(cep: string): void {
    const errorParagraph = document.querySelectorAll('.errorParagraph');
    errorParagraph.forEach((err) => err.remove());

    if (cep.length !== 9 && cep.length !== 8) {
      error = true;
      return newError('CEP Inválido');
    }

    error = false;
  }

  function validCep(value: string): void {
    const CEP = document.querySelector('.CEP') as HTMLInputElement;
    const errorParagraph = document.querySelectorAll('.errorParagraph');
    errorParagraph.forEach((err) => err.remove());

    if (CEP.classList.contains('errorInput')) {
      CEP.classList.remove('errorInput');
    }

    if (value.length > cep.length) {
      if (cep.length === 4) {
        const newCep = value + '-';
        return setCep(newCep);
      }

      const newCep = value.replace(/[a-zA-Z]/g, '');
      return setCep(newCep);
    } else {
      setCep(value);
    }
  }

  return (
    <div className="container">
      <div className="content">
        <header>
          <h1 className="logo">logo</h1>
        </header>
        <h1>CONSULTA CEP</h1>
        <div className="image">
          <p className="max text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            delectus corporis sed assumenda velit blanditiis iste at, mollitia
          </p>
          <div className="error">{<img src={foto1} alt="" />}</div>
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">
            <p className="paragraph">Digite seu CEP:</p>
            <input
              placeholder="Ex: 08474012"
              maxLength={cep.indexOf('-') === -1 ? 8 : 9}
              type="string"
              className="CEP success"
              onChange={(e) => validCep(e.target.value)}
              value={cep}
            />
            <button className="button">Buscar CEP</button>
          </label>
        </form>
        <main>
          <div className="loader-container hidden">
            <div className="loader">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="result hidden teste">
            <p className="paragraph">Cep: {cep}</p>
            <div className="flex">
              <input type="text" className="rua" value={street} disabled />
              <input type="text" className="bairro" disabled value={district} />
            </div>
            <input type="text" className="cidade" disabled value={city} />
            <input type="text" className="uf" disabled value={region} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
