import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>OUR EPIC COFFEES!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-turkish-coffee.webp"
              text="Taste Turkey: Turkish Coffee Adventure"
              price="15.99$"
              label="Turkish Coffee"
              path="/about"
            />
            <CardItem
              src="images/img-americano.jpg"
              text="Coffee Infusion: Explore the Americano Blend"
              label="Americano"
              path="/about"
              price="10.99$"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-latte.jpg"
              text="Rich Brews: Embrace the Latte Experience"
              label="Coffee Latte"
              path="/about"
              price="12.99$"
            />
            <CardItem
              src="images/img-espresso_1.jpg"
              text="Bold Awakening: Embark on an Espresso Journey"
              label="Espresso"
              path="/about"
              price="7.99$"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
