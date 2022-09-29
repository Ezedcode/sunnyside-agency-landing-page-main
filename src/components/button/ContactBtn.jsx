import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 9rem;
  height: 3.5rem;
  border: none;
  border-radius: 31px;
  background-color: hsl(51, 100%, 49%);
  @media screen and (max-width: 375px) {
    background-color: hsl(51, 100%, 49%);
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
