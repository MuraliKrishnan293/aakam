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
import 'aos/dist/aos.css'

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
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Land />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        {/* <Land /> */}
      </>
      )}
    </div>
  );
}

export default App;