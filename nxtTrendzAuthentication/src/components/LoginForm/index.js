// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isNotMatched: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSuccessLogin()
    } else {
      this.onFailLogin(data.error_msg)
    }
  }

  onFailLogin = errorMsg => {
    this.setState({isNotMatched: true, errorMsg})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isNotMatched, errorMsg} = this.state

    return (
      <div className="loginPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-sm"
          />
          <label htmlFor="username" className="label-text">
            USERNAME
          </label>
          <input
            type="text"
            className="input-element"
            placeholder="Username"
            id="username"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password" className="label-text">
            PASSWORD
          </label>
          <input
            type="password"
            className="input-element"
            placeholder="Password"
            id="password"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {isNotMatched && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
