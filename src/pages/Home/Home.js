import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Gorilla from "./images/gorilla.png";
import Businessmodel from "./images/Business model img.png";
import Moneymaching from "./images/Money maching img.png";
import Braun from "./images/barun.png";
import Claushaler from "./images/clasushaler.png";
import Pocketbook from "./images/poketbook.png";
import Salton from "./images/salton.png";
import Schedule from "./images/schedule.png";
import Cost1 from "./images/cost1.png";
import Cost2 from "./images/cost2.png";
import Cost3 from "./images/cost3.png";
import Cost4 from "./images/cost4.png";
import Cost5 from "./images/cost5.png";
import Cost6 from "./images/cost6.png";
import Foundation from "./images/foundation.png";
import Transparency from "./images/027-transparency-1.png";
import Planting from "./images/016-planting.png";
import Owner1 from "./images/owner1.png";
import Owner2 from "./images/owner2.png";

function Home() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(185deg, #f5f5f5 -4.55%, #acf29d 76.9%)",
        }}
      >
        <div
          className="header1"
          style={{
            background:
              "linear-gradient(185deg, #f5f5f5 -4.55%, #acf29d 76.9%)",
            transform: "skewY(-5deg)",
          }}
        >
          <div className="top-section">
            <Header />
            <div
              className="opening-container"
              style={{
                transform: "skewY(5deg)",
                marginTop: "-100px",
              }}
            >
              <div className="row setting">
                <div
                  className="col-lg-6 banner-left-col"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  <h1>Marketing That Sustains</h1>
                  <p>
                    We help e-commerce businesses produce breathtaking ROI via
                    paid advertising so that they can drastically scale up.
                  </p>
                  <br />
                  <button className="jointop-button">Join Now</button>
                </div>
                <div className="col-lg-5 banner-img-col">
                  <img src={Gorilla} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="message-container col-md-12"
            style={{
              background: "transparent",
              transform: "skewY(5deg)",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
          >
            <div className="row setting">
              <div className="col-md-4 message-indi">
                <div className="centering-div">
                  <div className="circle"></div>
                  <h3>STOP WASTING MONEY ON INEFFECTIVE ADS</h3>
                </div>
              </div>
              <div className="col-md-4 message-indi">
                <div className="centering-div">
                  <div className="circle"></div>
                  <h3>MAKE YOUR AD BUDGET COUNT</h3>
                </div>
              </div>
              <div className="col-md-4 message-indi">
                <div className="centering-div">
                  <div className="circle"></div>
                  <h3>SPEAK TO OUR TEAM TODAY</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div
          className="slant-cut-company"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="company-logos" style={{ backgroundColor: "#f5f5f5" }}>
            <div
              className="logo-row"
              style={{
                transform: "skewY(5deg)",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <img
                src={Braun}
                alt=""
                style={{ display: "inline-block" }}
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
              />
              <img
                src={Salton}
                alt=""
                style={{ display: "inline-block" }}
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
              />
              <img
                src={Claushaler}
                alt=""
                style={{ display: "inline-block" }}
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="800"
              />
              <img
                src={Pocketbook}
                alt=""
                style={{ display: "inline-block" }}
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="800"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="cost-effect-container"
        style={{ maxWidth: "1400px", margin: "100px auto" }}
      >
        <h1>
          Cost of Not Using Effective Facebook &amp; Instagram Ad Campaigns
        </h1>

        <div className="row setting" style={{ textAlign: "center" }}>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost1} style={{ marginTop: "12%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">LOSING (ABANDONED CART) CUSTOMERS</h5>
            {/* <br /> */}
            <p>
              On average for every 100 people that add something to their cart
              only 23 ends up buying, which means that 77% of potential business
              is lost when not being effectively retargeted
            </p>
          </div>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost2} style={{ marginTop: "12%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">
              WASTING YOUR <br /> AD SPEND
            </h5>
            {/* <br /> */}
            <p>
              If your not testing audience, creatives and copy properly I
              guarantee your leaving money on the table. 9/10 companies I look
              at are missing out.
            </p>
          </div>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-duration="800"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost3} style={{ marginTop: "15%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">
              NOT GETTING THE <br /> RESULTS YOU DESERVE
            </h5>
            {/* <br /> */}
            <p>
              You put in so much work to create a great product with an amazing
              service, but without the perfect ads to match it, you won't get
              the results you deserve.
            </p>
          </div>
        </div>
        {/* <button className="join-button" style={{ marginTop: "80px" }}>
          Join Now
        </button> */}
      </div>

      <div
        style={{
          paddingTop: "70px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            transform: "skewY(-4deg)",
          }}
        >
          <div
            className="why-container"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              paddingTop: "-50px",
            }}
          >
            <h1 style={{ transform: "skewY(4deg)" }}>
              Why Use Facebook & Instagram Ads?
            </h1>
            <p
              style={{
                transform: "skewY(4deg)",
                fontSize: "18px",
                color: "#212121",
                fontWeight: "400",
              }}
            >
              You can achieve predictable growth that is unimaginable on any
              other platform.
            </p>
            <br />
            <div className="d-flex justify-content-center">
              <button
                className="getin-button"
                style={{ fontSize: "17px", transform: "skewY(4deg)" }}
              >
                Get In Touch
              </button>
            </div>
            <div className="row why-row" style={{ transform: "skewY(4deg)" }}>
              <div className="col-lg-6 business1">
                <img
                  src={Businessmodel}
                  alt=""
                  style={{
                    width: "100%",
                    paddingRight: "50px",
                    paddingLeft: "50px",
                  }}
                />
              </div>
              <div
                className="col-lg-6 text-col"
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="800"
              >
                <h4>
                  If you can name a better e-commerce advertising platform we
                  will change our business model
                </h4>
                <p>
                  In the past marketing has always been quite a gamble, not
                  knowing what to expect, having to invest a lot of money
                  beforehand, and not being able to track the results. At Big
                  Push Marketing, our mission is to be the most result-driven
                  marketing agency for e-commerce brands.{" "}
                </p>
                <p>
                  "There is no medium out there like Facebook Ads. It allows you
                  to find/match your perfect audience with the most effective ad
                  for a ridiculously low budget with the ability to rapidly
                  scale"
                </p>
              </div>
            </div>
            <div className="row why-row" style={{ transform: "skewY(4deg)" }}>
              <div
                className="col-lg-6 text-col"
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
              >
                <h4>
                  The predictable and profitable money machine that never stops
                </h4>
                <p>
                  Any business that doesn't have a system where they can
                  confidently spend $1 and get $2, $3, $5, $7, $10 in return, is
                  on a surefire route to NOT hit $1M - $10M. At Big Push
                  Marketing we create a customer acquisition machine where $1
                  goes in and $4, $5, $10, $15 comes out.
                </p>
                <p>
                  Equipped with this level of certainty, adding $100k-$1M to
                  your bottom line is a simple by-product of the machine.{" "}
                </p>
              </div>
              <div className="col-lg-6 business1">
                <img
                  src={Moneymaching}
                  alt=""
                  style={{
                    width: "100%",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-container">
        <div style={{ margin: " 0 auto", maxWidth: "1400px" }}>
          <h1 style={{ transform: "skewY(4deg)" }}>
            Join The List Of Successful Ecomm Founders
          </h1>
          <p>
            You'll generate a tangible, profitable, and measurable return on ad
            spend.
          </p>
          <br />
          <button
            className="join-button"
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              transform: "skewY(4deg)",
            }}
          >
            Contact
          </button>
          <div className="row join-row" style={{ transform: "skewY(4deg)" }}>
            <div
              className="col-lg-6 join-col"
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-duration="800"
            >
              <h1>$1.2M</h1>
              <h6>TOTAL ADSPEND</h6>
            </div>
            <div
              className="col-lg-6 join-col"
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="800"
            >
              <h1>5.17x</h1>
              <h6>
                AVERAGE RETURN <br /> ON ADSPEND
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cost-effect-container"
        style={{ maxWidth: "1400px", margin: "140px auto" }}
      >
        <h1>How Do you Get Started?</h1>

        <div className="row setting" style={{ textAlign: "center" }}>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost4} style={{ marginTop: "16%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">
              SCHEDULE A FREE <br /> CONSULTATION
            </h5>
            {/* <br /> */}
            <p>
              Schedule a call so we can uncover the leaks within your current
              marketing efforts and identify the needed steps to propel your
              business to the next level
            </p>
          </div>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost5} style={{ marginTop: "15%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">
              60 MIN AUTOMATED <br /> ON-BOARDING
            </h5>
            {/* <br /> */}
            <p>
              If we conclude that we can make this a tremendously profitable
              partnership we send you our fully automated 60 minute on-boarding
              process
            </p>
          </div>
          <div
            className="col-lg-4 cost-indi"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            <div className="circle-blue">
              {" "}
              <img src={Cost6} style={{ marginTop: "15%", height: "65%" }} />
            </div>
            {/* <br /> */}
            <h5 className="pt-3 pb-1">
              GET THE RESULTS YOUR <br /> BUSINESS DESERVES
            </h5>
            {/* <br /> */}
            <p>
              Receive a weekly report and watch your business get the results it
              deserves.
            </p>
          </div>
        </div>
      </div>

      <div className="step-process-container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div className="col-lg-6 step-col">
            <h1>Our 3 Step Process</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nibh non tincidunt ante amet. Dictumst tempus in quis purus a,
              parturient sed. Nunc et aliquam sagittis, convallis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nibh non tincidunt ante amet.
            </p>
            <br />
            <button className="talk-button">Let's Talk</button>
          </div>
          <div
            className="col-lg-6 step-col-one"
            style={{ height: "600px", overflowY: "scroll" }}
          >
            <br />
            <div
              className="circle-blue"
              style={{ margin: "0", textAlign: "center" }}
            >
              {" "}
              <img
                src={Foundation}
                style={{ marginTop: "20%", height: "65%" }}
              />
            </div>
            <br />
            <h5>Foundational C, A, R</h5>
            <p>
              Before we spend $1 on ads, we undergo an operation called
              Foundational Copywriting, Analysis, and Research (C, A, R). This
              enables us to gain a deep-rooted understanding of your ideal
              customer, industry, competitors, and true metrics. In addition,
              during this phase, we analyze your sales processes to identify any
              holes that may be prevalent and we look to instantly fill those
              in. Thus, increasing your sales process conversion rate (high
              return on ad spend).{" "}
            </p>
            <br />
            <br />
            <div
              className="circle-blue"
              style={{ margin: "0", textAlign: "center" }}
            >
              {" "}
              <img
                src={Transparency}
                style={{ marginTop: "20%", height: "65%" }}
              />
            </div>
            <br />
            <h5>Going To Market</h5>
            <p>
              Once we have a detailed understand of your industry, competitors,
              true metrics, and ideal customer (their characteristics and
              personality traits,etc), we then publish the first iteration of
              ads. This is where we start to collect data and make informed
              decisions on what is and isn't working. Equipped with this
              knowledge, we can than launch new iterations that are 2-4x more
              profitable and scalable. Whilst we are implementing this
              iterations feedback loop , we're simultaneously building the
              structured paid traffic funnel which enables us to seamlessly take
              a prospect down a specifically tailored path (Top of Funnel down
              to Bottom of Funnel) which has end goal of the prospect buying.
            </p>
            <br />
            <br />
            <div
              className="circle-blue"
              style={{ margin: "0", textAlign: "center" }}
            >
              {" "}
              <img src={Planting} style={{ marginTop: "20%", height: "65%" }} />
            </div>
            <br />
            <h5>Exponential growth</h5>
            <p>
              After going through iterations based on the date we collect, we"ll
              now know exactly who your ideal customer is, what resonates with
              them most (what evokes an innate motivation for them to buy), and
              where they congregate on the specific paid platform. It's at this
              point that we can now start injecting the proven paid traffic
              funnel with high spend, predictability and profitability. This is
              when you 'll start seeing exponential growth in sales.
            </p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h1>Meet The Team</h1>
          <p style={{ maxWidth: "740px", margin: "0 auto" }}>
            Founded by Nick and Lauren. We have assembled a team of specialists
            for every aspect that leads to the success of social media
            advertising. Together we have over 20+ years of experience in the
            space. With a majestic copywriter and an expert media buyer we make
            for a small yet fiercely passionate team that works closely with all
            our clients.{" "}
          </p>
          <div className="row" style={{marginTop: "60px" }}>
            <div className="col-lg-6" style={{}}>
              <img
                className="border border-dark"
                src={Owner1}
                alt=""
                style={{ width: "70%", backgroundColor: "rgb(59, 59, 59)" }}
              />
              <h2>Lauren van Es</h2>
              <h3>Co-Founder</h3>
            </div>
            <div className="col-lg-6">
              <img
                className=""
                src={Owner2}
                alt=""
                style={{ width: "70%", backgroundColor: "rgb(59, 59, 59)" }}
              />
              <h2>Nick Hansen</h2>
              <h3>Co-Founder</h3>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", paddingTop: "100px" }}>
        <div
          className="schedule-container"
          style={{ transform: "skewY(-4deg)" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1 style={{ transform: "skewY(4deg)" }}>
              Schedule A Free Consultation Today
            </h1>

            <div
              className="row"
              style={{
                transform: "skewY(4deg)",
              }}
            >
              <div className="col-lg-6 hide">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/arjavparekh"
                  style={{}}
                ></div>
              </div>
              <div className="col-lg-6 left-schedule-col">
                <h2>Who This is For</h2>
                <ul className="ml-4">
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                  >
                    Business owners who feel as though they have hit a glass
                    ceiling and want to smash through it.
                  </li>
                  {/* <br /> */}
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="pt-2"
                  >
                    Businesses who want a predictable and profitable money
                    machine that runs 24/7.
                  </li>
                  {/* <br /> */}
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="pt-2"
                  >
                    Businesses that are tired of working with agencies that
                    promise the world and deliver nothing.
                  </li>
                  {/* <br /> */}
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="pt-2"
                  >
                    Businesses that want severe scale through paid traffic and
                    unmatched sales processes.
                  </li>
                  {/* <br /> */}
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="pt-2"
                  >
                    Businesses who want to make sure that they are getting
                    everything out of their marketing budget by ensuring their
                    current advertising system and sales funnels are operating
                    at the highest level.
                  </li>
                  {/* <br /> */}
                  <li
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="pt-2"
                  >
                    Businesses looking to understand their increased revenue
                    potential with Facebook/Instagram ads &amp; conversion rate
                    optimisation.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 show">
                {/* <!-- Calendly inline widget begin --> */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/arjavparekh"
                  style={{ height: "550px" }}
                ></div>

                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(150.42deg, #0D5378 -39.4%, #02345C 115.2%)",
          paddingBottom: "80px",
        }}
      >
        <div
          className="inquiry-container"
          style={{ transform: "skewY(-4deg)" }}
        >
          <h1 style={{ transform: "skewY(4deg)" }}>Have A General Inquiry?</h1>
          <p
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              transform: "skewY(4deg)",
            }}
          >
            Would you like to speak to our team? Contact us:
            lauren@bpmarketingagency.com or nick@bpmarketingagency.com
          </p>
          <br />
          <button className="join-button" style={{ transform: "skewY(4deg)" }}>
            Let's Talk
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
