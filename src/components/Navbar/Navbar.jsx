import React from 'react'
import {AppBar, Box, Container, Toolbar} from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="false">
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, padding: '0 1rem' }}>Logo</Box>
            <Box sx={{ flexGrow: 1 }}>Links</Box>
            <Box sx={{ flexGrow: 0 }}>auth options</Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
