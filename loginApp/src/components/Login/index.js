// Write your code here
import './index.css'

const Login = props => {
  const {toPerform} = props
  return (
    <button type="button" className="btn" onClick={toPerform}>
      Login
    </button>
  )
}

export default Login
