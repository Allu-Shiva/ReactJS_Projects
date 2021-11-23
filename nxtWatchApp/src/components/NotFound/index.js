import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  HomeContainer,
  HomeContent,
  Mainbar,
  FailureContainer,
  FailureImg,
  FailureText,
} from '../Home/styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isThemeLight} = value
      return (
        <HomeContainer>
          <Header defaultActiveTab="" />
          <HomeContent>
            <Sidebar defaultActiveTab="" />
            <Mainbar data-testid="notFound" isThemeLight={isThemeLight}>
              <FailureContainer>
                <FailureImg
                  src={`${
                    isThemeLight
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }`}
                  alt="not found"
                />
                <FailureText isThemeLight={isThemeLight}>
                  Page Not Found
                </FailureText>
                <FailureText as="p" para isThemeLight={isThemeLight}>
                  we are sorry, the page you requested could not be found.
                </FailureText>
              </FailureContainer>
            </Mainbar>
          </HomeContent>
        </HomeContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
