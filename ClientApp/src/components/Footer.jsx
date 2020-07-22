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
      </div>
      <div>
        <p className="copyright">&copy; 2020 BetterInsureIt.com</p>
      </div>
    </>
  )
}

export default Footer
