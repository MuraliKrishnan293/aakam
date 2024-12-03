import React, { useEffect, useState } from "react";
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

import 'bootstrap/dist/css/bootstrap.min.css';

// Living Room Images
import l1 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.32.59 PM (1).jpeg';
import l2 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.32.59 PM (2).jpeg';
import l3 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.32.59 PM.jpeg';
import l4 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.33.00 PM (1).jpeg';
import l5 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.33.00 PM.jpeg';

// Bedroom Images
import b11 from '../Images/Bedroom/WhatsApp Image 2024-11-23 at 9.31.25 PM (1).jpeg';
import b22 from '../Images/Bedroom/WhatsApp Image 2024-11-23 at 9.31.25 PM (2).jpeg';
import b33 from '../Images/Bedroom/WhatsApp Image 2024-11-23 at 9.31.25 PM (3).jpeg';
import b44 from '../Images/Bedroom/WhatsApp Image 2024-11-23 at 9.31.25 PM.jpeg';
import b55 from '../Images/Bedroom/WhatsApp Image 2024-11-23 at 9.31.26 PM.jpeg';




//Videos
import v1 from '../OfficeImages/WhatsApp Video 2024-12-02 at 9.17.05 PM (1).mp4';
import v2 from '../OfficeImages/WhatsApp Video 2024-12-02 at 9.17.05 PM.mp4';



//OfficeFinalChanged Images
import o11 from '../OfficeImages/off1.jpg';
import o22 from '../OfficeImages/off2.jpeg';
import o33 from '../OfficeImages/off3.jpg';
import o44 from '../OfficeImages/off4.jpg';
import o55 from '../OfficeImages/off5.jpg';



//LivingRoomFinalChanged Images
import l11 from '../LivingRoom/liv1.jpg';
import l22 from '../LivingRoom/liv2.JPG';
import l33 from '../LivingRoom/liv3.jpg';
import l44 from '../LivingRoom/liv4.jpg';
import l55 from '../Images/LivingRoom/WhatsApp Image 2024-11-23 at 9.32.59 PM.jpeg';

export default function Gallery1() {


  const [windowsieze, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const bed = [b11,b22,b33,b44,b55];
  const liv = [l1,l2,l3,l4,l5];

  const office1 = [o11,o22,o33,o44,o55];

  const livingroom = [l11,l22,l33,l44,l55];
  



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

       {/* <div
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
                      height="410px"
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
          height="410px"
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

      <Kit /> */}

      {windowsieze > 800 &&
      (
        <>
        <div className="container" style={{overflowY: "hidden"}}>
        <div className="a row">
  <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="1000" className="a1 col-md-6 col-12">
  <h2 className="mb-3 text-black text-start">UPVC Windows</h2>
          <p className="text-black text-start">
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
          </p>
  </div>
  <div data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-delay='200'
                className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {pvc.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div>

      <div className="a row mt-5 pt-5">
  
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {office1.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-delay='200'
      className="a1 col-md-6 col-12">
  <h2 className="mb-3 text-black text-start">Office Interiors</h2>
          <p className="text-black text-start">
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

      <div className="a row mt-5 pt-5">
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
  <h2 className='text-black text-start'>Modern Kitchens</h2>
<p className="text-start">
  Transform your cooking experience with a sleek, modern kitchen designed to be both functional and stylish. 
  From spacious countertops to state-of-the-art appliances, our kitchens are built for convenience and luxury.
  Whether you’re looking for minimalist designs or a more traditional look, we offer a range of options to suit your tastes.
</p>
<ul className='list-styled-none text-start' style={{listStyle: "none"}}>
  <li>Customized Cabinetry</li>
  <li>High-End Appliances</li>
  <li>Space-Saving Storage Solutions</li>
  <li>Eco-Friendly Materials</li>
  <li>Smart Kitchen Technology</li>
</ul>
<p className="text-start">
  Let us help you design the kitchen of your dreams that blends form and function seamlessly.
</p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {kitchen.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div>

      <div className="a row mt-5 pt-5">
  
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {bed.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample4"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample4"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-delay='200'
      className="a1 col-md-6 col-12">
      <h2 className="text-start text-black">Cozy Bedrooms</h2>
<p className="text-start">
  Your bedroom should be your sanctuary—a place to relax and unwind. Our bedroom designs are crafted with comfort and style in mind. 
  From comfortable mattresses to luxurious bedding, we ensure every detail is considered for your perfect night's sleep. 
  Create a retreat that reflects your style with our range of customizable furniture and decor options.
</p>
<ul className="text-start" style={{listStyle: "none"}}>
  <li>Comfortable Bed Frames</li>
  <li>Luxury Bedding and Mattresses</li>
  <li>Stylish Storage Solutions</li>
  <li>Personalized Lighting</li>
  <li>Custom Closets and Wardrobes</li>
</ul>
<p className="text-start">
  Turn your bedroom into a peaceful retreat that you’ll love spending time in. Our designs make your space cozy and inviting.
</p>
  </div>
      </div>



      <div className="a row mt-5 pt-5">
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
  <h2 className='text-black text-start'>Stylish Living Rooms</h2>
<p className="text-start">
  Your living room is the heart of your home—a place for family gatherings, relaxing, and entertaining guests. Our living room designs focus on 
  comfort and elegance, offering you a blend of luxury and practicality. From modern sofas to multi-functional furniture, we cater to every style.
</p>
<ul className="text-start" style={{listStyle: "none"}}>
  <li>Comfortable Sofas and Seating</li>
  <li>Modern Coffee Tables and Side Tables</li>
  <li>Entertainment and Media Units</li>
  <li>Decorative Accessories</li>
  <li>Innovative Storage Solutions</li>
</ul>
<p className="text-start">
  With our living room designs, you can create a space that is both inviting and functional. Whether you're hosting a party or enjoying a quiet evening, 
  your living room will be the perfect backdrop for every occasion.
</p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {livingroom
          .map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample5"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample5"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div></div>
        </>
      )
      }


























      {windowsieze <= 800 && (
        <>
        <>
        <div className="container">
        <div className="a row" style={{border: "0.5px solid whitesmoke"}}>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-12 col-12">
  <h2 className="mb-3 text-black text-start">UPVC Windows</h2>
          <p className="text-black text-start">
            Discover the perfect blend of style, durability, and energy
            efficiency with our UPVC windows. Designed to withstand the harshest
            weather conditions, these windows are not only robust and
            long-lasting but also provide superior insulation, helping to
            maintain a comfortable indoor temperature year-round.
          </p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-12 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {pvc.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div>

      <div className="a row mt-5 pt-5">
      <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      data-aos-duration="1000"
      // data-aos-delay='200'
      className="a1 col-md-12 col-12">
  <h2 className="mb-3 text-black text-start">Office Interiors</h2>
          <p className="text-black text-start">
          Elevate your workspace with our comprehensive office interior design
            services. We specialize in creating environments that are not only
            visually appealing but also foster productivity and collaboration.
            Our team understands the importance of a well-designed office space
            in enhancing employee well-being and performance.
          </p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {office1.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      
      </div>

      <div className="a row mt-5 pt-5">
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
  <h2 className='text-black text-start'>Modern Kitchens</h2>
<p className="text-start">
  Transform your cooking experience with a sleek, modern kitchen designed to be both functional and stylish. 
  From spacious countertops to state-of-the-art appliances, our kitchens are built for convenience and luxury.
  Whether you’re looking for minimalist designs or a more traditional look, we offer a range of options to suit your tastes.
</p>
<ul className='list-styled-none text-start' style={{listStyle: "none"}}>
  <li>Customized Cabinetry</li>
  <li>High-End Appliances</li>
  <li>Space-Saving Storage Solutions</li>
  <li>Eco-Friendly Materials</li>
  <li>Smart Kitchen Technology</li>
</ul>
<p className="text-start">
  Let us help you design the kitchen of your dreams that blends form and function seamlessly.
</p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {kitchen.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div>

      <div className="a row mt-5 pt-5">
      <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      data-aos-duration="1000"
      // data-aos-delay='200'
      className="a1 col-md-6 col-12">
      <h2 className="text-start text-black">Cozy Bedrooms</h2>
<p className="text-start">
  Your bedroom should be your sanctuary—a place to relax and unwind. Our bedroom designs are crafted with comfort and style in mind. 
  From comfortable mattresses to luxurious bedding, we ensure every detail is considered for your perfect night's sleep. 
  Create a retreat that reflects your style with our range of customizable furniture and decor options.
</p>
<ul className="text-start" style={{listStyle: "none"}}>
  <li>Comfortable Bed Frames</li>
  <li>Luxury Bedding and Mattresses</li>
  <li>Stylish Storage Solutions</li>
  <li>Personalized Lighting</li>
  <li>Custom Closets and Wardrobes</li>
</ul>
<p className="text-start">
  Turn your bedroom into a peaceful retreat that you’ll love spending time in. Our designs make your space cozy and inviting.
</p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {bed.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample4"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample4"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      
      </div>



      <div className="a row mt-5 pt-5">
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  // data-aos-delay='200'
  className="a1 col-md-6 col-12">
  <h2 className='text-black text-start'>Stylish Living Rooms</h2>
<p className="text-start">
  Your living room is the heart of your home—a place for family gatherings, relaxing, and entertaining guests. Our living room designs focus on 
  comfort and elegance, offering you a blend of luxury and practicality. From modern sofas to multi-functional furniture, we cater to every style.
</p>
<ul className="text-start" style={{listStyle: "none"}}>
  <li>Comfortable Sofas and Seating</li>
  <li>Modern Coffee Tables and Side Tables</li>
  <li>Entertainment and Media Units</li>
  <li>Decorative Accessories</li>
  <li>Innovative Storage Solutions</li>
</ul>
<p className="text-start">
  With our living room designs, you can create a space that is both inviting and functional. Whether you're hosting a party or enjoying a quiet evening, 
  your living room will be the perfect backdrop for every occasion.
</p>
  </div>
  <div
  data-aos="fade-up"
  data-aos-anchor-placement="top-center"
  data-aos-delay="100"
  data-aos-duration="1000"
  data-aos-delay='200'
  className="a1 col-md-6 col-12">
<div style={{maxHeight: "400px", overflowY: "hidden", borderRadius: "10px"}} id="carouselExample5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div className="carousel-inner">
          {livingroom.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`PVC Service ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample5"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample5"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      </div></div>
        </>
        </>
      )}



    

      
    </div>










    {/* <div className="video embed container-fluid"> */}
    <h2
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-delay='200'
    className="text-center text-black mt-5">Our Makings</h2>
      <div className="d-flex p-5 flex-wrap flex-lg-row flex-md-row flx-sm-row flex-column">
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-delay='200'
        className="col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center text-center text-center">
        <video width="100%" height="500" autoPlay loop muted>
  <source src={v1} type="video/mp4" />
</video>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-delay='200'
        className="col-md-6 mt-5 mt-sm-0 mt-md-0 mt-lg-0 col-sm-12 col-12 d-flex justify-content-center align-items-center text-center">
        <video width="100%" height="500" autoPlay loop muted>
  <source src={v2} type="video/mp4" />
</video>
        </div>
      </div>
    {/* </div> */}

    




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



      <style jsx>{`
  /* Adding smooth transition to carousel */
.carousel-item {
  transition: transform 0.5s ease-in-out !important; /* Add this line */
}

/* Smooth out the inner transition */
.carousel-inner {
  transition: transform 0.5s ease-in-out !important;
}

  .carousel-item img {
    object-fit: cover;
    max-height: 500px;
  }
  .footer-logo-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
    .carousel-inner {
  transition: transform 0.5s ease-in-out;
}
`}</style>
    </>
  );
}
