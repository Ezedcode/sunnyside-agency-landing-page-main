import styled from "styled-components";

export const Container = styled.div`
  & img {
    width: 50%;
  }

  @media screen and (max-width: 375px) {
    & img {
      width: 100%;
    }
  }
`;
