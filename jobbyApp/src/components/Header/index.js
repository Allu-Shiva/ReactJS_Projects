import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <ul className="nav-unord-list">
        <li>
          <Link to="/" className="nav-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-website-logo"
            />
          </Link>
        </li>
        <li className="nav-middle-container">
          <Link to="/" className="nav-item">
            <AiFillHome className="nav-sm-icon" />
            <p className="nav-lg-icon">Home</p>
          </Link>
          <Link to="/jobs" className="nav-item">
            <BsFillBriefcaseFill className="nav-sm-icon" />
            <p className="nav-lg-icon">Jobs</p>
          </Link>
        </li>
        <li>
          <FiLogOut className="nav-sm-icon" onClick={onLogout} />
          <button
            type="button"
            className="nav-logout-btn nav-lg-icon"
            onClick={onLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
