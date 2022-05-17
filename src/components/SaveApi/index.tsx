import React from 'react';
import { Local } from '../../App';

import { Container } from './styles';

interface SaveApiProps {
  resultCeps: Array<Local>;
}

export function SaveApi({ resultCeps }: SaveApiProps) {
  return (
    <>
      {resultCeps.length >= 1 ? (
        <Container>
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
        </Container>
      ) : (
        ''
      )}
    </>
  );
}
