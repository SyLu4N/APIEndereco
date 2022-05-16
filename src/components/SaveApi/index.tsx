import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function SaveApi() {
  const [resultCeps, setResultCeps] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => setResultCeps(response.data));
  }, [setResultCeps]);

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
