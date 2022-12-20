import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import NoPage from "./components/pages/NoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <HashRouter basename="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </HashRouter>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
