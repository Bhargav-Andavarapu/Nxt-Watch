import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 80px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const DesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 50%;
  }
`

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 0;
  }
`

export const VideoViewsAndPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -15px;
`

export const SmallParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
