import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { GlobalStyle } from "./theme/globalStyle";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  max-width: 1440px;
  background-color: red;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Container></Container>
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
