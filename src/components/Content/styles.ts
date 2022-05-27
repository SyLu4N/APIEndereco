import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 150px;

  div {
    max-width: 400px;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 30px;
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
`;
