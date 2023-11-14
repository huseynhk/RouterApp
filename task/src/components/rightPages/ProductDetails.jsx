import React, { useState, useEffect } from "react";
import { GetSingleProduct } from "../../api/GetRequest";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState("");
  const { id } = useParams();

  const fetchMovieDetail = async () => {
    const response = await GetSingleProduct(id);
    setProductDetail(response);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  return (
    <>
      <>
        {productDetail && (
          <div className="detailPage flex">
            <div className="detail">
              <div className="imgDiv">
                <img
                  src={productDetail.images[0]}
                  alt={productDetail.title}
                  className="cardImg2"
                />
              </div>

              <div className="cardBody flex">
                <h5 className="card-title">{productDetail.title}</h5>
                <p className="card-text">
                  {productDetail.description.slice(0, 50)}
                </p>
                <p className="card-text">$ {productDetail.price}</p>
                <p className="card-text">{productDetail.brand}</p>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default ProductDetails;
