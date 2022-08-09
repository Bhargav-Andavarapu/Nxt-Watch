import styled from 'styled-components/macro'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f8fafc')};
`

export const HeaderAppLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const HeaderDesktopContentsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderMobileContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ProfileImage = styled.img`
  display: flex;
  width: 32px;
  margin-left: 30px;
  margin-right: 30px;
`

export const HeaderLogoutButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
`

export const MobileLogoutButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f8fafc')};
`

export const PopupParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#00306e')};
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const PopupCloseButton = styled.button`
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  padding: 10px;
  background-color: transparent;
  color: #cccccc;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  margin-left: 15px;
  width: 90px;
`

export const PopupConfirmButton = styled.button`
  border: none;
  border-radius: 2px;
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  margin-left: 15px;
  width: 90px;
`

export const CloseButton = styled.div`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 30px;
  margin-right: 30px;
`

export const PopupMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`
