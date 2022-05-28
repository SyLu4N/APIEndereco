import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  right: -3.5rem;

  min-width: 500px;

  div {
    text-align: right;
    min-width: 490px;
    border: 1px solid black;

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

    @media (max-width: 950px) {
      margin-top: 60%;
      margin-right: 0;
      min-width: auto;
    }
  }

  @media (max-width: 1050px) {
    right: 0;
  }

  @media (max-width: 950px) {
    display: block;
    table {
      display: none;
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
