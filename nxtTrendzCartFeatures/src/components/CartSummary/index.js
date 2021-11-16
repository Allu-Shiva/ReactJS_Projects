// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const count =
        cartList.length > 1
          ? cartList.length.toString().concat(' items')
          : cartList.length.toString().concat(' item')
      let totalAmount = 0
      function Total(eachItem) {
        totalAmount += eachItem.price * eachItem.quantity
      }
      cartList.forEach(Total)
      return (
        <div className="cart-summary">
          <h1 className="mini-heading">
            Order Total: <span className="amount-text">Rs {totalAmount}/-</span>
          </h1>
          <p className="count-text">{count} in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
