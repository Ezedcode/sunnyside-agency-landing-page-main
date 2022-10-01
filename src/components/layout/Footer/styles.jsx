import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 5rem 0;
  text-align: center;
  background-color: hsl(168, 34%, 41%);

  & a {
    color: hsl(167, 40%, 24%);
    transition: 0.5s;
  }

  & a:hover {
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }

  & path {
    fill: hsl(167, 40%, 24%);
    cursor: pointer;
    transition: 0.5s;
  }

  & li:hover path {
    fill: hsl(0, 0%, 100%);
  }

  & .nav-list,
  & .socialNetworks {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  & .nav-list {
    width: 17rem;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  & .socialNetworks {
    width: 9rem;
    list-style: none;
  }
`;
