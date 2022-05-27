import React from 'react';

import { Container, Image } from './styles';
import foto1 from '../../assets/location.svg';
import { SaveApi } from '../SaveApi';

export function Content() {
  return (
    <Container>
      <div>
        <h1>CONSULTA CEP</h1>
        <p>
          É a solução definitiva para cadastro de endereço e consulta do código
          postal do Brasil.
        </p>
      </div>
      <Image>
        <img src={foto1} alt="" />
        <SaveApi />
      </Image>
    </Container>
  );
}
