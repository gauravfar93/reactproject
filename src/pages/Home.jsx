import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error,setError] = useState(false)

 const navigate = useNavigate();

  const getFormData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  
  const handleLogin = () => {
     if(form.email==="sample@gmail.com" && form.password==="123456"){
       navigate("/dashboard")
     }else{
      setError(true)
     }
  };
  
  return (
    <div className="homeContainer">
      <div className="homelogo">
        <img src="/images/homeLogo.png" alt="" />
      </div>
      <p className="homeText">#We are Electric</p>
      <div className="loginFromContainer">
        <input
          type="email"
          placeholder="E-Mail"
          className="email"
          name="email"
          value={form.email}
          onChange={getFormData}
        />
        <input
          type="password"
          placeholder="Password"
          className="password"
          name="password"
          value={form.password}
          onChange={getFormData}
        />
        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>
        <p className={error ? "errorTrue" : "errorFalse"}>Wrong Login Id Password</p>
        <p className="forgotPass">Forgot Password?</p>
      </div>
    </div>
  );
};
