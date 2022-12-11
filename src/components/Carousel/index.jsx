import React, { useState } from 'react'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Button from '../Button'

export default function Carousel({ faceCards }) {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    infinite: false
  }

  return (
    <div className="carousel">
      <Slider ref={setSliderRef} {...sliderSettings}>
        {faceCards.map((faceCard, index) => (
          <div key={index}>
            <div
              className="carousel__item"
              style={{
                backgroundImage: `url(${faceCard.image})`
              }}
            >
              <p>{faceCard.image}</p>
              <div
                className="carousel__itemOverlay"
                style={{ background: faceCard.overlay }}
              ></div>
              <h2>{faceCard.label}</h2>
              <p>{faceCard.title}</p>
              <Button>Buy products</Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
