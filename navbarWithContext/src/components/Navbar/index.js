// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const toggleBtnUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onToggleTheme = () => toggleTheme()

      return (
        <nav className={`Navbar ${isDarkTheme ? 'Navbar-dark' : null}`}>
          <Link to="/">
            <img
              src={websiteLogoUrl}
              alt="website logo"
              className="website-logo"
            />
          </Link>
          <ul className="navbar-list">
            <li>
              <Link
                to="/"
                className={`list-item ${
                  isDarkTheme ? 'list-item-dark' : 'list-item-light'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`list-item ${
                  isDarkTheme ? 'list-item-dark' : 'list-item-light'
                }`}
              >
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-btn"
            testid="theme"
            onClick={onToggleTheme}
          >
            <img src={toggleBtnUrl} alt="theme" className="theme-icon" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
