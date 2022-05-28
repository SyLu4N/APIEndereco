import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 100%;

  min-width: 500px;

  @media (max-width: 1050px) {
    right: 0;
  }

  @media (max-width: 950px) {
    display: block;
    min-width: auto;

    table {
      display: none;
    }

    div {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const Content = styled.table`
  position: relative;
  width: 100%;

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
