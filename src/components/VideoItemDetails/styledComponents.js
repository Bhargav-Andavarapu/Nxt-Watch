import styled from 'styled-components/macro'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
`

export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
