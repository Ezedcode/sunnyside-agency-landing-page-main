import styled from "styled-components";

export const Container = styled.div`
  & .container {
    display: flex;
    width: 100%;
  }

  & .container:first-child {
    flex-direction: row-reverse;
  }

  & .container > div {
    width: 50%;
  }

  & button {
    text-align: left;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .content > div {
    width: 448px;
    margin: 0 auto;
    padding: 5rem 0;
  }

  & .container p {
    color: hsl(210, 4%, 67%);
    padding: 43px 0;
  }

  & .container h2 {
    font-size: 41px;
  }

  @media screen and (max-width: 375px) {
    text-align: center;

    & button {
      text-align: center;
    }

    & .container:first-child {
      flex-direction: column;
    }

    & section {
      flex-direction: column;
    }

    & .container > div {
      width: 100%;
    }

    & img {
      width: 100%;
    }

    & .content > div {
      width: 100%;
    }

    & .content p {
      width: 335px;
      margin: 0 auto;
    }
  }
`;
