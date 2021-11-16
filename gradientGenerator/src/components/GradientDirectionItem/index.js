// Write your code here
import {ListItemButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, direction, onTabClick} = props

  const tabChange = () => onTabClick(eachItem.value)

  return (
    <li>
      <ListItemButton
        activeTab={direction === eachItem.value}
        onClick={tabChange}
      >
        {eachItem.displayText}
      </ListItemButton>
    </li>
  )
}

export default GradientDirectionItem
