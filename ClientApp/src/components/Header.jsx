import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Better - LOGO</h1>
        <ul>
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
        <ul>
          <li>
            <button>Individuals & Families</button>
          </li>
          <li>
            <button>Business Owners</button>
          </li>
          <li>
            <button>Turning 65+</button>
          </li>
          <li>
            <button>Planning & Guidance</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
