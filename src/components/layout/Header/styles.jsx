import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 54.6vw;

  & .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  & .header {
    width: 85%;
    height: 5em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .menuBtn {
    display: none;
    background: none;
    border: none;
  }

  & h1 {
    color: hsl(0, 0%, 100%);
    font-size: 42px;
    letter-spacing: 5px;
    margin: 8% auto;
  }

  & img {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    height: 498px;

    & .menuBtn {
      display: block;
    }

    & .showMenuBtn path {
      fill: hsl(0, 0%, 100%, 0.5);
    }

    & .menu {
      position: absolute;
      display: none;
      top: 5rem;
      left: 0;
      width: 100%;
    }

    & .showMenu {
      display: block;
    }

    & .menu .triangle {
      position: relative;
      width: 85%;
      height: 2rem;
      margin: 0 auto;
    }

    & .menu .triangle div {
      position: absolute;
      right: 0;
      border-top: 2rem solid transparent;
      border-right: 2rem solid hsl(0, 0%, 100%);
    }

    & .menu .menu-container {
      width: 85%;
      height: 242px;
      margin: 0 auto;
      padding: 40px 0;
      box-shadow: 0px 0px 2px hsl(0, 10%, 45%);
      background-color: hsl(0, 0%, 100%);
    }

    & .nav-list li {
      padding-bottom: 37px;
    }

    & .nav-list a {
      color: hsl(232, 10%, 55%);
    }

    & h1 {
      width: 8em;
      margin: 48px auto;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden;
  }
`;
