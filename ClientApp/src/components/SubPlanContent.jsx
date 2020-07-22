import React, { useState } from 'react'

const SubPlanContent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <>
      <div className="plan-information"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        assumenda quis deserunt voluptas tenetur et quia suscipit placeat
        obcaecati, fugit accusantium consequatur culpa minima dignissimos sit
        nihil ex dolor laboriosam?
      </p>
    </>
  )
}

export default SubPlanContent
