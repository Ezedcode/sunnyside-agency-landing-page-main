import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  & .header {
    width: 85%;
    height: 5em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & button {
    display: none;
    background: none;
    border: none;
  }

  @media screen and (min-width: 375px) {
    & button {
      display: block;
    }
  }
`;
