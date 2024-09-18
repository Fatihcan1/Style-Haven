import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './index.css'; // Use the consolidated CSS file

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
