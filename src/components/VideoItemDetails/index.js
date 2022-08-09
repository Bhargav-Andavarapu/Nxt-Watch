import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import VideoDetails from '../VideoDetails'
import Header from '../Header'
import SideNavBar from '../SideNavBar'

import AppThemeContext from '../../context/AppThemeContext'

import {
  VideoDetailsContainer,
  LoaderContainer,
  SuccessViewContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
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

class VideoItemDetails extends Component {
  state = {
    videoDetailsList: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getUpdatedDetails = data => ({
    id: data.id,
    description: data.description,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      methods: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
    if (response.ok === true) {
      const updatedData = this.getUpdatedDetails(fetchedData.video_details)
      this.setState({
        videoDetailsList: updatedData,
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

  renderSuccessView = () => {
    const {videoDetailsList} = this.state

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SuccessViewContainer isDarkTheme={isDarkTheme}>
              <VideoDetails
                key={videoDetailsList.id}
                videoDetails={videoDetailsList}
              />
            </SuccessViewContainer>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <AppThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer isDarkTheme={isDarkTheme}>
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
            <RetryButton type="button">Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </AppThemeContext.Consumer>
  )

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
              <VideoDetailsContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <SideNavBar />
                {this.renderAllViews()}
              </VideoDetailsContainer>
            </>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
