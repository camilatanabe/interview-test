import React from 'react'
import './style.scss'
import Button from '../Button'

const HimCard = ({
  bgColor,
  image,
  titleBold,
  titleNormal,
  onClick,
  buttonText
}) => {
  return (
    <div
      className="himCard"
      style={{ backgroundColor: bgColor, backgroundImage: `url(${image})` }}
    >
      <div className="himCard__content">
        <h1>{titleBold}</h1>
        <span>{titleNormal}</span>
      </div>
      <Button className="button himCard__button" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
}

export default HimCard
