import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideosList from '../TrendingVideosList'

import AppThemeContext from '../../context/AppThemeContext'

import {
  TrendingContainer,
  TrendingVideosContainer,
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getUpdatedData = data => ({
    id: data.id,
    title: data.title,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      const updatedData = fetchedData.videos.map(eachData =>
        this.getUpdatedData(eachData),
      )
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

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
    const {trendingVideosList} = this.state

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SuccessContainer>
              <HeadingContainer isDarkTheme={isDarkTheme}>
                <HeadingIconContainer isDarkTheme={isDarkTheme}>
                  <HiFire />
                </HeadingIconContainer>
                <Heading isDarkTheme={isDarkTheme}>Trending</Heading>
              </HeadingContainer>
              <SuccessListContainer>
                {trendingVideosList.map(eachVideo => (
                  <TrendingVideosList
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
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
              <TrendingContainer>
                <SideNavBar />
                <TrendingVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {this.renderAllViews()}
                </TrendingVideosContainer>
              </TrendingContainer>
            </>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default Trending
