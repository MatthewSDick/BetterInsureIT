import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import TeamHero from '../components/TeamHero'
import Footer from '../components/Footer'
import AgentMenu from '../components/AgentMenu'

export function MeetTheTeam() {
  return (
    <>
      <Header />
      <TeamHero />
      <AgentMenu />
      <Footer />
    </>
  )
}
