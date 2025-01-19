import React, { useState } from "react";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: "15",
    description: "Produces oxygen at night, improving air quality.",
    image: "path_to_snake_plant_image.jpg",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: "12",
    description: "Filters formaldehyde and xylene from the air.",
    image: "path_to_spider_plant_image.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: "18",
    description: "Removes mold spores and purifies the air.",
    image: "path_to_peace_lily_image.jpg",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: "14",
    description: "Improves humidity and removes toxins.",
    image: "path_to_boston_fern_image.jpg",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: "20",
    description: "Excellent air purifier and decorative plant.",
    image: "path_to_rubber_plant_image.jpg",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: "10",
    description: "Soothes skin and purifies air.",
    image: "path_to_aloe_vera_image.jpg",
  },
];
const ProductPage = ({ cartItems, setCartItems }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) return prevCart; 
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <div className="cart-icon">
          Cart: {cart.length}
        </div>
        <button className= "view-cart" onClick={() => navigate("/cart")}>View Cart</button>
      </header>
      <h2>Air Purifying Plants</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            
            <button
            className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ProductPage;



