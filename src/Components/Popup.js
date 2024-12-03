import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";
import bedroomImage from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM (1).jpeg';

export const Popup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

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
      toast.error(
        "Phone number should be at least 10 digits long and contain only numbers."
      );
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
      const response = await axios.post(
        "https://aakaminterior12.onrender.com/app/appointments",
        {
          name,
          email,
          phoneNumber: phone,
          address,
          message,
        }
      );

      if (response.status === 200) {
        toast.success("Appointment created successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
        setShowPopup(false);
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

  return (
    <>
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

      {showPopup && (
        <div className="popup-modal" style={{overflow: "hidden"}}>
          <div className="popup-content" style={{overflow: "hidden"}}>
            <h4 className="popup-heading">Consult Now!</h4>
            <p className="popup-message">
              Our Team will contact you soon
            </p>
            <form className="contact-form" style={{ backgroundImage: `url(${bedroomImage})`}}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              

            </form>
            <div className="d-flex flex-row gap-5 flex-wrap flex-md-nowrap justify-content-center text-center align-items-center">
  <button
    type="submit"
    className="btn btn-primary w-100"
    onClick={sendAppointment}
    disabled={load}
  >
    {load ? "Submitting..." : "Submit"}
  </button>
  <button style={{height: "38px", marginTop: "20px"}}
    className="btn btn-secondary w-100 d-flex flex-row flex-wrap flex-md-nowrap justify-content-center text-center align-items-center"
    onClick={() => setShowPopup(false)}
  >
    Close
  </button>
</div>
          </div>
        </div>
      )}

      {/* <style jsx>{`
        .popup-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 600px;
          max-height: 600px;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
          max-width: 600px;
          width: 90%;
        }

        .popup-heading {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .popup-message {
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
        }

        .btn-secondary {
          background-color: grey;
          color: white;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .popup-content {
            padding: 20px;
          }

          .popup-heading {
            font-size: 1.2rem;
          }

          .popup-message {
            font-size: 0.9rem;
          }

          .btn {
            font-size: 0.9rem;
          }
        }
      `}</style> */}



{/* <style jsx>{`
  .popup-modal {
  overflow-y: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 600px;
    max-height: 600px;
    overflow-y: auto;
  }

  .popup-content h4 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .popup-content p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;
  }

  .contact-form label {
    font-size: 0.9rem;
    text-align: left;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

  .contact-form textarea {
    grid-column: span 2;
  }

  .contact-form .full-width {
    grid-column: span 2;
  }

  .contact-form button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-secondary {
    padding: 12px;
    background-color: grey;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    grid-column: span 2;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .popup-content {
      width: 90%;
      max-width: 400px;
      max-height: 500px;
      padding: 25px;
    }

    .popup-content h4,
    .popup-content p {
      grid-column: span 1;
    }

    .contact-form {
      grid-template-columns: 1fr;
    }

    .contact-form label {
      font-size: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1.1rem;
    }

    .contact-form button {
      width: 100%;
      margin-top: 20px;
    }

    .btn-secondary {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .popup-content {
      padding: 20px;
      max-width: 320px;
      max-height: 400px;
    }

    .popup-content h4 {
      font-size: 1.2rem;
    }

    .popup-content p {
      font-size: 0.9rem;
    }

    .contact-form button {
      font-size: 0.9rem;
    }
  }
`}</style> */}



<style jsx>{`


  .popup-modal {
    background-image: url("../Images/bedroom.jpg");
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 600px;
    max-height: 650px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .popup-content h4 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .popup-content p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .contact-form {
//   padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
  }

  .contact-form label {
    font-size: 0.9rem;
    text-align: left;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

  .contact-form textarea {
    grid-column: span 2;
  }

  .contact-form .full-width {
    grid-column: span 2;
  }

  .contact-form button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
  }

  .btn-secondary {
    padding: 12px;
    background-color: grey;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    margin-bottom: 20px;
    grid-column: span 2;
  }

  .popup-content .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .popup-content {
      width: 90%;
      max-width: 400px;
      max-height: 500px;
      padding: 25px;
    }

    .popup-content h4,
    .popup-content p {
      grid-column: span 1;
    }

    .contact-form {
      grid-template-columns: 1fr;
    }

    .contact-form label {
      font-size: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1.1rem;
    }

    .contact-form button {
      width: 100%;
      margin-top: 20px;
    }

    .btn-secondary {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .popup-content {
      padding: 20px;
      max-width: 320px;
      max-height: 400px;
    }

    .popup-content h4 {
      font-size: 1.2rem;
    }

    .popup-content p {
      font-size: 0.9rem;
    }

    .contact-form button {
      font-size: 0.9rem;
    }
  }
`}</style>
    </>
  );
};