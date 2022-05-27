import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-top: 1rem;

  input {
    margin: 4px 0;
    background-color: #ffff;
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

  span {
    display: block;
    margin-top: 1rem;

    text-align: right;
    font-style: italic;
    cursor: pointer;

    transition: 200ms;

    &:hover {
      filter: brightness(0.4);
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }
`;

export const Save = styled.div`
  display: flex;
  justify-content: right;
`;
