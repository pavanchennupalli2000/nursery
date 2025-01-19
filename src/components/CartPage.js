import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
      </header>
      <h2>Total Cart Amount: ${totalCartAmount.toFixed(2)}</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price : ${Number(item.price).toFixed(2)}</p>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <p>Total: ${Number(item.price) * item.quantity.toFixed(2)}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-actions">
        <button onClick={() => navigate("/product")}>Continue Shopping</button>
        <button onClick={() => alert("Coming Soon.....")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;


