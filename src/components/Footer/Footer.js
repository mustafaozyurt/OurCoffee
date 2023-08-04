import "./Footer.css";
import { Link } from "react-router-dom";

// Components
import { Button } from "../Button/Button";
import FooterContactItem from "../FooterContactItem/FooterContactItem";
import SocialIcon from "../SocialIcon";

function Footer() {
  const footerContactItemsData = [
    {
      icon: "fas fa-map-marker-alt",
      contactType: "Address",
      info1: "123 Elm Street,",
      info2: "Imaginaryville 98765 Fictitiousland",
    },
    {
      icon: "fas fa-envelope",
      contactType: "E-mail",
      info1: "noreply@ourcoffee.com",
      info2: "no-reply@ourcoffee.com",
    },
    {
      icon: "fas fa-phone",
      contactType: "Call Us",
      info1: "+1 555 123 4567",
      info2: ""
    },
    {
      icon: "fas fa-clock",
      contactType: "Opening Hours",
      info1: "Monday-Friday: 8.00-24.00",
      info2: "Saturday: 8.00-23.00",
    },
  ];

  const socialIconsData = [
    {
      platform: "facebook",
      link: "https://www.facebook.com/",
      iconClass: "fab fa-facebook-f",
      label: "Facebook",
    },
    {
      platform: "instagram",
      link: "https://www.instagram.com/",
      iconClass: "fab fa-instagram",
      label: "Instagram",
    },
    {
      platform: "youtube",
      link: "https://www.youtube.com/",
      iconClass: "fab fa-youtube",
      label: "Youtube",
    },
    {
      platform: "twitter",
      link: "https://twitter.com/",
      iconClass: "fab fa-twitter",
      label: "Twitter",
    },
    {
      platform: "linkedin",
      link: "https://www.linkedin.com/",
      iconClass: "fab fa-linkedin",
      label: "LinkedIn",
    },
  ];

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
          {footerContactItemsData.map((item, index) => (
            <FooterContactItem
              key={index}
              icon={item.icon}
              contactType={item.contactType}
              info1={item.info1}
              info2={item.info2}
            />
          ))}
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
            {socialIconsData.map((icon, index) => (
              <SocialIcon
                key={index}
                platform={icon.platform}
                link={icon.link}
                iconClass={icon.iconClass}
                label={icon.label}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
