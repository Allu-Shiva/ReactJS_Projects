// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = amount =>
    this.setState(prevState => ({balance: prevState.balance - amount}))

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="nameContainer">
            <p className="dp">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="container-2">
            <p className="dark-text">Your Balance</p>
            <div>
              <h1 className="amt-heading">{balance}</h1>
              <p className="dark-text rupees">In Rupees</p>
            </div>
          </div>
          <h2 className="amt-heading">Withdraw</h2>
          <p className="dark-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="choice-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                onWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
