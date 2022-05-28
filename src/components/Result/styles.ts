import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-top: 1rem;

  input {
    margin: 4px 0;
    background-color: #ffff;
  }

  p {
    margin-top: 0.8rem;
    font-weight: bold;
    margin-left: 1.4rem;
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
    color: var(--colorstandard);

    transition: 200ms;

    &:hover {
      filter: brightness(0.8);
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }

    @media (max-width: 950px) {
      display: block;
      text-align: left;
    }
  }

  @media (max-width: 950px) {
    display: block;
  }
`;

export const Save = styled.div`
  display: flex;
  justify-content: right;
`;
