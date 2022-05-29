import styled from 'styled-components';

export const CepInput = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 40px;
  box-shadow: 0px 0px 2px var(--colorstandard);
  padding-left: 1.4rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  font-family: 'Quicksand';

  @media (max-width: 950px) {
    margin-bottom: 2rem;
  }
`;
