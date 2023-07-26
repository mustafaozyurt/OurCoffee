import React, { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import axios from "axios";

function Cards() {
  const [favoriteCoffees, setFavoriteCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavoriteCoffees = async () => {
      try {
        setLoading(true);

        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:5000/coffees/favorite",
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.request(config);
        setFavoriteCoffees(response.data.favoriteCoffees);

        setLoading(false);
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };

    fetchFavoriteCoffees();
  }, []);

  return (
    <div className="cards">
      <h1>OUR EPIC COFFEES!</h1>

      <div className="cards__wrapper">
        {loading && favoriteCoffees.length === 0? (
          <h1>Loading...</h1>
        ) : (
          favoriteCoffees?.map((coffee) => (
            <CardItem
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
  );
}

export default Cards;
