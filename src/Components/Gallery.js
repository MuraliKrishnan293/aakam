import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import '../Styles/Gallery.css';
import logo from '../Images/LogoFinal.png';
// import { motion } from "framer-motion";
// import sw from "../Images/4458680.jpg";
// import ui from "../Images/5757453.jpg";
// import teach from "../Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
// import write from "../Images/businessman-s-hand-using-digital-tablet-writing-spiral-notepad-gray-desk.jpg";
import i1 from "../Images/image8.jpeg";
import i2 from "../Images/office.jpg";
import i3 from "../Images/kit.jpeg";
import i4 from "../Images/living.jpg";
import i5 from "../Images/bed.jpeg";

import p1 from "../PVCImages/image1.jpeg";
import p2 from "../PVCImages/image2.jpeg";
import p3 from "../PVCImages/image3.jpeg";
import p4 from "../PVCImages/image4.jpeg";
import p5 from "../PVCImages/image5.jpeg";
import p6 from "../PVCImages/image6.jpeg";
import p7 from "../PVCImages/image7.jpeg";
import p8 from "../PVCImages/image8.jpeg";
import p9 from "../PVCImages/image9.jpeg";
import p10 from "../PVCImages/image10.jpeg";

import o1 from '../OfficeImages/interior-kitchen-area-modern-office-with-long-wooden-table-chairs.jpg';
import o2 from '../OfficeImages/meeting-room-interior-modern-office-with-long-wooden-table-chairs-around-it.jpg';
import o3 from '../OfficeImages/modern-hotel-lobby-with-hallway-office-lounge-room.jpg';
import o4 from '../OfficeImages/modern-minimalist-office.jpg';
import o5 from '../OfficeImages/pexels-pixabay-263209.jpg';

import b1 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM (1).jpeg';
import b2 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM (2).jpeg';
import b3 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM.jpeg';
import b4 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.16 PM (1).jpeg';
import b5 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.16 PM.jpeg';
import Kit from "./Kit";

export default function Gallery() {
  const variantsall = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const kitchen = [b1, b2, b3, b4, b5];

  const pvc = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

  const office = [o1,o2,o3,o4,o5];

  return (<>
    <div style={{overflowX: "hidden"}} className="container gap-3 d-flex flex-column justify-content-center align-items-center text-black text-center py-5">
      <div className="row mb-5">
        <div
        data-aos="zoom-in"
        // data-aos-once="true"
        data-aos-duration="1000"
        className="col-md-8 gal mt-5 text-center mx-auto">
          <h1 className="mb-4">Our Services</h1>
          <p className="lead">
            We offer a range of high-quality services to help satisfy your Ideas
            into Dreamcome!
          </p>
        </div>
      </div>

      <div
      style={{overflow: "hidden"}}
        variants={variantsall}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        className="row mb-5 align-items-center"
      >
        <div className="col-md-6 order-md-2">
          <div className="text-center mb-4">
            <img
            // data-aos="fade-right"
            // // data-aos-once="true"
            // data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
              style={{ width: "400px", height: "400px" }}
              src={i1}
              className="img-fluid btn rounded shadow-lg"
              alt="Software Development"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1
                      className="text-black modal-title fs-5"
                      id="staticBackdropLabel"
                    >
                      UPVC Window Works
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <SimpleImageSlider
                      width="94%"
                      height="450px"
                      // style={{objectFit: "contain"}}
                      images={pvc}
                      showBullets={true}
                      showNavs={true}
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="1000"
        data-aos-duration="1000"
          variants={variantsall}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1 }}
          className="col-md-6 text-white order-md-1"
        >
          <h2 className="mb-3 text-black">UPVC Windows</h2>
          <p className="text-black">
            Discover the perfect blend of style, durability, and energy
            efficiency with our UPVC windows. Designed to withstand the harshest
            weather conditions, these windows are not only robust and
            long-lasting but also provide superior insulation, helping to
            maintain a comfortable indoor temperature year-round. Our UPVC
            windows come in a variety of styles and finishes, allowing you to
            customize the look to match your home's aesthetic. With easy
            maintenance and excellent noise reduction properties, they are the
            ideal choice for modern living. Our team of experts will guide you
            through the selection process, ensuring that you find the perfect
            windows to enhance the beauty and functionality of your home.
            Upgrade to UPVC windows and experience the difference in quality and
            performance.
          </p>
        </div>
      </div>

      <div
      style={{overflow: "hidden"}}
        variants={variantsall}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        className="row mb-5 align-items-center"
      >
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            // data-aos-delay="1000"
            data-aos-duration="1000"
              src={i2}
              className="img-fluid btn rounded shadow-lg"
              alt="UI/UX Design"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
            />
             <div
  className="modal fade"
  id="staticBackdrop1" // Ensure this matches the data-bs-target in the image
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="text-black modal-title fs-5" id="staticBackdropLabel">
          Office Interiors
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <SimpleImageSlider
          width="94%"
          height="450px"
          images={office}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        className="col-md-6 text-black">
          <h2 className="mb-3">Office Interiors</h2>
          <p className="">
            Elevate your workspace with our comprehensive office interior design
            services. We specialize in creating environments that are not only
            visually appealing but also foster productivity and collaboration.
            Our team understands the importance of a well-designed office space
            in enhancing employee well-being and performance. From ergonomic
            furniture and efficient layouts to modern lighting and innovative
            storage solutions, we ensure every element is tailored to your
            specific needs and preferences. Our goal is to transform your office
            into a dynamic, functional, and inspiring place where creativity and
            efficiency thrive. Experience the perfect blend of style and
            functionality with our office interior solutions, and watch your
            business flourish in an environment designed for success.
          </p>
        </div>
      </div>

      <Kit />

      
    </div>
    <div className="foot">
        <footer style={{ background: "#1e4451" }} class="foot">
          <div
            style={{ background: "#1e4451", color: "white" }}
            class="container"
          >
            <div style={{overflowX: "hidden"}} class="row footer-con">
              <div
            //     data-aos="fade-left"
            // data-aos-duration="1000"
            //     data-aos-once="true"
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
            //     data-aos="fade-left"
            // data-aos-duration="1000"
            //     data-aos-once="true"
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
  );
}
