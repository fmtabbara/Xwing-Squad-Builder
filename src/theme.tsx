import React, { createContext, useCallback, useState } from "react"
import {
  ThemeProvider,
  createMuiTheme,
  ThemeOptions,
} from "@material-ui/core/styles"

let lightTheme: ThemeOptions = {
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: "'Kanit', consolas",
  },
}

const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "'Kanit', consolas",
  },
}

interface IThemeProviderProps {
  currentTheme: string
  changeTheme: () => void
}

export const ThemeContext = createContext({} as IThemeProviderProps)

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const createTheme = useCallback(
    (theme: ThemeOptions) => createMuiTheme(theme),
    []
  )

  const [theme, setTheme] = useState(createTheme(darkTheme))
  const changeTheme = () => {
    theme.palette.type === "dark"
      ? setTheme(createTheme(lightTheme))
      : setTheme(createTheme(darkTheme))
  }

  return (
    <ThemeContext.Provider
      value={{ changeTheme, currentTheme: theme.palette.type }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
