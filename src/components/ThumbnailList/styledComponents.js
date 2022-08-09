import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoList = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 320px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const ChannelAndVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
    padding: 0;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`

export const VideoDetailsDesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: -12px;
    margin-left: 10px;
  }
`

export const VideoDetailsMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -14px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 0px;
  font-size: 400;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const CommonParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
`

export const ViewsAndPostedDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -5px;
  @media screen and (min-width: 768px) {
    margin-top: -10px;
  }
`
