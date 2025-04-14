import { Toolbar, useMediaQuery, useTheme} from "@mui/material";
import { HomeFilled, Publish, Savings, SwapCalls } from "@mui/icons-material";

import { NavBarAppBar, NavBarContainer } from "./Navbar.style";
import { INavbarLink } from "./navbar.models";
import NavLinksMobile from "./NavLinksMobile";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";
import NavAuth from "./NavAuth/NavAuth";

const applicationLinks: INavbarLink[] = [
  { label: 'Home', to: '/', icon: <HomeFilled />, disabled: false, onlyMobileView: true },
  { label: 'Swap', to: '/swap', icon: <SwapCalls />, disabled: false, onlyMobileView: false },
  { label: 'Deploy', to: '/deploy', icon: <Publish />, disabled: true, onlyMobileView: false },
  { label: 'Portfolio', to: '/portfolio', icon: <Savings />, disabled: true, onlyMobileView: false },
]

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <NavBarAppBar enableColorOnDark>
        <NavBarContainer maxWidth={ "xl" }>
          <Toolbar disableGutters>
              <NavLogo />
              { isMobile ? <NavLinksMobile links={applicationLinks} />: <NavLinks links={applicationLinks} /> }
              <NavAuth isMobile={isMobile} />
          </Toolbar>
        </NavBarContainer>
    </NavBarAppBar>
  )
}

export default Navbar;
