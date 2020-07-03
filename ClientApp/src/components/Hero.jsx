import React from 'react'
import { Link } from 'react-router-dom'
import hero from './hero.scss'
import man from '../images/man.jpg'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div>
            <img className="agent-pic" src={man} />
          </div>
          <div className="agent-info">
            <p>Something about Michael</p>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <h2>Life is precious</h2>
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
