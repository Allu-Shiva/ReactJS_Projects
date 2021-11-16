// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="appCard">
      <img src={imageUrl} className="appImage" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
