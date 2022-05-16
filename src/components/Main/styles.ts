import styled from 'styled-components';

export const Container = styled.header`
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
  bottom: -50%;

  img {
    margin-top: -80px;
    width: 30vw;
  }
`;
