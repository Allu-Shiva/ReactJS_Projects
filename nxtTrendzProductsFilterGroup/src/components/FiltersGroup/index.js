import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onCategorySelect,
    onRatingSelect,
    onClearFilter,
    onUserSearch,
    ratingId,
    categoryId,
  } = props

  const onCatClick = event => onCategorySelect(event.target.id)

  const onRatClick = event => onRatingSelect(event.target.id)

  const onSearch = event => {
    if (event.key === 'Enter') {
      onUserSearch(event.target.value)
    }
  }

  const onClear = () => onClearFilter()

  const renderCategories = eachItem => {
    const activeCategory = eachItem.categoryId === categoryId ? 'active' : ''
    return (
      <li className="category-item" key={eachItem.categoryId}>
        <button
          type="button"
          className={`starBtn ${activeCategory}`}
          onClick={onCatClick}
        >
          <p id={eachItem.categoryId}>{eachItem.name}</p>
        </button>
      </li>
    )
  }

  const renderStars = eachItem => {
    const activeRating = eachItem.ratingId === ratingId ? 'active' : ''
    return (
      <li key={eachItem.ratingId} className="star-item">
        <button type="button" className="starBtn" onClick={onRatClick}>
          <img
            src={eachItem.imageUrl}
            alt={`rating ${eachItem.ratingId}`}
            className="stars"
            id={eachItem.ratingId}
          />
        </button>
        <p className={`star-text ${activeRating}`}>& up</p>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-field"
          placeholder="Search"
          onKeyUp={onSearch}
        />
        <BsSearch />
      </div>
      <h1 className="category-text">Category</h1>
      <ul className="filters-group">
        {categoryOptions.map(eachItem => renderCategories(eachItem))}
      </ul>
      <p className="category-text">Rating</p>
      <ul className="filters-group">
        {ratingsList.map(eachItem => renderStars(eachItem))}
      </ul>
      <button type="button" className="clearBtn" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
