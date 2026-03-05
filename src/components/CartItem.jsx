import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      
      {/* Thumbnail */}
      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      {/* Plant Details */}
      <div className="cart-info">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>

        {/* Quantity Controls */}
        <div className="quantity-controls">
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
        </div>

        {/* Delete Button */}
        <button
          className="delete-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
