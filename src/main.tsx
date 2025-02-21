import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import "./styles/globals.css";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
