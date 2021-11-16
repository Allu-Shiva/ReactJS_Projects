// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onclickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  feedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <>
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li className="eachEmoji" key={eachEmoji.id}>
              <button type="button" className="btn" onClick={this.onclickEmoji}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
              </button>
              <br />
              <label className="label-text">{eachEmoji.name}</label>
            </li>
          ))}
        </ul>
      </>
    )
  }

  thankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyouCard">
        <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
        <h1 className="title">Thank you!</h1>
        <p className="label">
          we will use your feedback to increase our customer service performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          {isFeedbackGiven ? this.thankyouScreen() : this.feedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
