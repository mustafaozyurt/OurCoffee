import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="cards__item">
      <Link className="cards__item__link" to={`http://localhost:3001/product/${props.product}`}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="Travel" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.desc}</h5>
          <h3 className="cards__item__price">${props.price}</h3>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;