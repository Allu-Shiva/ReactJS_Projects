// Write your code here
import './index.css'

const Message = props => {
  const {loginStatus} = props
  return !loginStatus ? (
    <h1 className="message">Please Login</h1>
  ) : (
    <h1 className="message">Welcome User</h1>
  )
}

export default Message
