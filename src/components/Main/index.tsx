import React from 'react';

import { Container, Image } from './styles';
import foto1 from '../../assets/location.svg';
import { SaveApi } from '../SaveApi';
import { Local } from '../../interfaces/Local';

interface MainProps {
  resultCeps: Array<Local>;
}

export function Main(props: MainProps) {
  return (
    <Container>
      <h1>CONSULTA CEP</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum delectus
        corporis sed assumenda velit blanditiis iste at, mollitia
      </p>
      <Image>
        <img src={foto1} alt="" />
        <SaveApi resultCeps={props.resultCeps} />
      </Image>
    </Container>
  );
}
