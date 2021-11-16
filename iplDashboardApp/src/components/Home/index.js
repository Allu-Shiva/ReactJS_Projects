// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = this.formatData(data.teams)
    this.setState({data: [...formattedData], isLoading: false})
  }

  formatData = data => {
    console.log(data)
    const modifiedData = data.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    return modifiedData
  }

  render() {
    const {data, isLoading} = this.state

    return (
      <div className="dashboardContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <ul className="cardContainer">
              {data.map(eachCard => (
                <TeamCard key={eachCard.id} card={eachCard} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
