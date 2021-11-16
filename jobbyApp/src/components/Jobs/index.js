import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import JobCard from './JobCard'
import FailureView from '../FailureView'
import EmploymentTypeItem from '../EmploymentTypeItem'
import SalaryRangeItem from '../SalaryRangeItem'
import './index.css'

// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Jobs extends Component {
  state = {
    profileApiStatus: apiStatusConstants.initial,
    jobApiStatus: apiStatusConstants.initial,
    profile: {},
    employmentType: [],
    salaryRange: '',
    searchInput: '',
    jobCards: [],
  }

  componentDidMount() {
    this.onFetchProfile()
    this.onFetchJobCards()
  }

  onFetchProfile = async () => {
    this.setState({profileApiStatus: apiStatusConstants.inProgress})
    const Token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const profileDetails = data.profile_details
        const formattedData = {
          name: profileDetails.name,
          profileImageUrl: profileDetails.profile_image_url,
          shortBio: profileDetails.short_bio,
        }
        this.setState({
          profile: formattedData,
          profileApiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({profileApiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({profileApiStatus: apiStatusConstants.failure})
    }
  }

  renderProfileFailure = () => (
    <div className="jobs-profile-retry-container">
      <button
        type="button"
        className="jobs-profile-retry-btn"
        onClick={this.onFetchProfile}
      >
        Retry
      </button>
    </div>
  )

  renderProfileDetails = () => {
    const {profile} = this.state
    const {name, profileImageUrl, shortBio} = profile
    return (
      <div className="jobs-profile-container">
        <img src={profileImageUrl} className="jobs-profile-img" alt="profile" />
        <h1 className="jobs-profile-name">{name}</h1>
        <p className="jobs-profile-bio">{shortBio}</p>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  onFetchJobCards = async () => {
    this.setState({jobApiStatus: apiStatusConstants.inProgress})
    const {employmentType, salaryRange, searchInput} = this.state
    const employmentTypeString = employmentType.join(',')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeString}&minimum_package=${salaryRange}&search=${searchInput}`
    const Token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    }
    try {
      const response = await fetch(url, options)

      if (response.ok) {
        const data = await response.json()
        const {jobs} = data
        const formattedData = jobs.map(eachItem => ({
          companyLogoUrl: eachItem.company_logo_url,
          employmentType: eachItem.employment_type,
          id: eachItem.id,
          jobDescription: eachItem.job_description,
          location: eachItem.location,
          packagePerAnnum: eachItem.package_per_annum,
          rating: eachItem.rating,
          title: eachItem.title,
        }))
        this.setState({
          jobCards: formattedData,
          jobApiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({jobApiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({jobApiStatus: apiStatusConstants.failure})
    }
  }

  renderJobCardFailure = () => <FailureView retry={this.onFetchJobCards} />

  renderNoJobs = () => (
    <div className="jobs-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="jobs-card-failure-view-img"
      />
      <h1>No Jobs Found</h1>
      <p className="failure-text">
        we could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobCards = () => {
    const {jobCards} = this.state
    if (jobCards.length > 0) {
      return (
        <ul className="job-cards-container">
          {jobCards.map(eachItem => (
            <JobCard key={eachItem.id} card={eachItem} />
          ))}
        </ul>
      )
    }
    return this.renderNoJobs()
  }

  onClickCheckbox = event => {
    const {employmentType} = this.state
    const type = event.target.value
    let updatedEmploymentType
    if (employmentType.includes(type)) {
      updatedEmploymentType = employmentType.filter(eachItem => {
        if (eachItem !== type) {
          return true
        }
        return false
      })
    } else {
      updatedEmploymentType = [...employmentType, type]
    }
    // console.log(updatedEmploymentType)
    this.setState({employmentType: updatedEmploymentType}, this.onFetchJobCards)
  }

  onClickSalary = event =>
    this.setState({salaryRange: event.target.value}, this.onFetchJobCards)

  onUserInput = event => this.setState({searchInput: event.target.value})

  onSearch = () => {
    this.onFetchJobCards()
  }

  render() {
    const {profileApiStatus, jobApiStatus} = this.state
    let profileItem
    let jobItem
    switch (profileApiStatus) {
      case apiStatusConstants.inProgress:
        profileItem = this.renderLoader()
        break
      case apiStatusConstants.success:
        profileItem = this.renderProfileDetails()
        break
      case apiStatusConstants.failure:
        profileItem = this.renderProfileFailure()
        break
      default:
        return null
    }
    switch (jobApiStatus) {
      case apiStatusConstants.inProgress:
        jobItem = this.renderLoader()
        break
      case apiStatusConstants.success:
        jobItem = this.renderJobCards()
        break
      case apiStatusConstants.failure:
        jobItem = this.renderJobCardFailure()
        break
      default:
        return null
    }
    return (
      <div>
        <Header />
        <div className="jobs-outside-container">
          <div className="jobs-inside-container">
            <div className="left-pane">
              {profileItem}
              <hr className="hr-line" />
              <h1 className="jobs-employment-text">Type of Employment</h1>
              <ul className="jobs-employmentType-container">
                {employmentTypesList.map(eachItem => (
                  <EmploymentTypeItem
                    key={eachItem.employmentTypeId}
                    eachItem={eachItem}
                    onCheckBox={this.onClickCheckbox}
                  />
                ))}
              </ul>
              <hr className="hr-line" />
              <h1 className="jobs-employment-text">Salary Range</h1>
              <ul className="jobs-employmentType-container">
                {salaryRangesList.map(eachItem => (
                  <SalaryRangeItem
                    key={eachItem.salaryRangeId}
                    eachItem={eachItem}
                    onSalary={this.onClickSalary}
                  />
                ))}
              </ul>
            </div>
            <div className="right-pane">
              <div className="jobs-search-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onUserInput}
                />
                <button
                  type="button"
                  testid="searchButton"
                  className="search-icon-btn"
                  onClick={this.onSearch}
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              {jobItem}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
