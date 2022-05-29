import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  position: relative;

  label p {
    padding-left: 1.4rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 32%;
    bottom: -100%;

    background-color: var(--colorstandard);
    width: 200px;
    border-radius: 0.25rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: 300ms;
    color: var(--colorbackground);

    .loading {
      animation: 60s loading infinite;
    }
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

  @keyframes loading {
    0% {
      transform: rotate(60000deg);
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: transparent;
    }

    button {
      position: static;
      height: 40px;
    }
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
