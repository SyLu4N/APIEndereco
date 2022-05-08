import React from 'react';

import { Container } from './styles';

interface ArrayObject {
  id: number;
  nome: string;
  rua: string;
  city: string;
  cep: string;
}

interface SaveApiProps {
  resultCeps: Array<ArrayObject>;
}

export function SaveApi(props: SaveApiProps) {
  return (
    <>
      {props.resultCeps.length >= 1 ? (
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
            {props.resultCeps.map((local) => (
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
