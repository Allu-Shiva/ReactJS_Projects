// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {Destination} = this.props
    const {name, imgUrl} = Destination
    return (
      <li className="list-item">
        <img src={imgUrl} alt="dest-pic" className="destinationImg" />
        <p className="destDescription">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
