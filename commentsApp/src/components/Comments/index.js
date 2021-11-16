import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

// Write your code here
class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCmtChange = event => {
    this.setState({comment: event.target.value})
  }

  onLiked = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.map(eachUser => {
      if (eachUser.id === id) {
        const updateUser = {...eachUser, isFav: !eachUser.isFav}
        return updateUser
      }
      return eachUser
    })
    this.setState({commentsList: updatedList})
  }

  onAddCmt = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randIndex = Math.floor(Math.random() * 7)
    if (comment !== '' && name !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        time: new Date(),
        isFav: false,
        profileColor: initialContainerBackgroundClassNames[randIndex],
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.filter(eachUser => {
      if (eachUser.id !== id) {
        return 1
      }
      return 0
    })
    this.setState({commentsList: updatedList})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const count = commentsList.length

    return (
      <div className="bgContainer">
        <h1 className="main-heading">Comments</h1>
        <div className="inputContainer">
          <form className="container-1">
            <p className="heading">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="userInput"
              value={name}
              onChange={this.onNameChange}
            />
            <textarea
              rows="8"
              placeholder="Your Comment"
              className="userInput"
              value={comment}
              onChange={this.onCmtChange}
            />
            <button type="submit" className="btn" onClick={this.onAddCmt}>
              Add comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="commentImg"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="commentCountContainer">
          <p className="cmtCount">{count}</p>
          <p className="heading">Comments</p>
        </div>
        <ul className="cmtContainer">
          {commentsList.map(eachComment => (
            <CommentItem
              user={eachComment}
              key={eachComment.id}
              onLiked={this.onLiked}
              onDeleted={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
