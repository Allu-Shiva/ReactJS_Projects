// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {display1: false, display2: false}

  onChange1 = () =>
    this.setState(prevState => {
      if (prevState.display1 === false) {
        return {display1: true}
      }
      return {display1: false}
    })

  onChange2 = () =>
    this.setState(prevState => {
      if (prevState.display2 === false) {
        return {display2: true}
      }
      return {display2: false}
    })

  render() {
    const {display1, display2} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="btn-card">
              <button type="button" className="btn" onClick={this.onChange1}>
                Show/Hide Firstname
              </button>
              {display1 && <div className="name-container">Joe</div>}
            </div>
            <div className="btn-card">
              <button type="button" className="btn" onClick={this.onChange2}>
                Show/Hide Lastname
              </button>
              {display2 && <div className="name-container">Jonas</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
