import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className='J4d_Navbar'>
      <div className='J4d_Navbar_logo'>
       <img src='./Image/Logo.png' alt='Navbar_Logo'/>
      </div>
      <div className='J4d_Navbar_Content'>
      <ul>
        <li href="#">Home</li>
        <li href="#">About Us </li>
        <li href="#">Services</li>
        <li href="#">Location</li>
        <li href="#">Enquiry</li>
        <li href="#">Contact Us </li>
      </ul>
      </div>
      <button class="btn">
    <span class="btn-text-one">Login </span>
    <span class="btn-text-two">Register</span>
    </button>
    </div>
  )
}

export default Navbar
