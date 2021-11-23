import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../ThemeContext'
import './index.css'
import {
  TrendListItem,
  TrendThumbnail,
  TrendFlexContainer,
  TrendVideoContent,
  TrendText,
  TrendChannelThumbnail,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {eachItem} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = eachItem
  const {name, profileImageUrl} = channel
  const duration = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeLight} = value
        return (
          <TrendListItem isThemeLight={isThemeLight}>
            <Link to={`/videos/${id}`} className="trending-link-item">
              <TrendThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendFlexContainer>
                <TrendChannelThumbnail
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendVideoContent>
                  <TrendText isThemeLight={isThemeLight} titleText>
                    {title}
                  </TrendText>
                  <TrendText md>{name}</TrendText>
                  <TrendFlexContainer card>
                    <TrendText sm card>
                      {name}
                    </TrendText>
                    <BsDot
                      className={`${
                        isThemeLight
                          ? 'trending-dot-icon-sm'
                          : 'trending-dot-icon-sm-dark'
                      }`}
                    />
                    <TrendText card>{viewCount} views</TrendText>
                    <BsDot
                      className={`${
                        isThemeLight
                          ? 'trending-dot-icon'
                          : 'trending-dot-icon-dark'
                      }`}
                    />
                    <TrendText card>{duration}</TrendText>
                  </TrendFlexContainer>
                </TrendVideoContent>
              </TrendFlexContainer>
            </Link>
          </TrendListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
