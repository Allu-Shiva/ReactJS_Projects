import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    tabSelect: 'ALL',
    repoList: [],
    fetchStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchData()
  }

  ontabSelect = id => {
    this.setState(
      {fetchStatus: apiStatusConstants.loading, tabSelect: id},
      this.fetchData,
    )
  }

  fetchData = async () => {
    this.setState({
      fetchStatus: apiStatusConstants.loading,
    })
    const {tabSelect} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${tabSelect}`
    const options = {
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        this.onSuccessfulFetch(data)
      } else {
        this.onFailedFetch()
      }
    } catch {
      this.onFailedFetch()
    }
  }

  onSuccessfulFetch = data => {
    const updatedData = data.popular_repos.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({
      repoList: updatedData,
      fetchStatus: apiStatusConstants.success,
    })
  }

  onFailedFetch = () => {
    this.setState({fetchStatus: apiStatusConstants.failure})
  }

  onSuccess = repoList => (
    <ul className="repository-container">
      {repoList.map(eachItem => (
        <RepositoryItem key={eachItem.id} repo={eachItem} />
      ))}
    </ul>
  )

  onLoading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onFailure = () => (
    <div className="failed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something went Wrong</h1>
    </div>
  )

  render() {
    const {tabSelect, repoList, fetchStatus} = this.state
    let renderElement
    switch (fetchStatus) {
      case apiStatusConstants.loading:
        renderElement = this.onLoading()
        break
      case apiStatusConstants.success:
        renderElement = this.onSuccess(repoList)
        break
      case apiStatusConstants.failure:
        renderElement = this.onFailure()
        break
      default:
        renderElement = null
    }

    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="lang-filter-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachItem={eachItem}
              key={eachItem.id}
              tabSelect={tabSelect}
              ontabSelect={this.ontabSelect}
            />
          ))}
        </ul>
        {renderElement}
      </div>
    )
  }
}

export default GithubPopularRepos
