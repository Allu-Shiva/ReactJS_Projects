import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../ThemeContext'

import Header from '../Header'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  HomeContent,
  Mainbar,
  Banner,
  Thumbnail,
  Text,
  FlexContainer,
  FakeButton,
  CloseBtn,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureText,
  RetryBtn,
  ListContainer,
} from './styledComponents'

import Sidebar from '../Sidebar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    shouldDisplayBanner: true,
    apiStatus: apiStatusConstants.initial,
    userSearch: '',
    videosList: [],
  }

  componentDidMount() {
    this.fetchVideoContent()
  }

  fetchVideoContent = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {userSearch} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${userSearch}`
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

  renderSuccessView = isThemeLight => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.noSearchResults(isThemeLight)
    }
    return (
      <ListContainer>
        {videosList.map(eachItem => (
          <VideoItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ListContainer>
    )
  }

  noSearchResults = isThemeLight => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureText isThemeLight={isThemeLight}>
        No Search results found
      </FailureText>
      <FailureText as="p" para isThemeLight={isThemeLight}>
        Try different key words or remove search filter
      </FailureText>
      <RetryBtn type="button" onClick={this.onRetry}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  onRetry = () => this.fetchVideoContent()

  closeBanner = () => this.setState({shouldDisplayBanner: false})

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

  onSearchInput = event => this.setState({userSearch: event.target.value})

  onSearch = () => this.fetchVideoContent()

  render() {
    const {shouldDisplayBanner, userSearch} = this.state

    return (
      <HomeContainer>
        <Header defaultActiveTab="HOME" />
        <HomeContent>
          <Sidebar defaultActiveTab="HOME" />
          <ThemeContext.Consumer>
            {value => {
              const {isThemeLight} = value
              return (
                <Mainbar data-testid="home" isThemeLight={isThemeLight}>
                  <Banner
                    shouldDisplayBanner={shouldDisplayBanner}
                    data-testid="banner"
                  >
                    <FlexContainer>
                      <Thumbnail
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Text>Buy Nxt Watch Premium prepaid plans with UPI</Text>
                      <FakeButton type="button">GET IT NOW</FakeButton>
                    </FlexContainer>
                    <CloseBtn data-testid="close" onClick={this.closeBanner}>
                      <GrFormClose />
                    </CloseBtn>
                  </Banner>
                  <VideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isThemeLight={isThemeLight}
                        onChange={this.onSearchInput}
                        value={userSearch}
                      />
                      <SearchButton
                        type="button"
                        isThemeLight={isThemeLight}
                        data-testid="searchButton"
                        onClick={this.onSearch}
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderPageView(isThemeLight)}
                  </VideosContainer>
                </Mainbar>
              )
            }}
          </ThemeContext.Consumer>
        </HomeContent>
      </HomeContainer>
    )
  }
}
export default Home
