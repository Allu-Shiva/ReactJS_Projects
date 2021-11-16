// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentsList, onFav} = props
  const {id, title, date, isFav} = appointmentsList
  const time = format(date, 'dd MMMM yyyy, EEEE')
  const img = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStarClick = () => {
    onFav(id)
  }

  return (
    <li className="listItem">
      <div className="titleContainer">
        <p className="title">{title}</p>
        <button
          type="button"
          className="starBtn"
          testid="star"
          onClick={onStarClick}
        >
          <img src={img} alt="star" />
        </button>
      </div>
      <p className="date">Date: {time}</p>
    </li>
  )
}

export default AppointmentItem
