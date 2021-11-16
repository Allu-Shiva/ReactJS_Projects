// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, playStatus} = props
  const classHide = !playStatus ? (
    ''
  ) : (
    <div className="scoreContainer">
      <p className="NavscoreText">Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav className="navbar">
      <div className="imgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiLogo"
        />
        <h1>Emoji Game</h1>
      </div>
      {classHide}
    </nav>
  )
}

export default NavBar
