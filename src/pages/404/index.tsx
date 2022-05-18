import React from 'react';

import { Container } from './styled';
import error from '../../assets/404.svg';

export default function error404() {
  return (
    <Container>
      <div>
        <h2>A página que você procura não existe!</h2>
        <p>Deseja voltar ao inicio?</p>
        <div>
          <a href="/">Voltar ao inicio</a>
        </div>
      </div>

      <img src={error} alt="" />
    </Container>
  );
}
