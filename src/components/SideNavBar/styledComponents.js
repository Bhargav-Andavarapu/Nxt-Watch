import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const SideMenuDesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f8fafc')};
  }
`

export const MenuNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

export const MenuListContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
  padding-left: 20px;
  margin: 0;
  height: 40px;
  background-color: ${props => (props.isActive ? '#cccccc' : 'transparent')};
`

export const SectionHeading = styled.p`
  margin-left: 20px;
  font-family: "Roboto"
  font-size: 18px;
  padding: 0;
  font-weight: ${props => (props.isActive ? '700' : '400')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 400px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`

export const SocialMediaIcon = styled.img`
  width: 30px;
  margin-right: 20px;
`

export const ContactUsParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
