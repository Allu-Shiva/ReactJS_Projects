/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {stack: [], score: 0, topScore: 0, playStatus: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {stack, score} = this.state
    const isPresent = stack.includes(id)
    if (!isPresent && score < 11) {
      this.setState(prevState => ({
        stack: [...prevState.stack, id],
        score: prevState.score + 1,
        topScore:
          prevState.score >= prevState.topScore
            ? prevState.score + 1
            : prevState.topScore,
        playStatus: true,
      }))
    } else if (!isPresent && score === 11) {
      this.setState({
        stack: [],
        score: 12,
        topScore: score + 1,
        playStatus: false,
      })
    } else {
      this.setState({
        stack: [],
        playStatus: false,
      })
    }
  }

  onPlayAgain = () => {
    this.setState({score: 0, playStatus: true})
  }

  render() {
    const {score, topScore, playStatus} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <NavBar score={score} topScore={topScore} playStatus={playStatus} />
          <ul className="emojiContainer">
            {playStatus ? (
              emojisList.map(eachEmoji => (
                <EmojiCard
                  emoji={eachEmoji}
                  key={eachEmoji.id}
                  onPress={this.onEmojiClick}
                />
              ))
            ) : (
              <WinOrLoseCard
                topScore={topScore}
                score={score}
                onPlayAgain={this.onPlayAgain}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
