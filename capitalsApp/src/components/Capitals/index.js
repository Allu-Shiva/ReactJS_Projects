// Write your code here
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  renderCountry = capitalId => {
    const country = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return country.country
  }

  updateState = event => {
    console.log(event.target.value)
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="selectContainer"
            onChange={this.updateState}
            value={capitalId}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option
                className="heading"
                key={eachCapital.id}
                value={eachCapital.id}
              >
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="heading"> is capital of which country?</span>
          <p className="result">{this.renderCountry(capitalId)}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
