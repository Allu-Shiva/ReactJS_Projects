// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLnav = () => (
        <div className="left-navbar">
          <h1 className="title">Left Navbar Menu</h1>
          <ul className="navbar-list-container">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content">
          <h1 className="title">Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRnav = () => (
        <div className="right-navbar">
          <h1 className="title">Right Navbar Menu</h1>
          <div className="box">Ad 1</div>
          <div className="box">Ad 2</div>
        </div>
      )

      return (
        <div className="body">
          {showLeftNavbar && renderLnav()}
          {showContent && renderContent()}
          {showRightNavbar && renderRnav()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
