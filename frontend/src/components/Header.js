import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Style Haven</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
