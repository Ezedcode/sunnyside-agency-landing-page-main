import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyle";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
