import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isThemeLight: true, savedVideosList: []}

  changeTheme = () =>
    this.setState(prevState => ({isThemeLight: !prevState.isThemeLight}))

  onUpdatedSavedVideosList = item => {
    const {id} = item
    const {savedVideosList} = this.state
    if (savedVideosList.length === 0) {
      this.setState({savedVideosList: [item]})
    } else {
      const isPresent = savedVideosList.find(eachItem => eachItem.id === id)
      let updatedList
      if (isPresent) {
        updatedList = savedVideosList.filter(eachItem => {
          if (eachItem.id !== id) {
            return true
          }
          return false
        })
      } else {
        updatedList = [...savedVideosList, item]
      }
      this.setState({savedVideosList: updatedList})
    }
  }

  render() {
    const {isThemeLight, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          isThemeLight,
          changeTheme: this.changeTheme,
          savedVideosList,
          updateSavedVideosList: this.onUpdatedSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <NotFound />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
