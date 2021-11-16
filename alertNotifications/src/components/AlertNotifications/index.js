// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="notifications-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <ul className="list-container">
      <Notification>
        <AiFillCheckCircle className="icon success-icon" />
        <div className="content-container">
          <h1 className="mini-heading success-text">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="icon error-icon" />
        <div className="content-container">
          <h1 className="mini-heading error-text">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="icon warning-icon" />
        <div className="content-container">
          <h1 className="mini-heading warning-text">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="icon info-icon" />
        <div className="content-container">
          <h1 className="mini-heading info-text">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
