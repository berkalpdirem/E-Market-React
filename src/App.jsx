import "./App.css";

import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";

import { ApiContextProvider } from "./contex/ApiContext";

import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div>
          <ApiContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
            </Routes>
          </ApiContextProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
