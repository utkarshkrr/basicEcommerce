import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home"; // Login page
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage"; // Product listing page
import Product from "./pages/Product"; // Individual product page
import Admin from "./pages/Admin"; // Admin panel
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if the user is not on the login or admin page */}
    {location.pathname !== "/" && location.pathname !== "/admin" && <Navbar />}


      <Routes>
        <Route path="/" element={<Home />} /> {/* Login page */}
        <Route path="/products" element={<ProductPage />} /> {/* Products page */}
        <Route path="/product/:id" element={<Product />} /> {/* Single product page */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
        <Route path="/admin" element={<Admin />} /> {/* Admin panel */}
      </Routes>
    </>
  );
}

export default App;
