import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Business from "./images/business.png";
import Schedule from "./images/schedule.png";
import Integrity from "./images/to-do-list.png";
import Valuecreation from "./images/diamond.png";
import Focus from "./images/focus.png";
import Transparency from "./images/transparency.png";

function About() {
  return (
    <>
      <div
        className="about-top-section"
        style={{
          transform: "skewY(-5deg)",
          backgroundColor: "#ACF29D",
        }}
      >
        <div>
          <Header color="#ACF29D" />
        </div>

        <div
          className="title-container"
          style={{
            textAlign: "center",
            transform: "skewY(5deg)",
            marginTop: "-100px",
          }}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1200"
        >
          <h1>Sustainability Is In Our Nature</h1>
          <p style={{ maxWidth: "760px", margin: "0 auto" }}>
            We are a paid advertising agency that is mostly performance-based
            and we solely work with companies that are conscious of the
            environmental impact they have and are continuously trying to
            minimize their negative impact and/or make more of a positive impact
            on our environment.
          </p>
          <br />
          <button className="join-button">Join Now</button>
        </div>
      </div>

      <div className="business-container" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">
            We Are Business Success Experts!{" "}
          </h1>
          <div className="d-flex justify-content-center">
            {" "}
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1200"
              style={{ maxWidth: "500px" }}
            >
              Welcome to Big Push Marketing Business Solutions. We’re the
              all-in-one business partner that you’ve been looking for!
            </p>
          </div>
          <img
            src={Business}
            alt=""
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1200"
            style={{ borderRadius: "20px 20px", width: "100%" }}
          />
          <br />
          <div className="row" style={{ maxWidth: "1150px", margin: "0 auto" }}>
            <div
              className="col-lg-6 pr-5"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <h3>WHAT SETS US APART</h3>
              <br />
              <p>
                Our experienced team of business strategists is dedicated to
                transforming your goals, ideas, and dreams into focused business
                strategies. We then translate these strategies into actionable
                and integrated solutions. Everything we do is aimed at achieving
                tangible results and so we make sure that happens.
              </p>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <h3>HOW WE WORK</h3>
              <br />
              <p>
                We don’t just offer off-the-rack, conventional solutions. We
                have a unique approach to how we execute our solutions. We
                examine your problem, issue, or situation through our
                experienced business lens and identify opportunities for change
                and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="values-container">
        <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">
            Our Values
          </h1>
          <div className="row" style={{}}>
            <div
              className="col-lg-6 cost-indi val-ind"
              style={{ marginTop: "0" }}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <div className="circle-blue">
                {" "}
                <img
                  src={Integrity}
                  style={{ marginTop: "12%", height: "65%" }}
                />
              </div>
              {/* <br /> */}
              <h5 className="pt-3 pb-1">INTEGRITY</h5>
              <p>
                We say what we mean and we mean what we say. <br />
                We keep our word and honour our commitments.
              </p>
            </div>
            <div
              className="col-lg-6 cost-indi val-ind"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <div className="circle-blue">
                {" "}
                <img
                  src={Valuecreation}
                  style={{ marginTop: "14%", height: "65%" }}
                />
              </div>
              {/* <br /> */}
              <h5 className="pt-3 pb-1">VALUE CREATION</h5>
              <p>
                We strive to create value through all our solutions. <br />
                Value creation is the essence of everything we do.
              </p>
            </div>
            <div
              className="col-lg-6 cost-indi value-cols val-ind"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <div className="circle-blue">
                {" "}
                <img src={Focus} style={{ marginTop: "14%", height: "65%" }} />
              </div>
              {/* <br /> */}
              <h5 className="pt-3 pb-1">CUSTOMER FOCUS</h5>
              <p>
                Our solutions aren’t about us, they’re about you. <br />
                We tailor-make our strategies to suit your needs.
              </p>
            </div>
            <div
              className="col-lg-6 cost-indi value-cols val-ind"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <div className="circle-blue">
                {" "}
                <img
                  src={Transparency}
                  style={{ marginTop: "14%", height: "65%" }}
                />
              </div>
              {/* <br /> */}
              <h5 className="pt-3 pb-1">TRANSPARENCY</h5>
              <p>Transparency is key</p>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-container" style={{ backgroundColor: "white" }}>
        <h1
          className="schedule-h1"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1200"
          style={{ marginBottom: "0", marginTop: "60px" }}
        >
          Interested To Get Started?
        </h1>
        <div className="row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="col-lg-6 left-schedule-col"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <h2
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              Let's Talk
            </h2>
            <p
              data-aos="fade-right "
              data-aos-delay="50"
              data-aos-duration="1200"
              style={{ width: "340px" }}
            >
              Reach out to learn more, and get the conversation started.
            </p>
          </div>
          <div className="col-lg-6" style={{ marginTop: "80px" }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/arjavparekh?background_color=f6f6f6"
              style={{
                height: "550px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
