import { NavLink } from "react-router";
import DeFiSwapDashIcon from "../../icons/DeFiSwapDashIcon";
import { NavLogoContainer } from "../styled/Navbar";
import React from 'react'

function NavLogo() {
  return (
    <NavLogoContainer>
      <NavLink to='/'>
        <DeFiSwapDashIcon />
      </NavLink>
    </NavLogoContainer>
  )
}

export default NavLogo;
