import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {CgSun} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoIosClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import SideMobileNavBar from '../SideMobileNavBar'

import AppThemeContext from '../../context/AppThemeContext'

import {
  HeaderContainer,
  HeaderAppLogo,
  HeaderDesktopContentsContainer,
  HeaderMobileContentsContainer,
  ThemeButton,
  ProfileImage,
  HeaderLogoutButton,
  MobileMenuButton,
  MobileLogoutButton,
  PopupContainer,
  PopupParagraph,
  PopupButtonsContainer,
  PopupCloseButton,
  PopupConfirmButton,
  CloseButton,
  PopupMenuContainer,
} from './styledComponents'

const lightThemeAppLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeAppLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Header extends Component {
  onClickConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme, onChangeTheme} = value

          const onClickThemeChange = () => {
            onChangeTheme()
          }

          return (
            <HeaderContainer isDarkTheme={isDarkTheme}>
              <Link to="/">
                <HeaderAppLogo
                  src={isDarkTheme ? darkThemeAppLogo : lightThemeAppLogo}
                  alt="website logo"
                />
              </Link>
              <HeaderDesktopContentsContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onClickThemeChange}
                >
                  {isDarkTheme ? <CgSun color="#ffffff" /> : <FaMoon />}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <HeaderLogoutButton isDarkTheme={isDarkTheme}>
                      Logout
                    </HeaderLogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupParagraph isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupParagraph>
                      <PopupButtonsContainer>
                        <PopupCloseButton type="button" onClick={() => close()}>
                          Cancel
                        </PopupCloseButton>
                        <PopupConfirmButton
                          type="button"
                          onClick={this.onClickConfirm}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderDesktopContentsContainer>
              <HeaderMobileContentsContainer>
                <ThemeButton type="button" onClick={onClickThemeChange}>
                  {isDarkTheme ? <CgSun color="#ffffff" /> : <FaMoon />}
                </ThemeButton>
                <Popup
                  modal
                  trigger={
                    <MobileMenuButton isDarkTheme={isDarkTheme}>
                      <GiHamburgerMenu />
                    </MobileMenuButton>
                  }
                >
                  {close => (
                    <PopupMenuContainer isDarkTheme={isDarkTheme}>
                      <CloseButton type="button" onClick={() => close()}>
                        <IoIosClose
                          font-size="40px"
                          color={isDarkTheme ? '#ffffff' : '#000000'}
                        />
                      </CloseButton>
                      <SideMobileNavBar />
                    </PopupMenuContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <MobileLogoutButton isDarkTheme={isDarkTheme}>
                      <FiLogOut />
                    </MobileLogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupParagraph isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupParagraph>
                      <PopupButtonsContainer>
                        <PopupCloseButton type="button" onClick={() => close()}>
                          Cancel
                        </PopupCloseButton>
                        <PopupConfirmButton
                          type="button"
                          onClick={this.onClickConfirm}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderMobileContentsContainer>
            </HeaderContainer>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
