// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onArrowClick = () => {
    const {onArrow} = this.props
    const {suggestionItem} = this.props
    const {suggestion} = suggestionItem

    onArrow(suggestion)
  }

  render() {
    const {suggestionItem} = this.props
    const {suggestion} = suggestionItem

    return (
      <li className="listItem">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow-icon"
          className="arrow-icon"
          onClick={this.onArrowClick}
        />
      </li>
    )
  }
}

export default SuggestionItem
