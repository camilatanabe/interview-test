import React from 'react'
import './style.scss'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HimCard from '../../components/HimCard'
import BigCard from '../../components/BigCard'
import banner from '../../images/banner.png'
import logoTransparent from '../../images/logo-transparent.svg'
import phone from '../../images/phone.png'
import { himCardData } from '../../utils/content'

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
      <div className="mainPage__cardContainer">
        <BigCard
          bgColor="#F0DEDA"
          bgImage={logoTransparent}
          image={phone}
          descriptionPt1="All of our medications"
          descriptionPt2="require a prescription from a physician."
          descriptionPt3="In partnership with medical institutions and clinics nationwide,"
          descriptionPt4="eLife is an online medical service that allows you to see a doctor anytime, anywhere."
          buttonText="Start my Visit now"
        />
        <div className="mainPage__cardContent">
          {himCardData.map(himCard => {
            return (
              <HimCard
                image={himCard.image}
                bgColor={himCard.color}
                titleBold={himCard.title}
                titleNormal="treatment"
                buttonText={`${himCard.title} treatment`}
              ></HimCard>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
