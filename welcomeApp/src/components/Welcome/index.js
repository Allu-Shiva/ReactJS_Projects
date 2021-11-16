// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {content: 'Subscribe'}

  onSubscribe = () =>
    this.setState(prevState => {
      let text
      if (prevState.content === 'Subscribe') {
        text = 'Subscribed'
      } else {
        text = 'Subscribe'
      }
      return {content: text}
    })

  render() {
    const {content} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button type="button" className="btn" onClick={this.onSubscribe}>
            {content}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
