import Header from '../Header'
import SideNavBar from '../SideNavBar'

import AppThemeContext from '../../context/AppThemeContext'

import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const notFoundLightThemeImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const notFoundDarkThemeImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <AppThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Header />
          <NotFoundMainContainer>
            <SideNavBar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage
                src={
                  isDarkTheme ? notFoundDarkThemeImage : notFoundLightThemeImage
                }
                alt="not found"
              />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundParagraph>
                We are sorry, the page you requested could not be found.
              </NotFoundParagraph>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </AppThemeContext.Consumer>
)

export default NotFound
