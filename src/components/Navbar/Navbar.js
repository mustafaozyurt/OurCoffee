import { useState, useEffect } from "react";
import "./Navbar.css";

//Components
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Our Coffee
            <i className="fas fa-mug-hot" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link> 
            </li>
            <li className="nav-item">
              <Link
                to="/coffees"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Coffees
              </Link>
            </li>

            <li>
              <Link
                to="http://localhost:3001/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Shop <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" path="http://localhost:3001/">
              SHOP <i className="fas fa-shopping-cart" />{" "}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
