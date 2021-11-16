// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onWithdraw} = props
  const {value} = item

  const Withdraw = () => onWithdraw(value)

  return (
    <li className="choice" onClick={Withdraw}>
      <button className="btn" type="button" onClick={Withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
