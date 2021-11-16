// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {image, updateActiveImage, activeStatus} = props
  const {thumbnailUrl, thumbnailAltText} = image

  const onImageClick = () => {
    updateActiveImage(image)
  }
  const opacityClass = activeStatus ? '' : 'opaque'
  return (
    <li>
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${opacityClass}`}
          onClick={onImageClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
