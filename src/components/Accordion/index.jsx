import React, { useState } from 'react'
import './style.scss'
import arrowDown from '../../images/arrow-down-icon.svg'
import arrowUp from '../../images/arrow-up-icon.svg'
import foward from '../../images/foward-icon.svg'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={arrowUp} alt="close" />
          ) : (
            <img src={arrowDown} alt="open" />
          )}
        </div>
      </div>
      {isActive &&
        content.map((item, index) => {
          return (
            <div className="accordion__content" key={index}>
              {item.name}
              <img src={foward} alt="go to the link" />
            </div>
          )
        })}
    </div>
  )
}

export default Accordion
