import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import Lays from "../../../assets/imgs/lays.webp";

const Chips = () => {
  const [images, setImages] = useState([]);

  const addImg = () => {
    setImages([...images, Lays]);
  };

  const deleteImg = (index) => {
    const deletedImage = [...images];
    deletedImage.splice(index, 1);
    setImages(deletedImage);
    // setImages((prevImage) =>
    //   prevImage.filter((id, imgIndex) => imgIndex !== index)
    // );
  };

  return (
    <>
      <div className="main flex">
        <div className="image-container">
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} className="lays" alt="Lays" />
              <button className="nom" onClick={() => deleteImg(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="side fixed">
          <h2>Bags Eaten: {images.length}</h2>
          <div className="flex">
            <button className="nom" onClick={addImg}>
              Nom Nom
            </button>
            <button className="nom" onClick={() => setImages([])}>
              Enough
            </button>
          </div>
          <Link to={ROUTER.Home}>Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default Chips;
