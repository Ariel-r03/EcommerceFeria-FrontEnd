import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/Authentication/AuthProvider.jsx";
import { ShoppingCartProvider } from "./Contexts/ShoppingCart/ShoppingCartProvider.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </AuthProvider>
);
