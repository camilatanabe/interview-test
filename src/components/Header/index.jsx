import './style.scss'
import logo from '../../images/logo.svg'
import menuIcon from '../../images/menu-filled-icon.svg'
import clockIcon from '../../images/clock-icon.svg'

const Header = () => {
  const onClickMenu = () => {
    return console.log('Menu')
  }

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="header__text">
        <img src={clockIcon} alt="clock icon" />
        <p>Open from: 7:00 a.m to 10:00 p.m </p>
      </div>
      <div className="header__languageMenu">
        <div className="header__language">
          <select defaultValue={0}>
            <option value="0">Eng</option>
            <option value="1">Jpn</option>
          </select>
        </div>
        <button className="header__menuIcon" onClick={onClickMenu}>
          <img src={menuIcon} alt="menu icon" />
        </button>
      </div>
    </header>
  )
}

export default Header
