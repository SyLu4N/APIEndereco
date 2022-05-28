import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
              {resultCeps.map((local, index) => (
                <tr key={index}>
                  <td>{local.nome}</td>
                  <td>{local.rua}</td>
                  <td>{local.cidade}</td>
                  <td>{local.cep}</td>
                </tr>
              ))}
            </tbody>
          </Content>
          <div>
            <Link to="/locais">Detalhes</Link>
          </div>
        </Container>
      ) : (
        ''
      )}
    </>
  );
}
