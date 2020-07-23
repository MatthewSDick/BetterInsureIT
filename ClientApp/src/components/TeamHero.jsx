import React from 'react'
import { Link } from 'react-router-dom'
import hero from './teamhero.scss'
import agent_pic from '../images/Michael_Chair.png'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="teamhero-left">
          <div>
            <img className="agent-pic" src={agent_pic} />
          </div>
          <div>
            <p>Michael Gonzales, Owner Air Force Veteran</p>
          </div>
          <div>
            <button>Schedule an Appointment</button>
          </div>
        </div>
        <div className="teamhero-right">
          <div>
            <h2>Our Team</h2>
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
            <p>
              Congue nisi vitae suscipit tellus. Massa tincidunt dui ut ornare
              lectus sit amet est. Sagittis id consectetur purus ut faucibus
              pulvinar. Ut sem nulla pharetra diam sit. Tortor condimentum
              lacinia quis vel. Ullamcorper morbi tincidunt ornare massa.
              Pulvinar elementum integer enim neque volutpat. Lobortis
              scelerisque fermentum dui faucibus in ornare. Faucibus a
              pellentesque sit amet porttitor eget dolor morbi. Pellentesque
              dignissim enim sit amet venenatis. Risus at ultrices mi tempus
              imperdiet nulla malesuada.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Hero
