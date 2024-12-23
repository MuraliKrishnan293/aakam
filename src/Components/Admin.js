import React, { useEffect, useState } from 'react';
import '../Styles/Admin.css';
import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



  const toastOptions = {
    position: "top-left",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handle = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try{const req = await axios.post("https://aakaminterior12.onrender.com/app/login",{
      email, password
      
    });
    setLoading(false);
    console.log(req.data);
    
    if(req.status===200){
      const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("email", email);
      localStorage.setItem("token", req.data.authToken);
      localStorage.setItem("tokenExpiry", expiryTime);
    }
    navigate("/admin-panel");
    toast.success("Login Success");
  }
    catch(e){
      toast.error("Login failed", toastOptions);
      setLoading(false);
      console.log(e);
    }
  }

  const auth = localStorage.getItem("token");

  useEffect(() => {
    const auth = localStorage.getItem("token");

    if (auth) {
      const tokenExpiry = localStorage.getItem("tokenExpiry");
      if (tokenExpiry && Date.now() > parseInt(tokenExpiry, 10)) {
        localStorage.clear();
        toast.error("Session expired. Please log in again.", toastOptions);
      } else {
        navigate("/admin-panel"); // Redirect if already logged in and session is valid
      }
    }
  }, [navigate]);

  return (<>
    {!auth && (<div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <p className="user-icon">👤</p>
        </div>
        <form className="login-form">
          <input type="email" placeholder="mailid@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="login-input" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPass(e.target.value)} className="login-input" />
          <button type="submit" onClick={handle} className="login-button">{loading ? "Please Wait":"Continue"}</button>
        </form>
      </div>
      <ToastContainer />
    </div>)}</>
  )
}

export default Admin;