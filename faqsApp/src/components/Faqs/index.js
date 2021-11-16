// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqsList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const initialList = faqsList.map(eachFaq => ({
      ...eachFaq,
      showAnswer: false,
    }))
    this.setState({faqsList: [...initialList]})
  }

  onBtnClick = id => {
    console.log('trig')
    const {faqsList} = this.state
    const modifiedList = faqsList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, showAnswer: !eachItem.showAnswer}
      }
      return eachItem
    })
    // console.log(modifiedList)
    this.setState({faqsList: [...modifiedList]})
  }

  render() {
    const {faqsList} = this.state
    console.log(faqsList)

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqContainer">
            {faqsList.map(eachItem => (
              <FaqItem
                eachItem={eachItem}
                key={eachItem.id}
                onBtnClick={this.onBtnClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
