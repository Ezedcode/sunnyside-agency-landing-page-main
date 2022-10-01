import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 9rem;
  height: 3.5rem;
  border: none;
  border-radius: 31px;
  background-color: hsl(0, 0%, 100%);
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 100%);
    background-color: hsl(0, 0%, 100%, 0.2);
  }

  @media screen and (max-width: 792px) {
    background-color: hsl(51, 100%, 49%);
    hover: none;
    &:hover {
      cursor: pointer;
      color: hsl(0, 0%, 100%);
      background-color: hsl(198, 62%, 26%);
    }
  }
`;

const ContactBtn = () => {
  return (
    <Btn>
      <h2>CONTACT</h2>
    </Btn>
  );
};

export default ContactBtn;
