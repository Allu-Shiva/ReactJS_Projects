// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="bloglist-container">
      {blogsList.map(blogItem => (
        <BlogItem blogItem={blogItem} key={blogItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
