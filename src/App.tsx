import { ThemeProvider } from "@emotion/react"


import NavBar from "./Components/UI/NavBar/NavBar"

import {CssBaseline, createTheme } from "@mui/material"
import MovieCardWrapper from "./Components/Card/MovieCardWrapper"
import AppDrawer from "./Components/UI/Drawer"



const theme = createTheme({
  palette: {
    primary:{
      main: '#101820',
    },
    secondary:{
      main: '#FEE715',
    },
    background:{
      default: '#101820'
    },
    text:{
      primary: '#feeb43'
    }
  }
})

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar/>
      {/* <Box sx={{margin: "2rem"}}>
        <MovieCard/>
      </Box> */}
      <AppDrawer/>
      <MovieCardWrapper/>
      <MovieCardWrapper/>
      <MovieCardWrapper/>

    </ThemeProvider>
    </>
  )
}

export default App
