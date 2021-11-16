// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, description, publishedDate} = blogItem

  return (
    <li>
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      {id < 5 && <hr className="hr-line" />}
    </li>
  )
}

export default BlogItem
