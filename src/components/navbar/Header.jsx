import "./Header.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="container">
        <div className="header-text">
          <h2>We Install Electrical Systems & Fire Suppression Systems</h2>
          <p>... mining services and many more solutions</p>

          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
