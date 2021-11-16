import './index.css'
import {Component} from 'react'
import EventItem from '../EventItem'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here
const registrationStatusConstants = {
  initial: 'INITIAL',
  yet_to_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrations_closed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {registrationStatus: registrationStatusConstants.initial}

  onItemClick = registrationStatus => {
    this.setState({registrationStatus})
  }

  renderInitial = () => (
    <div className="container">
      <p className="initial-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="registerBtn">
        Register Here
      </button>
    </div>
  )

  renderRegClosed = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-img"
      />
      <h1 className="description-registered">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="description-registered">
        You have already registered for the event
      </h1>
    </div>
  )

  render() {
    const {registrationStatus} = this.state
    let sidePanel
    switch (registrationStatus) {
      case registrationStatusConstants.initial:
        sidePanel = this.renderInitial()
        break
      case registrationStatusConstants.yet_to_register:
        sidePanel = this.renderYetToRegister()
        break
      case registrationStatusConstants.registered:
        sidePanel = this.renderRegistered()
        break
      case registrationStatusConstants.registrations_closed:
        sidePanel = this.renderRegClosed()
        break
      default:
        sidePanel = null
    }

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1>Events</h1>
          <ul className="event-item-container">
            {eventsList.map(eachItem => (
              <EventItem
                key={eachItem.id}
                item={eachItem}
                onItemClick={this.onItemClick}
              />
            ))}
          </ul>
        </div>
        {sidePanel}
      </div>
    )
  }
}

export default Events
