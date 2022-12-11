import React, { useState } from 'react'
import './style.scss'
import arrowDownIcon from '../../images/arrow-down-icon.svg'
import arrowUpIcon from '../../images/arrow-up-icon.svg'
import fowardIcon from '../../images/foward-icon.svg'

const Accordion = ({ title, content }) => {
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
      {isActive &&
        content?.map((item, index) => {
          return (
            <div className="accordion__content" key={index}>
              {item.name}
              <img src={fowardIcon} alt="go to the link" />
            </div>
          )
        })}
    </div>
  )
}

export default Accordion
