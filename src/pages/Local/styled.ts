import styled from 'styled-components';

export const Locais = styled.div`
  .back {
    margin-top: 20px;
    text-align: right;

    a {
      gap: 6px;
      transition: filter 300ms;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: auto;

  background-color: white;
  border-radius: 0.4rem;
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
    color: #bc2828;

    position: absolute;
    right: 2%;
    margin-left: 6px;

    transition: filter 300ms;

    abbr {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      filter: brightness(1.3);
    }
  }

  div {
    font-size: 1.43rem;
    font-weight: 400;
  }
`;

export const Void = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 50px;

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

    color: white;
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
