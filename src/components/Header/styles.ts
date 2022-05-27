import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 2rem;

  nav {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: var(--colorstandard);
    font-size: 3em;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-family: 'Dosis', sans-serif;
    }
  }
`;

export const Theme = styled.div`
  margin-right: 1rem;
  z-index: 1;
  background-color: transparent;

  display: flex;
  align-items: center;

  button {
    background-color: transparent;
  }

  svg {
    color: #aaa;

    padding: 1px;
    width: 30px;
    height: 30px;

    transition: filter 300ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
