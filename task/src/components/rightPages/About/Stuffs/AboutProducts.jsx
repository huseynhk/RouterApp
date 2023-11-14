import React from "react";

const AboutProducts = () => {
  return (
    <div className="flex">
      <div className="flex column">
        <h1 className="menuTitle">About Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minima qui porro.
        </p>
        <img
          src={
            "https://images.unsplash.com/photo-1551590192-8070a16d9f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutProducts;
