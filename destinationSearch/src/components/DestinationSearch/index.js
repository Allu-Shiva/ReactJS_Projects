// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {destinationObj: this.props, userInput: ''}

  onUserInput = event => {
    const {initialDestinationsList} = this.props
    const input = event.target.value
    const filteredObj = {
      initialDestinationsList: initialDestinationsList.filter(eachItem =>
        eachItem.name.toLowerCase().includes(input),
      ),
    }

    this.setState({destinationObj: filteredObj, userInput: input})
  }

  render() {
    const {destinationObj, userInput} = this.state
    const {initialDestinationsList} = destinationObj
    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            className="user-input"
            placeholder="Search"
            value={userInput}
            onChange={this.onUserInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul className="listContainer">
          {initialDestinationsList.map(eachItem => (
            <DestinationItem Destination={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
