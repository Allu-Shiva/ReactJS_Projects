// Write your code here.
import './index.css'

function Card(props) {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  const element = (
    <div className={`${className} card`} id={id}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt="pic" className="card-image" />
    </div>
  )
  return element
}
export default Card
