import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import AppThemeContext from '../../context/AppThemeContext'

import {
  SideMenuMobileContainer,
  MenuNavContainer,
  MenuListContainer,
  SectionHeading,
  LinkItem,
} from './styledComponents'

const activeIdConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SideMobileNavBar = () => (
  <AppThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTabId, onClickTab} = value

      return (
        <SideMenuMobileContainer isDarkTheme={isDarkTheme}>
          <MenuNavContainer>
            <LinkItem to="/" onClick={() => onClickTab(activeIdConstants.home)}>
              <MenuListContainer
                isActive={activeTabId === activeIdConstants.home}
              >
                <AiFillHome
                  font-size="18px"
                  color={
                    activeTabId === activeIdConstants.home
                      ? '#ff0000'
                      : '#616e7c'
                  }
                />
                <SectionHeading
                  isDarkTheme={isDarkTheme}
                  isActive={activeTabId === activeIdConstants.home}
                >
                  Home
                </SectionHeading>
              </MenuListContainer>
            </LinkItem>
            <LinkItem
              to="/trending"
              onClick={() => onClickTab(activeIdConstants.trending)}
            >
              <MenuListContainer
                isActive={activeTabId === activeIdConstants.trending}
              >
                <HiFire
                  fontSize="18px"
                  color={
                    activeTabId === activeIdConstants.trending
                      ? '#ff0000'
                      : '#616e7c'
                  }
                />
                <SectionHeading
                  isDarkTheme={isDarkTheme}
                  isActive={activeTabId === activeIdConstants.trending}
                >
                  Trending
                </SectionHeading>
              </MenuListContainer>
            </LinkItem>
            <LinkItem
              to="/gaming"
              onClick={() => onClickTab(activeIdConstants.gaming)}
            >
              <MenuListContainer
                isActive={activeTabId === activeIdConstants.gaming}
              >
                <SiYoutubegaming
                  font-size="18px"
                  color={
                    activeTabId === activeIdConstants.gaming
                      ? '#ff0000'
                      : '#616e7c'
                  }
                />
                <SectionHeading
                  isDarkTheme={isDarkTheme}
                  isActive={activeTabId === activeIdConstants.gaming}
                >
                  Gaming
                </SectionHeading>
              </MenuListContainer>
            </LinkItem>
            <LinkItem
              to="/saved-videos"
              onClick={() => onClickTab(activeIdConstants.savedVideos)}
            >
              <MenuListContainer
                isActive={activeTabId === activeIdConstants.savedVideos}
              >
                <BiListPlus
                  font-size="18px"
                  color={
                    activeTabId === activeIdConstants.savedVideos
                      ? '#ff0000'
                      : '#616e7c'
                  }
                />
                <SectionHeading
                  isDarkTheme={isDarkTheme}
                  isActive={activeTabId === activeIdConstants.savedVideos}
                >
                  Saved videos
                </SectionHeading>
              </MenuListContainer>
            </LinkItem>
          </MenuNavContainer>
        </SideMenuMobileContainer>
      )
    }}
  </AppThemeContext.Consumer>
)

export default SideMobileNavBar
