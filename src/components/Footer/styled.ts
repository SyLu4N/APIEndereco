import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
  justify-content: center;

  position: absolute;
  bottom: -4rem;
  left: 0;
  right: 0;

  p {
    color: var(--colorstandard);
  }

  a {
    margin-left: 0.25rem;
    text-decoration: underline;
    text-underline-offset: 2px;

    animation: 300ms filter;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
