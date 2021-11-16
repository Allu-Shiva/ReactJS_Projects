// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = props => (
  <div className="home">
    <Header />
    <h1>Home Route</h1>
    <LogoutButton details={props} />
  </div>
)

export default Home
