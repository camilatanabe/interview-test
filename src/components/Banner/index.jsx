import React from 'react'
import './style.scss'
import Button from '../Button'

const Banner = ({
  titleBold,
  titleNormal,
  subtitle,
  description,
  image,
  imageDescription,
  buttonText
}) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__overlay"></div>
        <div className="banner__text">
          <h1>
            {titleBold}
            <span>{titleNormal}</span>
          </h1>
          <div className="banner__subtitleDescription">
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>
          <Button desktopOnly={true}>{buttonText}</Button>
        </div>
        <img className="banner__image" src={image} alt={imageDescription} />
      </div>
    </div>
  )
}

export default Banner
