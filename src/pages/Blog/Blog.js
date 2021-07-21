import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Blogcategory from "./Blogcategory";
// import Draggable from ' ';


import axios from "axios";


function Blog() {
  const [blog, setBlog] = useState([]);
  const [err, setErr] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
   
    loadBlog();
    getCategory();
  }, []);

  const loadBlog = async (token) => {
    try {
      const res = await axios.get("http://142.93.221.45:5000/api/Blogs");
      setBlog(res.data);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const getCategory = async () => {
    const token = localStorage.getItem("tokenStore");
    const res = await axios.get(
      `http://142.93.221.45:5000/Category/GetCategories`
    );
    setCategory(res.data);
  };

  const getCategoryById = async (id) => {
    const token = localStorage.getItem("tokenStore");
    const res = await axios.get(
      `http://142.93.221.45:5000/api/Blogs/GetBlogsByCategory/${id}`
    );
    setBlog(res.data);
  };
  return (
    <>
      <div
        className="case-top-section"
        style={{
          transform: "skewY(-5deg)",
        }}
      >
        <Header color="#F5F5F5" />
      </div>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div
          className="blog-title-container"
          style={{ backgroundColor: "#F5F5F5", textAlign: "center" }}
        >
          <h1 style={{ color: "#02345C" }}>Our Blog</h1>
        </div>
        <br />
        <br />
        <div className="header-blog" style={{ overflow: "auto" }}>
          <div
            className="blog-title d-flex"
            style={{
              maxWidth: "1250px",
              margin: "0 auto",
            }}
          >
            {category.map((category) => (
              <a className='middle' style={{cursor:'pointer'}} onClick={() => getCategoryById(category._id)}>
                <p
                  className="animate__animated animate__backInLeft text-uppercase"
                  style={{ letterSpacing: "0.11em", fontWeight: "500" }}
                >
                  {category.Name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="recent-container pt-5"
        style={{ backgroundColor: "#F5F5F5"}}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
          onClick={() => loadBlog()}
        >
          {/* <h3 style={{ display: "inline-block" }}>Recent</h3>{" "} */}
          <span style={{ color: "#4d4d4d" , fontWeight:'700', cursor:'pointer',paddingLeft:'20px' }}>View All</span>
        </div>
        <br />
        <br />
        <div className="blog_card" style={{overflow:'auto'}}>
          <Blogcategory blogs={blog} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
