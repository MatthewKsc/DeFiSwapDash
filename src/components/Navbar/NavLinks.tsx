import { Publish, Savings, SwapCalls } from "@mui/icons-material"
import { NavLinksContainer } from "../styled/Navbar"
import { Button } from "@mui/material"
import React from 'react'
import { NavLink } from "react-router"

function NavLinks() {
  return (
    <NavLinksContainer>
        <Button
          component={NavLink}
          to="/swap"
          size="medium"
          startIcon={<SwapCalls />}
        >
          Swap
        </Button>

        <Button
          component={NavLink}
          to="/deploy"
          size="medium"
          startIcon={<Publish />}
          disabled
        >
          Deploy
        </Button>

        <Button
          component={NavLink}
          to="/portfolio"
          size="medium"
          startIcon={<Savings />}
          disabled
        >
          Portfolio
        </Button>
    </NavLinksContainer>
  )
}

export default NavLinks