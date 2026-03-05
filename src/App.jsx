import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function LandingPage({ onGetStarted }) {
  return (
    <div className="background-image">
      <div className="landing">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Where Green Meets Life</p>
        <button className="get-started-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.cost, 0);

  return (
    <Router>
      {!showProductList ? (
        <LandingPage onGetStarted={() => setShowProductList(true)} />
      ) : (
        <>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">
              🛒 Cart ({totalItems})
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route
              path="/cart"
              element={
                <div className="cart-page">
                  <h2>Shopping Cart</h2>
                  <h3>Total Items: {totalItems}</h3>
                  <h3>Total Cost: ${totalCost.toFixed(2)}</h3>

                  {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    cart.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))
                  )}

                  <div className="cart-actions">
                    <Link to="/products">
                      <button className="continue-shopping-btn">
                        Continue Shopping
                      </button>
                    </Link>
                    <button className="checkout-btn">Checkout</button>
                  </div>
                </div>
              }
            />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
