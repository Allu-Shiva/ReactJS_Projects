// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details
  return (
    <div className="latestMatchContainer">
      <div className="combContainer">
        <div className="con-1">
          <p className="teamName">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingLogo"
        />
      </div>
      <div className="con-2">
        <p className="title">First Innings</p>
        <p>{firstInnings}</p>
        <p className="title">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="title">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="title">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
