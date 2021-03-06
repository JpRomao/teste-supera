import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #000;
    background-color: #FFF;
    --webkit-font-smoothing: antialiased;
    padding-top: 6px;
  }

  body, input, button {
    font: 400 1.6rem Roboto, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
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
