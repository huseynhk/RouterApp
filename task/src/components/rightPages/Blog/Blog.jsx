import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../../constant/Router";
import BlogAuthors from "./BlogAuthors";
import BlogPartner from "./BlogPartner";

const Blog = () => {
  const location = useLocation();
  console.log(location)

  return (
    <>
      <div>
        <nav>
          <h3>Blog Page</h3>
          <div className="flex">
            <Link
              to="author"
              className={
                location.pathname === "/blog/author"
                  ? "activeLink"
                  : "aboutLink"
              }
            >
              Authors
            </Link>
            <Link
              to="partners"
              className={
                location.pathname === "/blog/partners"
                  ? "activeLink"
                  : "aboutLink"
              }
            >
              Partners
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
          <Route path="author" element={<BlogAuthors />} />
          <Route path="partners" element={<BlogPartner />} />
        </Routes>
      </div>
    </>
  );
};

export default Blog;
