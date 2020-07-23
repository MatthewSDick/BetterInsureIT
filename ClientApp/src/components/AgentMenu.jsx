import React from 'react'
import { Link } from 'react-router-dom'
import agentmenu from './agentmenu.scss'
import family_pic from '../images/family.jpeg'

const AgentMenu = () => {
  return (
    <>
      <div className="summary">
        {/* <div classname="panels"> */}
        <div className="panel-section">
          <button className="summary-image"></button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Learn More</button>
        </div>
        <div className="panel-section">
          <button className="summary-image"></button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Learn More</button>
        </div>
        <div className="panel-section">
          <button className="summary-image"></button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Learn More</button>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default AgentMenu
