import {Component} from 'react'
import Header from '../Header'
import HistoryItem from '../HistoryItem'
import './index.css'

class Home extends Component {
  state = {userInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({
      historyList: initialHistoryList,
    })
  }

  onSearch = event => this.setState({userInput: event.target.value})

  getFilteredList = () => {
    const {userInput, historyList} = this.state
    const updatedList = historyList.filter(eachItem => {
      const string = eachItem.title.toLowerCase()
      if (string.includes(userInput.toLowerCase())) {
        return true
      }
      return false
    })
    return updatedList
  }

  onDelete = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(eachItem => {
      if (eachItem.id !== id) {
        return true
      }
      return false
    })
    this.setState({historyList: updatedList})
  }

  renderCard = filteredList => (
    <div className="card">
      <ul className="list-container">
        {filteredList.map(eachItem => (
          <HistoryItem
            item={eachItem}
            key={eachItem.id}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    </div>
  )

  render() {
    const filteredList = this.getFilteredList()

    return (
      <div className="home-page">
        <Header onSearch={this.onSearch} />
        <div className="content-container">
          {filteredList.length !== 0 ? (
            this.renderCard(filteredList)
          ) : (
            <p className="no-history">There is no history to show.</p>
          )}
        </div>
      </div>
    )
  }
}

export default Home
