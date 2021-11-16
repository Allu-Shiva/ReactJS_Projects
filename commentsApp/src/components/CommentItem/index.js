// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {user, onLiked, onDeleted} = props
  const {id, name, comment, time, isFav, profileColor} = user
  const initial = name[0].toUpperCase()

  const toTime = formatDistanceToNow(time)
  const likeImg = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeClass = isFav ? 'liked' : ''

  const onClickLike = () => {
    onLiked(id)
  }

  const onClickDel = () => {
    onDeleted(id)
  }

  return (
    <li className="li">
      <div className="list-item">
        <p className={`initialContainer ${profileColor}`}>{initial}</p>
        <div className="contentCont">
          <div className="cmtHeader">
            <p className="name">{name}</p>
            <p className="time">{toTime} ago</p>
          </div>
          <p className="cmt">{comment}</p>
        </div>
      </div>
      <div className="footer">
        <div className="likeCont">
          <img src={likeImg} alt="like" className="like-btn" />
          <button
            type="button"
            className={`like-btn ${likeClass}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <div className="delCon">
          <button
            type="button"
            className="like-btn"
            onClick={onClickDel}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
