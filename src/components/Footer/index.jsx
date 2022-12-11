import React from 'react'
import './style.scss'
import Button from '../Button'
import Accordion from '../Accordion'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import line from '../../images/line.svg'
import twitter from '../../images/twitter.svg'
import logo from '../../images/logo.svg'
import { footerData } from '../../utils/content'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <div className="footer__signUpContainer">
            <Button className="button footer__button">Register Now</Button>
            <Button className="button button--outlined footer__button">
              Login
            </Button>
          </div>
          <div className="footer__social">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={line} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="footer__mobile">
          {footerData.map((data, index) => (
            <Accordion
              title={data.subtitle ? data.subtitle : data.title}
              content={data.items}
              key={index}
            />
          ))}
        </div>
        <div className="footer__desktop">
          {footerData.map((data, index) => (
            <section key={index}>
              <p>{data.title}</p>
              {data.subtitle && (
                <p className="footer__listSubtitle">{data.subtitle}</p>
              )}
              <ul className={data.subtitle && 'footer__subList'}>
                {data.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="footer__polices">
        <div>
          <div className="footer__policesLinkContainer">
            <div className="footer__policesLink">
              <a href="#">Terms of Use</a>
            </div>
            <div className="footer__policesLink">
              <a href="#">Privacy Police</a>
            </div>
            <div className="footer__policesLink">
              <a href="#">
                Notation based on the Act on Specified Commercial Transactions
              </a>
            </div>
            <div className="footer__policesLink">
              <a href="#">Returns & Refund Policy</a>
            </div>
          </div>
          <p>©︎ eLife.clinic</p>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </footer>
  )
}

export default Footer
