// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {details} = props
    const {history} = details
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
