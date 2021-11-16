// Write your code here
// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const heading = isDarkTheme ? 'about-heading-dark' : 'about-heading-light'
      return (
        <div className="container">
          <Navbar />
          <div className={`about ${isDarkTheme && 'about-dark'}`}>
            <img src={aboutUrl} alt="about" className="about-img" />
            <h1 className={heading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
