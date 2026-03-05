import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, type: "increment" }));
  };

  const handleDecrement = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, type: "decrement" }));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div
      className="cart-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
      }}
    >
      {/* Thumbnail */}
      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      {/* Plant Details */}
      <div className="cart-info" style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 6px" }}>{item.name}</h3>
        <p style={{ margin: "2px 0" }}>
          Unit Price: <strong>${item.cost}</strong>
        </p>
        <p style={{ margin: "2px 0" }}>
          Subtotal:{" "}
          <strong>${(item.cost * item.quantity).toFixed(2)}</strong>
        </p>

        {/* Quantity Controls */}
        <div
          className="quantity-controls"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "10px 0",
          }}
        >
          <button
            onClick={handleDecrement}
            style={{
              padding: "4px 12px",
              fontSize: "1.1rem",
              borderRadius: "6px",
              border: "1px solid #aaa",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
            }}
          >
            -
          </button>
          <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            style={{
              padding: "4px 12px",
              fontSize: "1.1rem",
              borderRadius: "6px",
              border: "1px solid #aaa",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
            }}
          >
            +
          </button>
        </div>

        {/* Delete Button */}
        <button
          className="delete-btn"
          onClick={handleDelete}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "7px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// ─── Cart Page (wraps all CartItems + total + buttons) ───────────────────────
function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  // Total cart amount calculation
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      `✅ Order placed successfully!\nTotal Items: ${totalItems}\nTotal Amount: $${totalAmount.toFixed(2)}`
    );
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#2e7d32" }}>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            Your cart is empty.
          </p>
          <button
            onClick={handleContinueShopping}
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              padding: "12px 25px",
              fontSize: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Render each CartItem */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Total Cart Amount */}
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f1f8e9",
              borderRadius: "8px",
              border: "1px solid #a5d6a7",
            }}
          >
            <p style={{ fontSize: "1rem", margin: "4px 0" }}>
              Total Items: <strong>{totalItems}</strong>
            </p>
            <p style={{ fontSize: "1.2rem", margin: "4px 0", color: "#2e7d32" }}>
              Total Amount: <strong>${totalAmount.toFixed(2)}</strong>
            </p>
          </div>

          {/* Continue Shopping + Checkout Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handleContinueShopping}
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                padding: "12px 25px",
                fontSize: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Continue Shopping
            </button>

            <button
              onClick={handleCheckout}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "12px 25px",
                fontSize: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { CartPage };
export default CartItem;
