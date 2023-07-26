import "./Footer.css";
import { Link } from "react-router-dom";

// Components
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Stay Updated with Our Café's Latest Delights and Events!
        </p>
        <p className="footer-subscription-text">
        Enter Your Email to Stay in the Loop.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-contact">
        <div className="footer-contact-wrapper">
          <div className="footer-contact-items">
            <i className="fas fa-map-marker-alt" />
            <h2>Adress</h2>
            <Link>123 Elm Street, Imaginaryville 98765 Fictitiousland</Link>
          </div>
          <div className="footer-contact-items">
            <i className="fas fa-envelope" />
            <h2>E-mail</h2>
            <Link>noreply@ourcoffee.com</Link>
            <Link>no-reply@ourcoffee.com</Link>
          </div>
        </div>
        <div className="footer-contact-wrapper">
          <div className="footer-contact-items">
            <i className="fas fa-phone" />
            <h2>Call Us</h2>
            <Link>+1 555 123 4567</Link>
          </div>
          <div className="footer-contact-items">
            <i className="fas fa-clock" />
            <h2>Opening Hours</h2>
            <Link>Monday-Friday: 8.00-24.00</Link>
            <Link>Saturday: 8.00-23.00</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Our Coffee
              <i className="fas fa-mug-hot" />
            </Link>
          </div>
          <small className="website-rights">Our Coffee © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
