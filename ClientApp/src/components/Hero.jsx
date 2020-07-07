import React from 'react'
import { Link } from 'react-router-dom'
import hero from './hero.scss'
import michael from '../images/Michael.png'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div>
            <img className="agent-pic" src={michael} />
          </div>
          <div className="agent-info">
            <h3>Michael Gonzalez, Owner</h3>
            <h4>🇺🇸 Air Force Veteran 🇺🇸</h4>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <h2>Life is precious</h2>
          </div>
          <div>
            <p>
              Michael Gonzales has always had a passion for serving and helping
              others become the best/healthiest versions of themselves. He first
              began this passion in the active duty Air Force. Fourteen years
              later Michael transitioned to the Air Force Reserve and is
              currently assigned to MacDill AFB, Tampa, FL. When not in uniform,
              Michael co-owns a nationally licensed Health, Life & Disability
              Insurance brokerage in St. Petersburg, FL. Additionally, he is
              also a certified personal trainer & nutritionist with 17+ years of
              active experience. Furthermore, being a father to an amazing
              daughter helps him empathize with other parents when it comes to
              making important family decisions, especially decisions about
              family health insurance. Appointed by the best names in insurance,
              Michael customizes private insurance products for healthy
              professionals, families & small business owners.{' '}
              <b>
                His goal is to help healthy individuals and families take
                advantage of the new healthcare changes this year and help them
                transition from their "Unaffordable Care Act Plan" or from
                having no insurance at all, to a much more sensible and
                affordable option.
              </b>
            </p>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="div-line"></div>
    </>
  )
}

export default Hero
