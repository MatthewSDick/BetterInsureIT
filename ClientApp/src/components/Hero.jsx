import React from 'react'
import { Link } from 'react-router-dom'
import hero from './hero.scss'
import family_pic from '../images/family.jpeg'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div>
            <h2>Life is precious</h2>
          </div>
          <div className="hero-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit amet. Natoque penatibus et magnis
              dis parturient montes nascetur ridiculus. Lorem donec massa sapien
              faucibus et. Morbi tristique senectus et netus et. Dui ut ornare
              lectus sit amet est. A scelerisque purus semper eget duis at.
              Aliquam purus sit amet luctus. Iaculis at erat pellentesque
              adipiscing commodo. Malesuada pellentesque elit eget gravida cum.
              Velit dignissim sodales ut eu sem. Purus ut faucibus pulvinar
              elementum integer.
            </p>
          </div>
          <div className="hero-list">
            <ul>
              <li>
                Item Number One - Item Number One - Item Number One - Item
                Number One
              </li>
              <li>
                Item Number One - Item Number One - Item Number One - Item
                Number One
              </li>
              <li>
                Item Number One - Item Number One - Item Number One - Item
                Number One
              </li>
            </ul>
          </div>
          <div className="hero-buttons">
            <button>About US</button>
            <button>Join US</button>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <img className="family-pic" src={family_pic} />
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Hero
