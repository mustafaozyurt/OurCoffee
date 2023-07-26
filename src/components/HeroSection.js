import "./HeroSection.css";

// Components
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>DISCOVER THE TASTE OF THE BEST COFFEE</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/coffees"
        >
          SEE OUR MENU
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="http://localhost:3001/"
        >
          BUY OUR PRODUCTS <i className="fas fa-shopping-cart" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
