// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repo} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repo
  return (
    <li className="repository-item">
      <img src={avatarUrl} className="avatar" alt={name} />
      <p className="title">{name}</p>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="detail-img"
        />
        <p className="details-text">{starsCount} stars</p>
      </div>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="detail-img"
        />
        <p className="details-text">{issuesCount} forks</p>
      </div>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="detail-img"
        />
        <p className="details-text">{forksCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
