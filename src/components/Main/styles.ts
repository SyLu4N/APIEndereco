import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  p {
    max-width: 350px;
    color: black;
    font-size: 1.5em;
    margin-bottom: 30px;
  }
`;

export const Image = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  right: 0;
  bottom: -70%;

  img {
    margin-top: -80px;
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
`;
