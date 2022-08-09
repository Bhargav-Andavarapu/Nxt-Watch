import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import AppThemeContext from '../../context/AppThemeContext'

import {
  VideoLink,
  VideoList,
  ThumbnailImage,
  ChannelAndVideoDetailsContainer,
  ProfileImage,
  VideoDetailsDesktopContainer,
  VideoDetailsMobileContainer,
  VideoName,
  CommonParagraph,
  ViewsAndPostedDateContainer,
} from './styledComponents'

const ThumbnailList = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel,
  } = videoDetails
  const {channelName, profileImageUrl} = channel

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <AppThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoList>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ChannelAndVideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsDesktopContainer>
                  <VideoName isDarkTheme={isDarkTheme}>{title}</VideoName>
                  <CommonParagraph>{channelName}</CommonParagraph>
                  <ViewsAndPostedDateContainer>
                    <CommonParagraph>{viewCount} views</CommonParagraph>
                    <BsDot color="#7e858e" />
                    <CommonParagraph>{postedAt} ago</CommonParagraph>
                  </ViewsAndPostedDateContainer>
                </VideoDetailsDesktopContainer>
                <VideoDetailsMobileContainer>
                  <VideoName isDarkTheme={isDarkTheme}>{title}</VideoName>
                  <ViewsAndPostedDateContainer>
                    <CommonParagraph>{channelName}</CommonParagraph>
                    <BsDot color="#7e858e" />
                    <CommonParagraph>{viewCount} views</CommonParagraph>
                    <BsDot color="#7e858e" />
                    <CommonParagraph>{postedAt} ago</CommonParagraph>
                  </ViewsAndPostedDateContainer>
                </VideoDetailsMobileContainer>
              </ChannelAndVideoDetailsContainer>
            </VideoList>
          </VideoLink>
        )
      }}
    </AppThemeContext.Consumer>
  )
}

export default ThumbnailList
