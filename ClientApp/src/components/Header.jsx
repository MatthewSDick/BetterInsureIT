import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import header from './header.scss'

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header-logo" src={logo}></img>

        <div className="header-right">
          <div className="header-top-menu">
            <ul className="header-top-items">
              <li>
                <Link to="/MeetTheTeam">
                  <button className="header-top-items-button">
                    <p>Meet the team</p>
                  </button>
                </Link>
              </li>
              <li>
                <button className="header-top-items-button">
                  <p>Join Us</p>
                </button>
              </li>
              <li>
                <button className="header-top-items-button">
                  <p>Contact Us</p>
                </button>
              </li>
              <li>
                <button className="header-top-items-button">
                  <p>Contests & Blogs</p>
                </button>
              </li>
            </ul>
          </div>
          <div className="header-bottom-menu">
            <ul className="header-bottom-items">
              <li>
                <Link to="/plans">
                  <button
                    onclick="myFunction()"
                    className="header-bottom-items-button"
                  >
                    Individuals & Families
                  </button>
                </Link>
              </li>
              <li>
                <button className="header-bottom-items-button">
                  Business Owners
                </button>
              </li>
              <li>
                <button className="header-bottom-items-button">
                  Turning 65 +
                </button>
              </li>
              <li>
                <button className="header-bottom-items-button">
                  Planning & Guidance
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Header
