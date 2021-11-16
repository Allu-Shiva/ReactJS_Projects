// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const heading = isDarkTheme ? 'home-heading-dark' : 'home-heading-light'
      return (
        <div className="container">
          <Navbar />
          <div className={`home ${isDarkTheme && 'home-dark'}`}>
            <img src={homeUrl} alt="home" className="home-img" />
            <h1 className={heading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
