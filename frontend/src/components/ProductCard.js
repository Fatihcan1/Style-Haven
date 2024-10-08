import React from 'react';

function ProductCard({ name, price, imgSrc }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
