import {HiFire} from 'react-icons/hi'
import TrendingVideoItem from '../TrendingVideoItem'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../ThemeContext'

import {
  SavedContainer,
  SavedContent,
  Mainbar,
  VideosContainer,
  Banner,
  FlexContainer,
  FireContainer,
  Text,
  SavedListContainer,
} from './styledComponents'

import {
  FailureContainer,
  FailureImg,
  FailureText,
} from '../Home/styledComponents'

const SavedVideos = () => {
  const noSearchResults = isThemeLight => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
        alt="no saved videos"
      />
      <FailureText isThemeLight={isThemeLight}>
        No saved videos found
      </FailureText>
      <FailureText as="p" para isThemeLight={isThemeLight}>
        You can save your videos while watching them
      </FailureText>
    </FailureContainer>
  )

  const renderPageView = isThemeLight => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideosList} = value
        if (savedVideosList.length !== 0) {
          return (
            <SavedListContainer>
              {savedVideosList.map(eachItem => (
                <TrendingVideoItem key={eachItem.id} eachItem={eachItem} />
              ))}
            </SavedListContainer>
          )
        }
        return noSearchResults(isThemeLight)
      }}
    </ThemeContext.Consumer>
  )

  return (
    <SavedContainer>
      <Header defaultActiveTab="SAVED VIDEOS" />
      <SavedContent>
        <Sidebar defaultActiveTab="SAVED VIDEOS" />
        <ThemeContext.Consumer>
          {value => {
            const {isThemeLight} = value
            return (
              <Mainbar data-testid="savedVideos" isThemeLight={isThemeLight}>
                <Banner data-testid="banner">
                  <FlexContainer isThemeLight={isThemeLight}>
                    <FireContainer isThemeLight={isThemeLight}>
                      <HiFire />
                    </FireContainer>
                    <Text isThemeLight={isThemeLight}>Saved Videos</Text>
                  </FlexContainer>
                </Banner>
                <VideosContainer>
                  {renderPageView(isThemeLight)}
                </VideosContainer>
              </Mainbar>
            )
          }}
        </ThemeContext.Consumer>
      </SavedContent>
    </SavedContainer>
  )
}

export default SavedVideos
