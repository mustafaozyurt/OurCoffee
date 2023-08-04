import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="card__item">
      <Link
        className="card__item__link"
        to={`http://localhost:3001/product/${props.product}`}
      >
        <figure className="card__item__pic-wrap" data-category={props.label}>
          <img className="card__item__img" alt="Travel" src={props.src} />
        </figure>
        <div className="card__item__info">
          <h5 className="card__item__text">{props.desc}</h5>
          <h3 className="card__item__price">${props.price}</h3>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
