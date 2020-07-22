import React from 'react'
import Partners from '../components/Partners'
import customerPlans from '../components/customerPlans.scss'
import SubPlans from '../components/SubPlans'
import SubPlanContent from './SubPlanContent'

const CustomerPlans = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Individuals and Families</h1>
        <div className="plan-content">
          <aside>
            <SubPlans />
          </aside>
          <main>
            <SubPlanContent />
          </main>
        </div>
      </div>
      <Partners />
    </>
  )
}

export default CustomerPlans
