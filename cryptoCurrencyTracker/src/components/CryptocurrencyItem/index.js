// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {listItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = listItem

  return (
    <li className="item">
      <div className="profileContainer">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="headerText">{currencyName}</p>
      </div>
      <div className="value">
        <p className="headerText">{usdValue}</p>
        <p className="headerText">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
