// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = () => {
  if (Cookie.get('jwt_token') === undefined) {
    return <Redirect to="login" />
  }
  return (
    <div className="cart-container">
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </div>
  )
}
export default Cart
