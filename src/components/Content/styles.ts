import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 150px;

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 30px;
  }

  @media (max-width: 950px) {
    display: block;

    div {
      max-width: auto;
    }
  }
`;

export const ContentText = styled.div`
  max-width: 400px;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin-top: 10rem;
  min-width: 500px;

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
    height: 2px;
    position: static;
    min-width: auto;

    img {
      display: none;
    }

    div {
      position: static;
      height: 20px;
      margin: 0;
      width: auto;
    }
  }
`;
