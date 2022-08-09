import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import AppThemeContext from '../../context/AppThemeContext'

import {
  LinkItem,
  ListItem,
  Thumbnail,
  VideoTitle,
  VideoViewsAndPublishedContainer,
  SmallParagraph,
  DesktopContainer,
  MobileContainer,
  VideoDetailsContainer,
  ChannelImage,
} from './styledComponents'

const TrendingVideosList = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel

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
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <Thumbnail src={thumbnailUrl} alt="thumbnail" />
              <DesktopContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <SmallParagraph>{name}</SmallParagraph>
                <VideoViewsAndPublishedContainer>
                  <SmallParagraph>{viewCount} views</SmallParagraph>
                  <BsDot
                    margin-right="30px"
                    margin-left="30px"
                    font-size="20px"
                    color="#7e858e"
                  />
                  <SmallParagraph>{postedAt} ago</SmallParagraph>
                </VideoViewsAndPublishedContainer>
              </DesktopContainer>
              <MobileContainer>
                <ChannelImage src={profileImageUrl} alt={name} />
                <VideoDetailsContainer>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoViewsAndPublishedContainer>
                    <SmallParagraph>{name}</SmallParagraph>
                    <BsDot
                      margin-right="30px"
                      margin-left="30px"
                      font-size="20px"
                      color="#7e858e"
                    />
                    <SmallParagraph>{viewCount} views</SmallParagraph>
                    <BsDot
                      margin-right="30px"
                      margin-left="30px"
                      font-size="20px"
                      color="#7e858e"
                    />
                    <SmallParagraph>{postedAt} ago</SmallParagraph>
                  </VideoViewsAndPublishedContainer>
                </VideoDetailsContainer>
              </MobileContainer>
            </ListItem>
          </LinkItem>
        )
      }}
    </AppThemeContext.Consumer>
  )
}

export default TrendingVideosList
