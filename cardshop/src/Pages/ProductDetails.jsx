import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function ProductDetails() {
  //är null för fetch har inte hunnit hämta data
  const [product, setProduct] = useState(null);

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

        <p className="description">{product.description}</p>
      </div>

      <div className="Buy-box">
        <p>{product.condition}</p>

        <p>{product.price} kr</p>
      </div>
    </div>
  );
}

export default ProductDetails;
