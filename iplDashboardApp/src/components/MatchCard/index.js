// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details

  const statusClass = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="matchCard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="cardLogo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
