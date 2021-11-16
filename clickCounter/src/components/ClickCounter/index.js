// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  counter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="card-heading">
            The Button has been clicked{' '}
            <span className="s-element">{count}</span> times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button className="btn" type="button" onClick={this.counter}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
