import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="columnone">
          <div className="logo">
            <img src="./67.jpeg" alt="" className="logo__zes" />
          </div>

          <div className="columndesc">
            <p>
              Zes company is dedicated to solving fire challenges industry
              players face!
              {/* <br />
              We know that without stable and stable electrical supply, many 
              companies cannot operate smoothly. This is the gap we are bridging.
             */}
            </p>
          </div>

          <div className="columnsocials">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className="columntwo">
          <h2>Company</h2>

          <ul>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Our Services</Link>
            </li>
            <li>
              <Link>Our Team</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="columnthree">
          <h2>Services & Information</h2>

          <ul>
            <li>
              <Link>Fire Suppression Systems</Link>
            </li>
            <li>
              <Link>Electrical Constractors</Link>
            </li>
            <li>
              <Link>Fire Detection & Extinguishers</Link>
            </li>
            <li>
              <Link>Mining Services</Link>
            </li>
          </ul>
        </div>
        <div className="columnfour">
          <h2>Contact Info</h2>

          <div className="contactsection">
            <p className="zes">ZES COMPANY LIMITED </p>
            <p> Morogoro, </p>
            <p>Private Bag,</p>
            <br />
            <p>zes.company@yahoo.com </p>
            <p>www.zesfirespecialists.com</p>
            <br />
            <p><strong>Office contact:</strong> <br />+255 677 822 542 </p>
            <p> <strong>WhatsApp number</strong> <br /> +255 677 822 542</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
