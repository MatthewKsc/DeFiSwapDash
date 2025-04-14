import { Button } from "@mui/material"
import { NavLink } from "react-router"

import { NavLinksContainer } from "./NavLinks.style"
import { INavbarLink } from "../navbar.models"

interface NavLinksProps {
  links: INavbarLink[],
}

function NavLinks(props: NavLinksProps) {
  return (
    <NavLinksContainer>
      {props.links
        .filter(link => !link.onlyMobileView)
        .map((link, index) => (
        <Button
          key={index}
          component={NavLink}
          to={link.to}
          size="medium"
          startIcon={link.icon}
          disabled={link.disabled}>{ link.label }</Button>
      ))}
    </NavLinksContainer>
  )
}

export default NavLinks