// Write your code here
import './index.css'

const TabList = props => {
  const {Tab, activeTabStatus, updateState} = props
  const {tabId, displayText} = Tab
  const activeTabClass = activeTabStatus ? 'highlightTab' : ''
  const activeLine = activeTabStatus ? 'highlightLine' : ''

  const onClickTab = () => {
    updateState(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`btn ${activeTabClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
      <hr className={`hr-line ${activeLine}`} />
    </li>
  )
}

export default TabList
