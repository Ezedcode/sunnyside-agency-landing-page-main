import styled, { createGlobalStyle, keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const animation2 = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  text-align: center;
  height: 100vh;

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

  & .menu-container {
    display: flex;
  }

  & .nav-list {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 3rem;
  }

  & .nav-list a {
    color: hsl(0, 0%, 100%);
    transition: 0.5s;
  }

  & .nav-list a:hover {
    color: hsl(232, 10%, 55%);
  }

  & .nav-list li:nth-child(2) {
    padding: 0 3rem;
  }

  & h1 {
    color: hsl(0, 0%, 100%);
    font-size: 42px;
    letter-spacing: 5px;
    margin: 8% auto;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 792px) {
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

    & .hideMenu {
      display: block;
      animation: ${animation2} 1s !important;
    }

    & .showMenu {
      display: block;
      animation: ${animation} 1s;
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
      flex-direction: column;
      align-items: center;
    }

    & .nav-list {
      padding-right: 0px;
      flex-direction: column;
    }

    & .nav-list li {
      padding-bottom: 37px;
    }

    & .nav-list li:nth-child(2) {
      padding: 0px;
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
