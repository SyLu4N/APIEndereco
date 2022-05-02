import React, { FormEvent, useState } from 'react';
import './styles/App.css';
import { newError } from './utils/newError';
import foto1 from './images/location.svg';

function App() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  let error: boolean;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    isCep(cep);

    if (!error) {
      return searchCep(cep);
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

  async function searchCep(cep: string) {
    try {
      const result = document.querySelector('.result') as HTMLDivElement;

      const script = `https://viacep.com.br/ws/${cep}/json/`;
      fetch(script).then((response) => response.json);

      const data = await fetch(script);
      const location = await data.json();

      const { erro } = location;

      if (erro) {
        error = true;
        return newError('Não foi possível localizar um endereço com esse CEP.');
      }

      const { logradouro, bairro, localidade, uf } = await location;
      setStreet(logradouro);
      setDistrict(bairro);
      setCity(localidade);
      setRegion(uf);

      return result.classList.remove('hidden');
    } catch (err) {
      error = true;
      return newError('Algo deu errado, tente novamente mais tarde!');
    }
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
            <button>Buscar CEP</button>
          </label>
        </form>
        <div className="result hidden">
          <p className="paragraph">Cep: {cep}</p>
          <div className="flex">
            <input type="text" className="rua" value={street} disabled />
            <input type="text" className="bairro" disabled value={district} />
          </div>
          <input type="text" className="cidade" disabled value={city} />
          <input type="text" className="uf" disabled value={region} />
        </div>
      </div>
    </div>
  );
}

export default App;
