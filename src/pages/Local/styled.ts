import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  table {
    padding: 10px;
    background-color: #ffee;

    border-radius: 0.5rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    thead th {
      margin-bottom: 10px;
    }

    th,
    td {
      width: 150px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    ol {
      list-style-position: inside;
    }
  }
`;
