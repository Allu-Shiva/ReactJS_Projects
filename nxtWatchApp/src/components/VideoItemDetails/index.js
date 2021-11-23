import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../ThemeContext'
import './index.css'

import {
  VIDContainer,
  VIDContent,
  VIDMainbar,
  VIDVideoContainer,
  VIDText,
  VIDFlexContainer,
  VIDChannelContainer,
  LoaderContainer,
  PlayerContainer,
  StatsContainer,
  Btn,
  HrLine,
  VIDProfileContainer,
  VIDThumbnail,
  DescriptionContainer,
  VIDDescText,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    likeStatus: false,
    dislikeStatus: false,
    savedStatus: false,
  }

  componentDidMount() {
    this.fetchVideoContent()
  }

  fetchVideoContent = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({apiStatus: apiStatusConstants.success, videoDetails})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onClickLike = () => {
    const {dislikeStatus} = this.state
    if (dislikeStatus) {
      this.setState({likeStatus: true, dislikeStatus: false})
    } else {
      this.setState(prevState => ({likeStatus: !prevState.likeStatus}))
    }
  }

  onClickDislike = () => {
    const {likeStatus} = this.state
    if (likeStatus) {
      this.setState({likeStatus: false, dislikeStatus: true})
    } else {
      this.setState(prevState => ({dislikeStatus: !prevState.dislikeStatus}))
    }
  }

  renderSuccessView = (isThemeLight, updateSavedVideosList) => {
    const {videoDetails, likeStatus, dislikeStatus, savedStatus} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const duration = formatDistanceToNow(new Date(publishedAt))

    const onClickSave = () => {
      this.setState(prevState => ({savedStatus: !prevState.savedStatus}))
      updateSavedVideosList(videoDetails)
    }

    return (
      <>
        <PlayerContainer>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </PlayerContainer>
        <VIDText titleText isThemeLight={isThemeLight}>
          {title}
        </VIDText>
        <VIDFlexContainer>
          <StatsContainer>
            <VIDText isThemeLight={isThemeLight}>{viewCount} views</VIDText>
            <BsDot
              className={`${isThemeLight ? 'dot-icon' : 'dot-icon-dark'}`}
            />
            <VIDText isThemeLight={isThemeLight}>{duration}</VIDText>
          </StatsContainer>
          <StatsContainer>
            <Btn
              type="button"
              isThemeLight={isThemeLight}
              onClick={this.onClickLike}
              activeStatus={likeStatus}
            >
              <BiLike className="btn-icon" />
              <p>Like</p>
            </Btn>
            <Btn
              type="button"
              isThemeLight={isThemeLight}
              onClick={this.onClickDislike}
              activeStatus={dislikeStatus}
            >
              <BiDislike className="btn-icon" />
              <p>Dislike</p>
            </Btn>
            <Btn
              type="button"
              isThemeLight={isThemeLight}
              onClick={onClickSave}
              activeStatus={savedStatus}
            >
              <BiListPlus className="btn-icon" />
              <p>{savedStatus ? 'Saved' : 'Save'}</p>
            </Btn>
          </StatsContainer>
        </VIDFlexContainer>
        <HrLine isThemeLight={isThemeLight} />
        <VIDChannelContainer>
          <VIDProfileContainer>
            <VIDThumbnail src={profileImageUrl} alt="channel logo" />
          </VIDProfileContainer>
          <DescriptionContainer>
            <div>
              <VIDDescText titleText isThemeLight={isThemeLight}>
                {name}
              </VIDDescText>
              <VIDDescText isThemeLight={isThemeLight}>
                {subscriberCount} subscribers
              </VIDDescText>
            </div>
            <VIDDescText isThemeLight={isThemeLight} desc>
              {description}
            </VIDDescText>
          </DescriptionContainer>
        </VIDChannelContainer>
        <VIDChannelContainer sm>
          <VIDProfileContainer>
            <VIDThumbnail src={profileImageUrl} alt="channel logo" />
            <DescriptionContainer>
              <div>
                <VIDDescText titleText isThemeLight={isThemeLight}>
                  {name}
                </VIDDescText>
                <VIDDescText isThemeLight={isThemeLight}>
                  {subscriberCount} subscribers
                </VIDDescText>
              </div>
            </DescriptionContainer>
          </VIDProfileContainer>
          <VIDDescText isThemeLight={isThemeLight} desc>
            {description}
          </VIDDescText>
        </VIDChannelContainer>
      </>
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
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <RetryBtn type="button" onClick={this.onRetry}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  onRetry = () => this.fetchVideoContent()

  renderPageView = (isThemeLight, updateSavedVideosList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isThemeLight, updateSavedVideosList)
      case apiStatusConstants.failure:
        return this.renderFailureView(isThemeLight)
      default:
        return null
    }
  }

  render() {
    return (
      <VIDContainer>
        <Header defaultActiveTab="" />
        <VIDContent>
          <Sidebar defaultActiveTab="" />
          <ThemeContext.Consumer>
            {value => {
              const {isThemeLight, updateSavedVideosList} = value
              return (
                <VIDMainbar
                  data-testid="videoItemDetails"
                  isThemeLight={isThemeLight}
                >
                  <VIDVideoContainer>
                    {this.renderPageView(isThemeLight, updateSavedVideosList)}
                  </VIDVideoContainer>
                </VIDMainbar>
              )
            }}
          </ThemeContext.Consumer>
        </VIDContent>
      </VIDContainer>
    )
  }
}
export default VideoItemDetails
