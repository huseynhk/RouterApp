import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../constant/Router";

const Home = () => {
  return (
    <div className="main ref">
     <div className="sides">
     <div className="side">
        <Link to={ROUTER.Contact}>Contact and Products</Link>
        <Link to={ROUTER.About}>About Us</Link>
        <Link to={ROUTER.Blog}>Blog</Link>
      </div>
      <div className="side">
        <Link to={ROUTER.Soda}>Soda</Link>
        <Link to={ROUTER.Chips}>Chips</Link>
        <Link to={ROUTER.Sardines}>Fresh Sardines</Link>
      </div>
     </div>
    </div>
  );
};

export default Home;
