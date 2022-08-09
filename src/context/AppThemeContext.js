import React from 'react'

const AppThemeContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  activeTabId: 'initial',
  onClickTab: () => {},
  savedVideosList: [],
  onClickSaveButton: () => {},
})

export default AppThemeContext
