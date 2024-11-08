import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tilt } from 'react-tilt';
import g from '../Images/globe-removebg-preview.png';
import logo from '../Images/logo.png';
import axios from "axios";

export const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [load, setLoad] = useState(false);
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_dftnmra",
  //       "template_wngc4wx",
  //       form.current,
  //       "wcuxHDR-dxognOTs_"
  //     )
  //     .then(
  //       () => {
  //         toast.success("Will Contact you Back Shortly!");
  //       },
  //       (error) => {
  //         toast.error("Failed to send email. Please try again.");
  //       }
  //     );
  // };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,}$/;

    if (name.trim().length < 3) {
      toast.error("Name should be at least 3 characters long.");
      return false;
    }

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phonePattern.test(phone)) {
      toast.error("Phone number should be at least 10 digits long and contain only numbers.");
      return false;
    }

    if (address.trim().length < 5) {
      toast.error("Address should be at least 5 characters long.");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message should be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const sendAppointment = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoad(true);

    try {
      const response = await axios.post("http://localhost:5000/app/appointments", {
        name,
        email,
        phoneNumber: phone,
        address,
        message,
      });

      if (response.status === 200) {
        toast.success("Appointment created successfully!");
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
      } else {
        toast.error("Failed to create appointment. Please try again.");
      }
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error("Error:", error);
      toast.error("Error creating appointment. Please try again.");
    }
  };

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }



  return (
    <>
      <div
        className="contact-us mt-5 pt-5 d-flex flex-column"
        style={{ marginTop: "200px" }}
      >
        <h4>Fill Out The Form Below!</h4>
        <p>Our Customer Support Team will Contact You Shortly!</p>
        <form data-aos="zoom-in" data-aos-duration="1000" className="contact-form">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Phone Number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

          <label>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

          {/* <input type="submit"  /> */}
          <button type="submit" className="btn btn-primary" onClick={sendAppointment} disabled={load}>{load ? "Submitting" : "Submit"}</button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
      <div className="container p-5" style={{overflowX: "hidden"}}>
        <h1>Locate Us</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center text-center">
          <Tilt options={defaultOptions}
          
          >
            <img className="" style={{width: "100%", height: "100%"}} src={g}
            data-aos="fade-left"
            data-aos-duration="1000"
            />
          </Tilt>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <iframe
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{width: "100%", height: "100%"}}
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d680.7591664410722!2d79.91289081253052!3d13.133766524126319!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA4JzAxLjciTiA3OcKwNTQnNDcuMyJF!5e1!3m2!1sen!2sin!4v1730550341174!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="foot">
        <footer style={{ background: "#1e4451" }} class="foot">
          <div
            style={{ background: "#1e4451", color: "white" }}
            class="container"
          >
            <div class="row footer-con">
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column"
              >
                <h2 class="footer-logo fw-5 fs-1">AAKAM</h2>
                <img
                src={logo}
                alt="Logo"
                className="footer-logo-img"
                style={{borderRadius: "1000%"}}
              />
              </div>
              {/* <div className="hr"><hr /></div> */}
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column"
              >
                <h4 className="text-center">Our Services</h4>
                <ul
                  class="footer-services text-center"
                  style={{ listStyleType: "none" }}
                >
                  <li className="mt-3">UPVC Windows</li>
                  <li className="mt-3">Bedroom Interior</li>
                  <li className="mt-3">Livingroom Interior</li>
                  <li className="mt-3">Modular Kitchen</li>
                  <li className="mt-3">Office Interior</li>
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
                data-aos="zoom-in"
                data-aos-once="true"
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
                  <i class="fa fa-phone"></i>+91 8056491710
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
