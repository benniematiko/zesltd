import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

// import { assets } from "../assets/assets"

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {


  const [active , setActive ] = useState("navbar")

  const showNav = () => {
    setActive("navbar activeNavBar")

  }

  // Remove navbar

  const removeNav = () => {
    setActive("navbar")

  }

  return (
    <div className="navbarsection">
      <div className="headercontainer">
        <div className="logodiv">
          <Link to="/">
            <h1 className="logo">
              Zes Co<span>. </span>Ltd<span>.</span>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navlinks flex">
            <li className="navitems">
              <Link to="/services" className="navlink">
                Services
              </Link>
            </li>
            <li className="navitems">
              <Link to="/portfolio" className="navlink">
                Portfolio
              </Link>
            </li>
            <li className="navitems">
              <Link to="/about" className="navlink">
                About Us
              </Link>
            </li>
            <li className="navitems">
              <Link to="/contactus" className="navlink">
                <button className="contactbtn">Contact Us</button>
              </Link>
            </li>
          </ul>
          <div onClick={removeNav} className="closenavbar">
            <span>
              <FaTimes />
            </span>
          </div>
        </div>

        <div onClick={showNav} className="togglenavbar">
          <span><FaBars /></span>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
