import React, { useState, useEffect } from "react";
import { GetProducts } from "../../api/GetRequest";
import MenuCard from "./MenuCard";

const ContactDetails = () => {
  const [datas, setDatas] = useState([]);

  const fetchProducts = async () => {
    const response = await GetProducts();
    setDatas(response.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Our Products</h1>
        <div className="menuList">
          {datas.map((menuItem, index) => {
            return (
              <MenuCard
                key={index}
                title={menuItem.title}
                image={menuItem.images[0]}
                description={menuItem.description}
                price={menuItem.price}
                id={menuItem.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
