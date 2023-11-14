import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";

const Sardines = () => {
  return (
    <div className="main fish flex">
      <div className="side">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <Link to={ROUTER.Home}>Go Back</Link>
      </div>
    </div>
  );
};

export default Sardines;
