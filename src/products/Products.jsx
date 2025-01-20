import "./Products.css";

const Products = ({ result }) => {
  return (
    <div>
      <section className="card-container">{result}</section>

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
};

export default Products;
