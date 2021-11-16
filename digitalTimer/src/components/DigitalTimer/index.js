// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {isStart: false, min: 25, sec: 0, defaultVal: 25}

class DigitalTimer extends Component {
  state = initialState

  onStartPauseBtn = () => {
    const {isStart} = this.state
    this.setState(prevState => ({isStart: !prevState.isStart}))
    if (!isStart) {
      this.timerId = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  tick = () => {
    const {min, sec} = this.state
    if (!(min === 0 && sec === 0)) {
      if (sec === 0) {
        this.setState(prevState => ({
          min: prevState.min - 1,
          sec: 59,
        }))
      } else {
        this.setState(prevState => ({
          sec: prevState.sec - 1,
        }))
      }
    } else {
      this.setState(prevState => ({
        min: prevState.defaultVal,
      }))
      this.onStartPauseBtn()
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({
      min: prevState.defaultVal + 1,
      sec: 0,
      defaultVal: prevState.defaultVal + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.min > 1) {
        return {
          min: prevState.defaultVal - 1,
          sec: 0,
          defaultVal: prevState.defaultVal - 1,
        }
      }
      return prevState
    })
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      isStart: false,
      min: prevState.defaultVal,
      sec: 0,
    }))
  }

  render() {
    const {isStart, min, sec, defaultVal} = this.state
    // const onPlus = isStart ? '' : this.onIncrement
    // const onMinus = isStart ? '' : this.onDecrement
    const dispMin = min.toString().length > 1 ? min : 0 + min.toString()
    const dispSec = sec.toString().length > 1 ? sec : 0 + sec.toString()
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Digital Timer</h1>
          <div className="container">
            <div className="timerContainer">
              <div className="timer">
                <h1 className="time">
                  {dispMin}:{sec === 0 ? '00' : dispSec}
                </h1>
                <p className="timeStatus">{isStart ? 'Running' : 'Paused'}</p>
              </div>
            </div>
            <div featureContainer>
              <div className="controlContainer">
                <div className="playPauseContainer">
                  <button
                    type="button"
                    className="playPauseBtn"
                    onClick={this.onStartPauseBtn}
                  >
                    <img
                      src={
                        isStart
                          ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                      }
                      alt={isStart ? 'pause icon' : 'play icon'}
                      className="playPauseIcon"
                    />
                    <p className="playPauseText">
                      {isStart ? 'Pause' : 'Start'}
                    </p>
                  </button>
                </div>
                <div className="playPauseContainer">
                  <button
                    type="button"
                    className="playPauseBtn"
                    onClick={this.onReset}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="playPauseIcon"
                    />
                    <p className="playPauseText">Reset</p>
                  </button>
                </div>
              </div>
              <div className="limitContainer">
                <p className="setLimitText">Set Timer Limit</p>
                <div className="limiter">
                  <button
                    type="button"
                    className="plusMinusBtn"
                    disabled={isStart}
                    onClick={this.onDecrement}
                  >
                    -
                  </button>
                  <p className="limitSetterText">{defaultVal}</p>
                  <button
                    type="button"
                    disabled={isStart}
                    className="plusMinusBtn"
                    onClick={this.onIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
