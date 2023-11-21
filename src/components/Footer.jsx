import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./footer.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLinks'>
        <Link to={"/dashboard"}><FaHome color='#376e3f'/></Link>
        <Link to={"/employees"}><FaUser color='#376e3f'/></Link>
        </div>
    </div>
  )
}
