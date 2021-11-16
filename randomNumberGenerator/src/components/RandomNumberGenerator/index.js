// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNum = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="card-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.generateRandomNum}
          >
            Generate
          </button>
          <h1 className="randomNum">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
