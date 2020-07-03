import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import header from './header.scss'

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img className="header-logo" src={logo}></img>
        </div>
        <div className="header-right">
          <div className="header-top-menu">
            <ul className="header-top-items">
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Join Us</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Contests & Blogs</p>
              </li>
            </ul>
          </div>
          <div className="header-bottom-menu">
            <ul className="header-bottom-items">
              <li>
                <button>Individuals & Families</button>
              </li>
              <li>
                <button>Business Owners</button>
              </li>
              <li>
                <button>Turning 65</button>
              </li>
              <li>
                <button>Planning & Guidance</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
