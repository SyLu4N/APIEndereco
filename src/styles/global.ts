import { createGlobalStyle } from 'styled-components';

export const GlobaStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
}

:root{
  --colorbackground: #dbe7ff;
  --colorstandard: #394863;
  --colorparagraph: #2b2d30;
  --colorError: rgba(255, 0, 0, 0.671);
}

body{
  padding: 20px 160px;
  background-color: var(--colorbackground);
}

label button{
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: -16%;
  right: 1%;
  height: 46px;
  padding: 16px;
  border-radius: 40px;
  background-image: linear-gradient(to right, #84A7E8, #394863) ;
  color: #fff;
  transition: 300ms;
  font-size: 1.3rem;
}

a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

button{
  cursor: pointer;
}

label button:hover{
  filter: brightness(90%);
}

input{
  width: 350px;
  height: 50px;
  border-radius: 40px;
  box-shadow: 0px 0px 2px var(--colorstandard);
  padding-left: 20px;
  font-size: 1.5em;
}

@media (max-width: 1210px){
  body{
    padding: 20px 80px;
  }
}

@media (max-width: 1000px){
  body{
    padding: 20px 50px;
  }

  .image img{
    margin-left: 60px;
    width: 40vw;
  }

  .image p{
    min-width: 350px;
  }

}

@media (max-width: 610px){
  body{
    padding: 20px 20px;
  }

  .image{
    display: block;
  }

  .image img{
    position: absolute;
    top: 0;
  }

  .container{
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .error{
    display: none;
  }
}

main{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 355px;
  height: 215px;
}

h1, h2, h3, h4, h5, h6, p, td, tr, th, a{
  color: var(--colorstandard);
}

button:disabled{
  opacity: 0.5;
  cursor: no-drop;
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

.error{
  width: 400px;
}

label{
  position: relative;
  font-weight: bold;
  color: #444040;
}

.hidden{
  display: none;
}

.errorParagraph{
  margin-top: 5px;
  color: var(--colorError);
  max-width: 380px;
}

.overlayModal {
    padding: 4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .modalContent {
    height: 200px;
    position: relative;
    padding: 1rem 2rem;
    background: var(--colorbackground);
    border-radius: 0.25rem;
  }

  .modalContent h1 {
    margin-bottom: 1rem;
  }

  .modalContent input:disabled {
    background-color: #fff !important;
  }

`;
