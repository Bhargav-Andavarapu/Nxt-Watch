import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 30px;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-bottom: 50px;
    margin-right: 0;
  }
`

export const GameImage = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const SmallParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7e858e;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
