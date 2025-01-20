import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Award, Shield, Truck, ChevronRight } from "lucide-react";
import { FiHeart } from "react-icons/fi";
import Button from "../components/Button";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Home.css";

const Home = ({ handleClick }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function clickHandle() {
    setBackgroundColor(backgroundColor === "white" ? "#28282b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#f3f3f3" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Luxury shoe background"
            className="hero-image"
          />
        </div>

        <nav className="nav">
          <div className="nav-brand">
            <span className="nav-brand-text">DeShop🛒</span>
          </div>
          <div className="nav-links">
            <a href="#">
              <FiHeart className="nav-icons" />
            </a>
            <a href="">
              <AiOutlineShoppingCart className="nav-icons" />
            </a>
            <a href="">
              <AiOutlineUserAdd className="nav-icons" />
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">Walk Your Path</h1>
          <p className="hero-description">
            Discover our collection of handcrafted footwear that blend
            traditional craftsmanship with modern designs.
          </p>
          <Link to="/producthome">
            <button className="hero-button">
              <span>Explore Collection</span>
              <ChevronRight className="icon" />
            </button>
          </Link>
        </div>
      </header>

      <section className="featured">
        <h2 className="featured-title">Top Companies</h2>
        <div className="products-grid">
          {[
            {
              name: "PUMA",
              image:
                "https://m.media-amazon.com/images/I/710EfgKQunL._AC_SY500_.jpg",
            },
            {
              name: "ADIDAS",
              image:
                "https://m.media-amazon.com/images/I/61PF7Zt-2qL._AC_SY625_.jpg",
            },
            {
              name: "VANS",
              image:
                "https://m.media-amazon.com/images/I/51WWZIwFKQL._AC_SY500_.jpg",
            },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-container">
                <Link to="/producthome">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </Link>
              </div>
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          {[
            {
              icon: <Shield className="icon" />,
              title: "6 Months Warranty",
              description:
                "Every footwear comes with our comprehensive warranty coverage.",
            },
            {
              icon: <Truck className="icon" />,
              title: "Free Shipping",
              description: "Complimentary worldwide shipping on all orders.",
            },
            {
              icon: <Award className="icon" />,
              title: "Quality Certified",
              description: "All our products are quality certified.",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-brand">
              <span className="footer-brand-text">DeShop🛒</span>
            </div>
            <p>A journey of many miles start with a good footwear.</p>
          </div>
          {[
            {
              title: "Shop",
              links: [
                "Collection",
                "New Arrivals",
                "Best Sellers",
                "Gift Cards",
              ],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Sustainability"],
            },
            {
              title: "Support",
              links: ["Contact Us", "FAQ", "Shipping", "Returns"],
            },
          ].map((column, index) => (
            <div key={index} className="footer-column">
              <h3>{column.title}</h3>
              <ul className="footer-links">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer-link">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DeShop🛒. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
