import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--details);
  padding: 1.3rem 12%;
  text-align: center;

  position: absolute;
  bottom: -9.5rem;
  left: 0;
  right: 0;

  em {
    font-weight: bold;
    color: var(--colorbackground);
  }

  @media (max-width: 1165px) {
    padding: 20px 50px;
  }

  @media (max-width: 436px) {
    padding: 20px 16px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 2rem;

  div {
    float: left;
    text-align: left;

    h1 {
      color: var(--colorbackground);
      margin-bottom: 0.5rem;
    }

    p {
      min-width: 120px;
      color: var(--colorbackground);
    }
  }

  nav {
    text-align: center;
    width: 100%;
    margin-left: -7.5rem;

    a {
      display: inline-flex;
      align-items: center;
      height: 1.2rem;
      margin-right: 1.5rem;

      font-size: 1.2rem;
      color: var(--colorbackground);
      transition: 300ms all;

      svg {
        margin-right: 0.5rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    nav {
      margin-left: 0;
      margin-bottom: 1rem;

      a + a {
        margin-right: 1rem;
      }
    }

    div {
      text-align: center;
    }
  }
`;
