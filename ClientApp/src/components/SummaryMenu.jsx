import React from 'react'
import { Link } from 'react-router-dom'
import summarymenu from './summarymenu.scss'
import family_pic from '../images/family.jpeg'

const SummaryMenu = () => {
  return (
    <>
      <div className="summary-a">
        {/* <div classname="panels"> */}
        <div className="panel-section">
          <button className="summary-image">
            <i className="fas fa-user-friends fa-4x"></i>
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Individuals & Families</button>
        </div>
        <div className="panel-section">
          <button className="summary-image">
            <i class="fas fa-building fa-4x"></i>
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Business Owners</button>
        </div>
        <div className="panel-section">
          <button className="summary-image">
            <i class="fas fa-user-alt fa-4x"></i>
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Turning 65 +</button>
        </div>
        <div className="panel-section">
          <button className="summary-image">
            <i class="fas fa-map-signs fa-4x"></i>
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="summary-button">Planning & Guidance</button>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default SummaryMenu
