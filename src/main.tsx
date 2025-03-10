import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/index.tsx";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/index.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import App from "./App.tsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ShoppingCartProvider>
);
