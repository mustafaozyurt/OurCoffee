import "./Coffees.css";

//components
import PageSection from "../components/PageSection/PageSection";
import MenuItem from "../components/MenuItem";
import { Button } from "../components/Button/Button";
import StyleItem from "../components/StyleItem";

export default function Coffees() {
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
    <div className="coffees__screen">
      <div className="coffees__header">
        <PageSection
          imageUrl={"/images/img-menu-section.jpg"}
          title={"The beginning of sweet moments, intertwined with coffee."}
        ></PageSection>
      </div>

      <div className="coffees__content">
        <div className="menu">
          <h1>Our Menu</h1>
          <div className="title-div">
            <StyleItem width={"50px"} height={"3px"} marginBottom={"20px"} />
          </div>
          <div className="menu-container">
            <div className="menu__section">
              <h3>Classic Coffees</h3>
              <StyleItem width={"30px"} height={"3px"} marginBottom={"20px"} />
              <table className="menu__items">
                {classicCoffees.map((item) => (
                  <MenuItem key={item.coffee} coffee={item.coffee} price={item.price} />
                ))}
              </table>
            </div>

            <div className="menu__section">
              <h3>Flavored Coffees</h3>
              <StyleItem width={"30px"} height={"3px"} marginBottom={"20px"} />
              <table className="menu__items">
                {flavoredCoffees.map((item) => (
                  <MenuItem key={item.coffee} coffee={item.coffee} price={item.price} />
                ))}
              </table>
            </div>
          </div>

          <h2>Do You Want to Taste one of these?</h2>
          <div className="title-div">
            <StyleItem width={"150px"} height={"5px"} marginBottom={"20px"} />
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
      </div>
    </div>
  );
}
