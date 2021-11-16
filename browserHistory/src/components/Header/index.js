import './index.css'

const Header = props => {
  const {onSearch} = props

  const searchOn = event => onSearch(event)

  return (
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
        className="applogo"
      />
      <div className="search-container">
        <div className="search-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="searchIcon"
          />
        </div>
        <input
          type="search"
          className="search-input"
          placeholder="Search history"
          onChange={searchOn}
        />
      </div>
    </div>
  )
}

export default Header
