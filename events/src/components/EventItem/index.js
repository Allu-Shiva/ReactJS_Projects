// Write your code here
import './index.css'

const EventItem = props => {
  const {item, onItemClick} = props
  const {imageUrl, name, location, registrationStatus} = item

  const showDetails = () => onItemClick(registrationStatus)
  return (
    <li className="event-item">
      <button type="button" onClick={showDetails} className="listBtn">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
