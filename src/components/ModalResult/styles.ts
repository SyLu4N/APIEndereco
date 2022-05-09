import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;

  button {
    position: absolute;
    background-color: var(--colorstandard);
    bottom: -100%;
    left: 32%;
    width: 200px;
    border-radius: 0.25rem;
    font-size: 2rem;
    cursor: pointer;
    transition: 300ms;
    color: white;
  }

  button:hover {
    filter: brightness(0.9);
  }

  div {
    background-color: var(--colorstandard);
    height: 0.5px;
    width: 110%;
  }

  .inputModalCep {
    width: 150px;
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  img {
    transition: 300ms;
  }

  img:hover {
    filter: brightness(0.7);
  }
`;
