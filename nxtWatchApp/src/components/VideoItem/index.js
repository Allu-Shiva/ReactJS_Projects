import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../ThemeContext'
import './index.css'
import {
  ListItem,
  Thumbnail,
  FlexContainer,
  VideoContent,
  ChannelThumbnail,
  Text,
} from './styledComponents'

const VideoItem = props => {
  const {eachItem} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = eachItem
  const {name, profileImageUrl} = channel
  const duration = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeLight} = value
        return (
          <ListItem isThemeLight={isThemeLight}>
            <Link to={`/videos/${id}`} className="link-item">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <FlexContainer>
                <ChannelThumbnail src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <Text isThemeLight={isThemeLight} titleText>
                    {title}
                  </Text>
                  <Text>{name}</Text>
                  <FlexContainer card>
                    <Text card>{viewCount} views</Text>
                    <BsDot
                      className={`${
                        isThemeLight ? 'dot-icon' : 'dot-icon-dark'
                      }`}
                    />
                    <Text card>{duration}</Text>
                  </FlexContainer>
                </VideoContent>
              </FlexContainer>
            </Link>
          </ListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
