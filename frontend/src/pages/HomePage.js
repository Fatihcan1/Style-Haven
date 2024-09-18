import React from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  return (
    <main className="home-page">
      <h1>Welcome to Style Haven</h1>
      <p>Discover the best styles for every occasion.</p>
      <div className="product-grid">
        <ProductCard name="Elegant Dress" price="$120" imgSrc="https://via.placeholder.com/150" />
        <ProductCard name="Casual Shoes" price="$80" imgSrc="https://via.placeholder.com/150" />
        <ProductCard name="Designer Bag" price="$250" imgSrc="https://via.placeholder.com/150" />
        <ProductCard name="Stylish Sunglasses" price="$50" imgSrc="https://via.placeholder.com/150" />
      </div>
    </main>
  );
}

export default HomePage;
