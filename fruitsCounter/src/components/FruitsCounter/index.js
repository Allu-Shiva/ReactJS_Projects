// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => this.setState(prevState => ({mango: prevState.mango + 1}))

  onBanana = () => this.setState(prevState => ({banana: prevState.banana + 1}))

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>
            Bob ate <span className="eat-count">{mango}</span> mangoes{' '}
            <span className="eat-count">{banana}</span> bananas
          </h1>
          <div className="card-container">
            <div className="mini-card">
              <img
                className="card-image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button type="button" className="btn" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="mini-card">
              <img
                className="card-image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button type="button" className="btn" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
