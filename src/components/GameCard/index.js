import AppThemeContext from '../../context/AppThemeContext'

import {
  LinkItem,
  ListItem,
  GameImage,
  Heading,
  SmallParagraph,
} from './styledComponents'

const GameCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <AppThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <GameImage src={thumbnailUrl} alt={title} />
              <Heading isDarkTheme={isDarkTheme}>{title}</Heading>
              <SmallParagraph>{viewCount} Watching Worldwide</SmallParagraph>
            </ListItem>
          </LinkItem>
        )
      }}
    </AppThemeContext.Consumer>
  )
}

export default GameCard
