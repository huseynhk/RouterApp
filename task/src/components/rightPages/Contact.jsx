import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";

const Contact = () => {
  return (
    <div className="main contact flex">
      <div className="side">
        <h2>Contact Us</h2>
        <address>Khetai Rusel Plaza</address>
        <Link to={ROUTER.Home}>Go Back</Link>
        <Link to={ROUTER.Product}>Check Products</Link>
      </div>
    </div>
  );
};

export default Contact;
