import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideosList from '../TrendingVideosList'
import AppThemeContext from '../../context/AppThemeContext'

import {
  SavedVideosContainer,
  TrendingVideosContainer,
  SuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  SuccessListContainer,
  NoVideoContainer,
  NoVideoImage,
  NoVideoParagraph,
} from './styledComponents'

const SavedVideos = () => (
  <AppThemeContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value
      const checkLength = savedVideosList.length !== 0

      return (
        <>
          <Header />
          <SavedVideosContainer>
            <SideNavBar />
            <TrendingVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              <SuccessContainer>
                <HeadingContainer isDarkTheme={isDarkTheme}>
                  <HeadingIconContainer isDarkTheme={isDarkTheme}>
                    <SiYoutubegaming />
                  </HeadingIconContainer>
                  <Heading isDarkTheme={isDarkTheme}>Saved Videos</Heading>
                </HeadingContainer>
                {checkLength && (
                  <SuccessListContainer>
                    {savedVideosList.map(eachVideo => (
                      <TrendingVideosList
                        key={eachVideo.id}
                        videoDetails={eachVideo}
                      />
                    ))}
                  </SuccessListContainer>
                )}
                {!checkLength && (
                  <NoVideoContainer>
                    <NoVideoImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Heading isDarkTheme={isDarkTheme}>No Saved Videos</Heading>
                    <NoVideoParagraph>
                      You can save your videos while watching them
                    </NoVideoParagraph>
                  </NoVideoContainer>
                )}
              </SuccessContainer>
            </TrendingVideosContainer>
          </SavedVideosContainer>
        </>
      )
    }}
  </AppThemeContext.Consumer>
)

export default SavedVideos
