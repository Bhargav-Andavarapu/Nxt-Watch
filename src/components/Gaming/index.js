import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import GameCard from '../GameCard'

import AppThemeContext from '../../context/AppThemeContext'

import {
  GamingContainer,
  GamingVideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  SuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  SuccessListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

const failureViewImageLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureViewImageDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getUpdatedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    console.log(fetchedData)

    if (response.ok === true) {
      const updatedData = fetchedData.videos.map(eachData =>
        this.getUpdatedData(eachData),
      )
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <AppThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer>
            <FailureImage
              src={isDarkTheme ? failureViewImageDark : failureViewImageLight}
              alt="failure view"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureParagraph>
              We are having some trouble to complete your request. <br /> Please
              Try Again.
            </FailureParagraph>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </AppThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SuccessContainer>
              <HeadingContainer isDarkTheme={isDarkTheme}>
                <HeadingIconContainer isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming />
                </HeadingIconContainer>
                <Heading isDarkTheme={isDarkTheme}>Gaming</Heading>
              </HeadingContainer>
              <SuccessListContainer>
                {gamingVideosList.map(eachVideo => (
                  <GameCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SuccessListContainer>
            </SuccessContainer>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingContainer>
                <SideNavBar />
                <GamingVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="gaming"
                >
                  {this.renderAllViews()}
                </GamingVideosContainer>
              </GamingContainer>
            </>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default Gaming
