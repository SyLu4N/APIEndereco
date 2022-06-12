import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  theme: {
    body: string;
    text: string;
    info: string;
    details: string;
  };
}

export const GlobaStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Dosis', sans-serif;
    font-weight: 300;
  }

  :root {
    --colorbackground: ${({ theme }: ThemeProps) => theme.body};
    --colorstandard: ${({ theme }: ThemeProps) => theme.text};
    --colorparagraph: ${({ theme }: ThemeProps) => theme.info};
    --colorError: rgba(255, 0, 0, 0.671);
    --details: ${({ theme }: ThemeProps) => theme.details};
  }

  body {
    padding: 1.3rem 12%;
    background: var(--colorbackground);

    transition: background-color 500ms;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      width: 12px;
      background: var(--details);
    }

    &::-webkit-scrollbar-thumb{
      border-left: 0.1px solid rgba(0, 0, 0, 0.2);
      background-color: var(--colorbackground);
    }

  }

  label button {
    display: flex;
    align-items: center;

    position: absolute;
    bottom: -0.6rem;
    right: 0.1rem;

    height: 2.85rem;
    padding: 1rem;

    color: #fff;
    background-image: linear-gradient(to right, #84A7E8, #394863) ;
    border-radius: 40px;

    cursor: pointer;
    transition: 300ms;
    font-size: 1.3rem;

    &:hover{
      filter: brightness(90%);
    }
  }

  h1 {
    font-family: 'Dosis', sans-serif;
  }

  p {
    color: var(--colorparagraph);
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
  }

  button {
    cursor: pointer;

    &:disabled{
      opacity: 0.5;
      cursor: no-drop;
    }
  }

  input {
    width: 350px;
    height: 50px;
    border-radius: 40px;
    box-shadow: 0px 0px 2px var(--colorstandard);
    padding-left: 20px;
    font-size: 1.5em;
  }

  h1, h2, h3, h4, h5, h6, td, tr, th, a {
    color: var(--colorstandard);
  }

  @media (max-width: 1165px)  {
    body{
      display: block;
      padding: 20px 50px;
    }
  }

  @media (max-width: 990px) {
    body{
      display: flex;
      justify-content: center;
      padding: 20px 20px;

      width: 100vw;
    }
  }

  @media (max-width: 950px) {
    img{
      display: none;
    }
  }

  @keyframes loader {
    0% {
      top: 38px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -20px;
      left: -30px;
      width: 108px;
      height: 108px;
      opacity: 0;
    }
  }

  .error {
    width: 400px;
  }

  label {
    position: relative;
    font-weight: bold;
    color: #444040;
  }

  .hidden {
    display: none;
  }

  .errorParagraph  {
    margin-top: -1.4rem;
    color: var(--colorError);
    max-width: 380px;
    height: 25px;
  }

  .overlayModal {
    padding: 4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: -4rem;
    background: rgba(0, 0, 0, 0.6);
  }

  .modalContent {
    height: 200px;
    position: relative;
    padding: 1rem 2rem;
    background: var(--colorbackground);
    border-radius: 0.25rem;

    @media (max-width: 1000px) {
      height: auto;
      max-height: 300px;
    }
  }

  .modalContent h1 {
    margin-bottom: 1rem;
  }

  .modalContent input:disabled {
    background-color: #fff !important;
  }

`;
