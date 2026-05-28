import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import { useParams } from "react-router-dom";

function ProductDetails() {
  //är null för fetch har inte hunnit hämta data
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/cards/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="Product-detail">
      <div className="Product-image-container">
        <img src={product.image} alt={product.name} className="Product-image" />
      </div>

      <div className="Product-info">
        <h1>{product.name}</h1>

        <p className="Pro-de">
          <strong>Product details</strong>
        </p>
        <p className="description">{product.description}</p>
      </div>

      <div className="Buy-box">
        <p>
          <strong>Condition:</strong> {product.condition}
        </p>

        <h2>{product.price} kr</h2>

        <p>{product.quantity} in stock</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
