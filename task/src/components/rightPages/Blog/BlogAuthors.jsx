import React from "react";

const BlogAuthors = () => {
  return (
    <>
      <div className="flex">
        <div className="flex column">
          <h1 className="menuTitle">Authors</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            minima qui porro.
          </p>
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661763119491-c0c6205a2163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0aG9yc3xlbnwwfHwwfHx8MA%3D%3D"
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BlogAuthors;
