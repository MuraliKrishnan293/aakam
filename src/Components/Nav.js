import React, { useState, useEffect, useNavigate } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

const MyNavbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/admin');
    }


    return (
        <nav style={{top: "0"}} className={`navbar navbar-expand-lg position-fixed w-100 text-dark ${scrolling ? 'scrolled' : ''}`}>
            <div className="container-fluid d-md-flex justify-content-between">
                <div className='d-flex'>
                <img src={logo} alt='logo' />
                <a className="navbar-brand text-md-start text-start" style={{ color: "#ffdd94", fontWeight: "500", fontSize: "34px", width: "60%"}} href="/"><b>Aakam</b></a>
                </div><button
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
                <div className="collapse navbar-collapse w-100 gap-md-5 ms-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-center text-end ms-auto gap-1 gap-sm-2 gap-md-3">
                        <a style={{ color: "black" }} className="nav-link" aria-current="page" href="/">Home</a>
                        <a style={{ color: "black" }} className="nav-link" href="/about">About</a>
                        <a style={{ color: "black" }} className="nav-link" href="/gallery">Gallery</a>
                        <a style={{ color: "black" }} className="nav-link" href="/contact">Contact</a>
                        {token && 
                        <button style={{ color: "black" }} onClick={handleLogout} className="nav-link">Logout</button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MyNavbar;