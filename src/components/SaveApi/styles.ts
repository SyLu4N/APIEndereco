import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;

  min-width: 550px;

  div {
    text-align: right;
    min-width: 550px;

    a {
      display: inline-block;
      margin-right: 0.5rem;
      margin-top: 1rem;
      font-style: italic;
      cursor: pointer;
      transition: filter 300ms;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        filter: brightness(0.4);
        text-decoration: underline;
        text-underline-offset: 0.2em;
      }
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
