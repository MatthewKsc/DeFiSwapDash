import { NavBarContainer } from "../styled/Navbar";
import {AppBar, Toolbar} from "@mui/material";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavAuth from "./NavAuth";
import React from 'react'

function Navbar() {
  return (
    <AppBar
      enableColorOnDark
      sx={{
        position: "fixed",
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}>
        <NavBarContainer maxWidth={ "xl" }>
          <Toolbar disableGutters>
              <NavLogo />
              <NavLinks />
              <NavAuth />
          </Toolbar>
        </NavBarContainer>
    </AppBar>
  )
}

export default Navbar;
