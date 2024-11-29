import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
import Land from "./Components/Land";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init();
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

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
            <Route path="*" element={<h1 style={{marginTop: "200px"}}>404 - Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        
        {/* <ReactWhatsapp number="9884624057" message="Hello World!!!" /> */}
        <a href={`https://wa.me/918056491710?text=Hello%20`} target="_blank" rel="noopener noreferrer">
            <div className="whatsapp-button">
              <FaWhatsapp className="whatsapp-icon" />
            </div>
          </a>
        {/* <Land /> */}
      </>
      )}
    </div>
  );
}

export default App;