// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  BgContainer,
  CowinContainer,
  WebsiteLogo,
  LogoContainer,
  WebsiteTitle,
  LoaderContainer,
  FailureImg,
  FailureContainer,
} from './styledComponents'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class CowinDashboard extends Component {
  state = {pageStatus: apiConstants.initial, data: {}}

  componentDidMount() {
    this.ApiCallFetch()
  }

  ApiCallFetch = async () => {
    this.setState({pageStatus: apiConstants.progress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),

        vaccinationByAge: data.vaccination_by_age,

        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({pageStatus: apiConstants.success, data: formattedData})
    } else {
      this.setState({pageStatus: apiConstants.failure})
    }
  }

  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#2d87bb" height={80} width={80} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </FailureContainer>
  )

  renderCharts = () => {
    const {data} = this.state
    const {last7DaysVaccination, vaccinationByGender, vaccinationByAge} = data
    return (
      <>
        <VaccinationCoverage
          last7DaysVaccination={last7DaysVaccination}
          DataFormatter={this.DataFormatter}
        />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  render() {
    const {pageStatus} = this.state
    let renderItem
    switch (pageStatus) {
      case apiConstants.progress:
        renderItem = this.renderLoader()
        break
      case apiConstants.success:
        renderItem = this.renderCharts()
        break
      case apiConstants.failure:
        renderItem = this.renderFailureView()
        break
      default:
        renderItem = null
    }
    return (
      <BgContainer>
        <CowinContainer>
          <LogoContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <WebsiteTitle>Co-WIN</WebsiteTitle>
          </LogoContainer>
          <WebsiteTitle MainHeading>CoWIN Vaccination in India</WebsiteTitle>
          {renderItem}
        </CowinContainer>
      </BgContainer>
    )
  }
}

export default CowinDashboard
