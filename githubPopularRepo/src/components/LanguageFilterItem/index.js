// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, tabSelect, ontabSelect} = props
  const {id, language} = eachItem
  const highlight = tabSelect === id ? 'tab-highlight' : null

  const onSelect = () => ontabSelect(id)
  return (
    <li>
      <button
        type="button"
        className={`item-btn ${highlight}`}
        onClick={onSelect}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
