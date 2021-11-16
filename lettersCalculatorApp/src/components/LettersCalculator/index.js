// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  getCount = event => {
    const userInput = event.target.value
    const count = userInput.length
    this.setState({count})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="clock icon"
            className="clock-image"
          />
        </div>
        <div className="container-2">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="user" className="para">
            Enter the phrase
          </label>
          <input
            type="text"
            rows="1"
            cols="100"
            id="user"
            className="userInput"
            placeholder="Enter the phrase"
            onChange={this.getCount}
          />
          <p className="countContainer">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
