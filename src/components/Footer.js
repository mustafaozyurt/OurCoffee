import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

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
      <div class="footer-contact">
        <div className="footer-contact-wrapper">
          <div class="footer-contact-items">
            <i class="fas fa-map-marker-alt" />
            <h2>Adress</h2>
            <Link>123 Elm Street, Imaginaryville 98765 Fictitiousland</Link>
          </div>
          <div class="footer-contact-items">
            <i class="fas fa-envelope" />
            <h2>E-mail</h2>
            <Link>noreply@ourcoffee.com</Link>
            <Link>no-reply@ourcoffee.com</Link>
          </div>
        </div>
        <div className="footer-contact-wrapper">
          <div class="footer-contact-items">
            <i class="fas fa-phone" />
            <h2>Call Us</h2>
            <Link>+1 555 123 4567</Link>
          </div>
          <div class="footer-contact-items">
            <i class="fas fa-clock" />
            <h2>Opening Hours</h2>
            <Link>Monday-Friday: 8.00-24.00</Link>
            <Link>Saturday: 8.00-23.00</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Our Coffee
              <i class="fas fa-mug-hot" />
            </Link>
          </div>
          <small class="website-rights">Our Coffee © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
