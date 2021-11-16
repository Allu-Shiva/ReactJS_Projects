// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {isSuccess: false, fName: false, lName: false}

  onBlurFname = event => {
    this.setState({fName: event.target.value})
  }

  onBlurLname = event => {
    this.setState({lName: event.target.value})
  }

  renderForm = () => {
    const {fName, lName} = this.state
    const isFnamePresent = fName === '' ? 'errField' : ''
    const isLnamePresent = lName === '' ? 'errField' : ''
    return (
      <>
        <label htmlFor="fname" className="label-text">
          FIRST NAME
        </label>
        <input
          type="text"
          id="fname"
          className={`input-field ${isFnamePresent}`}
          placeholder="First name"
          onBlur={this.onBlurFname}
        />
        {isFnamePresent && <p className="errMsg">Required</p>}
        <label htmlFor="lname" className="label-text">
          LAST NAME
        </label>
        <input
          type="text"
          id="lname"
          className={`input-field ${isLnamePresent}`}
          placeholder="Last name"
          onBlur={this.onBlurLname}
        />
        {isLnamePresent && <p className="errMsg">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </>
    )
  }

  submitAnotherResponse = () => {
    this.setState({isSuccess: false, fName: false, lName: false})
  }

  renderSuccessForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successImg"
      />
      <p className="successText">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const {fName, lName} = this.state
    if (fName === false) {
      this.setState({fName: ''})
    }
    if (lName === false) {
      this.setState({lName: ''})
    }
    if (fName !== '' && fName !== false && lName !== '' && lName !== false) {
      this.setState({isSuccess: true})
    }
  }

  render() {
    const {isSuccess} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {isSuccess ? this.renderSuccessForm() : this.renderForm()}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
