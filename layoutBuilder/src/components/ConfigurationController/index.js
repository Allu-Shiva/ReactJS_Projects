// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="configurationController">
          <h1>Layout</h1>
          <ul className="checkbox-container">
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="CONTEXT"
                checked={showContent}
                onClick={onToggleShowContent}
              />
              <label htmlFor="CONTEXT">Content</label>
            </li>
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="LEFT NAVBAR"
                checked={showLeftNavbar}
                onClick={onToggleShowLeftNavbar}
              />
              <label htmlFor="LEFT NAVBAR">Left Navbar</label>
            </li>
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="RIGHT NAVBAR"
                checked={showRightNavbar}
                onClick={onToggleShowRightNavbar}
              />
              <label htmlFor="RIGHT NAVBAR">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
