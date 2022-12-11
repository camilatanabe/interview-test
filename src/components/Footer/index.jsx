import React from 'react'
import './style.scss'
import Button from '../Button'
import Accordion from '../Accordion'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import line from '../../images/line.svg'
import twitter from '../../images/twitter.svg'

const Footer = ({ footerData }) => {
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
        {footerData.map(data => (
          <Accordion
            title={data.subtitle ? data.subtitle : data.title}
            content={data.items}
          />
        ))}
      </div>
      <div className="footer__desktop">
        {footerData.map(data => (
          <section>
            <p>{data.title}</p>
            {data.subtitle && (
              <p className="footer__listSubtitle">{data.subtitle}</p>
            )}
            <ul>
              {data.items.map(item => {
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
