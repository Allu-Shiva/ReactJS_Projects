// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, onPlayAgain} = props

  const playAgain = () => {
    onPlayAgain()
  }
  const Win = (
    <li className="resultlistItem">
      <div className="contentContainer">
        <h1 className="wonHeading">You Won</h1>
        <p className="bestScoreText">Best Score</p>
        <p className="scoreText">{topScore}/12</p>
        <button
          type="button"
          alt="playBtn"
          className="playBtn"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="wonImg"
        alt="win or lose"
      />
    </li>
  )
  const Lose = (
    <li className="resultlistItem">
      <div className="contentContainer">
        <h1 className="wonHeading">You Lose</h1>
        <p className="bestScoreText">Score</p>
        <p className="scoreText">{score}/12</p>
        <button
          type="button"
          alt="playBtn"
          className="playBtn"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="wonImg"
        alt="win or lose"
      />
    </li>
  )
  return score === 12 ? Win : Lose
}

export default WinOrLoseCard
