import {Component} from 'react'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import AppThemeContext from '../../context/AppThemeContext'

import {
  VideoDetailsContainer,
  VideoContainer,
  VideoDescriptionContainer,
  VideoTitle,
  VideoViewsAndLikesContainer,
  VideoViewsAndPublishedContainer,
  VideoLikesAndSavedVideosContainer,
  IndividualContainer,
  LikeButton,
  LikeParagraph,
  ChannelContainer,
  ChannelNameAndSubscribersContainer,
  SmallParagraph,
  ProfileImage,
  ChannelMediumDescription,
  ChannelSmallDescription,
  ChannelName,
  ChannelSubscribers,
  DislikeParagraph,
  SaveParagraph,
} from './styledComponents'

class VideoDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  render() {
    const {isLiked, isDisliked} = this.state
    const {videoDetails} = this.props
    const {
      id,
      description,
      publishedAt,
      //   thumbnailUrl,
      title,
      videoUrl,
      viewCount,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {onClickSaveButton, isDarkTheme, savedVideosList} = value

          const checkId = savedVideosList.find(each => each.id === id)

          const isSaved = checkId !== undefined ? 'active' : 'not-active'
          const saveText = checkId !== undefined ? 'Saved' : 'Save'

          return (
            <>
              <VideoDetailsContainer>
                <VideoContainer>
                  <ReactPlayer
                    controls
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    //   light={thumbnailUrl}
                  />
                </VideoContainer>
                <VideoDescriptionContainer>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoViewsAndLikesContainer>
                    <VideoViewsAndPublishedContainer>
                      <SmallParagraph>{viewCount} views</SmallParagraph>
                      <BsDot
                        margin-right="30px"
                        margin-left="30px"
                        font-size="20px"
                      />
                      <SmallParagraph>{postedAt} ago</SmallParagraph>
                    </VideoViewsAndPublishedContainer>
                    <VideoLikesAndSavedVideosContainer>
                      <IndividualContainer>
                        <LikeButton type="button" onClick={this.onClickLike}>
                          <AiOutlineLike
                            color={isLiked ? '#2563eb' : '#64748b'}
                          />
                          <LikeParagraph isLiked={isLiked}>Like</LikeParagraph>
                        </LikeButton>
                      </IndividualContainer>
                      <IndividualContainer>
                        <LikeButton type="button" onClick={this.onClickDislike}>
                          <AiOutlineDislike
                            color={isDisliked ? '#2563eb' : '#64748b'}
                          />
                          <DislikeParagraph isDisliked={isDisliked}>
                            Dislike
                          </DislikeParagraph>
                        </LikeButton>
                      </IndividualContainer>
                      <IndividualContainer>
                        <LikeButton
                          type="button"
                          onClick={() => onClickSaveButton(videoDetails)}
                        >
                          <BiListPlus
                            color={isSaved === 'active' ? '#2563eb' : '#64748b'}
                          />
                          <SaveParagraph isSaved={isSaved}>
                            {saveText}
                          </SaveParagraph>
                        </LikeButton>
                      </IndividualContainer>
                    </VideoLikesAndSavedVideosContainer>
                  </VideoViewsAndLikesContainer>
                  <ChannelContainer>
                    <ProfileImage src={profileImageUrl} alt={name} />
                    <ChannelNameAndSubscribersContainer>
                      <ChannelName isDarkTheme={isDarkTheme}>
                        {name}
                      </ChannelName>
                      <ChannelSubscribers>
                        {subscriberCount} subscribers
                      </ChannelSubscribers>
                      <ChannelMediumDescription>
                        {description}
                      </ChannelMediumDescription>
                    </ChannelNameAndSubscribersContainer>
                  </ChannelContainer>
                  <ChannelSmallDescription>
                    {description}
                  </ChannelSmallDescription>
                </VideoDescriptionContainer>
              </VideoDetailsContainer>
            </>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default VideoDetails
