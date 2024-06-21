import React from 'react';
import "./Navbar.css";
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className="navbar">
      <img  className='logo' src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo-700x394.png" alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar