import React from 'react'
import './style.scss'

const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
