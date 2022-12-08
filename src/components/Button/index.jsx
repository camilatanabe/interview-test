import React from 'react'
import './style.scss'

const Button = ({ outlined, desktopOnly, children, onClick }) => {
  return (
    <button
      className={`button ${outlined ? 'button__outlined' : ''} ${
        desktopOnly ? 'button__desktopOnly' : ''
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
