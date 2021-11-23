import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import ThemeContext from '../../ThemeContext'

import {
  LoginContainer,
  LoginCard,
  LoginWebsiteLogo,
  LoginForm,
  FormLabel,
  LoginInput,
  FlexContainer,
  LoginButton,
  ErrMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errMsg: ''}

  onUsername = event => this.setState({username: event.target.value})

  onPassword = event => this.setState({password: event.target.value})

  onShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onSubmit = event => {
    event.preventDefault()
    this.validateCredentials()
  }

  validateCredentials = async () => {
    const {username, password} = this.state
    const credentials = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errMsg} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isThemeLight} = value
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginContainer isThemeLight={isThemeLight}>
              <LoginCard isThemeLight={isThemeLight}>
                <LoginWebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  isThemeLight={isThemeLight}
                  light
                />
                <LoginWebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                  isThemeLight={isThemeLight}
                  dark
                />
                <LoginForm onSubmit={this.onSubmit}>
                  <FormLabel htmlFor="username" isThemeLight={isThemeLight}>
                    USERNAME
                  </FormLabel>
                  <LoginInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onUsername}
                    id="username"
                    isThemeLight={isThemeLight}
                  />
                  <FormLabel htmlFor="password" isThemeLight={isThemeLight}>
                    PASSWORD
                  </FormLabel>
                  <LoginInput
                    type={passwordType}
                    placeholder="Password"
                    value={password}
                    onChange={this.onPassword}
                    id="password"
                    isThemeLight={isThemeLight}
                  />
                  <FlexContainer>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onShowPassword}
                    />
                    <FormLabel htmlFor="checkbox" isThemeLight={isThemeLight}>
                      Show Password
                    </FormLabel>
                  </FlexContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {errMsg !== '' ? <ErrMsg>*{errMsg}</ErrMsg> : null}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
