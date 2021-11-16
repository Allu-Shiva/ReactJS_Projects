// Write your code here
import './index.css'

const bgColors = ['green', 'blue', 'violet']

const MoneyDetails = props => {
  const {details} = props
  const {id, img, type, amount} = details
  return (
    <li className={`moneyListItem ${bgColors[id]}`}>
      <img src={img} alt={type.toLowerCase()} className="moneyImg" />
      <div className="moneyTextContainer">
        <p>Your {type}</p>
        <p testid={`${type.toLowerCase()}Amount`}>Rs {amount}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
