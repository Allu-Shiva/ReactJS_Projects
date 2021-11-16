// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userInputText: ''}

  onUserInput = event => this.setState({userInputText: event.target.value})

  acceptSuggestion = suggestion => this.setState({userInputText: suggestion})

  render() {
    const {userInputText} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(userInputText.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="logo"
          />
          <div className="searchContainer">
            <div className="inputContainer">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="searchIcon"
                />
              </div>
              <input
                type="search"
                placeholder="Search Google"
                className="userInput"
                onChange={this.onUserInput}
                value={userInputText}
              />
            </div>
            <ul className="listContainer">
              {filteredList.map(eachSuggestion => (
                <SuggestionItem
                  suggestionItem={eachSuggestion}
                  onArrow={this.acceptSuggestion}
                  key={eachSuggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
