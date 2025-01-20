import { useState } from "react";
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { FaHome, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = (e) => {
    if (e.target.className === "container") {
      setShowInput(false);
    }
  };

  return (
    <nav>
      <Link to="/">
        <FaHome className="home-icon"/>
      </Link>
      <div onClick={handleClick}>
        {showInput ? (
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            value={query}
          />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icon" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
