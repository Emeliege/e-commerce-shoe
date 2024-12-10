import Category from "./category/Category";
import Price from "./price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>DeShop🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;
