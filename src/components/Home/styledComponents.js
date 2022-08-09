import styled from 'styled-components/macro'

export const SideNavBarAndHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const HomeBannerAndCloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HomeBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: fixed;
  padding: 20px;
`

export const BannerAppLogo = styled.img`
  width: 125px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const CloseButton = styled.div`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const PremiumPlan = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #00306e;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #00306e;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
`

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const HomeSearchAndMagnifierContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #909090;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  outline: none;
  border-right: 2px solid #909090;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  font-family: 'Roboto';
  font-size: 18px;
  background-color: ${props => (props.isDarkTheme ? '#909090' : '#cccccc')};
  outline: none;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`

export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
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
