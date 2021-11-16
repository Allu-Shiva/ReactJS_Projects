// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  onStart = () => {
    this.uniqueId = setInterval(this.updateTimer, 1000)
  }

  onStop = () => {
    clearInterval(this.uniqueId)
  }

  onReset = () => {
    clearInterval(this.uniqueId)
    this.setState({minutes: 0, seconds: 0})
  }

  updateTimer = () => {
    this.setState(prevState => {
      if (prevState.seconds < 59) {
        return {seconds: prevState.seconds + 1}
      }
      return {minutes: prevState.minutes + 1, seconds: 0}
    })
  }

  render() {
    const {minutes, seconds} = this.state
    const min =
      minutes.toString().length === 1 ? 0 + minutes.toString() : minutes
    const sec =
      seconds.toString().length === 1 ? 0 + seconds.toString() : seconds

    return (
      <div className="bgContainer">
        <h1 className="title">Stopwatch</h1>
        <div className="card">
          <div className="timerImageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timerIcon"
            />
            <p className="titleText">Timer</p>
          </div>
          <h1 className="timer">
            {min}:{sec}
          </h1>
          <div className="btnContainer">
            <button
              type="button"
              className="startBtn Btn"
              onClick={this.onStart}
            >
              Start
            </button>
            <button type="button" className="stopBtn Btn" onClick={this.onStop}>
              Stop
            </button>
            <button
              type="button"
              className="resetBtn Btn"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
