import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import {
  SidebarContainer,
  SectionList,
  ListButton,
  Icon,
  Text,
  Footer,
  FooterText,
  FooterIconContainer,
  FooterImg,
} from './styledComponents'

import './index.css'

import ThemeContext from '../../ThemeContext'

const Sidebar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const {defaultActiveTab} = props
      const activeTab = defaultActiveTab

      return (
        <SidebarContainer isThemeLight={isThemeLight}>
          <SectionList>
            <ListButton
              key="home"
              activeTab={activeTab === 'HOME'}
              isThemeLight={isThemeLight}
            >
              <Link to="/" className="link">
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
              </Link>
            </ListButton>
            <ListButton
              key="trending"
              activeTab={activeTab === 'TRENDING'}
              isThemeLight={isThemeLight}
            >
              <Link to="/trending" className="link">
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
              </Link>
            </ListButton>
            <ListButton
              key="gaming"
              activeTab={activeTab === 'GAMING'}
              isThemeLight={isThemeLight}
            >
              <Link to="/gaming" className="link">
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
              </Link>
            </ListButton>
            <ListButton
              key="saved-videos"
              activeTab={activeTab === 'SAVED VIDEOS'}
              isThemeLight={isThemeLight}
            >
              <Link to="/saved-videos" className="link">
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
              </Link>
            </ListButton>
          </SectionList>
          <Footer>
            <FooterText isThemeLight={isThemeLight}>CONTACT US</FooterText>
            <FooterIconContainer>
              <FooterImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <FooterImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <FooterImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterIconContainer>
            <FooterText desc isThemeLight={isThemeLight}>
              Enjoy! Now to see your channels and recommendations!
            </FooterText>
          </Footer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar

// if (activeTab !== defaultActiveTab) {
//         changeActiveTab(defaultActiveTab)
//       }

//       const onHomeSelect = () => changeActiveTab('HOME')

//       const onTrendSelect = () => changeActiveTab('TRENDING')

//       const onGameSelect = () => changeActiveTab('GAMING')

//       const onSavedSelect = () => changeActiveTab('SAVED VIDEOS')
