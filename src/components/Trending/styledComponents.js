import styled from 'styled-components/macro'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }
`

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const FailureImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const FailureParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100px;
  background-color: #4f46e5;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  padding: 10px;
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#f1f1f1')};
  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
`

export const HeadingIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  border-radius: 50px;
  color: #ff0000;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
    font-size: 32px;
    border-radius: 75px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SuccessListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
