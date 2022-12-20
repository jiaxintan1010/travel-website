import React from "react";
import { Link } from "react-router-dom";

function CardItem({ path, img, label, text }) {
  return (
    <div className="card-item-container">
      <Link className="card-item-link" to={path}>
        <figure className="card-item-img-container" data-category={label}>
          <img className="card-item-img" src={img} alt="travel-img" />
        </figure>
        <div className="card-item-info">
          <h5>{text}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
