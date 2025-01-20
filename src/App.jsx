import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./landing pages/Home";
import ProductHome from "./landing pages/ProductHome";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producthome" element={<ProductHome />} />
        </Routes>
      </div>
  );
}

export default App;
