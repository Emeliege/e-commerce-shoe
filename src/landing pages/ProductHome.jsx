import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../navigation/Nav";
import Recommended from "../recommended/Recommended";
import Products from "../products/Products";
import products from "../data/Data";
import Card from "../components/Card";
import "./ProductHome.css";

const ProductHome = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function clickHandle() {
    setBackgroundColor(backgroundColor === "white" ? "#28282b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#f3f3f3" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        className="togglebtn"
        onClick={clickHandle}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#28282b" ? "Dark Mode" : "Light mode"}
      </button>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default ProductHome;
