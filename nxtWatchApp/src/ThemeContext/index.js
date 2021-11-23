import React from 'react'

const ThemeContext = React.createContext({
  isThemeLight: true,
  changeTheme: () => {},
  savedVideosList: [],
  updateSavedVideosList: () => {},
})

export default ThemeContext
