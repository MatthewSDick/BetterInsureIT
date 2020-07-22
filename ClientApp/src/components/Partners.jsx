import React from 'react'
import { Link } from 'react-router-dom'
import partners from './partners.scss'
import humana from '../images/Humana.png'
import bellaire from '../images/Bellaire.png'
import colonial from '../images/Colonial-life.png'
import premier from '../images/Premier_Marketing.png'
import stephens from '../images/StephensMatthews.jpg'
import vested from '../images/vested.png'

const Partners = () => {
  return (
    <>
      <div className="partners">
        <h1>Our Strategic Partners</h1>

        <div className="partners-list">
          <button className="partner">
            <img className="partner-image" src={humana}></img>
          </button>
          <button className="partner">
            <img className="partner-image" src={bellaire}></img>
          </button>
          <button className="partner">
            <img className="partner-image" src={colonial}></img>
          </button>
          <button className="partner">
            <img className="partner-image" src={premier}></img>
          </button>
          <button className="partner">
            <img className="partner-image" src={stephens}></img>
          </button>
          <button className="partner">
            <img className="partner-image" src={vested}></img>
          </button>
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Partners
