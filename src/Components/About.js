import React from "react";
import "../Styles/About.css";
import abt1 from "../Images/about1-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import mission from "../Images/portrait.jpeg";
import vision from "../Images/LogoFinal.png";
import sv from "../Images/Bg.svg";
import "@lottiefiles/lottie-player";
import Lottie from "lottie-react";
import jsons from "../Images/Animation - 1728965751053.json";
import Marquee from "react-fast-marquee";
import logo from '../Images/LogoFinal.png';

const About = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <div style={{ width: "100%", paddingTop: "100px" }} class="fill w-100">
        <h1 data-aos-duration="1000" className="bg-succes w-100 p-5 text-white">
          <center
            data-aos="zoom-in"
            // data-aos-once="true"
            data-aos-duration="1000"
          >
            <br />
            ABOUT US
            <br />
            <br />
          </center>
        </h1>
      </div>

      <div className="abt container mt-5">
        <div className="row">
          <div className="col-md-6 justify-content-center text-center col-12 col-sm-6">
            {/* <img src={re1} /> */}
            <Tilt>
              <div style={{ height: "300px" }}>
                <img
                data-aos="zoom-in-right"
                // data-aos-once="true"
                data-aos-duration="1000"
                style={{ height: "300px" }} src={abt1} alt="" />
              </div>
            </Tilt>
          </div>
          <div
          data-aos="zoom-in-left"
          // data-aos-once="true"
          data-aos-duration="1500"
          className="col-md-6 col-12 sol-sm-6">
            <h4
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontWeight: "500",
                fontSize: "36px",
                color: "#1e4451",
              }}
            >
              Aakam Interior
            </h4>
            <h4
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontWeight: "500",
                fontSize: "36px",
                color: "#1e4451",
              }}
            >
              Designs
            </h4>
            <h6
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontWeight: "500",
                fontSize: "21px",
              }}
            >
              Your Interior Design Destination
            </h6>
            <p style={{ lineHeight: "25px" }} className="gap-5 mt-4">
              Welcome to Aakam Interior Designing, your premier destination for
              transforming interiors into masterpieces of style and
              functionality. Our team brings unparalleled expertise and creative
              flair to every project, ensuring each space reflects the unique
              tastes and needs of our clients.
            </p>
            <p className="" style={{ lineHeight: "25px" }}>
              {" "}
              At Aakam Interior Designing, we pride ourselves on delivering
              personalized design solutions. Whether it's crafting elegant uPVC
              windows, designing cozy bedroom interiors, elevating living room
              aesthetics, creating efficient modular kitchens, or enhancing
              office spaces, our commitment to excellence is evident in every
              detail.
            </p>
            <p style={{ lineHeight: "25px" }}>
              {" "}
              Customer satisfaction is our top priority. From the initial
              consultation to the final reveal, we emphasize clear
              communication, transparency, and timely delivery. Our mission is
              to create environments that inspire and uplift, leaving a lasting
              impression on all who experience them.
            </p>
          </div>
        </div>
      </div>

      <div className="container p-5 mt-5 w-100 justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-md-6 d-flex justify-content-center col-sm-12 col-12">
            <div
            data-aos="fade-up"
            // data-aos-once="true"
            data-aos-duration="1000"
              style={{
                width: "300px",
                minHeight: "300px",
                border: "0.1px solid transparent",
              }}
              className="card mt-3 mb-3"
            >
              <img
                className="w-100"
                style={{ width: "300px", height: "300px" }}
                src={mission}
                alt="mission"
              />
              <h4 className="card-title">Our Mission</h4>
              <p>
                Driven by a passion for creativity and customer satisfaction,
                our mission is to surpass expectations by delivering exceptional
                interior design services tailored to the unique needs and
                preferences of each client, ensuring their spaces reflect
                timeless elegance and functional brilliance.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center col-sm-12 col-12">
            <div
            data-aos="fade-up"
            // data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="500"
              style={{
                width: "300px",
                minHeight: "300px",
                border: "0.1px solid transparent",
              }}
              className="card"
            >
              <img
                className="w-100 mt-4"
                style={{ width: "300px", height: "300px" }}
                src={vision}
                alt="mission"
              />
              <h4 className="card-title">Our Vision</h4>
              <p>
                Our vision at Aakam Interior Designs is to become the premier
                destination for innovative and sustainable interior design
                solutions in Madipakkam, Chennai, and the surrounding areas,
                setting new standards of excellence in the industry.Aakam – The
                Top Interior Designers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{overflow: "hidden"}} className="svgpattern container-fluid w-100 p-5">
        <div className="row d-flex rot">
          <div
          data-aos="fade-right"
          // data-aos-once="true"
          data-aos-duration="1000"
          className="col-md-6 text-center justify-content-center col-sm-12 col-12">
            <h4
              style={{
                fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
                fontWeight: "500",
                fontSize: "36px",
              }}
            >
              Why Choose us?
            </h4>
            <p>Discover the Top 5 Reasons to Partner with Us!</p>
            <br />
            <ol className="gap-3 d-flex flex-column">
              <li>
                <b
                  style={{
                    fontFamily: "Open Sans, Arial, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  Expertise
                </b>
                : Benefit from our seasoned professionals with years of industry
                experience, ensuring top-notch design solutions tailored to your
                needs.
              </li>
              <li>
                <b
                  style={{
                    fontFamily: "Open Sans, Arial, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  Affordability
                </b>
                : Enjoy Our budget-friendly options without compromising on
                quality or style, making exceptional design accessible to all.
              </li>
              <li>
                <b
                  style={{
                    fontFamily: "Open Sans, Arial, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  Personalization
                </b>
                : Experience Our Great personalized attention and customized
                designs that reflect your unique preferences and lifestyle.
              </li>
              <li>
                <b
                  style={{
                    fontFamily: "Open Sans, Arial, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  Timely Delivery
                </b>
                : It Counts on us for efficient project management and timely
                completion, ensuring your vision becomes reality right on
                schedule.
              </li>
              <li>
                <b
                  style={{
                    fontFamily: "Open Sans, Arial, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  Customer Satisfaction
                </b>
                : Our Responsibe commitment to your satisfaction means
                transparent communication, attention to detail, and a seamless,
                stress-free design journey from start to finish.
              </li>
            </ol>
          </div>

          <div
          data-aos="fade-left"
          // data-aos-once="true"
          data-aos-duration="1000"
            style={{ backgroundColor: "", borderRadius: "10px" }}
            className="col-md-6 col-sm-6 col-12 text-center d-flex justify-content-center"
          >
            <Lottie
              className="w-100"
              animationData={jsons}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="mt-5">
          <Marquee className="mt-5">
            <h4>
              Call us at: +91 8056491710
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Mail at: aakamdesignstudio96@gmail.com
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4>
              Call us at: +91 8056491710
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Mail at: aakamdesignstudio96@gmail.com
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
          </Marquee>
        </div>
      </div>

      <>
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
                style={{width: "200px", height: "200px", borderRadius: "1000%"}}
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
                <ul
                  class="footer-services"
                  style={{ listStyleType: "none" }}
                >
                  <p className="mt-3">UPVC Windows</p>
                  <p className="mt-3">Bedroom Interior</p>
                  <p className="mt-3">Livingroom Interior</p>
                  <p className="mt-3">Modular Kitchen</p>
                  <p className="mt-3">Office Interior</p>
                  <p className=""><a href="/admin" style={{textDecoration: "none"}} className="">Admin Login</a></p>
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
                <p>No 4, Selai Rd, Indira Gandhi Nagar,<br />
                Ma. Po. Si. Nagar, Tiruvallur,<br />
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
                  <i class="fa fa-phone"></i>+91 8056491710&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa fa-phone"></i>+91 63790 09438
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </>
    </div>
  );
};

export default About;

/*

*/
