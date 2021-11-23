import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import GamingItem from '../GamingItem'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../ThemeContext'

import {
  GameContainer,
  GameContent,
  GameMainbar,
  GameVideosContainer,
  GameBanner,
  GameFlexContainer,
  GameHeartContainer,
  GameText,
  LoaderContainer,
  GameListContainer,
} from './styledComponents'

import {
  FailureContainer,
  FailureImg,
  FailureText,
  RetryBtn,
} from '../Home/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.fetchVideoContent()
  }

  fetchVideoContent = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videosList = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({apiStatus: apiStatusConstants.success, videosList})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <GameListContainer>
        {videosList.map(eachItem => (
          <GamingItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </GameListContainer>
    )
  }

  renderFailureView = isThemeLight => (
    <FailureContainer>
      <FailureImg
        src={`${
          isThemeLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }`}
        alt="failure view"
      />
      <FailureText isThemeLight={isThemeLight}>
        Oops! Something Went Wrong
      </FailureText>
      <FailureText as="p" para isThemeLight={isThemeLight}>
        We are having some trouble to complete your request.
      </FailureText>
      <FailureText as="p" para isThemeLight={isThemeLight}>
        Please try again.
      </FailureText>
      <RetryBtn type="button" onClick={this.onRetry}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  onRetry = () => this.fetchVideoContent()

  renderPageView = isThemeLight => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isThemeLight)
      case apiStatusConstants.failure:
        return this.renderFailureView(isThemeLight)
      default:
        return null
    }
  }

  render() {
    return (
      <GameContainer>
        <Header defaultActiveTab="GAMING" />
        <GameContent>
          <Sidebar defaultActiveTab="GAMING" />
          <ThemeContext.Consumer>
            {value => {
              const {isThemeLight} = value
              return (
                <GameMainbar data-testid="gaming" isThemeLight={isThemeLight}>
                  <GameBanner data-testid="banner">
                    <GameFlexContainer isThemeLight={isThemeLight}>
                      <GameHeartContainer isThemeLight={isThemeLight}>
                        <SiYoutubegaming />
                      </GameHeartContainer>
                      <GameText isThemeLight={isThemeLight}>Gaming</GameText>
                    </GameFlexContainer>
                  </GameBanner>
                  <GameVideosContainer>
                    {this.renderPageView(isThemeLight)}
                  </GameVideosContainer>
                </GameMainbar>
              )
            }}
          </ThemeContext.Consumer>
        </GameContent>
      </GameContainer>
    )
  }
}
export default Gaming
