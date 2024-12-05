// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "../Styles/Nav.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import logo from "../Images/LogoFinal.png";

// const MyNavbar = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const token = localStorage.getItem("token");

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/admin");
//   };

//   return (
//     <nav
//       style={{ top: "0" }}
//       className={`navbar navbar-expand-lg position-fixed w-100 text-dark ${
//         scrolling ? "scrolled" : ""
//       }`}
//     >
//       <div className="container-fluid d-md-flex justify-content-between">
//         <div className="d-flex">
//           <a
//             className="navbar-brand text-md-start text-start"
//             style={{
//               color: "#ffdd94",
//               fontWeight: "500",
//               fontSize: "34px",
//               width: "60%",
//             }}
//             href="/"
//           >
//             <img
//               src={logo}
//               alt="logo"
//               style={{ width: "70px", height: "50px" }}
//             />
//           </a>
//         </div>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {/* {window.innerWidth > 1000 && (<h6 className="w-100 d-flex text-right justify-content-end">Aakam</h6>)} */}
//         <div
//           className="collapse navbar-collapse w-100 gap-md-5 ms-auto"
//           id="navbarNavAltMarkup"
//         >
//           <div className="navbar-nav justify-content-center text-end ms-auto gap-1 gap-sm-2 gap-md-3">
//             <a
//               style={{ color: "black" }}
//               className="nav-link"
//               aria-current="page"
//               href="/"
//             >
//               Home
//             </a>
//             <a style={{ color: "black" }} className="nav-link" href="/about">
//               About
//             </a>
//             <a style={{ color: "black" }} className="nav-link" href="/gallery">
//               Gallery
//             </a>
//             <a style={{ color: "black" }} className="nav-link" href="/contact">
//               Contact
//             </a>
//             {token && (
//               <button
//                 style={{ color: "black" }}
//                 onClick={handleLogout}
//                 className="nav-link"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default MyNavbar;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/LogoFinal.png";
import '../Styles/Nav.css';

const MyNavbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <nav
      style={{ top: "0" }}
      className={`navbar navbar-expand-lg position-fixed w-100 text-dark ${
        scrolling ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid d-md-flex justify-content-between">
        <div className="d-flex">
          <a
            className="navbar-brand text-md-start text-start"
            style={{
              color: "#ffdd94",
              fontWeight: "500",
              fontSize: "34px",
              width: "60%",
            }}
            href="/"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "70px", height: "50px" }}
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse w-100 gap-md-5 ms-auto"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav justify-content-center text-end ms-auto gap-1 gap-sm-2 gap-md-3">
            <a
              style={{ color: "black" }}
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              href="/"
            >
              Home
            </a>
            <a
              style={{ color: "black" }}
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              href="/about"
            >
              About
            </a>
            <a
              style={{ color: "black" }}
              className={`nav-link ${
                location.pathname === "/gallery" ? "active" : ""
              }`}
              href="/gallery"
            >
              Gallery
            </a>
            <a
              style={{ color: "black" }}
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              href="/contact"
            >
              Contact
            </a>
            {token && (
              <button
                style={{ color: "black" }}
                onClick={handleLogout}
                className="nav-link"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link.active {
          font-weight: bold;
          color: #ff8800 !important;
          border-bottom: 2px solid #ff8800;
        }

        .nav-link{
        transition: all 0.7s ease;
        }

        .nav-link:hover{
        color: #ff8800 !important;
        }
      `}</style>
    </nav>
  );
};

export default MyNavbar;
