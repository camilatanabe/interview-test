import React from 'react'
import './style.scss'
import Button from '../Button'
import Accordion from '../Accordion'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import line from '../../images/line.svg'
import twitter from '../../images/twitter.svg'
import { footerData } from '../../utils/content'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__SignUpContainer">
          <Button>Register Now</Button>
          <Button className="button button--outlined">Login</Button>
        </div>
        <div className="footer__social">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={line} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className="footer__mobile">
        {footerData.map(({ title, items }) => (
          <Accordion title={title} content={items} />
        ))}
      </div>
      <div className="footer__desktop">
        {footerData.map(({ title, items }) => (
          <section>
            <p>{title}</p>
            <ul>
              {items.map(item => {
                return <li>{item.name}</li>
              })}
            </ul>
          </section>
        ))}
      </div>
    </footer>
  )
}

export default Footer
