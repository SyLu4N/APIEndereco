import styled from 'styled-components';

export const ContainerLoading = styled.div`
  position: absolute;
  bottom: -11rem;
  left: 9rem;

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  div {
    position: absolute;
    border: 4px solid var(--colorstandard);
    opacity: 1;
    border-radius: 20%;
    top: 0;
    left: 25%;
    animation: loader 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;
