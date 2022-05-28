import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 150px;

  h1 {
    font-weight: 600;
  }

  div {
    max-width: 400px;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 30px;
  }

  @media (max-width: 950px) {
    display: block;
  }

  @media (max-width: 950px) {
    div {
      max-width: auto;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  position: relative;
  margin-top: 10rem;

  img {
    width: 30vw;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;

    p {
      position: absolute;
    }
  }

  @media (max-width: 950px) {
    display: block;

    img {
      display: none;
    }
  }
`;
