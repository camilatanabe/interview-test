import React from 'react'
import './style.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HimCard from '../../components/HimCard'
import BigCard from '../../components/BigCard'
import Carousel from '../../components/Carousel'
import banner from '../../images/banner.png'
import bigCardBackground from '../../images/bigCardBackground.png'
import phone from '../../images/phone.png'
import { himCardData, faceCards, footerData } from '../../utils/content'

const MainPage = () => {
  return (
    <div className="mainPage">
      <Header />
      <Banner
        titleBold="Make your medical care choices"
        titleNormal=" to be able to choose"
        subtitle="Easy from hospital appointments to payment with your smartphone or tablet!"
        description="You can receive medical care at home or on the go, shortening your waiting time. We deliver medicines to your home."
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
                buttonText={`${himCard.title} treatment`}
                key={index}
              ></HimCard>
            )
          })}
        </div>
      </div>
      <Carousel faceCards={faceCards} />
      <Footer footerData={footerData} />
    </div>
  )
}

export default MainPage
