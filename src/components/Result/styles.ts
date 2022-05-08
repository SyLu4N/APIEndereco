import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  input {
    margin: 4px 0;
    background-color: #ffffff7c;
  }

  p {
    margin-top: 20px;
    font-weight: bold;
  }

  input:nth-child(3) {
    margin-right: 10px;
    width: 270px;
  }

  input:nth-child(4) {
    width: 70px;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }
`;

export const Save = styled.div`
  display: flex;
  justify-content: right;

  p {
    font-style: italic;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: 200ms;
  }

  p:hover {
    filter: brightness(0.4);
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`;
