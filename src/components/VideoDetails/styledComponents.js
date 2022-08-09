import styled from 'styled-components/macro'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
    padding: 20px;
    min-height: 100%;
  }
`

export const VideoContainer = styled.div`
  width: 100vw;
  height: 45vh;
  @media screen and (min-width: 768px) {
    width: 80vw;
    min-height: 500px;
  }
`

export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin-top: 10px;
    width: 80vw;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoViewsAndLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 2px solid #cbd5e1;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoViewsAndPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoLikesAndSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IndividualContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
`

export const SmallParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const MediumParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LikeParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const DislikeParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const SaveParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isSaved === 'active' ? '#2563eb' : '#64748b')};
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelNameAndSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ChannelMediumDescription = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: 'Roboto';
    font-size: 16px;
    color: #7e858e;
  }
`

export const ChannelSmallDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
