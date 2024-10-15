import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_dftnmra', 'template_wngc4wx', form.current, 'wcuxHDR-dxognOTs_')
      .then(
        () => {
          toast.success('Will Contact you Back Shortly!');
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  return (<>
    <div className="contact-us mt-5 pt-5 d-flex flex-column" style={{marginTop: "200px"}}>
        <h4>
        Fill Out The Form Below!
        </h4>
        <p>
        Our Customer Support Team will Contact You Shortly!
        </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="from_name" required />
        
        <label>Email</label>
        <input type="email" name="from_email" required />
        
        <label>Phone Number</label>
        <input type="tel" name="phone" required />
        
        <label>Address</label>
        <input type="text" name="address" required />
        
        <label>Message</label>
        <textarea name="message" required />
        
        <input type="submit" value="Send" />
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
    <div>

    </div>

    <div className="foot">
      <footer style={{background: "#1e4451"}} class="foot">
        <div style={{background: "#1e4451", color: "white"}} class="container">
          <div class="row footer-con">
            <div 
            data-aos="zoom-in"
            data-aos-once="true"

            class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column">
              <h2 class="footer-logo fw-5 fs-1">AAKAM</h2>
              {/* <img
                src={logo}
                alt="Logo"
                class="footer-logo-img"
              /> */}
            </div>
            {/* <div className="hr"><hr /></div> */}
            <div
            
            data-aos="zoom-in"
            data-aos-once="true"

            class="col-md-6 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column">
              <h4 className="text-center">Our Services</h4>
              <ul class="footer-services text-center" style={{listStyleType: "none"}}>
                <li className="mt-3">UPVC Windows</li>
                <li className="mt-3">Bedroom Interior</li>
                <li className="mt-3">Livingroom Interior</li>
                <li className="mt-3">Modular Kitchen</li>
                <li className="mt-3">Office Interior</li>
              </ul>
            </div>
          </div><hr />
          <div className="row">
          <h2 style={{width: "100%"}} className="w-100 text-md-center text-start fw-5 fs-1">Contact us</h2>
          <div
          

          data-aos="zoom-in"
          data-aos-once="true"

          class="col-md-12 mt-3 col-sm-12 col-12 d-flex justify-content-md-center align-items-md-center text-md-center text-start flex-column">
{/*               
              <div class="contact-details"> */}
                {/* <div className="col-md-6 col-12"> */}
                  <p>
                  <i class="fa fa-instagram"></i> _mo.nish_ 9
                </p>
                <p>
                  <i class="fa fa-envelope"></i> ThulasiRaam@gmail.com
                </p>
                <p>
                  <i class="fa fa-map-marker"></i> 18, Venkatesa St,
                  Pallikaranai, Chennai, Tamil Nadu
                </p>
                <p>
                  <i class="fa fa-phone"></i> +91-7052-101-786
                </p>
                </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};