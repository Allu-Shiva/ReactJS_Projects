// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {card} = props
  const {name, id, teamImageUrl} = card

  return (
    <Link to={`/team-matches/${id}`} className="cardLink">
      <li className="listItem">
        <img src={teamImageUrl} className="cardImg" alt={name} />
        <p className="cardName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
