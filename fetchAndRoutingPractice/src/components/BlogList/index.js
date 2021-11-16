// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatData = this.formatIntoCamelCase(data)
    this.setState({blogList: [...formatData], isLoading: false})
  }

  formatIntoCamelCase = data => {
    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    return modifiedData
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <ul className="blogListContainer">
        <ul className="blogListContainer">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogList.map(eachItem => (
              <BlogItem key={eachItem.id} blogItem={eachItem} />
            ))
          )}
        </ul>
      </ul>
    )
  }
}

export default BlogList
