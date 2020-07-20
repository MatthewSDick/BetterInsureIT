import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomerPlans from '../components/CustomerPlans'

export default function Plans() {
  return (
    <>
      <Header />
      <CustomerPlans></CustomerPlans>
      {/* div to contain the main content*/}
      {/* component called to fill out the menu on the left and the content for each heading on the left.  */}
      <Footer />
    </>
  )
}
