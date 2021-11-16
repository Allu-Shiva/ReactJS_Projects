// Write your code
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', isStarred: false}

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state

    if (title !== '' && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        date: new Date(date),
        isFav: false,
      }
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  onFav = id => {
    const {appointmentsList} = this.state
    const updatedList = appointmentsList.map(eachItem => {
      if (id === eachItem.id) {
        return {...eachItem, isFav: !eachItem.isFav}
      }
      return eachItem
    })
    this.setState({appointmentsList: updatedList})
  }

  onStarred = event => {
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
    event.target.classList.toggle('active')
    // const {isStarred, appointmentsList} = this.state
    // if (!isStarred) {
    //   const filteredList = appointmentsList.filter(eachItem => {
    //     if (eachItem.isFav === true) {
    //       return true
    //     }
    //     return false
    //   })
    //   this.setState(prevState => ({
    //     appointmentsList: filteredList,
    //     isStarred: !prevState.isStarred,
    //   }))
    // } else {
    //   this.setState(prevState => ({
    //     appointmentsList: initialList,
    //     isStarred: !prevState.isStarred,
    //   }))
    // }
  }

  getFilteredList = () => {
    const {appointmentsList, isStarred} = this.state
    if (isStarred) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isFav === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {title, date} = this.state
    const newAppointmentsList = this.getFilteredList()

    return (
      <div className="bgContainer">
        <div className="card">
          <div className="contentContainer">
            <form className="formContainer">
              <h1 className="main-heading">Add Appointment</h1>
              <label htmlFor="userInput" className="labelText">
                TITLE
              </label>
              <input
                type="text"
                className="userInput"
                id="userInput"
                placeholder="Title"
                value={title}
                onChange={this.onTitleChange}
              />
              <label htmlFor="date" className="labelText">
                DATE
              </label>
              <input
                type="date"
                value={date}
                className="userInput"
                id="date"
                onChange={this.onDateChange}
              />
              <button type="submit" className="addBtn" onClick={this.onAdd}>
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr className="hr-line" />
          <div className="miniContainer">
            <h1 className="mini-heading">Appointments</h1>
            <button type="button" className="starred" onClick={this.onStarred}>
              Starred
            </button>
          </div>
          <ul className="appointmentsContainer">
            {newAppointmentsList.map(eachItem => (
              <AppointmentItem
                key={eachItem.id}
                appointmentsList={eachItem}
                onFav={this.onFav}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
