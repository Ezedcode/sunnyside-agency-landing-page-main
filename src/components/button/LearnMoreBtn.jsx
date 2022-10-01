import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 121px;
  }
`;

const Btn = styled.button`
  border: none;
  background: none;

  & h3 {
    font-weight: bolder;
    font-size: 15px;
    letter-spacing: 1px;
    margin-left: 7.7px;
  }

  & .first,
  & .secund {
    position: relative;
    width: 121px;
    border-radius: 5px;
    border: 5px solid transparent;
  }

  & .first {
    top: -8px;
    z-index: -1;
  }

  & .secund {
    top: -18px;
    z-index: -2;
    border: 5px solid ${(props) => props.color};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .first {
    animation: ${animation} 1s;
    border-color: ${(props) => props.colorHover};
  }

  @media screen and (max-width: 375px) {
    & div {
      margin: 0 auto;
    }

    & h3 {
      margin-left: 0px;
    }
  }
`;

const LearnMoreBtn = ({ color, colorHover }) => {
  return (
    <Btn color={color} colorHover={colorHover}>
      <h3>LEARN MORE</h3>
      <div className="first"></div>
      <div className="secund"></div>
    </Btn>
  );
};

export default LearnMoreBtn;
