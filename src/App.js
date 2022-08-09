import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import AppThemeContext from './context/AppThemeContext'

import './App.css'

const activeIdConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    activeTabId: activeIdConstants.home,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickSaveButton = videoDetails => {
    const {savedVideosList} = this.state
    const checkDetails = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (checkDetails) {
      const updatedData = savedVideosList.filter(
        data => data.id !== videoDetails.id,
      )
      this.setState({savedVideosList: [...updatedData]})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  onClickTab = value => {
    this.setState({activeTabId: value})
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTabId} = this.state
    return (
      <AppThemeContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          activeTabId,
          onClickTab: this.onClickTab,
          savedVideosList,
          onClickSaveButton: this.onClickSaveButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppThemeContext.Provider>
    )
  }
}

export default App
