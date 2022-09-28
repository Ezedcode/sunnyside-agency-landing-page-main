import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
