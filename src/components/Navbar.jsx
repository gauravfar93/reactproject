import React from "react";
import "../components/nav.css"
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="navcontainer">
      <div className="Nav">
        <img src="./images/userCall.png" alt="icon" onClick={()=>navigate("/")}/>
      </div>
      <div className="navLogo">
        <img src="./images/dashLogo.png" alt="dashlogo" />
      </div>
    </div>
  );
};
