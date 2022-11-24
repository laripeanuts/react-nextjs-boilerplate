import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    vertical-align:baseline;
    list-style:none;
  }

  html, body #__next {
    width: 100%;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  body {
    font-size: 16px;
    list-style-type: none;
    font-family: "Roboto", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

`;
