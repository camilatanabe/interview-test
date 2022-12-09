import React from 'react'
import './style.scss'
import Button from '../Button'

const BigCard = ({
  bgColor,
  bgImage,
  image,
  descriptionPt1,
  descriptionPt2,
  descriptionPt3,
  descriptionPt4,
  onClick,
  buttonText
}) => {
  return (
    <div
      className="bigCard"
      style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }}
    >
      <div className="bigCard__content">
        <div className="bigCard__text">
          <p>
            {descriptionPt1}
            <span> {descriptionPt2}</span>
          </p>
          <p>
            <span> {descriptionPt3}</span>
            {descriptionPt4}
          </p>
        </div>
        <img src={image} alt="" />
      </div>
      <Button className="button bigCard__button" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
}

export default BigCard
