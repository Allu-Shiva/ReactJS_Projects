// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="nav-website-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="logout-logo"
            alt="nav logout"
          />
          <ul className="nav-items-container">
            <li>
              <a href="/home" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="/Products" className="link">
                Products
              </a>
            </li>
            <li>
              <a href="/Cart" className="link">
                Cart
              </a>
            </li>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </ul>
        </nav>
        <ul className="nav-items-container-sm">
          <li>
            <a href="/home" className="link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-logo"
              />
            </a>
          </li>
          <li>
            <a href="/Products" className="link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-logo"
              />
            </a>
          </li>
          <li>
            <a href="/Cart" className="link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
