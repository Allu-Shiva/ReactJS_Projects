import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'

import {FiSun, FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'

import {
  Navbar,
  Thumbnail,
  UnorderedContainer,
  CustomButton,
  ProfileImg,
  PopupContainer,
  PopupText,
  SmButton,
} from './styledComponents'

import ThemeContext from '../../ThemeContext'

import HamburgerMenu from './HamburgerMenu'
import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const {defaultActiveTab} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeLight, changeTheme} = value
        return (
          <Navbar isThemeLight={isThemeLight}>
            <Link to="/">
              <Thumbnail
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                isThemeLight={isThemeLight}
                light
              />
              <Thumbnail
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
                isThemeLight={isThemeLight}
                dark
              />
            </Link>
            <UnorderedContainer>
              <li>
                <button
                  type="button"
                  data-testid="theme"
                  className="theme-btn"
                  onClick={changeTheme}
                >
                  {isThemeLight ? (
                    <FaMoon className="theme-icon" />
                  ) : (
                    <FiSun className="theme-icon-dark" />
                  )}
                </button>
              </li>
              <li>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HamburgerMenu defaultActiveTab={defaultActiveTab} />
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <div>
                      <SmButton type="button">
                        <FiLogOut
                          className={`${
                            isThemeLight ? 'theme-icon' : 'theme-icon-dark'
                          }`}
                        />
                      </SmButton>
                      <CustomButton
                        isThemeLight={isThemeLight}
                        outline
                        type="button"
                        logout
                      >
                        Logout
                      </CustomButton>
                    </div>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isThemeLight={isThemeLight}>
                      <PopupText isThemeLight={isThemeLight}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <div className="btnContainer">
                        <CustomButton
                          isThemeLight={isThemeLight}
                          outline
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CustomButton>
                        <CustomButton
                          isThemeLight={isThemeLight}
                          onClick={onLogout}
                          type="button"
                        >
                          Confirm
                        </CustomButton>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </li>
            </UnorderedContainer>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
