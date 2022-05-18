import React from 'react';
import { Local } from '../../interfaces/Local';

import { Container, Content } from './styles';

interface SaveApiProps {
  resultCeps: Array<Local>;
}

export function SaveApi({ resultCeps }: SaveApiProps) {
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
                  <td>{local.city}</td>
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
