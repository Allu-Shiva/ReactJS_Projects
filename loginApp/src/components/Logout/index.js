// Write your code here
import './index.css'

const Logout = props => {
  const {toPerform} = props
  return (
    <button type="button" className="btn" onClick={toPerform}>
      Logout
    </button>
  )
}

export default Logout
