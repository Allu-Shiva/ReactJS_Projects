import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoPassword from '../NoPassword'
import UserDetails from '../UserDetails'
import './index.css'

class PasswordManager extends Component {
  state = {
    userList: [],
    website: '',
    username: '',
    password: '',
    isShowPass: false,
    onUserSearch: '',
  }

  onWebsiteInput = event => this.setState({website: event.target.value})

  onUsernameInput = event => this.setState({username: event.target.value})

  onPasswordInput = event => this.setState({password: event.target.value})

  onAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const newRecord = {
        id: uuidv4(),
        website,
        username,
        password,
        colorIndex: Math.floor(Math.random() * 6),
      }
      this.setState(prevState => ({
        userList: [...prevState.userList, newRecord],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  getFilteredList = () => {
    const {userList, onUserSearch} = this.state
    const filteredList = userList.filter(eachUser => {
      if (eachUser.website.includes(onUserSearch)) {
        return true
      }
      return false
    })
    return filteredList
  }

  onUserSearch = event => this.setState({onUserSearch: event.target.value})

  onCheckbox = () =>
    this.setState(prevState => ({isShowPass: !prevState.isShowPass}))

  onDelete = id => {
    const {userList} = this.state
    const updatedList = userList.filter(eachUser => {
      if (eachUser.id !== id) {
        return true
      }
      return false
    })
    this.setState({userList: updatedList})
  }

  render() {
    const {
      userList,
      onUserSearch,
      isShowPass,
      website,
      username,
      password,
    } = this.state
    const userArray = onUserSearch !== '' ? this.getFilteredList() : userList

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="appLogo"
          alt="app logo"
        />
        <div className="card-1">
          <form className="form">
            <h1 className="heading">Add New Password</h1>
            <div className="inputContainer">
              <div className="websiteLogoContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="websiteLogo"
                />
              </div>
              <input
                type="text"
                className="userInput"
                placeholder="Enter Website"
                onChange={this.onWebsiteInput}
                value={website}
              />
            </div>
            <div className="inputContainer">
              <div className="websiteLogoContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="websiteLogo"
                />
              </div>
              <input
                type="text"
                className="userInput"
                placeholder="Enter Username"
                onChange={this.onUsernameInput}
                value={username}
              />
            </div>
            <div className="inputContainer">
              <div className="websiteLogoContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="websiteLogo"
                />
              </div>
              <input
                type="password"
                className="userInput"
                placeholder="Enter Password"
                onChange={this.onPasswordInput}
                value={password}
              />
            </div>
            <button type="submit" className="addBtn" onClick={this.onAdd}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pmLogo"
          />
        </div>
        <div className="card-1 card-2">
          <div className="header">
            <div className="yourPasswordSection">
              <div className="title-2Container">
                <h1 className="title-2">Your Passwords</h1>
                <p className="count">{userArray.length}</p>
              </div>
              <div className="inputContainer">
                <div className="websiteLogoContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="websiteLogo"
                  />
                </div>
                <input
                  type="search"
                  className="userInput"
                  placeholder="Search"
                  onChange={this.onUserSearch}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="showPassContainer">
              <input
                type="checkbox"
                className="checkbox"
                onClick={this.onCheckbox}
                id="check"
              />
              <label htmlFor="check">Show passwords</label>
            </div>
          </div>

          {userArray.length === 0 ? (
            <NoPassword />
          ) : (
            <ul className="historyContainer">
              {userArray.map(eachUser => (
                <UserDetails
                  user={eachUser}
                  isShowPass={isShowPass}
                  onDelete={this.onDelete}
                  key={eachUser.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
