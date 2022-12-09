import React, { useState } from 'react'
import './style.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        content.map(item => {
          return <div className="accordion__content">{item.name}</div>
        })}
    </div>
  )
}

export default Accordion
