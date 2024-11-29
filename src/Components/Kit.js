import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Kitchen Images
import b1 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM (1).jpeg';
import b2 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM (2).jpeg';
import b3 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.15 PM.jpeg';
import b4 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.16 PM (1).jpeg';
import b5 from './Kitchen/WhatsApp Image 2024-11-23 at 9.30.16 PM.jpeg';

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

const Kit = () => {
    const kit = [b1, b2, b3, b4, b5];
    const liv = [l1, l2, l3, l4, l5];
    const bed = [b11, b22, b33, b44, b55];

    const [modalShow, setModalShow] = useState(false);
    const [imageGallery, setImageGallery] = useState([]);

    // Function to open the modal with the selected gallery
    const openModal = (images) => {
        setImageGallery(images);
        setModalShow(true);
    };

    const closeModal = () => setModalShow(false);

    return (
        <>
            <div style={{marginTop: "100px"}} className="container mb-5 d-flex justify-content-center text-center w-100 align-items-center">
              <div className='row' style={{overflowY: "hidden"}}>
                {/* Kitchen Section */}
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="col-md-6 text-black">
                <h2 className='text-black'>Modern Kitchens</h2>
<p>
  Transform your cooking experience with a sleek, modern kitchen designed to be both functional and stylish. 
  From spacious countertops to state-of-the-art appliances, our kitchens are built for convenience and luxury.
  Whether you’re looking for minimalist designs or a more traditional look, we offer a range of options to suit your tastes.
</p>
<ul className='list-styled-none' style={{listStyle: "none"}}>
  <li>Customized Cabinetry</li>
  <li>High-End Appliances</li>
  <li>Space-Saving Storage Solutions</li>
  <li>Eco-Friendly Materials</li>
  <li>Smart Kitchen Technology</li>
</ul>
<p>
  Let us help you design the kitchen of your dreams that blends form and function seamlessly.
</p>

                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="col-md-6">
                    <img
                        src={b2}
                        className="img-fluid rounded shadow-lg"
                        alt="Kitchen Image"
                        style={{ cursor: 'pointer' }}
                        onClick={() => openModal(kit)} // Open Kitchen gallery on image click
                    />
                </div>

                {/* Living Room Section */}
                
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="col-md-6 mt-5">
                    <img
                        src={l1}
                        className="img-fluid rounded shadow-lg"
                        alt="Living Room Image"
                        style={{ cursor: 'pointer' }}
                        onClick={() => openModal(liv)} // Open Living Room gallery on image click
                    />
                </div>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="col-md-6 text-black mt-5">
                <h2>Cozy Bedrooms</h2>
<p>
  Your bedroom should be your sanctuary—a place to relax and unwind. Our bedroom designs are crafted with comfort and style in mind. 
  From comfortable mattresses to luxurious bedding, we ensure every detail is considered for your perfect night's sleep. 
  Create a retreat that reflects your style with our range of customizable furniture and decor options.
</p>
<ul style={{listStyle: "none"}}>
  <li>Comfortable Bed Frames</li>
  <li>Luxury Bedding and Mattresses</li>
  <li>Stylish Storage Solutions</li>
  <li>Personalized Lighting</li>
  <li>Custom Closets and Wardrobes</li>
</ul>
<p>
  Turn your bedroom into a peaceful retreat that you’ll love spending time in. Our designs make your space cozy and inviting.
</p>
                </div>

                {/* Bedroom Section */}
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="col-md-6 text-black mt-5">
                <h2 className='text-black'>Stylish Living Rooms</h2>
<p>
  Your living room is the heart of your home—a place for family gatherings, relaxing, and entertaining guests. Our living room designs focus on 
  comfort and elegance, offering you a blend of luxury and practicality. From modern sofas to multi-functional furniture, we cater to every style.
</p>
<ul style={{listStyle: "none"}}>
  <li>Comfortable Sofas and Seating</li>
  <li>Modern Coffee Tables and Side Tables</li>
  <li>Entertainment and Media Units</li>
  <li>Decorative Accessories</li>
  <li>Innovative Storage Solutions</li>
</ul>
<p>
  With our living room designs, you can create a space that is both inviting and functional. Whether you're hosting a party or enjoying a quiet evening, 
  your living room will be the perfect backdrop for every occasion.
</p>

                </div>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="col-md-6 mt-5">
                    <img
                        src={b11}
                        className="img-fluid rounded shadow-lg"
                        alt="Bedroom Image"
                        style={{ cursor: 'pointer' }}
                        onClick={() => openModal(bed)} // Open Bedroom gallery on image click
                    />
                </div>
                </div>

            {/* Modal with Carousel */}
            {modalShow && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    aria-labelledby="imageModalLabel"
                    aria-hidden="false"
                    style={{ display: 'block' }} // Ensures modal is visible
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title" id="imageModalLabel">
                                    Designs
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {/* Carousel inside Modal */}
                                <div
                                    id="carouselExampleControls"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        {imageGallery.map((image, index) => (
                                            <div
                                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                                key={index}
                                            >
                                                <img
                                                    src={image}
                                                    className="d-block w-100 carousel-image"
                                                    alt={`Gallery ${index + 1}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

<style jsx>{`
                .modal-dialog {
                    max-width: 600px;
                    width: 100%;
                }

                .carousel-inner {
                    height: 450px;
                }

                .carousel-item {
                    transition: transform 1s ease; /* Smooth transition for the carousel */
                }

                .carousel-image {
                    object-fit: contain;
                    height: 450px;
                    width: 100%;
                }

                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    background-color: black;
                }

                .carousel-item-next,
                .carousel-item-prev,
                .carousel-item.active {
                    transition: transform 1s ease; /* Smooth transition for sliding */
                }
            `}</style>
        </div></>
    );
};

export default Kit;