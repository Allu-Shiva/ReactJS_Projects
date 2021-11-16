import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', isNotMatched: false, errMsg: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    try {
      const response = await fetch(url, options)
      this.validateAuth(response)
    } catch {
      const {history} = this.props
      history.replace('/not-found')
    }
  }

  validateAuth = async response => {
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isNotMatched: true, errMsg: data.error_msg})
    }
  }

  renderLoginPage = () => {
    const {isNotMatched, errMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              className="user-input"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              className="user-input"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {isNotMatched === true ? <p className="errMsg">*{errMsg}</p> : null}
          </form>
        </div>
      </div>
    )
  }

  renderHomePage = () => <Redirect to="/" />

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return this.renderLoginPage()
    }
    return this.renderHomePage()
  }
}

export default Login
