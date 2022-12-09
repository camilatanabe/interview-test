import React from 'react'
import './style.scss'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import HimCard from '../../components/HimCard'
import BigCard from '../../components/BigCard'
import banner from '../../images/banner.png'
import himImg1 from '../../images/him1.png'
import himImg2 from '../../images/him2.png'
import himImg3 from '../../images/him3.png'
import logoTransparent from '../../images/logo-transparent.svg'
import phone from '../../images/phone.png'

const MainPage = () => {
  const himCardData = [
    { title: 'Hair loss', color: '#F8CE9F', image: himImg1 },
    { title: 'Diet', color: '#C7F9DD', image: himImg2 },
    { title: 'ED', color: '#9DC0FF', image: himImg3 }
  ]
  return (
    <div>
      <Header />
      <div className="mainPage">
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
      </div>
    </div>
  )
}

export default MainPage
