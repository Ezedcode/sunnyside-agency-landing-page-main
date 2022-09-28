import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: "Barlow", sans-serif;
  }

  h1 {
    font-family: "Fraunces 9pt", serif;
    font-size: 2em;
  }
`;