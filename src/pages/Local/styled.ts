import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  border-radius: 0.4rem;

  background-color: white;
  padding: 0 6px;

  div + div {
    border-top: 1px solid #ddd;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  padding: 10px;

  span {
    position: relative;
    width: 130px;
    margin-right: 10px;

    font-size: 1.3rem;
    font-style: italic;
    text-align: center;
  }

  p {
    display: block;
    width: 100%;
    text-align: center;
  }

  a {
    position: absolute;
    right: 2%;
    margin-left: 6px;
  }

  div {
    font-size: 1.43rem;
    font-weight: 400;
  }
`;
