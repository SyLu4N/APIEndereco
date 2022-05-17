import React from 'react';
import { Container } from './styled';

export function Local() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Lugar</th>
            <th>Logradouro</th>
            <th>Número</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Cep</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Casa</td>
            <td>Beijamin Constant</td>
            <td>287</td>
            <td>Centro</td>
            <td>Suzano</td>
            <td>08674-011</td>
          </tr>
          <tr>
            <td>Casa</td>
            <td>Beijamin Constant</td>
            <td>287</td>
            <td>Centro</td>
            <td>Suzano</td>
            <td>08674-011</td>
          </tr>
          <tr>
            <td>Casa</td>
            <td>Beijamin Constant</td>
            <td>287</td>
            <td>Centro</td>
            <td>Suzano</td>
            <td>08674-011</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
