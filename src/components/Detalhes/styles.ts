import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;

  a {
    display: inline-block;
    margin-top: 1rem;
    margin-right: 1.1rem;
    cursor: pointer;

    font-style: italic;
    text-decoration: none;
    font-weight: 600;

    transition: filter 300ms;

    &:hover {
      filter: brightness(0.4);
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }

  @media (max-width: 950px) {
    position: fixed;
    bottom: 20px;
    right: 0;

    a {
      margin-top: 0;
      margin-right: 0;
    }
  }
`;
