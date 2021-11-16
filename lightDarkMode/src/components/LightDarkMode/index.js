// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {theme: 'card-dark', context: 'Light Mode'}

  changeTheme = () =>
    this.setState(prevState => {
      if (prevState.theme === 'card-dark') {
        return {theme: 'card-light', context: 'Dark Mode'}
      }
      return {theme: 'card-dark', context: 'Light Mode'}
    })

  render() {
    const {theme, context} = this.state
    return (
      <div className="bg-container">
        <div className={`card ${theme}`}>
          <h1>Click to Change Mode</h1>
          <button type="button" className="btn" onClick={this.changeTheme}>
            {context}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
