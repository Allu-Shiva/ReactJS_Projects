import './index.css'

const FailureView = props => {
  const onRetry = () => {
    const {retry} = props
    retry()
  }

  return (
    <div className="jobs-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="jobs-card-failure-view-img"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p className="failure-text">
        we cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="jobs-profile-retry-btn"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  )
}

export default FailureView
