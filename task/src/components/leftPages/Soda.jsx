import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";

const Soda = () => {
  return (
    <div className="main soda flex">
      <div className="side">
        <h1>Omg Sugar</h1>
        <Link to={ROUTER.Home}>Go Back</Link>
      </div>
    </div>
  );
};

export default Soda;
