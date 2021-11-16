import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {card} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = card
  return (
    <li className="job-card-item">
      <Link to={`/jobs/${id}`} className="job-card-link">
        <div className="company-profile-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
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
        <h1 className="title-text">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </Link>
    </li>
  )
}

export default JobCard
