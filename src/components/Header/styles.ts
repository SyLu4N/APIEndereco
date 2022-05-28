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

interface ThemeProps {
  isType: string;
}

export const Theme = styled.div<ThemeProps>`
  margin-right: 1rem;
  z-index: 1;
  background-color: transparent;

  display: flex;
  align-items: center;

  button {
    background-color: transparent;
  }

  svg {
    color: ${({ isType }) => (isType === 'dark' ? '#DEE9FE' : '#394863')};

    padding: 1px;
    width: 30px;
    height: 30px;

    transition: filter 300ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
