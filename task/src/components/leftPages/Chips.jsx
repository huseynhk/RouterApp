import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import Lays from "../../../assets/imgs/lays.webp";

const Chips = () => {
  const [images, setImages] = useState([]);

  const addImg = () => {
    setImages([...images, Lays]);
  };

  return (
    <>
      <div className="main flex">
        <div className="image-container">
          {images.map((img, index) => (
            <img key={index} src={img} className="lays" alt="Lays" />
          ))}
        </div>
        <div className="side fixed">
          <h2>Bags Eaten: {images.length}</h2>
          <button className="nom" onClick={addImg}>
            Nom Nom Nom
          </button>
          <Link to={ROUTER.Home}>Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default Chips;
