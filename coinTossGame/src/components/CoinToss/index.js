// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  updateState = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, imageUrl} = this.state
    const total = heads + tails

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="mini-heading">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="btn" onClick={this.updateState}>
            Toss Coin
          </button>
          <div className="resultContainer">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
