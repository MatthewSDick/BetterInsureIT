import React from 'react'
import { Link } from 'react-router-dom'
import partners from './partners.scss'
import humana from '../images/humana.png'

const Partners = () => {
  return (
    <>
      <div className="partners">
        <h1>PARTNERS - DIV</h1>
        <img src={humana}></img>
      </div>
    </>
  )
}

export default Partners
