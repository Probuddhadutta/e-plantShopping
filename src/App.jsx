import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const cart = useSelector(state => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
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
              <h3>Total Cost: ${totalCost}</h3>

              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}

              <Link to="/products">
                <button>Continue Shopping</button>
              </Link>
              <button>Checkout</button>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
