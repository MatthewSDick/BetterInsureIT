import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import footer from './footer.scss'
import facebook from '../images/Rounded_Facebook.png'
import instagram from '../images/Rounded_Instagram.png'
import pinterest from '../images/Rounded_Pinterest.png'
import twitter from '../images/Rounded_Twitter.png'
import man from '../images/man.jpg'
import logo from '../images/logo.png'

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img className="footer-logo" src={logo}></img>
          </div>
          <div className="social">
            <img className="social-icon" src={facebook}>
              {/* <a href="https://www.facebook.com">
            <span className="dot-facebook"></span>
          </a> */}
            </img>
            <img className="social-icon" src={instagram}>
              {/* <a href="https://www.facebook.com">
            <span className="dot-facebook"></span>
          </a> */}
            </img>
            <img className="social-icon" src={pinterest}>
              {/* <a href="https://www.facebook.com">
            <span className="dot-facebook"></span>
          </a> */}
            </img>
            <img className="social-icon" src={twitter}>
              {/* <a href="https://www.facebook.com">
            <span className="dot-facebook"></span>
          </a> */}
            </img>
          </div>
        </div>
        <div className="footer-center">
          <ul className="footer-center-items">
            <li>
              <button className="footer-center-items-button">
                <p>Meet the team</p>
              </button>
            </li>
            <li>
              <button className="footer-center-items-button">
                <p>Join Us</p>
              </button>
            </li>
            <li>
              <button className="footer-center-items-button">
                <p>Contact Us</p>
              </button>
            </li>
            <li>
              <button className="footer-center-items-button">
                <p>Contests & Blogs</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="footer-right-items">
            <li>
              <button className="footer-right-items-button">
                <p>Individuals and Families</p>
              </button>
            </li>
            <li>
              <button className="footer-right-items-button">
                <p>Business Owners</p>
              </button>
            </li>
            <li>
              <button className="footer-right-items-button">
                <p>Turning 65 +</p>
              </button>
            </li>
            <li>
              <button className="footer-right-items-button">
                <p>Planning and Guidance</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="copyright">&copy; 2020 BetterInsureIt.com</p>
      </div>
    </>
  )
}

export default Footer
