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
        <div className="footer-right">
          <div className="footer-logo-container">
            <h3>Client Testimonies</h3>
          </div>
          <div className="testimony">
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p> */}
            <Carousel>
              <Carousel.Item>
                <div className="testimony-item">
                  <div className="testimony-pic">
                    <img
                      className="d-block w-100"
                      src={man}
                      alt="Third slide"
                    />
                  </div>
                  <div className="testimony-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi non quis exercitationem culpa nesciunt nihil aut
                      nostrum explicabo reprehenderit ab temporibus asperiores
                      on quis culpa nesciunt quasi cupiditate. Voluptatum
                      ducimus voluptates voluptas?
                    </p>
                  </div>
                </div>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimony-item">
                  <div className="testimony-pic">
                    <img
                      className="d-block w-100"
                      src={man}
                      alt="Third slide"
                    />
                  </div>
                  <div className="testimony-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi non quis exercitationem culpa nesciunt nihil aut
                      nostrum explicabo reprehenderit ab temporibus asperiores
                      on quis culpa nesciunt quasi cupiditate. Voluptatum
                      ducimus voluptates voluptas?
                    </p>
                  </div>
                </div>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimony-item">
                  <div className="testimony-pic">
                    <img
                      className="d-block w-100"
                      src={man}
                      alt="Third slide"
                    />
                  </div>
                  <div className="testimony-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi non quis exercitationem culpa nesciunt nihil aut
                      nostrum explicabo reprehenderit ab temporibus asperiores
                      on quis culpa nesciunt quasi cupiditate. Voluptatum
                      ducimus voluptates voluptas?
                    </p>
                  </div>
                </div>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
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
