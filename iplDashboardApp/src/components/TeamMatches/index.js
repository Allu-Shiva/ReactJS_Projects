// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = this.formatData(data)
    this.setState({data: {...formattedData}, isLoading: false})
  }

  formatData = data => {
    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    return modifiedData
  }

  render() {
    const {data, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = data
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`teamMatchesContainer ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <h1 className="mini-heading">Latest Matches</h1>
            <LatestMatch
              key={latestMatchDetails.id}
              details={latestMatchDetails}
            />
            <ul className="matchCardContainer">
              {recentMatches.map(eachCard => (
                <MatchCard key={eachCard.id} details={eachCard} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
