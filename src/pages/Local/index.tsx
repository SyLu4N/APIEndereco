import React from 'react';
import { ImBin } from 'react-icons/im';

import { Container, Content } from './styled';

export function Local() {
  return (
    <Container>
      <Content>
        <span>Casa</span> <div>|</div>
        <p>Beijamin Constant, Centro - Suzano</p>
        <a href="">
          <ImBin />
        </a>
      </Content>
      <Content>
        <span>Trabalho</span> <div>|</div>
        <p>Alameda Fernando Costa, Jardim Imperador - Suzano</p>
        <a href="">
          <ImBin />
        </a>
      </Content>
      <Content>
        <span>Namorada</span> <div>|</div>
        <p>Sem nome dois, Miguel Badra - Suzano</p>
        <a href="">
          <ImBin />
        </a>
      </Content>
      <Content>
        <span>Trabalho2</span> <div>|</div>
        <p>Av. Italo Adami, Vila Zeferina - Itaquaquecetuba</p>
        <a href="">
          <ImBin />
        </a>
      </Content>
    </Container>
  );
}
