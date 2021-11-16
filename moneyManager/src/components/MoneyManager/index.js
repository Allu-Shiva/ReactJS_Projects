import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initialBudget = [
  {
    id: 0,
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    type: 'Balance',
    amount: 0,
  },
  {
    id: 1,
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    type: 'Income',
    amount: 0,
  },
  {
    id: 2,
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    type: 'Expenses',
    amount: 0,
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    budget: initialBudget,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    historyCard: [],
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  updateExpenses = newList => {
    const incomeObj = newList.find(eachItem => {
      if (eachItem.type === 'Income') {
        return eachItem
      }
      return 0
    })
    const expensesObj = newList.find(eachItem => {
      if (eachItem.type === 'Expenses') {
        return eachItem
      }
      return 0
    })
    const balanceAmount = incomeObj.amount - expensesObj.amount
    console.log(balanceAmount)
    const updatedList = newList.map(eachItem => {
      if (eachItem.type === 'Balance') {
        return {...eachItem, amount: balanceAmount}
      }
      return eachItem
    })
    return updatedList
  }

  onAdd = event => {
    event.preventDefault()
    const {budget, title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      const newList = budget.map(eachItem => {
        if (eachItem.type === type) {
          return {
            ...eachItem,
            amount: parseInt(eachItem.amount) + parseInt(amount),
          }
        }
        return eachItem
      })
      const updatedList = this.updateExpenses(newList)
      const newItem = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      this.setState(prevState => ({
        budget: updatedList,
        historyCard: [...prevState.historyCard, newItem],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].displayText,
      }))
    } else {
      this.setState({type: transactionTypeOptions[0].displayText})
    }
  }

  onDelete = id => {
    const {historyCard, budget} = this.state
    const deletedCard = historyCard.find(eachItem => {
      if (eachItem.id === id) {
        return eachItem
      }
      return 0
    })
    const filteredHistCard = historyCard.filter(eachItem => {
      if (eachItem.id !== id) {
        return eachItem
      }
      return 0
    })
    const {type, amount} = deletedCard
    const updatedBudget = budget.map(eachItem => {
      if (eachItem.type === type) {
        console.log(type, amount)
        return {
          ...eachItem,
          amount: parseInt(eachItem.amount) - parseInt(amount),
        }
      }
      return eachItem
    })
    // console.log(updatedBudget)
    const newBudget = this.updateExpenses(updatedBudget)
    this.setState({budget: newBudget, historyCard: filteredHistCard})
  }

  render() {
    const {budget, title, amount, type, historyCard} = this.state
    return (
      <div className="bgContainer">
        <div className="welcomeContainer">
          <h1 className="header-heading">Hi, Richard</h1>
          <p className="header-heading">
            Welcome back to your <span className="spanText">Money Manager</span>
          </p>
        </div>
        <ul className="moneyContainer">
          {budget.map(eachItem => (
            <MoneyDetails key={eachItem.id} details={eachItem} />
          ))}
        </ul>
        <div className="statsContainer">
          <form className="form">
            <h1 className="mini-heading">Add Transaction</h1>
            <label htmlFor="title" className="labelText">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="input"
              value={title}
              onChange={this.onTitleChange}
            />
            <label htmlFor="amount" className="labelText">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              className="input"
              value={amount}
              onChange={this.onAmountChange}
            />
            <label htmlFor="type" className="labelText">
              TYPE
            </label>
            <select
              className="selectInput input"
              id="type"
              value={type}
              onChange={this.onTypeChange}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.displayText}
                  key={eachTransaction.optionId}
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="addBtn" onClick={this.onAdd}>
              Add
            </button>
          </form>
          <div className="historyContainer">
            <h1 className="mini-heading">History</h1>
            <div>
              <ul className="historyListContainer">
                <li className="footerHeadingCon">
                  <p className="f-text">Title</p>
                  <p className="f-text">Amount</p>
                  <p className="f-text">Type</p>
                </li>
                {historyCard.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    card={eachItem}
                    deleteCard={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
