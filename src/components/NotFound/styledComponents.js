import styled from 'styled-components/macro'

export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 99vw;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const NotFoundImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const NotFoundParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  margin-top: 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
