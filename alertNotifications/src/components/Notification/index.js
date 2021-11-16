// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <li className="list-item">
      {
        /* {children[0]}
      <div className="content-container">
        {children[1]}
        {children[2]}
      </div> */ children
      }
      <GrFormClose className="close-icon" />
    </li>
  )
}

export default Notification
