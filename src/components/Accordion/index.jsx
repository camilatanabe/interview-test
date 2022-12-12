import React, { useState } from 'react'
import './style.scss'
import arrowDownIcon from '../../images/arrow-down-icon.svg'
import arrowUpIcon from '../../images/arrow-up-icon.svg'

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={arrowUpIcon} alt="close" />
          ) : (
            <img src={arrowDownIcon} alt="open" />
          )}
        </div>
      </div>
      {isActive && children}
    </div>
  )
}

export default Accordion
