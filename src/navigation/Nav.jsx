import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
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
      <div className="nav-container"
          onClick={handleClick}
          >
           {showInput ? (
        <input type="text" placeholder="Search..." onChange={handleInputChange} value={query} />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
      </div>
      <div className="profile-container">
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
  );
};

export default Nav;
