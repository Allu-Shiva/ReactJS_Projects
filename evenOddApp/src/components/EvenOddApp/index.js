// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOdd extends Component {
  state = {count: 0, status: 'Even'}

  onIncrement = () =>
    this.setState(prevState => {
      const number = Math.ceil(Math.random() * 100)
      const updatedNum = number + prevState.count
      if (updatedNum % 2 === 0) {
        return {count: updatedNum, status: 'Even'}
      }
      return {count: updatedNum, status: 'Odd'}
    })

  render() {
    const {count, status} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Count {count}</h1>
          <p className="count-description">Count is {status}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOdd
