import {Link} from 'react-router-dom'

import ThemeContext from '../../ThemeContext'
import './index.css'

import {
  GameListItem,
  GameThumbnail,
  GameVideoContent,
  GameText,
} from './styledComponents'

const GamingItem = props => {
  const {eachItem} = props
  const {thumbnailUrl, title, viewCount, id} = eachItem

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isThemeLight} = value
        return (
          <GameListItem isThemeLight={isThemeLight}>
            <Link to={`/videos/${id}`} className="game-link-item">
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />

              <GameVideoContent>
                <GameText isThemeLight={isThemeLight} titleText>
                  {title}
                </GameText>
                <GameText>{viewCount} Watching Worldwide</GameText>
              </GameVideoContent>
            </Link>
          </GameListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingItem
