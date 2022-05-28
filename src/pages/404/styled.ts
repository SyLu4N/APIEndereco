import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 400px;
  }

  div div {
    display: flex;
    justify-content: center;

    margin-top: 30px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4px;

    height: 30px;
    width: 200px;

    text-decoration: none;
    font-weight: bold;

    color: var(--colorbackground);
    background-color: var(--colorstandard);
    border-radius: 4px;

    transition: color 800ms;

    &:hover {
      background-color: var(--colorbackground);
      color: var(--colorstandard);
      border: 1px solid var(--colorstandard);
    }
  }
`;
