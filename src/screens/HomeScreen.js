import "./HomeScreen.css";
import { useState, useEffect } from "react";
import axios from "axios";

//components
import CardItem from "../components/CardItem/CardItem";
import { Button } from "../components/Button/Button";
import FormItem from "../components/FormItem";

const HomeScreen = () => {
  const [favoriteCoffees, setFavoriteCoffees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", className: "" });

  const headerButtons = [
    {
      className: "btns",
      buttonStyle: "btn--outline",
      buttonSize: "btn--large",
      path: "/coffees",
      children: "SEE OUR MENU",
    },
    {
      className: "btns",
      buttonStyle: "btn--primary",
      buttonSize: "btn--large",
      path: "http://localhost:3001/",
      children: (
        <>
          BUY OUR PRODUCTS
          <i className="fas fa-shopping-cart" />
        </>
      ),
    },
  ];

  const formItems = [
    {
      label: "Your Name:",
      value: "name",
    },
    {
      label: "Your E-Mail Address:",
      value: "email",
    },
    {
      label: "Subject:",
      value: "subject",
    },
    {
      label: "Your Message:",
      value: "message",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        contactForm
      );
      const responseData = response.data;

      setStatus({
        message: responseData.status,
        className: response.ok
          ? "status-message-success"
          : "status-message-error",
      });

      if (response.ok) {
        setContactForm({ name: "", email: "", subject: "", message: "" });
      }

      console.log(status);
      console.log(contactForm);

      setTimeout(() => {
        setStatus({ message: "", className: "" });
      }, 3000);
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatus({
        message: responseData.status,
        className: "status-message-error",
      });

      console.log(status);

      setTimeout(() => {
        setStatus({ message: "", className: "" });
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchFavoriteCoffees = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "http://localhost:5000/coffees?isFav=true"
        );
        setFavoriteCoffees(response.data.coffees);

        setLoading(false);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchFavoriteCoffees();
  }, []);

  return (
    <div className="homescreen">
      <section className="homescreen__header">
        <div className="homescreen__header__container">
          <h1>DISCOVER THE TASTE OF THE BEST COFFEE</h1>
          <p>What are you waiting for?</p>
          <div className="homescreen__header__btns">
            {headerButtons.map((button, index) => (
              <Button key={index} {...button}>
                {button.children}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="homescreen__content">
        <div className="homescreen__content__inner">
          <div className="homescreen__content__cards">
            <h1>OUR EPIC COFFEES!</h1>

            <div className="homescreen__content__cards__wrapper">
              {loading && favoriteCoffees.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                favoriteCoffees.map((coffee) => (
                  <CardItem
                    key={coffee._id}
                    product={coffee._id}
                    label={coffee.name}
                    desc={coffee.description}
                    src={coffee.imageUrl}
                    price={coffee.price}
                  />
                ))
              )}
            </div>
          </div>

          <div className="homescreen__content__contact">
            <div className="homescreen__content__contact__form">
              <form className="homescreen__content__contact__form__inner">
                <div className="contact__form__title">
                  <h3>Share Your Thoughts</h3>
                </div>
                {formItems.map((item, index) => (
                  <FormItem
                    key={index}
                    value={contactForm[item.value]}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        [item.value]: e.target.value,
                      })
                    }
                  >
                    {item.label}
                  </FormItem>
                ))}

                <div className="contact__form__button">
                  <Button
                    buttonSize={"btn--large"}
                    buttonStyle={"btn--primary"}
                    onClick={handleSubmit}
                  >
                    Send The Contact Form <i className="fas fa-paper-plane"></i>
                  </Button>
                </div>

                {status.message && status.className && (
                  <div className={status.className}>{status.message}</div>
                )}
              </form>
            </div>
            <div className="homescreen__content__contact__img">
              <img
                src="/images/img-contact-form.jpg"
                alt="Support Png vectors by Lovepik.com"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
