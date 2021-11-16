// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formatData = this.formatIntoCamelCase(data)
    this.setState({blogDetails: {...formatData}, isLoading: false})
  }

  formatIntoCamelCase = data => {
    const modifiedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    return modifiedData
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blogDetailsContainer">
        <h1>{title}</h1>
        <div className="profileContainer">
          <img src={avatarUrl} className="avatar" alt="avatar" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="blogDetailImg" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
