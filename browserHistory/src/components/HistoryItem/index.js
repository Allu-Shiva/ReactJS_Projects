import './index.css'

const HistoryItem = props => {
  const {item, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteOn = () => onDelete(id)

  return (
    <li className="list-item">
      <div className="container-1">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="container-2">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="deleteBtn"
          testid="delete"
          onClick={deleteOn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
