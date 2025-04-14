import DeFiSwapDashIcon from "../../../icons/DeFiSwapDashIcon";
import { NavLogoContainer } from "./NavLogo.style";
import { NavLink } from "react-router";

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
