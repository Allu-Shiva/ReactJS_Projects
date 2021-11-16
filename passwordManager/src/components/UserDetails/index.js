import './index.css'

const colorClassList = [
  'color-2',
  'color-3',
  'color-4',
  'color-5',
  'color-6',
  'color-7',
]

const UserDetails = props => {
  const {user, isShowPass, onDelete} = props
  const {id, website, username, password, colorIndex} = user
  const alphabet = username.toString()[0]

  const onDeleteItem = () => onDelete(id)

  return (
    <li className="listItem">
      <div className={`profilePicContainer ${colorClassList[colorIndex]}`}>
        {alphabet}
      </div>
      <div className="innerListContainer">
        <div className="detailsContainer">
          <p className="listText">{website}</p>
          <p className="listText">{username}</p>
          {isShowPass ? (
            <p className="listText">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
        <div className="delContainer">
          <button
            type="button"
            className="delBtn"
            testid="delete"
            onClick={onDeleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="deleteIcon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserDetails
