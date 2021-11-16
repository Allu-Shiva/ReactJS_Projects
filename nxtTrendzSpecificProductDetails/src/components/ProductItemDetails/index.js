// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProductItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, productDetails: {}, count: 1}

  componentDidMount() {
    this.requestApiCall()
  }

  requestApiCall = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        brand: data.brand,
        description: data.description,
        totalReviews: data.total_reviews,
        price: data.price,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(eachItem => ({
          id: eachItem.id,
          imageUrl: eachItem.image_url,
          title: eachItem.title,
          style: eachItem.style,
          price: eachItem.price,
          description: eachItem.description,
          brand: eachItem.brand,
          totalReviews: eachItem.total_reviews,
          rating: eachItem.rating,
          availability: eachItem.availability,
        })),
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        productDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onIncrement = () => this.setState(prevState => ({count: prevState.count + 1}))

  onDecrement = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  renderProductDetails = () => {
    const {productDetails, count} = this.state
    const {
      imageUrl,
      title,
      brand,
      totalReviews,
      rating,
      availability,
      price,
      description,
      similarProducts,
    } = productDetails

    return (
      <>
        <div className="product-item-container">
          <img src={imageUrl} alt="product" className="product-img" />
          <div className="content-container">
            <h1 className="title">{title}</h1>
            <p className="price">Rs {price}/-</p>
            <div className="reviews-container">
              <div className="rating-box">
                <p>{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-img"
                />
              </div>
              <p className="reviews-text">{totalReviews} Reviews</p>
            </div>
            <p className="description">{description}</p>
            <div className="span-container">
              <p className="details">Available: </p>
              <p className="description">{availability}</p>
            </div>
            <div className="span-container">
              <p className="details">Brand: </p>
              <p className="description">{brand}</p>
            </div>
            <hr className="hr-line" />
            <div className="stock-container">
              <button
                type="button"
                className="inc-dec-btn"
                testid="minus"
                onClick={this.onDecrement}
              >
                <BsDashSquare />
              </button>
              <p className="count-text">{count}</p>
              <button
                type="button"
                className="inc-dec-btn"
                testid="plus"
                onClick={this.onIncrement}
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button" className="add-to-cart-btn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="container-2">
          <h1 className="main-heading">Similar Products</h1>
          <ul className="similar-pro-container">
            {similarProducts.map(eachItem => (
              <SimilarProductItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderFailurePage = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="error-img"
      />
      <h1 className="failure-heading">Product Not Found</h1>
      <button
        type="button"
        className="continue-shopping-btn"
        onClick={this.onContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  )

  onContinueShopping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderProductDetails()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="pid-container">{this.renderPage()}</div>
      </div>
    )
  }
}

export default ProductItemDetails
