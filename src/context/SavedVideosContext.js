import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  onClickSaveButton: () => {},
})

export default SavedVideosContext
