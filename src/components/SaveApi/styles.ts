import styled from 'styled-components';

export const Container = styled.table`
  width: 500px;
  position: absolute;
  top: 100%;
  left: -10%;

  thead {
    height: 40px;
  }

  tr {
    text-align: left;
  }

  td,
  th {
    text-align: center;
  }
`;
