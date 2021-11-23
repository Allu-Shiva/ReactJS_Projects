import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {IoClose} from 'react-icons/io5'

import {
  SmButton,
  ModalCloseBtn,
  HamPopup,
  SectionList,
  ListButton,
  Icon,
  Text,
} from './styledComponents'

import ThemeContext from '../../../ThemeContext'

const HamburgerMenu = props => {
  const menu = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {defaultActiveTab} = props
        const activeTab = defaultActiveTab

        return (
          <Popup
            modal
            trigger={
              <SmButton type="button">
                <GiHamburgerMenu
                  className={`${
                    isThemeLight ? 'theme-icon' : 'theme-icon-dark'
                  }`}
                />
              </SmButton>
            }
          >
            {close => (
              <HamPopup isThemeLight={isThemeLight}>
                <ModalCloseBtn
                  type="button"
                  onClick={() => close()}
                  isThemeLight={isThemeLight}
                >
                  <IoClose />
                </ModalCloseBtn>
                <SectionList>
                  <li key="home">
                    <Link to="/" className="link">
                      <ListButton
                        type="button"
                        activeTab={activeTab === 'HOME'}
                        isThemeLight={isThemeLight}
                      >
                        <Icon
                          activeTab={activeTab === 'HOME'}
                          isThemeLight={isThemeLight}
                        >
                          <AiFillHome />
                        </Icon>
                        <Text
                          activeTab={activeTab === 'HOME'}
                          isThemeLight={isThemeLight}
                        >
                          Home
                        </Text>
                      </ListButton>
                    </Link>
                  </li>
                  <li key="trending">
                    <Link to="/trending" className="link">
                      <ListButton
                        type="button"
                        activeTab={activeTab === 'TRENDING'}
                        isThemeLight={isThemeLight}
                      >
                        <Icon
                          activeTab={activeTab === 'TRENDING'}
                          isThemeLight={isThemeLight}
                        >
                          <HiFire />
                        </Icon>
                        <Text
                          activeTab={activeTab === 'TRENDING'}
                          isThemeLight={isThemeLight}
                        >
                          Trending
                        </Text>
                      </ListButton>
                    </Link>
                  </li>
                  <li key="gaming">
                    <Link to="/gaming" className="link">
                      <ListButton
                        type="button"
                        activeTab={activeTab === 'GAMING'}
                        isThemeLight={isThemeLight}
                      >
                        <Icon
                          activeTab={activeTab === 'GAMING'}
                          isThemeLight={isThemeLight}
                        >
                          <SiYoutubegaming />
                        </Icon>
                        <Text
                          activeTab={activeTab === 'GAMING'}
                          isThemeLight={isThemeLight}
                        >
                          Gaming
                        </Text>
                      </ListButton>
                    </Link>
                  </li>
                  <li key="saved-videos">
                    <Link to="/saved-videos" className="link">
                      <ListButton
                        type="button"
                        activeTab={activeTab === 'SAVED VIDEOS'}
                        isThemeLight={isThemeLight}
                      >
                        <Icon
                          activeTab={activeTab === 'SAVED VIDEOS'}
                          isThemeLight={isThemeLight}
                        >
                          <BiListPlus />
                        </Icon>
                        <Text
                          activeTab={activeTab === 'SAVED VIDEOS'}
                          isThemeLight={isThemeLight}
                        >
                          Saved videos
                        </Text>
                      </ListButton>
                    </Link>
                  </li>
                </SectionList>
              </HamPopup>
            )}
          </Popup>
        )
      }}
    </ThemeContext.Consumer>
  )

  return menu()
}
export default HamburgerMenu

//  if (activeTab !== defaultActiveTab) {
//           changeActiveTab(defaultActiveTab)
//         }

//         const onHomeSelect = () => changeActiveTab('HOME')

//         const onTrendSelect = () => changeActiveTab('TRENDING')

//         const onGameSelect = () => changeActiveTab('GAMING')

//         const onSavedSelect = () => changeActiveTab('SAVED VIDEOS')
