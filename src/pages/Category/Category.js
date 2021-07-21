import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

function Category() {
  const [blog, setBlog] = useState([]);
  const [err, setErr] = useState("");
  const [category, setCategory] = useState([]);
  const [ready, setready] = useState(false);
  const [title, settitle] = useState('')
  const params = useParams();
  useEffect(() => {
    getCategoryById();
  }, [params.id]);

  const getCategory = async () => {
    const token = localStorage.getItem("tokenStore");
    const res = await axios.get(
      `http://142.93.221.45:5000/api/Blogs/${params.id}`
    );
    setCategory(res.data);
    console.log(category);
    setready(true);
  };

  const getCategoryById = async (id) => {
    const token = localStorage.getItem("tokenStore");
    const res = await axios.get(
      `http://142.93.221.45:5000/api/Blogs/GetBlogsByCategory/${params.id}`
    );
    setCategory(res.data);
      settitle(res.data[0].title)
    setready(true);
  };

  return ready ? (
    <>
      <div
        className="case-top-section-blog-des"
        style={{
          transform: "skewY(-5deg)",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Header color="#F5F5F5" />
      </div>
      <div
        className="blog-title-container"
        style={{ backgroundColor: "#F5F5F5", textAlign: "center" }}
      >
        <h1 style={{ color: "#02345C" }}>{title}</h1>
      </div>
      <div
        className="sizing"
        style={{
          marginTop: "-50px",
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#F5F5F5",
        }}
      >
        {category.map((category) => (
          <div
            className="blog-card contained"
            style={{
              width: "100%",
              height: "30%",
              maxWidth: "1100px",
              margin: "50px auto",
              background: "white",
              display: "flex",
              overflow: "hidden",
              borderRadius: "10px 10px",
            }}
          >
            <div>
              <div className="date_view" style={{ display: "flex" }}>
                <h6 className="text-uppercase" style={{ color: "#05cc79" }}>
                  {category.title}
                </h6>
                <li
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#4d4d4d",
                    letterSpacing: "0.14em",
                    paddingTop: "15px",
                  }}
                >
                  {category.date}
                </li>
              </div>
              <p
                style={{
                  paddingTop: "20px",
                  width: "100%",
                  overflow: "hidden",
                  wordSpacing: "3px",

                  paddingRight: "80px",
                }}
              >
                {category.content}
              </p>
              {/* <h6>Learn More</h6> */}
            </div>

            <div style={{display:'flex', alignItems:'center'}}>
              <img
                src={"http://142.93.221.45:5000/" + category.imgurl}
                alt=""
                width="300px"
                height="300px"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default Category;
