import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          background: props.color,
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1300px", paddingLeft: "110px" }}
        >
          <Link to="/">
            <img
              className="navbar-brand animate__animated animate__backInLeft "
              src={Logo}
              style={{ height: "30px" }}
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <i
              class="fas fa-bars"
              style={{ color: "black", fontSize: "24px" }}
            ></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link middle animate__animated animate__backInLeft "
                  style={{ color: "black" }}
                >
                  About<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/case-studies"
                  className="nav-link middle animate__animated animate__backInLeft "
                  style={{ color: "black" }}
                >
                  Case Studies{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="nav-link middle animate__animated animate__backInLeft "
                  style={{ color: "black" }}
                >
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link middle animate__animated animate__backInLeft "
                  style={{ color: "black" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
