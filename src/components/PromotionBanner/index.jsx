import React from 'react'
import './style.scss'

const PromotionBanner = ({ message, link }) => {
  return (
    <div className="promotionBanner">
      <p>
        {message} <a href="#">{link}</a>
      </p>
    </div>
  )
}

export default PromotionBanner
