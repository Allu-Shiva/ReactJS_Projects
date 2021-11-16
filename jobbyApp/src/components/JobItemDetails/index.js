import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import Header from '../Header'
import FailureView from '../FailureView'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class JobItemDetails extends Component {
  state = {
    detailsApiStatus: apiStatusConstants.initial,
    jobDetails: {},
    similarJobs: [],
  }

  componentDidMount() {
    this.fetchJobItemDetails()
  }

  fetchJobItemDetails = async () => {
    this.setState({detailsApiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const Token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        const jobDetails = data.job_details
        const formattedData = {
          companyLogoUrl: jobDetails.company_logo_url,
          companyWebsiteUrl: jobDetails.company_website_url,
          employmentType: jobDetails.employment_type,
          id: jobDetails.id,
          jobDescription: jobDetails.job_description,
          lifeAtCompany: {
            description: jobDetails.life_at_company.description,
            imageUrl: jobDetails.life_at_company.image_url,
          },
          location: jobDetails.location,
          packagePerAnnum: jobDetails.package_per_annum,
          rating: jobDetails.rating,
          skills: jobDetails.skills.map(eachItem => ({
            imageUrl: eachItem.image_url,
            name: eachItem.name,
          })),
          title: jobDetails.title,
        }
        const similarJobs = data.similar_jobs
        const formattedSimilarJobs = similarJobs.map(eachItem => ({
          id: eachItem.id,
          companyLogoUrl: eachItem.company_logo_url,
          employmentType: eachItem.employment_type,
          jobDescription: eachItem.job_description,
          location: eachItem.location,
          rating: eachItem.rating,
          title: eachItem.title,
        }))
        this.setState({
          jobDetails: formattedData,
          similarJobs: formattedSimilarJobs,
          detailsApiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({detailsApiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({detailsApiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView retry={this.fetchJobItemDetails} />

  renderSimilarJobs = () => {
    const {similarJobs} = this.state

    return (
      <div className="similarJobs">
        <h1 className="mini-heading">Similar Jobs</h1>
        <ul className="similarJobs-container">
          {similarJobs.map(eachItem => (
            <li className="similarJobs-card" key={eachItem.id}>
              <div>
                <div className="company-profile-container">
                  <img
                    src={eachItem.companyLogoUrl}
                    alt="similar job company logo"
                    className="company-logo"
                  />
                  <div className="company-profile-details-container">
                    <h1 className="title-text">{eachItem.title}</h1>
                    <div className="rating-container">
                      <AiFillStar className="star-icon" />
                      <p>{eachItem.rating}</p>
                    </div>
                  </div>
                </div>
                <h1 className="mini-heading">Description</h1>
                <p className="similarJobs-description">
                  {eachItem.jobDescription}
                </p>
              </div>
              <div className="package-container">
                <div className="location-container">
                  <div className="flex-container">
                    <MdLocationOn className="location-icon" />
                    <p className="location-text">{eachItem.location}</p>
                  </div>
                  <div className="flex-container">
                    <BsBriefcaseFill className="location-icon" />
                    <p>{eachItem.employmentType}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderDetailsPage = () => {
    const {jobDetails} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
    } = jobDetails
    return (
      <>
        <div className="jobItemDetails-card">
          <div className="company-profile-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div className="company-profile-details-container">
              <h1 className="title-text">{title}</h1>
              <div className="rating-container">
                <AiFillStar className="star-icon" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="package-container">
            <div className="location-container">
              <div className="flex-container">
                <MdLocationOn className="location-icon" />
                <p className="location-text">{location}</p>
              </div>
              <div className="flex-container">
                <BsBriefcaseFill className="location-icon" />
                <p>{employmentType}</p>
              </div>
            </div>
            <p className="package-text">{packagePerAnnum}</p>
          </div>
          <hr className="hr-line-card" />
          <div className="description-container">
            <h1 className="title-text">Description</h1>
            <a href={companyWebsiteUrl} className="anchor-element">
              <div className="anchor-container">
                <p className="anchor-text">Visit</p>
                <FiExternalLink />
              </div>
            </a>
          </div>
          <p className="job-description">{jobDescription}</p>
          <h1 className="mini-heading">Skills</h1>
          <ul className="skills-container">
            {skills.map(eachItem => (
              <li key={eachItem.name}>
                <div className="skills-flex-container">
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="skills-img"
                  />
                  <p>{eachItem.name}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="life-at-company-container">
            <h1 className="mini-heading">Life at Company</h1>
            <div className="lac-content-container">
              <p className="lac-description">{lifeAtCompany.description}</p>
              <img
                src={lifeAtCompany.imageUrl}
                alt="life at company"
                className="lac-image"
              />
            </div>
          </div>
        </div>
        {this.renderSimilarJobs()}
      </>
    )
  }

  render() {
    const {detailsApiStatus} = this.state
    let jobItem
    switch (detailsApiStatus) {
      case apiStatusConstants.inProgress:
        jobItem = this.renderLoader()
        break
      case apiStatusConstants.success:
        jobItem = this.renderDetailsPage()
        break
      case apiStatusConstants.failure:
        jobItem = this.renderFailureView()
        break
      default:
        return null
    }
    return (
      <div className="jobItemDetails-container">
        <Header />
        {jobItem}
      </div>
    )
  }
}

export default JobItemDetails
