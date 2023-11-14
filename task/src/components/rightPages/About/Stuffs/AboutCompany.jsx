import React from "react";

const AboutCompany = () => {
  return (
    <div className="flex">
      <div className="flex column">
        <h1 className="menuTitle">About Company</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minima qui porro.
        </p>
        <img
          src={
            "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutCompany;
