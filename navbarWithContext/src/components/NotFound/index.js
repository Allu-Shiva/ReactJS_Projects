// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const heading = isDarkTheme
        ? 'not-found-heading-dark'
        : 'not-found-heading-light'
      const para = isDarkTheme ? 'not-found-para-dark' : 'not-found-para-light'
      return (
        <div className="container">
          <Navbar />
          <div className={`not-found ${isDarkTheme && 'not-found-dark'}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="not-found-img"
            />
            <h1 className={heading}>Lost Your Way?</h1>
            <p className={para}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
