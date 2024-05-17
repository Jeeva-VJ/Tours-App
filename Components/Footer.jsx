import React from 'react'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { LuUsers2 } from "react-icons/lu";
import footer from '../Assets/logo.png';

function Footer() {
  return (
    <div>
      <div className='footer-one'>
        <div>
          <img src={footer} alt="" />
          <p>Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Delectus autem, </p>
          <p>
            <RiUserSettingsLine className='m-2'/>
            <FaGithub className='m-2'/>
            <FaLinkedinIn className='m-2'/>
            <FaInstagram className='m-2'/>
          </p>
        </div>
        <div>
          <h4>Discover</h4>
          <Link path="/home" to="/">home</Link><br></br>
          <Link path="/About" to="About">About</Link><br></br>
          <Link path="/Tour" to="Tour">Tours</Link>

        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Gallery</p>
          <Link className="nav-link" to="/Register">Register</Link>
          <Link className="nav-link" to="/Login">Login</Link>

        </div>
        <div>
          <h4>Contact</h4>
          <p> <CiLocationOn id='color'/> Address:Kuppam, Andhra Pradesh</p>
          <p> <MdOutlineEmail id='color'/> Email:Jeeva9182235326@gmail.com</p>
          <p> <LuPhone id='color'/> Phone:9676226896</p>


        </div>
      </div>

      <footer>
        <hr />
        <p id='own'>Copyright 2024,Design and develop by <span id='my-name'>Mr.Jeeva</span>,All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
