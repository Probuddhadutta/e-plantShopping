import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Lavender", category: "Aromatic", price: 20 },
  { id: 2, name: "Mint", category: "Aromatic", price: 15 },
  { id: 3, name: "Aloe Vera", category: "Medicinal", price: 25 },
  { id: 4, name: "Tulsi", category: "Medicinal", price: 18 },
  { id: 5, name: "Snake Plant", category: "Decorative", price: 30 },
  { id: 6, name: "Peace Lily", category: "Decorative", price: 35 }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="products">
      {categories.map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div className="product-grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id} className="card">
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button onClick={() => dispatch(addToCart(plant))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
