// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = () => {
  if (Cookie.get('jwt_token') === undefined) {
    return <Redirect to="login" />
  }
  return (
    <div className="products-container">
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </div>
  )
}

export default Products
