import "./App.css";

import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";

import { ApiContextProvider } from "./context/ApiContext";
import { CartContextProvider } from "./context/CartContext";

import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div>
          <CartContextProvider>
            <ApiContextProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
              </Routes>
            </ApiContextProvider>
          </CartContextProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
