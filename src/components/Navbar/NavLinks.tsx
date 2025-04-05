import { Publish, Savings, SwapCalls } from "@mui/icons-material"
import { NavLinksContainer } from "../styled/Navbar"
import { Button } from "@mui/material"
import React from 'react'

function NavLinks() {
  return (
    <NavLinksContainer>
        <Button size="medium" startIcon={<SwapCalls />}>Swap</Button>
        <Button size="medium" startIcon={<Publish />} disabled>Deploy</Button>
        <Button size="medium" startIcon={<Savings />} disabled>Portfolio</Button>
    </NavLinksContainer>
  )
}

export default NavLinks