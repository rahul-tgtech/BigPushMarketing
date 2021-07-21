import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Blogcategory({ blogs }) {
  return (
    <div>
      <div
        className="blog_category d-flex"
        style={{
          maxWidth: "1250px",
          margin: "0px auto",
          paddingLeft: "60px",
          paddingRight: "50px",
          paddingBottom: "100px",
        }}
      >
        {blogs.map((blog) => (
          <Link
            to={`/category/${blog.categoryid}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="blog-card"
              style={{
                width: "260px",
                height: "440px",
                overflow: "hidden",
                marginLeft: "10px",
                marginRight: "20px",
                background: "white",
                borderRadius: "10px 10px",
              }}
            >
              <img
                style={{ objectFit: "" }}
                src={"http://142.93.221.45:5000/" + blog.imgurl}
                alt=""
                width="300px"
                height="220px"
              />
              <h6 className="text-uppercase" style={{ color: "#05cc79" }}>
                {blog.title}
              </h6>
              <p
                style={{
                  height: "80px",
                  objectFit: "contain",
                  fontSize: "18px",
                  overflow: "hidden",
                  wordSpacing: "2px",
                }}
              >
                {blog.content}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#4d4d4d",
                  letterSpacing: "0.14em",
                  paddingTop: "15px",
                }}
              >
                {blog.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogcategory;
