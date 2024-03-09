import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/Router";

const MenuCard = ({ title, image, description, price, id }) => {
  const navigate = useNavigate();
  return (
    <div className="menuCard">
      <img className="cardImg" src={image} alt={title} />
      <h4>{title}</h4>
      <h6>{description.slice(0, 30)}</h6>
      <p>$ {price}</p>
      {/* <Link to={`${ROUTER.ProductDetails}/${id}`}>Go Details Page</Link> */}
      <button onClick={() => navigate(`/product/${id}`)}>Go Details Page</button>
    </div>
  );
};

export default MenuCard;
