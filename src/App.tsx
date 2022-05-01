import React, { FormEvent, useState } from 'react';
import './styles/App.css';
//import foto1 from './images/location.svg';

function App() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    return searchCep(cep);
  }

  function validCep(value: string): void | undefined {
    if (value.length > cep.length) {
      if (cep.length === 4) {
        const newCep = value + '-';
        return setCep(newCep);
      }

      return setCep(value);
    } else {
      setCep(value);
    }
  }

  async function searchCep(cep: string) {
    const script = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(script)
      .then((response) => response.json)
      .then(console.log);

    const data = await fetch(script);
    const location = await data.json();
    console.log(location);

    const { logradouro, bairro, localidade, uf } = location;
    setStreet(logradouro);
    setDistrict(bairro);
    setCity(localidade);
    setRegion(uf);
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
            ipsum minima quibusdam
          </p>
          <div className="error">{/*<img src={foto1} alt="" />*/}</div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">
            <p className="paragraph">Digite seu CEP:</p>
            <input
              maxLength={cep.indexOf('-') === -1 ? 8 : 9}
              type="string"
              className="CEP"
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
