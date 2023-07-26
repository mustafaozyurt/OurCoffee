import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import { Button } from "./Button";

function Menu() {
  const classicCoffees = [
    { coffee: "Latte", price: "12.99$" },
    { coffee: "Espresso", price: "7.99$" },
    { coffee: "Cappuccino", price: "10.99$" },
    { coffee: "Turkish Coffee", price: "15.99$" },
    { coffee: "Americano", price: "10.99$" },
  ];

  const flavoredCoffees = [
    { coffee: "Caramel Machiato", price: "12.99$" },
    { coffee: "Vanilia", price: "14.99$" },
    { coffee: "Mocha", price: "18.99$" },
  ];

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="title-div">
        <div
          style={{
            width: "50px",
            height: "3px",
            background: "#e68541",
            marginBottom: "20px",
          }}
        ></div>
      </div>
      <div className="menu-container">
        <div className="menu__section">
          <h3>Classic Coffees</h3>
          <div
            style={{
              width: "30px",
              height: "3px",
              background: "#e68541",
              marginBottom: "20px",
            }}
          ></div>
          <table className="menu__items">
            {classicCoffees.map((item) => (
              <MenuItem coffee={item.coffee} price={item.price} />
            ))}
          </table>
        </div>

        <div className="menu__section">
          <h3>Flavored Coffees</h3>
          <div
            style={{
              width: "30px",
              height: "3px",
              background: "#e68541",
              marginBottom: "20px",
            }}
          ></div>
          <table className="menu__items">
            {flavoredCoffees.map((item) => (
              <MenuItem coffee={item.coffee} price={item.price} />
            ))}
          </table>
        </div>
      </div>

      <h2>Do You Want to Taste one of these?</h2>
      <div className="title-div">
        <div
          style={{
            width: "150px",
            height: "5px",
            background: "#e68541",
            marginBottom: "20px",
          }}
        ></div>
      </div>
      <div className="menu-button-container">
        <div className="menu-button">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            BUY OUR PRODUCTS <i className="fas fa-shopping-cart" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
