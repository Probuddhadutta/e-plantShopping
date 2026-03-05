import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        id: 1,
        name: "Lavender",
        cost: 12,
        description: "Calming fragrance, great for relaxation and sleep.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Blooming_Lavender.jpg/800px-Blooming_Lavender.jpg",
      },
      {
        id: 2,
        name: "Mint",
        cost: 8,
        description: "Fresh scent, useful in cooking and herbal teas.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mint_leaves_-_whole_%281%29.jpg/800px-Mint_leaves_-_whole_%281%29.jpg",
      },
      {
        id: 3,
        name: "Rosemary",
        cost: 10,
        description: "Woody aroma, perfect for cooking and aromatherapy.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rosemary_in_bloom.jpg/800px-Rosemary_in_bloom.jpg",
      },
      {
        id: 4,
        name: "Jasmine",
        cost: 14,
        description: "Sweet floral scent, used in perfumes and teas.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jasminum_officinale.jpg/800px-Jasminum_officinale.jpg",
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 5,
        name: "Aloe Vera",
        cost: 15,
        description: "Soothes skin burns and aids digestion naturally.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png",
      },
      {
        id: 6,
        name: "Tulsi (Holy Basil)",
        cost: 9,
        description: "Sacred herb with immunity-boosting properties.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ocimum_tenuiflorum3.jpg/800px-Ocimum_tenuiflorum3.jpg",
      },
      {
        id: 7,
        name: "Neem",
        cost: 11,
        description: "Powerful antibacterial and antifungal medicinal plant.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Neem_Flowers.jpg/800px-Neem_Flowers.jpg",
      },
      {
        id: 8,
        name: "Chamomile",
        cost: 13,
        description: "Gentle herb known for calming and anti-inflammatory effects.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chamomile%40original_size.jpg/800px-Chamomile%40original_size.jpg",
      },
    ],
  },
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 9,
        name: "Peace Lily",
        cost: 18,
        description: "Elegant white blooms, excellent air purifier indoors.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg",
      },
      {
        id: 10,
        name: "Snake Plant",
        cost: 16,
        description: "Hardy and low-maintenance, releases oxygen at night.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/800px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
      },
      {
        id: 11,
        name: "Pothos",
        cost: 7,
        description: "Fast-growing vine, perfect for beginners and low light.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Epipremnum_pinnatum_var._aureum.jpg/800px-Epipremnum_pinnatum_var._aureum.jpg",
      },
      {
        id: 12,
        name: "Spider Plant",
        cost: 9,
        description: "Removes toxins from air and thrives in indirect light.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/800px-Hierbabuena_0611_Revised.jpg",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [addedItems, setAddedItems] = useState({});

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#4CAF50",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ margin: 0 }}>🌿 Paradise Nursery</h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <span
            style={{ cursor: "pointer", fontSize: "1rem" }}
            onClick={() => navigate("/")}
          >
            🏠 Home
          </span>
          <span style={{ fontSize: "1rem" }}>🛍️ Plants</span>
          <span
            style={{ cursor: "pointer", fontSize: "1rem" }}
            onClick={() => navigate("/cart")}
          >
            🛒 Cart ({totalCartItems})
          </span>
        </div>
      </div>

      {/* Page Header */}
      <div style={{ padding: "20px 30px" }}>
        <h2 style={{ color: "#2e7d32" }}>Our Plant Collection</h2>

        {/* Plant Categories */}
        {plantsData.map((section) => (
          <div key={section.category}>
            <h3
              style={{
                color: "#388e3c",
                borderBottom: "2px solid #a5d6a7",
                paddingBottom: "6px",
                marginTop: "30px",
              }}
            >
              {section.category}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {section.plants.map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    width: "200px",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                  }}
                >
                  {/* Thumbnail */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Name */}
                  <h4 style={{ margin: "10px 0 4px" }}>{plant.name}</h4>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#555",
                      margin: "0 0 8px",
                    }}
                  >
                    {plant.description}
                  </p>

                  {/* Price */}
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#2e7d32",
                      margin: "0 0 10px",
                    }}
                  >
                    ${plant.cost}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                    style={{
                      backgroundColor: addedItems[plant.id]
                        ? "#aaa"
                        : "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      cursor: addedItems[plant.id] ? "default" : "pointer",
                      width: "100%",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    {addedItems[plant.id] ? "✔ Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
