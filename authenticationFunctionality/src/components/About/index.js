// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = props => (
  <div className="home">
    <Header />
    <h1>About Route</h1>
    <LogoutButton details={props} />
  </div>
)

export default About
