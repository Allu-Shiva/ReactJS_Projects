// Write your code here
import './index.css'

const TransactionItem = props => {
  const {card, deleteCard} = props
  const {id, title, amount, type} = card

  const onDel = () => {
    deleteCard(id)
  }

  return (
    <li className="footerHeadingCon">
      <p className="f-text">{title}</p>
      <p className="f-text">{amount}</p>
      <p className="f-text">{type}</p>
      <button testid="delete" type="button" className="delBtn" onClick={onDel}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delImg"
        />
      </button>
    </li>
  )
}

export default TransactionItem
