import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";

const MenuCard = ({ title, image, description, price, id }) => {
  return (
    <div className="menuCard">
      <img className="cardImg" src={image} alt={title} />
      <h4>{title}</h4>
      <h6>{description.slice(0, 30)}</h6>
      <p>$ {price}</p>
      <Link to={`${ROUTER.ProductDetails}/${id}`}>Go Details Page</Link>
    </div>
  );
};

export default MenuCard;
