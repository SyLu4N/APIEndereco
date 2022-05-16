import React, { useEffect, useState } from 'react';

import { Container, Image } from './styles';
import { Nav } from '../nav';
import foto1 from '../../assets/location.svg';
import { api } from '../../services/api';
import { SaveApi } from '../SaveApi';

export function Main() {
  return (
    <Container>
      <Nav />

      <h1>CONSULTA CEP</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum delectus
        corporis sed assumenda velit blanditiis iste at, mollitia
      </p>
      <Image>
        <img src={foto1} alt="" />
        <SaveApi />
      </Image>
    </Container>
  );
}
