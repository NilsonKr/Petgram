import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #efefef;
    max-width: 600px;
    margin: 0 auto;
    overscroll-behavior: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  #__next{
    height: 100vh;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }

`;
