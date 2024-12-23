import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
import Land from "./Components/Land";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import About from "./Components/About";
import { ContactUs } from "./Components/Contact";
import Gallery from "./Components/Gallery";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import Admin from './Components/Admin';
import AdminPanel from './Components/AdminPanel';
import Kit from "./Components/Kit";
import { Popup } from "./Components/Popup";

function App() {
  const [load, setLoad] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (tokenExpiry) {
      const remainingTime = parseInt(tokenExpiry, 10) - Date.now();

      if (remainingTime > 0) {
        setTimeout(() => {
          localStorage.clear();
          alert("Session expired. Please log in again.");
          window.location.href = '/admin';
        }, remainingTime);
      } else {
        localStorage.clear();
        // alert("Session expired. Please log in again.");
        // nav('/admin');
      }
    }
  }, []);

  // const nav = useNavigate();

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    // Check if the popup has already been shown in the session
    const popupShown = sessionStorage.getItem('popupShown');
    
    // If the popup has not been shown yet, show it after 10 seconds
    if (!popupShown) {
      const popupTimer = setTimeout(() => {
        setIsPopupVisible(true);
        sessionStorage.setItem('popupShown', 'true'); // Mark the popup as shown in sessionStorage
      }, 10000);

      return () => clearTimeout(popupTimer); // Cleanup timeout on unmount
    }
  }, []);

  const handlePopupClose = () => {
    setIsPopupVisible(false); // Close the popup
  };

  return (
    <div className="App">
      {load ? (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<Land />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
              <Route path="/check" element={<Kit />} />
              <Route path="*" element={<h1 style={{ marginTop: "200px" }}>404 - Not Found</h1>} />
            </Routes>
          </BrowserRouter>

          {/* WhatsApp button */}
          <a href={`https://wa.me/918056491710?text=Hello`} target="_blank" rel="noopener noreferrer">
            <div className="whatsapp-button">
              <FaWhatsapp className="whatsapp-icon" />
            </div>
          </a>

          {/* Popup - shown only if it hasn't been shown before */}
          {isPopupVisible && (
            <Popup
              isVisible={isPopupVisible}
              onClose={handlePopupClose} // Close the popup when clicked
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;