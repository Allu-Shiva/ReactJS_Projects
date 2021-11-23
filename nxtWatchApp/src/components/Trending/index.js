import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import TrendingVideoItem from '../TrendingVideoItem'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../ThemeContext'

import {
  TrendContainer,
  TrendContent,
  Mainbar,
  VideosContainer,
  Banner,
  FlexContainer,
  FireContainer,
  Text,
  LoaderContainer,
  ListContainer,
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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.fetchVideoContent()
  }

  fetchVideoContent = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
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
      <ListContainer>
        {videosList.map(eachItem => (
          <TrendingVideoItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ListContainer>
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
      <TrendContainer>
        <Header defaultActiveTab="TRENDING" />
        <TrendContent>
          <Sidebar defaultActiveTab="TRENDING" />
          <ThemeContext.Consumer>
            {value => {
              const {isThemeLight} = value
              return (
                <Mainbar data-testid="trending" isThemeLight={isThemeLight}>
                  <Banner data-testid="banner">
                    <FlexContainer isThemeLight={isThemeLight}>
                      <FireContainer isThemeLight={isThemeLight}>
                        <HiFire />
                      </FireContainer>
                      <Text isThemeLight={isThemeLight}>Trending</Text>
                    </FlexContainer>
                  </Banner>
                  <VideosContainer>
                    {this.renderPageView(isThemeLight)}
                  </VideosContainer>
                </Mainbar>
              )
            }}
          </ThemeContext.Consumer>
        </TrendContent>
      </TrendContainer>
    )
  }
}
export default Trending
