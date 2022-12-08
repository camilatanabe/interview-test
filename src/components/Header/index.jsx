import './style.scss'
import logo from '../../images/logo.svg'
import menuIcon from '../../images/menu-filled-icon.svg'
import clockIcon from '../../images/clock-icon.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="header__text">
        <img src={clockIcon} alt="clock icon" />
        <p>Open from: 7:00 a.m to 10:00 p.m </p>
      </div>
      <div className="header__languageMenu">
        <div class="header__language">
          <select>
            <option value="0">Lang:</option>
            <option value="1">Eng</option>
            <option value="2">Jpn</option>
          </select>
        </div>
        <button>
          <img src={menuIcon} alt="menu icon" />
        </button>
      </div>
    </div>
  )
}

export default Header
