import React, { Component } from "react";
import "../Styles/Land.css";
import style from "./../../node_modules/dom-helpers/esm/css";
import potrait from "../Images/image.png";
import i1 from "../Images/image8.jpeg";
import i2 from "../Images/bed.jpeg";
import i3 from "../Images/living.jpg";
import i4 from "../Images/kit.jpeg";
import i5 from "../Images/off.jpeg";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import r1 from "../Images/re1.jpg";
import r2 from "../Images/re2.jpg";
import r3 from "../Images/re3.jpg";
import r4 from "../Images/re4.jpg";
import r5 from "../Images/re5.jpg";
import r6 from "../Images/re6.jpg";
import r7 from "../Images/re7.jpg";
import r8 from "../Images/re8.jpg";
import r9 from "../Images/re9.jpg";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import logo from "../Images/LogoFinal.png";

const Land = () => {
  const rev = [
    {
      id: 1,
      image: r1,
    },
    {
      id: 1,
      image: r2,
    },
    {
      id: 1,
      image: r3,
    },
    {
      id: 1,
      image: r4,
    },
    {
      id: 1,
      image: r5,
    },
    {
      id: 1,
      image: r6,
    },
    {
      id: 1,
      image: r7,
    },
    {
      id: 1,
      image: r8,
    },
    {
      id: 1,
      image: r9,
    },
  ];

  const cards = [
    {
      id: 1,
      image: i1,
      title: "UPVC Windows",
      description:
        "Transform your home with Narasimha Interior Decorators' uPVC windows. Engineered for durability and energy efficiency, these bespoke windows blend style and functionality, offering enhanced insulation.",
    },
    {
      id: 1,
      image: i2,
      title: "Bedroom Interior",
      description:
        "Revamp your bedroom interior design a haven of comfort and style with Narasimha Interior Decorators. We specialize in creating personalized bedroom interiors that tranquility and match your personality.",
    },
    {
      id: 1,
      image: i3,
      title: "Livingroom Interior",
      description:
        "Revitalize your living space with Narasimha Interior Decorators. Experience expertly crafted home interior design that blend functionality with elegance, tailored to your unique style and preferences.",
    },
    {
      id: 1,
      image: i4,
      title: "Modular Kitchen",
      description:
        "Upgrade your kitchen with Narasimha Interior Decorators modular solutions. Custom designs maximize space efficiency while enhancing aesthetics, promising a culinary haven tailored to your needs.",
    },
    {
      id: 1,
      image: i5,
      title: "Office Interior",
      description:
        "Enhance productivity and aesthetics with Narasimha Interior Decorators office interior solutions. Tailored designs blend functionality and style for an inspiring workspace.",
    },
  ];

  const about = () => {
    // navigate('/about');
    window.location.href = "/about";
  };

  return (
    <div style={{ overflowX: "hidden" }} className="con">
      <div className="lands">
        <div
          class="textcent w-100 d-flex justify-content-center align-items-center text-center flex-column"
          style={{ minHeight: "100vh" }}
        >
          <h2
            data-aos="flip-left"
            data-aos-duration="1000"
            className="text-white h2text"
          >
            Ready to Design your Home?
          </h2>

          {/* <p className='ptextland text-white'>Book A Free Design Consultation With Our Designer, we also work with upvc doors... scroll down to know more</p> */}
          <a data-aos="fade-up" style={{ color: "black" }} href="/contact">
            <button className="btn rounded-5 book mt-3 fs-5">
              Book your Appointment Now!
            </button>
          </a>
        </div>
      </div>

      <div style={{ overflow: "hidden" }} className="secdiv container mt-5 p-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center col-12">
            <a href="/gallery">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                style={{ width: "100%" }}
                src={potrait}
                alt=""
              />
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="col-md-6 mt-5 col-12"
          >
            <p
              // data-aos="fade-right"
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "21px",
                fontWeight: "500",
                color: "#3f3f3f",
                lineHeight: "21px",
              }}
            >
              Welcome To
            </p>
            <h4
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "36px",
                fontWeight: "500",
                color: "#1e4451",
                lineHeight: "36px",
              }}
            >
              Aakam
            </h4>
            <h4
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontSize: "36px",
                fontWeight: "500",
                color: "#1e4451",
                lineHeight: "36px",
              }}
            >
              Interior Decorators
            </h4>

            <p>
              Offering bespoke <b>interior design services</b> for residential
              and commercial spaces. we also use UPVC to make your windows and
              doors beautiful, we create functional, stylish environments. Let
              us bring your vision to life with personalized, detail-oriented
              design solutions. Specializing in home and office transformations,
              we excel in crafting unique designs for bedrooms, kitchens, and
              more. Our commitment to affordability ensures quality without
              compromise. Experience the perfect blend of comfort and aesthetics
              with us. At Aakam Interior Designs, we take pride in transforming
              spaces into stunning living environments.
            </p>

            <button className="btn rounded-5 book2 mt-3 fs-5" onClick={about}>
              About us
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ overflow: "hidden" }}
        className="thirddiv justify-content-center text-center"
      >
        <div className="mt-4 mb-4 text-center">
          <p
            data-aos="fade-up-left"
            data-aos-duration="500"
            style={{ fontSize: "21px" }}
            className="mt-5"
          >
            Services at
          </p>
          <h4 data-aos="fade-up-right" data-aos-duration="500">
            Aakam Interior Decorators
          </h4>
        </div>
        <div className="container-fluid  w-100">
          <div className="insidediv row d-flex justify-content-center align-items-center">
            {cards.map((c) => (
              <div
                className="col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center text-center"
                key={c.id}
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${c.id * 300}`}
                  className="card cardserv mt-5"
                  style={{
                    width: "18rem",
                    height: "430px",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "200px" }}
                    src={c.image}
                    className="card-img p-2 rounded-4 hovimg"
                    alt="..."
                  />
                  <h4 style={{ color: "#1e4451" }} className="card-title">
                    {c.title}
                  </h4>
                  <p className="card-text p-2">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="rev mt-5">
        <center className="pt-3" style={{ lineHeight: "20px" }}>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-3"
            style={{
              fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
              fontWeight: "500",
              fontSize: "21px",
              color: "#3f3f3f",
            }}
          >
            Customer Testimonials for
          </p>
          <h4
            data-aos="fade-down"
            data-aos-duration="1000"
            style={{
              fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
              fontWeight: "500",
              fontSize: "36px",
            }}
          >
            Aakam Interior Designs
          </h4>
        </center>
        <Marquee>
          {rev.map((r) => (
            <div key={r.id} className="p-4">
              <img
                className="p-5 revi"
                style={{ width: "700px", height: "250px" }}
                src={r.image}
                alt="review"
              />
            </div>
          ))}
        </Marquee>
      </div> */}

      <div className="horizontal-scroll-container m-5 p-5 mt-5">
      <iframe className="p-5" src='https://widgets.sociablekit.com/google-reviews/iframe/25491329' frameborder='0' width='100%' height='500'></iframe>
      </div>

      <div className="foot">
        <footer style={{ background: "#1e4451" }} class="foot">
          <div
            style={{ background: "#1e4451", color: "white" }}
            class="container"
          >
            <div class="row footer-con">
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="true"
                class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column"
              >
                {/* <h2 class="footer-logo fw-5 fs-1">AAKAM</h2> */}
                <img
                  src={logo}
                  alt="Logo"
                  className="footer-logo-img"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "1000%",
                  }}
                />
              </div>
              {/* <div className="hr"><hr /></div> */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="true"
                class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column"
              >
                <h4 className="">Our Services</h4>
                <ul class="footer-services" style={{ listStyleType: "none" }}>
                  <p className="mt-3">UPVC Windows</p>
                  <p className="mt-3">Bedroom Interior</p>
                  <p className="mt-3">Livingroom Interior</p>
                  <p className="mt-3">Modular Kitchen</p>
                  <p className="mt-3">Office Interior</p>
                  <p className="">
                    <a
                      href="/admin"
                      style={{ textDecoration: "none" }}
                      className=""
                    >
                      Admin Login
                    </a>
                  </p>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <h2
                style={{ width: "100%" }}
                className="w-100 text-md-center text-start fw-5 fs-1"
              >
                Contact us
              </h2>
              <div
                // data-aos="zoom-in"
                // data-aos-once="true"
                class="col-md-6 mt-3 col-sm-12 col-12 d-flex text-md-center justify-content-md-center align-items-md-center text-start justify-content-start align-items-start flex-column"
              >
                {/* no 4, Selai Rd, Indira Gandhi Nagar,
                Ma. Po. Si. Nagar, Tiruvallur,
                Kakkalur, Tamil Nadu 602001
                +91 8056491710
                aakamdesignstudio96@gmail.com */}
                {/*               
              <div class="contact-details"> */}
                {/* <div className="col-md-6 col-12"> */}
                <p>
                  No 4, Selai Rd, Indira Gandhi Nagar,
                  <br />
                  Ma. Po. Si. Nagar, Tiruvallur,
                  <br />
                  Kakkalur, Tamil Nadu 602001
                </p>
              </div>
              <div className="col-md-6 mt-3 col-sm-12 col-12 d-flex text-md-center justify-content-md-center align-items-md-center text-start justify-content-start align-items-start flex-column">
                <p>
                  <i class="fa"></i>Aakam Interior Design Studio
                </p>
                <p>
                  <i class="fa fa-email"></i>aakamdesignstudio96@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone"></i>+91
                  8056491710&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa fa-phone"></i>+91 63790 09438
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Land;
