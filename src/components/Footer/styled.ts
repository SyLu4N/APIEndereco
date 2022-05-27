import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  color: var(--colorstandard);

  position: absolute;
  bottom: -4rem;
  left: 42%;

  a {
    margin-left: 6px;
    font-style: italic;

    &:hover {
      text-decoration: underline;
    }
  }
`;
