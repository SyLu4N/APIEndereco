import React, { useContext } from 'react';
import { CepContext } from '../../CepContext';

import { Container, Content } from './styles';

export function SaveApi() {
  const { resultCeps } = useContext(CepContext);

  return (
    <>
      {resultCeps.length >= 1 ? (
        <Container>
          <Content>
            <thead>
              <tr>
                <th>Lugar</th>
                <th>Logradouro</th>
                <th>Cidade</th>
                <th>Cep</th>
              </tr>
            </thead>
            <tbody>
              {resultCeps.map((local) => (
                <tr key={local.id}>
                  <td>{local.nome}</td>
                  <td>{local.rua}</td>
                  <td>{local.cidade}</td>
                  <td>{local.cep}</td>
                </tr>
              ))}
            </tbody>
          </Content>
          <div>
            <a href="/locais">Detalhes</a>
          </div>
        </Container>
      ) : (
        ''
      )}
    </>
  );
}
