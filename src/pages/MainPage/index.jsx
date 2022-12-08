import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import banner from '../../images/banner.png'

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner
        titleBold="Make your medical care choices"
        titleNormal=" to be able to choose"
        subtitle="Easy from hospital appointments to payment with your smartphone or tablet!"
        description="You can receive medical care at home or on the go, shortening your waiting time. We deliver medicines to your home."
        image={banner}
        buttonText="Shop elife´s products by..."
      ></Banner>
    </div>
  )
}

export default MainPage
