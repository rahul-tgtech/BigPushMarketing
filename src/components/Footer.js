import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div
          className="footer_1"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div className="row">
            <div className="col-lg-6 pb-4">
              <a
                href="/"
                style={{
                  letterSpacing: "5px",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                LOGO
              </a>
            </div>
            <div className="col-lg-2 pb-3">
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </a>
            </div>
            <div className="col-lg-2">
              <p>
                <a
                  href="/case-studies"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Case Studies
                </a>
              </p>
              <p>
                <a
                  href="/blogs"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Resources
                </a>
              </p>
            </div>
            <div className="col-lg-2 contact-privacy">
              <p>Contact</p>
              <p>Privacy</p>
            </div>
          </div>
          <br />
          <hr
            style={{
              border: "solid 1px grey",
            }}
          />
          <br />
          <div className="row">
            <div className="col-lg-6 show">
              <p>© 2021 Big Push Marketing</p>
            </div>
            <div className="col-lg-6">
              <div className="social-links" style={{ fontSize: "30px" }}>
                <a
                  href="https://www.facebook.com/"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <i
                    className="fab fa-facebook-f fa-x "
                    style={{ display: "inline-block" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <i
                    className="fab fa-instagram fa-x indi-social"
                    style={{ display: "inline-block" }}
                  />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <i
                    className="fab fa-linkedin-in fa-x indi-social"
                    style={{ display: "inline-block" }}
                  />{" "}
                </a>
              </div>
            </div>
            <br /> <br />
            <div className="col-lg-6 hide2">
              <p>© 2021 Big Push Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
