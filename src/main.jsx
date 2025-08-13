// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.scss";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { CheckoutProvider } from "./context/CheckoutContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <CheckoutProvider>
            <App />
          </CheckoutProvider>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
