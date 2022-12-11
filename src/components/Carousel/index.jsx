import React, { useState } from 'react'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Button from '../Button'
import arrowRight from '../../images/arrow-right-icon.svg'

const Carousel = ({ faceCards }) => {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5
        }
      }
    ]
  }

  return (
    <div className="carousel">
      <Button
        className="button carousel__button"
        onClick={sliderRef?.slickPrev}
      >
        <img src={arrowRight} alt="" />
      </Button>
      <Button
        className="button carousel__button carousel__button--next"
        onClick={sliderRef?.slickNext}
      >
        <img src={arrowRight} alt="" />
      </Button>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {faceCards?.map((faceCard, index) => (
          <div key={index}>
            <div
              className="carousel__item"
              style={{
                backgroundImage: `url(${faceCard.image})`
              }}
            >
              <div
                className="carousel__itemOverlay"
                style={{ background: faceCard.overlay }}
              ></div>
              <div className="carousel__itemText">
                <p>{faceCard.label}</p>
                <h1>{faceCard.title}</h1>
              </div>
              <Button className="button carousel__itemButton">
                Buy products
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
