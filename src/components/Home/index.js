import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import ThumbnailList from '../ThumbnailList'

import AppThemeContext from '../../context/AppThemeContext'

import {
  SideNavBarAndHomeContainer,
  HomeContainer,
  HomeBannerAndCloseContainer,
  HomeBannerContainer,
  BannerAppLogo,
  PremiumPlan,
  GetItNowButton,
  CloseButton,
  SearchContent,
  HomeSearchAndMagnifierContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  SuccessViewContainer,
  VideoListContainer,
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
  noSearchResults: 'NO_SEARCH_RESULTS',
}

const failureViewImageLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureViewImageDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class Home extends Component {
  state = {
    isBannerVisible: true,
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getUpdatedData = data => ({
    id: data.id,
    title: data.title,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    channel: {
      channelName: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
  })

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      const updatedData = fetchedData.videos.map(eachVideo =>
        this.getUpdatedData(eachVideo),
      )
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 400) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
    if (fetchedData.videos.length === 0) {
      this.setState({apiStatus: apiStatusConstants.noSearchResults})
    }
  }

  onClickBannerClose = () => {
    this.setState({isBannerVisible: false})
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value}, this.getVideosData)
  }

  onClickSearch = () => {
    this.getVideosData()
    this.setState({searchValue: ''})
  }

  onEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
      this.setState({searchValue: ''})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <SuccessViewContainer>
        <VideoListContainer>
          {videosList.map(eachVideo => (
            <ThumbnailList key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideoListContainer>
      </SuccessViewContainer>
    )
  }

  onClickRetry = () => {
    this.setState({searchValue: ''}, this.getVideosData)
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

  renderNoSearchResultsView = () => (
    <AppThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              No Search Results Found
            </FailureHeading>
            <FailureParagraph>
              Try Different key words or remove search filter
            </FailureParagraph>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </AppThemeContext.Consumer>
  )

  renderSearchResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.noSearchResults:
        return this.renderNoSearchResultsView()
      default:
        return null
    }
  }

  render() {
    const {isBannerVisible, searchValue} = this.state

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <SideNavBarAndHomeContainer>
                <SideNavBar />
                <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                  {isBannerVisible && (
                    <HomeBannerContainer data-testid="banner">
                      <HomeBannerAndCloseContainer>
                        <BannerAppLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          type="button"
                          onClick={this.onClickBannerClose}
                        >
                          <IoIosClose font-size="30px" />
                        </CloseButton>
                      </HomeBannerAndCloseContainer>
                      <PremiumPlan>
                        Buy Nxt Watch Premium prepaid plan with <br />
                        UPI
                      </PremiumPlan>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </HomeBannerContainer>
                  )}
                  <SearchContent>
                    <HomeSearchAndMagnifierContainer>
                      <SearchInput
                        placeholder="Search"
                        type="search"
                        value={searchValue}
                        onChange={this.onChangeSearchValue}
                        onKeyDown={this.onEnterKey}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        type="button"
                        onClick={this.onClickSearch}
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </HomeSearchAndMagnifierContainer>
                  </SearchContent>
                  {this.renderSearchResults()}
                </HomeContainer>
              </SideNavBarAndHomeContainer>
            </>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default Home
