// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onLog = () =>
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <Message loginStatus={isLoggedIn} />
          {isLoggedIn ? (
            <Logout toPerform={this.onLog} />
          ) : (
            <Login toPerform={this.onLog} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
