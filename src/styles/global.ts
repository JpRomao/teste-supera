import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 63%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    color: #FFF;
    background-image: linear-gradient(#000222, #000261);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    --webkit-font-smoothing: antialiased;
    padding-top: 6px;
    width: 100%;
  }

  body, input, button {
    font: 400 1.6rem Roboto, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  @media(min-width: 768px) {
    :root {
      font-size: 70%;
    }
  }
`
