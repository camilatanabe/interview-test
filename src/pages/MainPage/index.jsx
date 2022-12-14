import React from 'react'
import './style.scss'
import PromotionBanner from '../../components/PromotionBanner'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HimCard from '../../components/HimCard'
import BigCard from '../../components/BigCard'
import Carousel from '../../components/Carousel'
import banner from '../../images/banner.png'
import cartIcon from '../../images/cart-icon.svg'
import bigCardBackground from '../../images/bigCardBackground.png'
import phone from '../../images/phone.png'
import { himCardData, faceCards, footerData } from '../../utils/content'

const MainPage = () => {
  const onClickBanner = () => {
    return console.log('Banner')
  }

  const onClickBigCard = () => {
    return console.log('Big Card')
  }

  const onClickHimCard = index => {
    return console.log('Him Card ' + index)
  }

  const onClickCarousel = index => {
    return console.log('Carousel ' + index)
  }

  return (
    <React.Fragment>
      <PromotionBanner
        message=" FREE ONLINE CONSULTATION."
        link="START YOUR  VISIT"
      />
      <div className="mainPage">
        <Header />
        <Banner
          titleBold="Make your medical care choices"
          titleNormal=" to be able to choose"
          subtitle="Easy from hospital appointments to payment with your smartphone or tablet!"
          description="You can receive medical care at home or on the go, shortening your waiting time. We deliver medicines to your home."
          onClick={onClickBanner}
          buttonIcon={cartIcon}
          image={banner}
          buttonText="Shop elife´s products by..."
        ></Banner>
        <h2 className="mainPage__mobileSubtitle">
          <span>elife,</span> living in fullness everyday
        </h2>
        <div className="mainPage__cardContainer">
          <BigCard
            bgImage={bigCardBackground}
            image={phone}
            descriptionPt1="All of our medications"
            descriptionPt2="require a prescription from a physician."
            descriptionPt3="In partnership with medical institutions and clinics nationwide,"
            descriptionPt4="eLife is an online medical service that allows you to see a doctor anytime, anywhere."
            onClick={onClickBigCard}
            buttonText="Start my Visit now"
          />
          <div className="mainPage__cardContent">
            {himCardData?.map((himCard, index) => {
              return (
                <HimCard
                  image={himCard.image}
                  bgColor={himCard.color}
                  titleBold={himCard.title}
                  titleNormal="treatment"
                  onClick={() => onClickHimCard(index)}
                  buttonText={`${himCard.title} treatment`}
                  key={index}
                ></HimCard>
              )
            })}
          </div>
        </div>
        <Carousel faceCards={faceCards} onClick={onClickCarousel} />
        <Footer footerData={footerData} />
      </div>
    </React.Fragment>
  )
}

export default MainPage
