import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AboutCompany from "./Stuffs/AboutCompany";
import AboutProducts from "./Stuffs/AboutProducts";
import { ROUTER } from "../../../constant/Router";

const About = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <nav>
          <h3>About</h3>
          <div className="flex">
            <Link
              to="company"
              className={
                location.pathname === "/about/company"
                  ? "activeLink"
                  : "aboutLink"
              }
            >
              About Company
            </Link>
            <Link
              to="us"
              className={
                location.pathname === "/about/us"
                  ? "activeLink"
                  : "aboutLink"
              }
            >
              About Us
            </Link>
            <Link to={ROUTER.Home} className="aboutLink">
              Go Back
            </Link>
          </div>
        </nav>
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quas
        numquam, fugiat nulla delectus iusto tenetur suscipit provident
        voluptatum quod, nemo consequuntur deleniti dolores alias officia, ipsum
        at! Ipsam quasi beatae eligendi, adipisci quos suscipit odit ea. Ut
        architecto vel cumque dignissimos. Eius, est reiciendis explicabo
        exercitationem perspiciatis libero vel quos quibusdam repudiandae
        corporis earum in vitae quasi? Quibusdam tempora quo obcaecati earum.
        Nemo asperiores sunt laboriosam eius voluptatibus ea blanditiis nobis
        corrupti ut accusantium rerum iusto, illo quod, esse eveniet rem maxime
        sequi non itaque. Eum, error assumenda labore optio corporis deserunt
        eligendi provident molestiae ipsum mollitia laboriosam ea!
      </p>
      <div>
        <Routes>
          <Route path="company" element={<AboutCompany />} />
          <Route path="us" element={<AboutProducts />} />
        </Routes>
      </div>
    </>
  );
};

export default About;
