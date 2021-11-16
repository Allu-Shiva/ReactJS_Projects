// Write your code here.
import './index.css'

function Banner(props) {
  const {cardData} = props
  const {id, headerText, description, className} = cardData
  const card = (
    <div className={`${className} card-container`} id={id}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </div>
  )
  return card
}
export default Banner
